const numbers = [
    {
        myanmar:"\u1040",
        english:0,
    },
    {
        myanmar:"\u1041",
        english:1,
    },
    {
        myanmar:"\u1042",
        english:2,
    },
    {
        myanmar:"\u1043",
        english:3,
    },
    {
        myanmar:"\u1044",
        english:4,
    },
    {
        myanmar:"\u1045",
        english:5,
    },
    {
        myanmar:"\u1046",
        english:6,
    },
    {
        myanmar:"\u1047",
        english:7,
    },
    {
        myanmar:"\u1048",
        english:8,
    },
    {
        myanmar:"\u1049",
        english:9,
    },
]
module.exports = numbers;

module.exports.findMyan = (element)=>{
    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        if(element == number.myanmar){            
            return number.english;
        }
    }
    return "not myanmar";
}