const path = require('path');
const bodyParser = require('body-parser');
const express    = require('express');
const app        = express();

const admimRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({ extended: false }));

//now only routes staring with /admin will go into adin routes file
app.use('/admin' , admimRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
 res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);