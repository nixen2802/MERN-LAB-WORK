const inquirer=require('inquirer')
var questions=[
    {
        type: 'text',
        name: 'name',
        message: "What is your name ? "
    }
]
inquirer.prompt(questions).then(answers=>{
    console.log(`Hi ${answers['name']}!`)
})