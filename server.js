const express = require('express');
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// make public directory a static resource
app.use(express.static('public'));

app.use('/', htmlRoutes);

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}.`);
});