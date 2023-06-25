const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
 // This is incorrect path , hence we will utilize core PATH module.
 //res.sendFile('/views/shop.html');

 res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
