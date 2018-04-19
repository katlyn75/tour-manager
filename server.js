import { connect } from 'tls';

const http = require('http');
const app = require('./lib/app');


const PORT = process.env.PORT || 3000;

//used my heroku when adding an mLab to instance
// this env name "MONGODB_URI" is used by heroku when adding an mLab instance
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pirates';

connect(MONGODB_URI);



const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('server running', server.address().port);

});
