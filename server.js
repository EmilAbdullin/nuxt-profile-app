const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const users = JSON.parse(fs.readFileSync('./db.json','UTF-8')).users;


server.use(jsonServer.defaults());
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())


function checkUser({login, password}){
    return !!users.filter(user => user.login === login && String(user.password) === password).length
}

function getUser({login,password}){
    return users.filter(user => user.login === login && String(user.password) === password)[0]
}



server.post('/auth', (req, res) => {
    const user = req.body
    if(checkUser(user)){
        const currentUser = getUser(user);
        res.status(200).json({message:'Авторизация прошла успешно',status:'auth',user:currentUser})
    }else{
        res.json({message:'Логин или пароль неправильные',status:'no-auth',user:null})
    }
})

server.use(router)
server.listen(5555, () => {
  console.log('Run Auth API Server')
})
