const express = require('express');
const app = express();


//Defining routes
app.use('/api/users', require('./routes/users'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/auth', require('./routes/auth'))

const port = process.env.port || 2000

app.listen(port, () => {
    console.log(`Listening to server at port ${port}`);
})
