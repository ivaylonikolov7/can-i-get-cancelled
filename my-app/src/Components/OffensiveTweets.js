import React from 'react';

function OffensiveTweets(props){
    let tweets = props.data;
    return (
        <>
            {tweets.map((tweet, index)=>{
                return <div key={`${index}`}>{tweet.text}</div>
            })}
        </>
    );
}

export default OffensiveTweets;