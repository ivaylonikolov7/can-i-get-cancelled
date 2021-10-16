var express = require('express');
var router = express.Router();
let axios = require('axios');

router.get('/', async (req, res, next) => {
    // let userId = req.query.userId;
    
    // let response = axios.get(`https://api.twitter.com/2/users/${userId}/tweets`, {
    //     headers: {
    //         'Authorization' : 'Bearer AAAAAAAAAAAAAAAAAAAAABwoUAEAAAAAfZqBIhX1rwewiNJZCPsHZOJZEwc%3DNqaLDZgZhBuJvu038ogUoag2BfQgRpuPVGfYZPp7Zvy39ZknoW'
    //     }
    // }).catch((err)=>{
    //     console.log(err)
    // })
    // res.json(response.data) 
});

module.exports = router;
