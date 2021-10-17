var express = require('express');
var router = express.Router();
let secrets = require('../server_secrets.js');
const { MongoClient} = require('mongodb');

const client = new MongoClient(secrets.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
  
router.get('/leaderboard', async(req,res)=>{
	await client.connect();
	res.json(await client.db('gettingcanceled').collection('twitter_users').find().sort().toArray());
})

module.exports = router;
