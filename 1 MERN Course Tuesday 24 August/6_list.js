const inquirer=require('inquirer');
inquirer.prompt([{
    type: 'checkbox',
    name: 'icecream',
    message: 'Which flavour do you like ?? ',
    choices: ['mango', 'caramer', 'vanilla', 'Butterscotch', 'chocolate']
}]).then(answers=>{
    console.info(`Answer: ${answers.icecream}`);
})