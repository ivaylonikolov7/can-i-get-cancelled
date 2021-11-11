
import '../App.css';
import {useEffect, useState} from 'react';
import {ReactComponent as AngrySVG} from '../images/angry-emoji-svgrepo-com.svg';
import OffensiveTweets from '../Components/OffensiveTweets';
import APP_CONSTANTS from '../APP_CONSTANTS';

const axios = require('axios').default;

function Index() {
	const baseUrl = APP_CONSTANTS.SERVER_BASE_URL;
	console.log(APP_CONSTANTS);
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
	
	async function findUserTwitter(){
		try {
			let tweets = await axios.get(baseUrl + '/tweets', {
				params: {
					username: inputState
				}
			})
			setOffensiveTweets(tweets.data);
			if(tweets.data.length > 0){
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
		} catch (error) {
			console.log(error);
		}	
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