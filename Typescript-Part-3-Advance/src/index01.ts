interface User{
    name: string,
    age: number,    
};

function sumAge(u1: User , u2:User ): number{
    return u1.age + u2.age ;
}

const sum = sumAge({name: "tushar",age: 20},{name: "mayur",age: 18});
console.log(sum);

export {}