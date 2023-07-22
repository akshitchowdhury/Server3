import express from 'express'

const app = express()

app.listen(3001, ()=>{
    console.log("3001 running succesfully")
})

app.get("/",(req,res)=>{
    res.send("<h1> Welcome to 3001 </h1>")

})