// usando while...if....break

let a = 10;
let mini = 0;
let factorial = 10;

while (a >= mini){

    if (a => 0){
    factorial = a * factorial;
    console.log(a)
    a--;

        if (a === 1){
        break;
        }
    }   
}

console.log(factorial)