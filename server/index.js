require('dotenv').config();
const express = require('express');
const path = require('path');
const fetchData = require('../server/utils/fetchData.js');

const app = express();
const PORT = 8080;

const pathToDist = path.join(__dirname, '..', 'app', 'dist');

const logRoutes = (req, res, next) => {
	const time = new Date().toLocaleString();
	console.log(`${req.method}: ${req.originalUrl} - ${time}`);
	next();
};

const serveStaticAssets = express.static(pathToDist);
app.use(logRoutes);
app.use(serveStaticAssets)

app.get('/', (req, res) => {
	res.send('Did you trick me?');
});

// EXTREMELY IMPORTANT
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
