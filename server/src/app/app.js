import express from "express"
import cookieParser from 'cookie-parser'
const app = express()
app.use(express.json())
app.use(cookieParser())

app.get("/",(res,req)=>{
    res.send('backend is running')
})

export default app