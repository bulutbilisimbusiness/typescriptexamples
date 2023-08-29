/* console.log("Hello world")
console.log('Hello World');
const button = document.getElementById('submit');
const a = document.getElementById('input1')! as HTMLInputElement;
const b = document.getElementById('input2')! as HTMLInputElement;
const result = document.getElementById('result');

function add(a:number, b:number) {
    return a + b;
}
button.addEventListener('click', function () {
    result.innerText = `${add(+a.value, +b.value)}`;
}); */
//Type Annotation
/* let x: number=5
let y ="hello world"
let z;
z=false
z=5
z="hello"
x=z
 */
/* enum Color{
    Red,
    Green=100,
    Blue=Green+5,
    Yellow,
}
console.log(Color.Green)
console.log(Color.Blue)
console.log(Color.Yellow)

const enum Tshirt{
    XSmall="XS",
    Small="S",
    Medium="M"
}
console.log(Tshirt.XSmall)

enum Mixed {
    Red,
    Green,
    Blue="Mavi",
    Yellow="Sari",
    Magenta=120,
    Brown,
}

 */
/* const car:{
    make:string,
    model:string,
readonly year:number,
sunroof?:boolean,
}={
    make:"Ford",
    model:"Focus",
    year:2019,
} */
/* type Book ={
    book_id:number,
    book_name:string,
}
 type Author ={
    Author_id:number,
    Author_name:string,
 }
 type Intersected_type=Book & Author;
 let book1:Intersected_type={
    book_id:1,
    book_name:'The Lord of the Rings',
    Author_id:1,
    Author_name:'JRRT',
 } */
/* let score:unknown='350';
//console.log(score.length)
console.log((<string>score).length)
console.log((score as number).toFixed(2))
console.log(score) */
/* function selamla(greet:string,name?:string):string{
   if(!name) name="user"
   return `${greet}, ${name}`
}
selamla("hi","erhan")
selamla("hello") */
function add(num1, ...numbers) {
    let total = num1;
    numbers.forEach(number => total += number);
    console.log(total);
}
add(5);
add(1, 2, 3, 4, 5);
