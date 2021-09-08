const prompt=require('prompt-sync')();
var n=0;
const eventobj=require('events');
const e = require('express');
var emitter=new eventobj.EventEmitter();
var accounts=[["Nayan Mandliya", 11110, "0934", 35000, 9967890289],["Jane Doe", 11111, "1289", 37000, 9784845289],["John Doe", 11112, "7512", 39000, 7812456887],["Scar Dean", 11113, "5614", 49000, 6357524897],["Robert Wilkist", 11114, "4500", 45000, 8879754125]]
emitter.on('get_details',(acc_no)=>{
    var i;
    var flag=0;
    for(i=0;i<accounts.length;i++)
    {
        if(accounts[i][1]==acc_no)
        {
            flag=1;
            var pass=prompt("\t\t\t\t\tPlease enter PIN : ");
            console.log("--------------------------------------------------------------------------------------------------------------------------");
            if(pass==accounts[i][2])
            {
                console.log(`\t\t\t\t\tAccount Number : ${accounts[i][1]}`);
                console.log(`\t\t\t\t\tName : ${accounts[i][0]}`);
                console.log(`\t\t\t\t\tAccount Balance : ${accounts[i][3]}`);
                console.log(`\t\t\t\t\tPhone Number : ${accounts[i][4]}`);
                console.log("--------------------------------------------------------------------------------------------------------------------------");
                break;
            }
            else
            {
                console.log("\t\t\t\t\tEntered PIN is wrong please try again!!");
                console.log("--------------------------------------------------------------------------------------------------------------------------");
                break;
            }
        }
    }
    if(flag==0)
    {
        console.log("\t\t\t\t\tAccount not found!!!");
        console.log("--------------------------------------------------------------------------------------------------------------------------");
    }
    emitter.emit('clicker');
})
emitter.on('withdraw',(acc_no)=>{
    var i;
    var flag=0;
    for(i=0;i<accounts.length;i++)
    {
        if(accounts[i][1]==acc_no)
        {
            flag=1;
            var pass=prompt("\t\t\t\t\tPlease enter PIN : ");
            console.log("--------------------------------------------------------------------------------------------------------------------------");
            if(pass==accounts[i][2])
            {
                console.log(`\t\t\t\t\tAvailable Clear Balance : ${accounts[i][3]}`);
                console.log("--------------------------------------------------------------------------------------------------------------------------");
                var amount=prompt("\t\t\t\t\tPlease enter amount to withdraw : ");
                console.log("--------------------------------------------------------------------------------------------------------------------------");
                if(amount<=0)
                {
                    console.log("\t\t\t\t\tAmount must be greater than or equal to 0!!");
                    console.log("--------------------------------------------------------------------------------------------------------------------------");
                }
                else if(amount>accounts[i][3])
                {
                    console.log("\t\t\t\t\tAmount entered must be less than available clear balance!!");
                    console.log("--------------------------------------------------------------------------------------------------------------------------");
                }
                else
                {
                    accounts[i][3]=accounts[i][3]-amount;
                    console.log("\t\t\t\t\tPlease collect your cash from bottom!!");
                    console.log("--------------------------------------------------------------------------------------------------------------------------");
                }
                break;
            }
            else
            {
                console.log("\t\t\t\t\tEntered PIN is wrong please try again!!");
                console.log("--------------------------------------------------------------------------------------------------------------------------");
                break;
            }
        }
    }
    if(flag==0)
    {
        console.log("\t\t\t\t\tAccount not found!!!");
        console.log("--------------------------------------------------------------------------------------------------------------------------");
    }
    emitter.emit('clicker');
})
emitter.on('pin_change',(acc_no)=>{
    var i;
    var flag=0;
    for(i=0;i<accounts.length;i++)
    {
        if(accounts[i][1]==acc_no)
        {
            flag=1;
            var pass=prompt("\t\t\t\t\tPlease enter old PIN : ");
            console.log("--------------------------------------------------------------------------------------------------------------------------");
            if(pass==accounts[i][2])
            {
                console.log(`\t\t\t\t\tAccount Number : ${accounts[i][1]}`);
                console.log(`\t\t\t\t\tName : ${accounts[i][0]}`);
                console.log(`\t\t\t\t\tAccount Balance : ${accounts[i][3]}`);
                console.log(`\t\t\t\t\tPhone Number : ${accounts[i][4]}`);
                console.log("--------------------------------------------------------------------------------------------------------------------------");
                var pass1=prompt("\t\t\t\t\tPlease enter new PIN : ");
                console.log("--------------------------------------------------------------------------------------------------------------------------");
                var pass2=prompt("\t\t\t\t\tConfirm PIN : ");
                console.log("--------------------------------------------------------------------------------------------------------------------------");
                if(pass1==pass2)
                {
                    accounts[i][2]=pass2;
                    console.log("\t\t\t\t\tPIN changed successfully");
                    console.log("--------------------------------------------------------------------------------------------------------------------------");
                }
                else
                {
                    console.log("\t\t\t\t\tYou have entered different password please try again!!!");
                    console.log("--------------------------------------------------------------------------------------------------------------------------");
                }
                break;
            }
            else
            {
                console.log("\t\t\t\t\tEntered PIN is wrong please try again!!");
                console.log("--------------------------------------------------------------------------------------------------------------------------");
                break;
            }
        }
    }
    if(flag==0)
    {
        console.log("\t\t\t\t\tAccount not found!!!");
        console.log("--------------------------------------------------------------------------------------------------------------------------");
    }
    emitter.emit('clicker');
})
emitter.on('exit',()=>{
    console.log("\t\t\t\t\tThank you for visiting!!!");
    console.log("--------------------------------------------------------------------------------------------------------------------------");
})
emitter.on('invalid',()=>{
    console.log("\t\t\t\t\tInvalid input");
    console.log("--------------------------------------------------------------------------------------------------------------------------");
    emitter.emit('clicker');
})
emitter.on('shower',()=>{
    console.clear();
    console.log("--------------------------------------------------------------------------------------------------------------------------");
    console.log("--------------------------------------------------MERN BANK---------------------------------------------------------------");
    console.log("--------------------------------------------------------------------------------------------------------------------------");
})
emitter.on('clicker',()=>{
    var int=prompt("\t\t\t\t\tPress enter to continue : ");
})
while(n!=4)
{
    console.clear();
    console.log("--------------------------------------------------------------------------------------------------------------------------");
    console.log("--------------------------------------------------MERN BANK---------------------------------------------------------------");
    console.log("--------------------------------------------------------------------------------------------------------------------------");
    console.log("\t\t\t\t\t1. Get Details of your account.\n\t\t\t\t\t2. Withdraw money.\n\t\t\t\t\t3. Change PIN\n\t\t\t\t\t4. Exit");
    console.log("--------------------------------------------------------------------------------------------------------------------------");
    n=prompt("\t\t\t\t\tEnter you choice : ");
    if(n==1)
    {
        emitter.emit('shower');
        var acc_no=prompt("\t\t\t\t\tPlease enter acount number : ");
        console.log("--------------------------------------------------------------------------------------------------------------------------");
        emitter.emit('get_details', acc_no);
    }
    else if(n==2)
    {
        emitter.emit('shower');
        var acc_no=prompt("\t\t\t\t\tPlease enter acount number : ");
        console.log("--------------------------------------------------------------------------------------------------------------------------");
        emitter.emit('withdraw', acc_no);
    }
    else if(n==3)
    {
        emitter.emit('shower');
        var acc_no=prompt("\t\t\t\t\tPlease enter acount number : ");
        console.log("--------------------------------------------------------------------------------------------------------------------------");
        emitter.emit('pin_change', acc_no);
    }
    else if(n==4)
    {
        emitter.emit('shower');
        emitter.emit('exit');
    }
    else
    {
        emitter.emit('shower');
        emitter.emit('invalid');
    }
}