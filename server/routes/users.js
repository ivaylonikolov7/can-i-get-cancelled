var express = require('express');
var router = express.Router();
let secrets = {
	MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING,
	BEARER_TOKEN: process.env.BEARER_TOKEN
};
const { MongoClient} = require('mongodb');

const client = new MongoClient(secrets.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
  
router.get('/leaderboard', async(req,res)=>{
	await client.connect();
	res.json(await client.db('gettingcanceled').collection('twitter_users').find().sort().toArray());
})

module.exports = router;
