function Add(event){
    let number_first  = parseFloat(document.getElementById("First_value").value);
    let number_second = parseFloat(document.getElementById("Second_value").value);
    let sum = number_first+number_second;
    alert(`Addition of ${number_first} and ${number_second} is:  ${sum}`)
    
}
function Sub(event){
    let number_first  = parseFloat(document.getElementById("First_value").value);
    let number_second = parseFloat(document.getElementById("Second_value").value);
    let sub = number_first-number_second;
    alert(`Subtraction of ${number_first} and ${number_second} is:  ${sub}`)
    
}
function Multiply(event){
    let number_first  = parseFloat(document.getElementById("First_value").value);
    let number_second = parseFloat(document.getElementById("Second_value").value);
    let mult = number_first*number_second;
    alert(`Multiplication of ${number_first} and ${number_second} is:  ${mult}`)
    
}
function Divide(event){
    let number_first  = parseFloat(document.getElementById("First_value").value);
    let number_second = parseFloat(document.getElementById("Second_value").value);
    let divide = number_first/number_second;
    alert(`division of ${number_first} and ${number_second} is:  ${divide}`)
    
}
