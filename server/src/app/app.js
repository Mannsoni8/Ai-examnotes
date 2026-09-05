import express from "express"

const app = express()
app.use(express.json())

app.get("/",(res,req)=>{
    res.send('backend is running')
})

export default app