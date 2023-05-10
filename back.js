const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()
app.use(bodyParser.urlencoded({extended : true}));

// console.log(date())
app.use(express.static('public'));
app.use('*/css',express.static('public/css'));


mongoose.connect('mongodb://127.0.0.1:27017/ListDB');
let day = "";
app.set("view engine", "ejs");
// app.use(express.static("public"));

const itemSchema = new mongoose.Schema({
  name: "String",
});

const Item = mongoose.model("Item",itemSchema);

const item1 = new Item ({
  name: "Welcome to the To-Do list"
});

const item2 = new Item ({
  name: "Click on the + button to append the work in list"
});

const item3 = new Item ({
  name: "<-- Click here to delete the work items"
});

const defaultArr = [item1, item2,item3];
// Item.insertMany(defaultArr);
app.get("/",function(req,res){

  const getdata = async() => {
    var x = await Item.find({})
    res.render('list',{listTitle : "Today", latest : x})
  };

  getdata();
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
