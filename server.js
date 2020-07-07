const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const users = JSON.parse(fs.readFileSync('./db.json','UTF-8')).users;


server.use(jsonServer.defaults());
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

function b64DecodeUnicode(password) {
    return decodeURIComponent(Buffer.from(password,'base64').toString('binary').split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function checkUser({login, password}){
    return users.filter(user => user.login === login && String(user.password) === b64DecodeUnicode(password))
}


function checkEmail(email){
    return users.filter(user => user.login === email);
}


// server.post('/checkLogin', (req, res) => {

// })

server.use(router)
server.listen(5555, () => {
  console.log('Run Auth API Server')
})
