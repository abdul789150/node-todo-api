const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to db server");

  db.collection("Todos").insertOne({
    text:"Something to complete",
    Completed: false
  }, (err, result)=>{
    if(err){ return console.log("Error occured while adding a collection")}
    console.log(JSON.stringify(result.ops, undefined, 2));
  });


  db.close();
});
