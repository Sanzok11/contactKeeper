const express = require('express');
const connectDB = require('./config/db')

const app = express();


//Connect Database
connectDB();

// Including Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
    res.json({ msg: 'This is a contact app' })
})

//Defining routes
app.use('/api/users', require('./routes/users'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/auth', require('./routes/auth'))

const port = process.env.port || 8000

app.listen(port, () => {
    console.log(`Listening to server at port ${port}`);
})
