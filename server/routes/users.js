var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
	let user = req.query.username;
	axios.get(`https://api.twitter.com/2/users/by/username/${user}`, {
        headers: {
            'Authorization' : 'Bearer AAAAAAAAAAAAAAAAAAAAABwoUAEAAAAAfZqBIhX1rwewiNJZCPsHZOJZEwc%3DNqaLDZgZhBuJvu038ogUoag2BfQgRpuPVGfYZPp7Zvy39ZknoW'
        }
    }).then((response)=>{
        res.json(response.data.data);
    }) 
});

module.exports = router;
