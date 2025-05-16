

let employee = 
{
    name:'Ahmed',
    age:11,
    salary:8000,
    welcome:function()
    {
        console.log(`welcome ${this.name} your salary ${this.salary}`)
    },
    calculateSalary:function()
    {

        /*function getTaxes()
        {
            return (this.salary * 10)/100;
        }*/
        //transform getTaxes function to arrow function:
        let getTaxes = () => (this.salary * 10)/100;


        return this.salary - getTaxes();
    }
}
//employee.welcome();

let result = employee.calculateSalary();
console.log(result);





//type of function
/* ************ */
/*
function welcome(userName)       // 1- declaration fuction   
{
    return (`welcome ${userName}`);
}

let welcome = function(userName) // 2- expretion function
{
    return (`welcome ${userName}`);
}

let welcome = (userName) =>      // 3- arrow function
{
    return (`welcome ${userName}`);
}
// if arrow function have one paramter and one line in its code we can write it as folloing:

let welcome = userName => `welcome ${userName}`;
*/