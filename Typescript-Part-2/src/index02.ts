// Arrays
let arr : number [] = [1,2,3,4,5,6,7];
let brr : Array<number> = [1,2,3,4,5,6,7];


// question-1 : Given an array of positive integers as input, return the maximum value in the array
function maxElement(arr: number[]): number{
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
let arr1 : number[] = [12,34,543,23,432];
let result1 : number = maxElement(arr1);
console.log("max value is : " + result1);


// question-2 : Given a list of users, filter out the users that are legal (greater than 18 years of age)
function isLegal(user : User[]) : User [] { 
    return user.filter((cur) => cur.age>=18)
}
interface User {
	firstName: string;
	lastName: string;
	age: number;
}

let  users : User []= 
[   
    {
        firstName: "Tushar",
        lastName: "Chauhan",
        age: 20
    }
    ,
    {
        firstName: "harkirat",
        lastName: "Singh",
        age: 21 
    },
    {
        firstName: "Raman",
        lastName: "Singh",
        age: 16
    },
]
let result2 : User[] = isLegal(users);
console.log(result2);



export {}