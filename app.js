console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
for(let n = 1; n<= 100; n++)
{
    if(n % 2 != 0)
    {
        console.log(n);

    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let x = 1; x<= 100; x++)
{
    if((x % 3 == 0) && (x % 5 == 0))
    {
        console.log("FIZZBUZZ");
    }
    else if (x % 3 == 0)
    {
        console.log("FIZZ");
    }
    else if (x % 5 == 0)
    {
        console.log("BUZZ");
    }
    else
    {
        console.log(x);
    }
};

// Exercise 3 section
console.log("EXERCISE 3:\n=while loop exercise 1=\n");
let index = 1;
while (index < 100)
{
    index++;
    if (index % 2 != 0)
    {
        console.log(index);
    }
}
console.log("EXERCISE 3:\n=while loop exercise 2=\n");
let index2 = 0;
while (index2 < 100)
{
    index2++;
    if ((index2 % 3 == 0) && (index2 % 5 == 0))
    {
        console.log("FIZZBUZZ");
    }
    else if (index2 % 3 == 0)
    {
        console.log("FIZZ");
    }
    else if (index2 % 5 == 0)
    {
        console.log("BUZZ");
    }
    else
    {
        console.log(index2);
    }
}
console.log("EXERCISE 3:\n= do-while loop exercise 1=\n");
let index3 = 1;
do
{
    index3++
    if (index3 % 2 != 0)
    {
        console.log(index3);
    }
}
while (index3 < 100);

console.log("EXERCISE 3:\n= do-while loop exercise 2=\n");
let index4 = 0;
do
{
    index4++
    if ((index4 % 3 == 0) && (index4 % 5 == 0))
    {
        console.log("FIZZBUZZ");
    }
    else if (index4 % 3 == 0)
    {
        console.log("FIZZ");
    }
    else if (index4 % 5 == 0)
    {
        console.log("BUZZ");
    }
    else
    {
        console.log(index4);
    }
}
while(index4 < 100);


//Exercise 4
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let i = 0; i<= n; i++)
{
    if(i == value)
    {
        console.log("Found Value!");
        break;
        
    }
    else 
    {
        console.log("Did not find Value");
    }   
}

// Exercise 5
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let y = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
for(let i = start; i<=y; i++)
{
    if (i == fizzDivisor)
    {
        console.log("FIZZ");
    }
    else if (i == buzzDivisor)
    {
        console.log("BUZZ");
    }
    else
    {
        console.log(i);
    }
    
}
