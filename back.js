const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js")
const app = express()
app.use(bodyParser.urlencoded({extended : true}));

// console.log(date())
app.use(express.static('public'));
app.use('*/css',express.static('public/css'));

let datas = [];
let workItem = [];
let day = "";
app.set("view engine", "ejs");
// app.use(express.static("public"));
app.get("/",function(req,res){
    let day = date.getDate()
    res.render('list',{listTitle : day, latest : datas})
});

app.post("/",function(req,res){
      let data = req.body.task
    //   console.log(req.body.button)
      if(req.body.button === "Work")
      {
        // console.log("This is being used")
         workItem.push(data)
         res.redirect("/work")

      }
      else
      {
        // console.log("This else is being used")
        datas.push(data)
        // res.render('list',{Data: data});
        res.redirect("/")
      }
})

app.get("/about",function(req,res){
    res.render('about')
})

app.get("/work",function(req,res){
    res.render('list',{listTitle : "Work List",latest : workItem})
})

// app.post("/work",function(req,res){
//     let item = req.body.task
//     workItem.push(item)
//     res.redirect("/work")
// })


app.listen(3000,function(){
    console.log("Server is started at 3000");
});
