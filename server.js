const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db-config/db.js');

dotenv.config();
connectDB();


const app = express();
app.use(cors());

app.use(express.json());




app.use('/api/auth', require('./routes/authroute.js'));
app.use('/api/project', require('./routes/projectroute.js'));
app.use('/api/task', require('./routes/taskroute.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
