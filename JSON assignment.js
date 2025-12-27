async function Multiply(a,b) {
    let response= await a*b;
    display(response);
}
function display(some) {
    console.log(some);

}
Multiply(30,6);