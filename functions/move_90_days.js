exports = async function() {
    // Calculate date and pass it as a parameter
    const date = new Date();

    date.setDate(date.getDate() - 90);

    let cursor = await moveData(date);

    await cursor.next(); // Substitutes the use of .toArray() to force the aggregation to run

    console.log("datatransfer completed ::: ");

    await deleteData(date);

    return {"status": "success!"};
};

moveData = async function(date){
  console.log("Hello");
    const collection = context.services.get("Sandbox").db("triggers").collection("civ_test_90_day");
  console.log("Bye");

    console.log("started "+" ");
    console.log("matching Date :::"+ date);
    var pipeline =[{
       $match: {
          ttl:{
            $lte:date
          }
        }
      }, {
      $merge: {
        into: 'civ_test_2year',
        on: '_id',
        whenMatched: 'merge',
        whenNotMatched: 'insert'
      }
    }];

    console.log("datatransfer started");
    return collection.aggregate(pipeline);
};

deleteData = async function(date) {
    const collection = context.services.get("Sandbox").db("triggers").collection("civ_test_90_day");

    console.log("started "+" ");
    console.log("current Date :::"+ date);

    return collection.deleteMany({ttl:{$lte:date}});
};