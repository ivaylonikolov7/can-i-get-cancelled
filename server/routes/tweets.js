var express = require('express');
var router = express.Router();
let axios = require('axios');
let profanity = require('../utils/profanity.js');
const { MongoClient} = require('mongodb');
let secrets = {
	MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING,
	BEARER_TOKEN: process.env.BEARER_TOKEN
};

const client = new MongoClient(secrets.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/', async (req, res, next) => {
	let username = req.query.username;
	try {
		let tweets = await getUserTweets(username);    
		let offensiveTweets = findOffensiveTweets(tweets);
		if(offensiveTweets){
			await addNaughtyUserToDb(username, res);
		}
		res.json(offensiveTweets);
	} catch (error) {
		console.log(error);
		res.status(500).send({error})
	}
});

module.exports = router;

function findOffensiveTweets(tweets){
	let offensiveWords = profanity.split('\n');
	let uniqueTweets = [];
	
	tweets.forEach(tweetPage =>{
		tweetPage.forEach((tweet)=>{
			const regex = /@[a-zA-Z0-9_-]+/g
			try {
				let formattedTweet = tweet.text.replace(regex, "");
				offensiveWords.forEach(offensiveWord =>{
					if(stringContains(formattedTweet, offensiveWord) && !tweetExists(uniqueTweets, tweet)){
						uniqueTweets.push(tweet);
					}
				})
			} catch (error) {
				console.log(error);
			}
		})
	})
	return uniqueTweets;
}
async function addNaughtyUserToDb(user, res) {
	let getTwitterUser = await axios.get(`https://api.twitter.com/2/users/by/username/${user}`, {
		headers: {
			'Authorization': secrets.BEARER_TOKEN
		},
		params: {
			"user.fields": 'public_metrics,profile_image_url'
		}
	}).catch((err) => {
		res.status(500).send(false);
		return;
	});

	let profileImageURL = getTwitterUser.data.data.profile_image_url;
	let followers = getTwitterUser.data.data.public_metrics.followers_count;
	addTwitterUserToDb(user, followers, profileImageURL);
}

async function getUserTweets(username) {
	let idResponse = await axios.get(`https://api.twitter.com/2/users/by/username/${username}`, {
		headers: {
			'Authorization': secrets.BEARER_TOKEN
		}
	})
	let id = idResponse.data.data.id;
	let paginationToken = "";
	let tweets = [];
	for(let i=0; i<1; i++){
		let params = (paginationToken == "") ? 
		{
			max_results: 100
		} : 
		{
			max_results: 100,
			pagination_token: paginationToken
		};

		let response = await axios.get(`https://api.twitter.com/2/users/${id}/tweets`, {
			headers: {
				'Authorization': secrets.BEARER_TOKEN
			},
			params: params
		})
		paginationToken = response.data.meta.next_token;
		tweets.push(response.data.data)
	}
	return tweets;
}

function stringContains(text, word){
	let textWords = text.match(/[a-z'\-]+/gi);
	let result = false;
	try {
		textWords.forEach(textWord => {
			if(textWord === word){
				result = true;
			}
		})    
	} catch (error) {
		console.log(error);
	}
	return result;
}

function tweetExists(tweetsFrontend, tweetCheck){
	let result = false;
	tweetsFrontend.forEach((t) =>{
		if(t === tweetCheck){
			result = true;
		}
	})
	return result;
}

async function addTwitterUserToDb(user, followers, profileImageURL){
	await client.connect();
	if(!await doesTwitterUserExistInDb(user)){
		await client
		.db('gettingcanceled')
		.collection('twitter_users')
		.insertOne({user,followers,profileImageURL});
	}
}
async function doesTwitterUserExistInDb(user){
	await client.connect();
	let twitterUsers = await client
		.db('gettingcanceled')
		.collection('twitter_users')
		.findOne({user})
	if(twitterUsers){
		return true;
	}
	else{
		return false;
	}
}