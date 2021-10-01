var express = require('express');
var router = express.Router();
let axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
    let userId = req.query.userId;
    console.log(userId);
    axios.get(`https://api.twitter.com/2/users/${userId}/tweets`, {
        headers: {
            'Authorization' : 'Bearer AAAAAAAAAAAAAAAAAAAAABwoUAEAAAAAfZqBIhX1rwewiNJZCPsHZOJZEwc%3DNqaLDZgZhBuJvu038ogUoag2BfQgRpuPVGfYZPp7Zvy39ZknoW'
        }
    }).then((response)=>{
        res.json(response.data.data);
    }) 
});

module.exports = router;
