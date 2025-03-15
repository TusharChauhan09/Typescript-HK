// Normal Syntex , Vaiables , primitives and functions 

// js 
let x = 1;      // type-inferencing : auto matically determines the type  
console.log(x);

// tx 
let y : number = 1;  //annotation : specifing the type 
console.log(y);


// example-1
function greet( firstname : string ) {
    console.log( `Hello ${firstname}` );
}
greet("Tushar");

// example-2 
function add ( num1 : number , num2 : number ) : number {
    return num1 + num2 ;
}
console.log(add(1,2));

// example-3
function isLegal( age : number ) : boolean {
    if(age>18){
        return true;
    }
    else{
        return false;
    }
}
console.log(isLegal(17));

// example-4
// Create a function that takes another function as input, and runs it after 1 second.
function fun1() : string {
    return "Run after 1 sec";
}

function fun2( fun : ()=> string  ){
    setTimeout(()=>{
        console.log(fun());
    } , 1000);
}
fun2(fun1);

// OR some other similar example 

function doubleNumber(num: number): number {
    return num * 2;
}
function applyOperation(operation: (x: number) => number, value: number) {
    const result = operation(value);
    console.log(`Result: ${result}`);
}
applyOperation(doubleNumber, 5);

export {}
