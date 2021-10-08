
import '../App.css';
import {useEffect, useState} from 'react';
import {ReactComponent as AngrySVG} from '../images/angry-emoji-svgrepo-com.svg';
import OffensiveTweets from '../Components/OffensiveTweets'
import  list  from '../profanity.js';

const axios = require('axios').default;

function Index() {
    const baseUrl = 'http://localhost:8000';

	let [isLoaded, setIsLoaded] = useState(false);
	let [inputState, setInputState] = useState('');
	let [offensiveTweets, setOffensiveTweets] = useState([]);
	let [isCancelled, setIsCancelled] = useState();

	useEffect(()=>{
		setIsLoaded(true);
	}, [])

	function handleInputChange(e){
		setInputState(e.target.value);
	}

	function tweetExists(tweetsFrontend, tweetCheck){
		let result = false;
		console.log(tweetsFrontend);
		tweetsFrontend.forEach((t) =>{
			if(t === tweetCheck){
				result = true;
			}
		})
		return result;
	}
	function stringContains(text, word){
		let textWords = text.match(/[a-z'\-]+/gi);
		let result = false;
		textWords.forEach(textWord => {
			if(textWord === word){
				result = true;
			}
		})
		return result;
	}
	function findUserTwitter(e){
		axios.get(baseUrl + '/users', {
			params: {
				username: inputState
			}
		}).then((response)=>{
			let id = response.data.id;
			return axios.get(baseUrl + '/tweets', {
				params: {
					userId: id
				}
			})
		}).then((response)=>{
			let tweets = response.data;
			let offTweets = findOffensiveTweets(tweets);
			setOffensiveTweets(offTweets);
			if(offTweets.length > 0){
				setIsCancelled(<div className="is-cancelled mt-5 text-center">
					You Done Messed Up A-Aron!
				</div>);
			}
			else{
				setIsCancelled(<div className="is-cancelled mt-5">
						<img className = "mx-auto" src="https://c.tenor.com/mysIVbGaDuwAAAAC/jensen-ackles-dean-winchester.gif" />
						You are clear!
					</div>);
			}
			
		})
	}
	function findOffensiveTweets(tweets){
		const profanity = list;
		let offensiveWords = profanity.split('\n');
		let uniqueTweets = [];
		tweets.forEach(tweet =>{
			offensiveWords.forEach(offensiveWord =>{
				if(stringContains(tweet.text, offensiveWord) && !tweetExists(uniqueTweets, tweet)){
					console.log(offensiveWord);
					uniqueTweets.push(tweet);
				}	
			})
		})
		return uniqueTweets;
	}

	return (
		<div className={isLoaded ? 'loaded text-center mt-10' : ''}>
			<AngrySVG width="150px" height="150px" style={{
				margin:'1.5rem auto',
			}}/>
			<div className="header mb-6 text-white text-2xl">
				Can they get <s>cancelled</s>? 
			</div>
			<div id="searchbar" className = "mt-2">
				<input type="text" 
					id="searchbar" 
					className='block w-2/5 mx-auto h-8' 
					placeholder="Write down a twitter handle"
					onChange={handleInputChange}
					value = {inputState}
				/>
			</div>
			<button className='bg-third p-2 mt-6 text-white' onClick={findUserTwitter}>So ? 🔎 </button>
			{isCancelled}
			<OffensiveTweets data = {offensiveTweets}/>
		</div>
	);
}
  
  export default Index;