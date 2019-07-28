let Library= require("./numbers");

convertToMyanmar = (number)=>{
    number = number.toString();
    let numArrays = number.split("");
    let outputArrays = [];
    numArrays.forEach(element => {
        if(isNaN(element) == false){
            let myanElement = Library[element].myanmar;
            outputArrays.push(myanElement);
        }else{
            outputArrays.push(element);
        }
    });
    return outputArrays.join("");
}

convertToEnglish = (number)=>{
    number = number.toString();
    let numArrays = number.split("");
    let outputArrays = [];
    numArrays.forEach(element => {
        let result = Library.findMyan(element);
        if(result == "not myanmar"){
            outputArrays.push(element);
        }else{
            outputArrays.push(result)
        }
    });
    return outputArrays.join("");
}

console.log(convertToEnglish("100 ၁၀"));
