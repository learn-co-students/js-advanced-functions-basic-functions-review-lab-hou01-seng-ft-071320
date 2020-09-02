// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
} 

let mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(var2='*') {
    return function(var1="special"){
        return `You are ${var2}${var1}${var2}!`
    }
}

let Calculator = {
    add(num1, num2){return num1 + num2},
    subtract(num1, num2){return num1 - num2},
    multiply(num1, num2){return num1 * num2},
    divide(num1, num2){return num1 / num2}
}

function actionApplyer(integer, array){
    if (array == false){
        return integer
    }else{
        array.forEach(task => {
            integer = task(integer)
        })
        return integer
    }

}