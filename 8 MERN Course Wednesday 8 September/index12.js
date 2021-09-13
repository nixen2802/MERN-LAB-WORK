const inquirer=require('inquirer')
var questions=[
    {
        type: 'text',
        name: 'fname',
        message: "First name : "
    },
    {
        type: 'text',
        name: 'lname',
        message: "Last name : "
    },
    {
        type: 'password',
        name: 'pass',
        message: 'Enter password : ',
    },
    {
        type: 'text',
        name: 'course',
        message: 'Course Name : ',
        default: 'MERN'
    },
    {
        type: 'list',
        name: 'first',
        message: 'Option 1 : ',
        choices: ['MERN Stack', 'MEAN Stack', 'Django', 'Flutter', 'PHP', 'Wordpress'],
    },
    {
        type: 'checkbox',
        name: 'second',
        message: 'Option 2 : ',
        choices: ['MERN Stack', 'MEAN Stack', 'Django', 'Flutter', 'PHP', 'Wordpress'],
      },
]
inquirer.prompt(questions).then(answers=>{
    console.log("-------------------------------------------------------------------------------------------------------");
    console.log("Students Info : ");
    console.log("-------------------------------------------------------------------------------------------------------");
    console.log(`Hello ${answers['fname']} ${answers['lname']} you have been successfully logged in!!!`);
    console.log("-------------------------------------------------------------------------------------------------------");
    console.log(`${answers['fname']} is currently learning ${answers['course']}`);
    console.log("-------------------------------------------------------------------------------------------------------");
    console.log(`First choice ${answers['first']}`);
    console.log("-------------------------------------------------------------------------------------------------------");
    console.log(`Second choice ${answers['second']}`);
    console.log("-------------------------------------------------------------------------------------------------------");
})


