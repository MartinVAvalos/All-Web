var result = 0;
var newNum = 0;
var operator = null;
var dec = null;

display = (display) => {
    document.getElementById("result").value = display;
}

numC = () => {
    result = 0;
    newNum = 0;
    operator = null;
    dec = null;
    display(result);
}
changeSign = () => {
    newNum = newNum * -1;
    result = result + newNum;
    newNum = 0;
    display(result);    
}
equals = () => {
    calculate("=");
}
decimal = () => {
    display(newNum+".");
    dec = ".";
}
numDiv = () => {
    if(operator !== null) {
        calculate("=");
    }
    operator = "/";
    result = result + newNum;
    newNum = 0;
}
numMul = () => {
    if(operator !== null) {
        calculate("=");
    }
    operator = "*";
    result = result + newNum;
    newNum = 0;
}
numAdd = () => {
    if(operator !== null) {
        calculate("=");
    }
    operator = "+";
    result = result + newNum;
    newNum = 0;
    // console.log("result" +result);
    // console.log("newNum" +newNum);
}
numSub = () => {
    if(operator !== null) {
        calculate("=");
    }
    operator = "-";
    result = result + newNum;
    newNum = 0;
}

num0 = () => {
    calculate(0);
}
num1 = () => { 
    calculate(1);
}
num2 = () => {
    
    calculate(2); 
}
num3 = () => {
    calculate(3); 
}
num4 = () => {
    calculate(4); 
}
num5 = () => {
    calculate(5); 
}
num6 = () => {
    calculate(6); 
}
num7 = () => {
    calculate(7); 
}
num8 = () => {
    calculate(8); 
}
num9 = () => {
    calculate(9); 
}

calculate = (key) => {
    if(!isNaN(key)) {
        if(dec === "." && String(newNum).indexOf(".") === -1) {
            newNum = String(newNum) + String(".") + String(key);
            newNum = Number(newNum);
            display(newNum);
        }
        else {
            // console.log("new stuff " + newNum);
            // console.log("new key " + key);
            newNum = String(newNum) + String(key);
            newNum = Number(newNum);
            display(newNum);
        }
    }
    if(key === "=") {
        if(operator === "/") {
            result = result / newNum;
            newNum = 0;
        }
        if(operator === "*") {
            result = result * newNum;
            newNum = 0;
        }
        if(operator === "+") {
            result = result + newNum;
            newNum = 0;
            newNum = 0;
        }
        if(operator === "-") {
            result = result - newNum;
            newNum = 0;
        }
        operator = null;
        display(result);
    }
} 