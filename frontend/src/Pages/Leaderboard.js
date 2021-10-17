import axios from 'axios';
import {useEffect, useState}  from 'react';
import {ReactComponent as AngrySVG} from '../images/angry-emoji-svgrepo-com.svg';
import APP_CONSTANTS from '../APP_CONSTANTS';
import '../styles/leaderboard.css';

function Leaderboard(){
    let [isLoaded, setIsLoaded] = useState(false);
    let [leaderboard, setLeaderboard] = useState(false);
    useEffect(async ()=>{
        setIsLoaded(true);
        let result = await axios.get(APP_CONSTANTS.SERVER_BASE_URL + 'users/leaderboard');
        setLeaderboard(result.data);
    }, [])
    function objectIdToTimestamp(id){
        let timeStamp = parseInt(id.toString().substr(0,8), 16)*1000
        return new Date(timeStamp)
    }
    function dateNumToString(id){
        switch(id){
            case 0: return 'Mon';
            case 1: return 'Tue';
            case 2: return 'Wen';
            case 3: return 'Thu';
            case 4: return 'Fri';
            case 5: return 'Sat';
            case 6: return 'Sun';
        }
    }
    function monthNumToString(id){
        switch(id){
            case 0: return 'Jan';
            case 1: return 'Feb';
            case 2: return 'Mar';
            case 3: return 'Apr';
            case 4: return 'May';
            case 5: return 'Jun';
            case 6: return 'Jul';
            case 7: return 'Aug';
            case 8: return 'Sep';
            case 9: return 'Oct';
            case 10: return 'Nov';
            case 11: return 'Dec';
        }
    }
    return <div className={isLoaded ? 'loaded text-center mt-10' : ''}>
        <AngrySVG width="150px" height="150px" style={{
            margin:'1.5rem auto',
        }}/>
        <div className="header mb-6 text-white text-2xl">
            They got <s>cancelled</s>! 
        </div>
        <table>
            <tr>
                <th>#</th>
                <th>@</th>
                <th>Date Added</th>
                <th>Followers</th>
                <th>Profile</th>
            </tr>
            {leaderboard && leaderboard.map((user,num)=>{
                let day = dateNumToString(objectIdToTimestamp(user._id).getDay());
                let month = monthNumToString(objectIdToTimestamp(user._id).getMonth());
                let date = objectIdToTimestamp(user._id).getDate();
                let year = objectIdToTimestamp(user._id).getFullYear();
                return <tr>
                    <td>{num+1}</td>
                    <td>
                        <img className="inline-block rounded-full" src={user.profileImageURL} width="50px" />
                        <span id="name">@{user.user}</span>
                    </td>
                    <td>
                        {day} {month} {date} {year}
                    </td>
                    <td>
                        {user.followers}
                    </td>
                    <td>
                        <a className="twitter_link" href={`https://twitter.com/${user.user}`}>Link</a>
                    </td>
                </tr>
            })}
        </table>
    </div>
}

export default Leaderboard;