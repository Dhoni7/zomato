var express = require ('express');
var app = express();

var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
extended:true
}))

app.get("/", function(request,response){
    response.send('Hello from Express');
})

app.get("/message", function(request,response){
    response.send('Hello from message');
})

app.get("/product/:a/:b", function(request,response){
  var product = request.params.a * request.params.b;
    response.send(''+product);
})

app.get("/add", function(request,response){
  var add2 = Number(request.query.num1) + Number(request.query.num2);
    response.send(''+add2);
})

app.get("/data", function(request,response){
  var data = {name : "Amit",  age: "26" , location : "Bangalore"};
    response.send(data);
})
app.get("/data/js", function(request,response){
  var data1 = {product : "Mobile",  price:"12000"};
    response.send(data1);
})

app.post("/calculate/add", function(request,response){
  var result = Number(request.body.num1) + Number(request.body.num2);
    response.send(''+result);
})
app.get('/:location',(req,res)=>{
res.redirect('https://developers.zomato.com/api/v2.1/locations?query='+req.params.location+'&apikey=6a1a52ca364abcb950e671a0d3d50565');
})
app.listen(8080);
