var express = require('express');
var router = express.Router();
var axios = require('axios');
const { MongoClient} = require('mongodb');
let secrets = require('../server_secrets.js');

const client = new MongoClient(secrets.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
  
router.get('/', async (req, res, next) => {
	let user = req.query.username;
	await client.connect();
	let getTwitterUser = await axios.get(`https://api.twitter.com/2/users/by/username/${user}`, {
		headers: {
			'Authorization' : secrets.BEARER_TOKEN
		},
		params: {
			"user.fields" : 'public_metrics'
		}
	}).catch((err)=>{
		res.send(false);
	});
	let followers = getTwitterUser.data.data.public_metrics.followers_count;

	client
		.db('gettingcanceled')
		.collection('twitter_users')
		.insertOne({
			user: user,
			followers: followers
		})
	res.send(true);
});

module.exports = router;
