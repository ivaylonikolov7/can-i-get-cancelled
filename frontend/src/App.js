import './App.css';
import {useEffect, useState} from 'react';
import {ReactComponent as AngrySVG} from './images/angry-emoji-svgrepo-com.svg';
import OffensiveTweets from './Components/OffensiveTweets'

const axios = require('axios').default;
function App() {
	const baseUrl = 'http://localhost:8000';
	let [isLoaded, setIsLoaded] = useState(false);
	let [inputState, setInputState] = useState('');
	let [offensiveTweets, setOffensiveTweets] = useState([]);
	useEffect(()=>{
		setIsLoaded(true);
	}, [])
	function handleInputChange(e){
		setInputState(e.target.value);
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
			let offensiveWords = ['nigger'];
			let offensiveTweetsResponse = [];
			console.log(tweets);
			tweets.forEach(tweet => {
				offensiveWords.forEach((word)=>{
					//if(tweet.text.includes(word)){
						offensiveTweetsResponse.push(tweet);
					//};
				})
			});
			setOffensiveTweets(offensiveTweetsResponse);
		})
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

		<OffensiveTweets data = {offensiveTweets}/>
    </div>
  );
}
export default App;
