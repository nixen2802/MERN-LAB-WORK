const readline=require('readline');
const fs=require('fs');
const readline2=readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline2.question('First Name : ',fname=>{
  readline2.question('Last Name : ',lname=>{
    readline2.question('Roll No. : ',roll=>{
      readline2.question('Class : ',css=>{
        readline2.question('Phone No. : ',phno=>{
          console.log("-------------------------------------------------");
          console.log("|\t\tID CARD\t\t\t\t|");
          console.log("-------------------------------------------------");
          console.log(`|\tName : ${fname} ${lname}\t\t\t|`);
          console.log("-------------------------------------------------");
          console.log(`|\tRoll No. : ${roll}\t\t\t|`);
          console.log("-------------------------------------------------");
          console.log(`|\tClass : ${css}\t\t\t|`);
          console.log("-------------------------------------------------");
          console.log(`|\tPhone No. : ${phno}\t\t\t|`);
          console.log("-------------------------------------------------");
          readline2.close();
        })
      })
    })
  })
})

