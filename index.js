const e = require('express')
const bodyParser = require('body-parser')
const app = e()

const routes = require('./routers/routes')
require('dotenv').config()
app.use(bodyParser.json({limit:'10mb'}));
app.use(bodyParser.urlencoded({ limit:'10mb', extended: true }));
app.set('view engine', 'ejs');

app.use('/api', routes)

const server =  process.env.SERVER || 8000

app.listen(server,()=>{
    console.log(`you are in ${server}`);

})


