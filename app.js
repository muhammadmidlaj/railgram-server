const express = require('express');

const bodyParser = require('body-parser');

// create a express app

const app = express();
const cors = require('cors');
const http = require('http');
var server = http.createServer(app);
const socket = require("socket.io")(server);

socket.on("connection", (userSocket) => {
    console.log("connection check");
    var roomID = userSocket.handshake.query.roomid;
    console.log(roomID);
    console.log("connected");
    
    //userSocket.join(roomID);
    console.log(userSocket.id, "has joined");
    userSocket.on('createRoom',(room)=>{
        console.log(room);
        roomID = room;
        userSocket.join(room);
    })
      userSocket.on('sendMsg', (msg)=>{
        console.log(msg,{...msg,messageType:"otherMsg"});
         //userSocket.emit("sendMsgServer",{...msg,type:"otherMsg"});
         console.log(roomID);
         socket.to(roomID).emit("sendMsgServer",{...msg,type:"otherMsg",});
      });
    userSocket.on("disconnect",(_)=>{
        console.log("user disconnected",userSocket.id);
        
    })
     
   
})





//server port setup 
const port = process.env.PORT || 3000;

//constents to json
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json);
app.use(express.json());

app.use(cors());



app.get('/', (req, res) =>{
    res.send("Hello World");
});

app.get('/user',(req,res)=>{
    console.log('done');
    res.send("something")
})


const userroute = require('./src/routes/user.routes');

const postroute = require('./src/routes/globalpost.routes');

const commentroute = require('./src/routes/comments.routes');

const userprofileroute = require('./src/routes/userprofile.routes');

const communityroute = require('./src/routes/community.routes');
const pnrverifiedroute = require('./src/routes/pnrverifieddata.routes');
const pnrroute = require('./src/routes/pnrroutes');

//new version
const postRoute = require('./src/routes/post.routes');
const reviewRouter = require('./src/routes/review.routes');
const reportRouter = require('./src/routes/report.routes');
const chatRouter = require('./src/routes/chatromm.routes');
const pnrDataRouter = require('./src/routes/pnrdata.routes');


app.use('/api/v1/user', userroute);

app.use('/api/v1/post', postroute);
app.use('/api/comments', commentroute);

app.use('/api/userprofile', userprofileroute);
app.use('/api/community',communityroute);
app.use('/api',pnrverifiedroute);
app.use('/pnr',pnrroute);

//new version

app.use('/railgram-api/post',postRoute);
app.use('/railgram-api/review',reviewRouter);
app.use('/railgram-api/report',reportRouter);
app.use('/railgram-api/messages',chatRouter);
app.use(reportRouter);
app.use('/railgram-api/pnrData',pnrDataRouter);


//chat section starts

// const socket = require("")("https://example.com");

// socket.on("connect_error", (err) => {
//   console.log(`connect_error due to ${err.message}`);
// });

// console.log("checking");
// io.on("connection", function(socket){
//     console.log("connected");
// });
// socketio.on("connection", (socket) => {
//     console.log("connetetd");
//     console.log(socket.id, "has joined");
//     socket.on("signin", (id) => {
//       console.log(id);
//       clients[id] = socket;
//       console.log(clients);
//     });
//     socket.on("message", (msg) => {
//       console.log(msg);
//       let targetId = msg.targetId;
//       if (clients[targetId]) clients[targetId].emit("message", msg);
//     });
//   });
 
//chat section ends

server.listen(port, ()=> {
    console.log(`server on port ${port}`);
    console.log(`http://localhost:${port}`);
})