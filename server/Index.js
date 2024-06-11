import express from "express";
import morgan from "morgan";

const port = process.env.PORT ?? 3000
const app = express();
app.use(morgan('dev'))

app.get('/', (req, resp) =>{
    resp.send("<h1>Initial chat</h1>")
})


app.listen(port, () =>[
    console.log(`Server running on port ${port}`)
])