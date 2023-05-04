/*
exports = function(){
  const permissions = context.functions.execute("nestedFunction");
  console.log(JSON.stringify(permissions));
  
  return permissions;
};

exports = async function nestedFunction() {
  console.log("Test is successful");
}
*/

/*
exports = async function myFunc() {
    return await context.functions.execute("nestedFunction");
    // Once the promise gets resolved continue on
    console.log('hi');
}

exports = async function nestedFunction() {
    await new Promise((resolve) => {
        setTimeout(() => {
            // Resolve the promise
            resolve(console.log('hello'));
        }, 3000);
    });
}
*/


exports = async function verifyUser(){
   try {
     test();
      console.log("End of test");
       return "jh";
   }catch (e){
       console.log("There is an error here");
   }
};

function test(){
  console.log("This is a test")
}

