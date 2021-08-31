const express=require('express')
const app=express()


// middleware


time =(req, res, next)=> {
    let hour= new Date().getHours()
    let day= new Date().getDay()
    
  if(((hour<=9)||(hour>=17))||((day<=1)||(day>=5)))
  {
    res.sendFile(__dirname + '/access.html')
  }
  else{
  
      next()
    
  }
    }

app.use(time)
app.use(express.static('front-end'))


const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))