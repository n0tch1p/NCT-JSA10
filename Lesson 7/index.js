//block-scope
{
let a = 10
var b = 20
const pi = 3.14
a = 11
b = 30
console.log(a);
console.log(b);
console.log(pi);
}


console.log(b);
//fuction scope 
function check() {
    let c = 30
    var d = 40 
    const e = 22
    console.log(c);
    console.log(d);
    console.log(e);
}
check()
//console.log(c);
//console.log(d);
//console.log(e);


hello = () => {
console.log('hello')
}
//hello()

function hello(){
    console.log('hello')
}
//hello()

check = (name,age) => {
    let c = 30
    var d = 40 
    const e = 22
    console.log(c);
    console.log(d);
    console.log(name,age );

}