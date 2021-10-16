import {useEffect, useState}  from 'react';
import {ReactComponent as AngrySVG} from '../images/angry-emoji-svgrepo-com.svg';

function Leaderboard(){
    let [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
		setIsLoaded(true);
    }, [])
    
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
            <tr>
                <td>1</td>
                <td>
                    <img className="inline-block rounded-full" src="https://pbs.twimg.com/profile_images/1348831795282911232/PulcPO2n_400x400.jpg" width="50px" />
                    <span id="name">@IvayloWasTaken</span>
                </td>
                <td>
                    Mon Dec 02 2020
                </td>
                <td>
                    100k
                </td>
                <td>Links</td>
            </tr>
        </table>
    </div>
}

export default Leaderboard;