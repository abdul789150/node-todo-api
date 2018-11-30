const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to db server");

  // db.collection("user").deleteMany({"name":"Abdulrehman" }).then((result)=>{
  //   console.log(result);
  // });

  db.collection("user").findOneAndDelete({"_id":new ObjectId("5c013f46f922e826fc1936c6")}).then((result)=>{
    console.log(result)
  });

  db.close();
});
