const express=require('express')
const app=express()


// middleware


app.use(addActiveTime =(req, res, next)=> {
    let requestAt= new Date().getHours()
    
  if((requestAt<=9)||(requestAt>=17))
  {
    res.sendFile(__dirname + '/access.html')
  }
  else{
  
      next()
    
  }
    })


app.use(express.static('front-end'))


const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))