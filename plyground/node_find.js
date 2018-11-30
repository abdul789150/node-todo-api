const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to db server");

  db.collection("user").find({"name":"Abdulrehman" }).count().then((count)=>{
    console.log(count);
  }, (err)=>{
    console.log(err);
  });


  db.close();
});
