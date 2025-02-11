const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('get user');
});

router.post('/', (req, res) => {
    res.send('new user');
});


module.exports = router; 
