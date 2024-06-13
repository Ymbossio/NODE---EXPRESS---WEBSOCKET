import express from "express";
import morgan from "morgan";
import { Server } from "socket.io";
import {createServer} from 'node:http'

const port = process.env.PORT ?? 3001
const app = express();
const server = createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {}
})

io.on('connection', (socket) =>{
    console.log('A user has connected ')

    socket.on('disconnect', () =>{
        console.log('an User has disconnected')
    })

    socket.on('chat message', (msg)=>{
        io.emit('chat message', msg)
    })
})

app.use(morgan('dev'))

app.get('/', (req, resp) =>{
    resp.sendFile(process.cwd()+ '/clients/index.html')
})


server.listen(port, () =>[
    console.log(`Server running on port ${port}`)
])