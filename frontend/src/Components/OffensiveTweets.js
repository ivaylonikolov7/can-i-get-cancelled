import React from 'react';
import TweetEmbed from 'react-tweet-embed'


function OffensiveTweets(props){
    let tweets = props.data;
    console.log(props);
    return (
        <div id="all-tweets">
            {tweets.map((tweet, index)=>{
                return <div key={index} className="offensive">
                        <TweetEmbed id={tweet.id} style={{
                            textАlign: 'center',
                            margin: '0 auto',

                        }}></TweetEmbed>
                    </div>
            })}
        </div>
    );
}

export default OffensiveTweets;