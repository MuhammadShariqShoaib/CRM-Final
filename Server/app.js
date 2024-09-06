const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/userData');
const ClientdataRoutes = require('./routes/ClientData');
const ConnectiondataRoutes = require('./routes/ConnectionsData');
const Counter = require('./routes/Counter');




const app = express();
const port = 5000;

mongoose.connect('mongodb://CRM:CRM123@ac-x9tj1ku-shard-00-00.bkuat1k.mongodb.net:27017,ac-x9tj1ku-shard-00-01.bkuat1k.mongodb.net:27017,ac-x9tj1ku-shard-00-02.bkuat1k.mongodb.net:27017/?ssl=true&replicaSet=atlas-1cxald-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use(cors());

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.use('/api', dataRoutes);

app.use('/api', ClientdataRoutes); 

app.use('/api', ConnectiondataRoutes); 

app.use('/api/auth', require('./routes/LoginData'));

app.use('/api',Counter );


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

