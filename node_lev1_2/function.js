function firstElement(array){
    console.log(array[0])
}

function allExceptLastElement(array){
    console.log(array.slice(0,-1))
}

function lastElement(array){
    console.log(array.slice(-1))
}

function allExceptFirstElement(array){
    array.shift()
    console.log(array)
}

//Hilfe??
function remove(array, data){
    let newArray = array.filter(function(value,index,arr){
        return value !== data
    })
    console.log(newArray)
}

function removeDouble(array){
    let newArray=[]
    array.forEach((element)=>{
        if(!newArray.includes(element)){
            newArray.push(element)
        }
    })
    console.log(newArray)
}

function sumUp(array){
    let result = array.reduce((a, b) => {
        return a + b
    })
    
    console.log(result)
}

function randomNumBetween (num1,num2) {
    num1 = Math.ceil(num1)
    num2 = Math.floor(num2)
    console.log(Math.floor(Math.random()*(num2-num1+1)+num1)) 
}

function capitalizeFirstLetter(string){
    let string2 = string.charAt(0).toUpperCase() + string.slice(1)
    console.log(string2)
}

function uppercase(string){
    console.log(string.toUpperCase())
}

function checkString(par1,par2){
    console.log(par1.includes(par2))
}

export {firstElement, allExceptLastElement, lastElement, allExceptFirstElement, remove, removeDouble, sumUp, randomNumBetween, capitalizeFirstLetter, uppercase, checkString}