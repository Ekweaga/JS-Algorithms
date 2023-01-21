export const palidrome = (str)=>{
    let comparestr = str.split(" ").reverse().join("");

    if(str === comparestr){
        alert ("Palidrome")
    }
    else{
        alert("Not a Palidrome")
    }
}