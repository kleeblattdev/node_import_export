function calc (par1,par2,operator){

    if(operator == "+"){
        return console.log(par1+par2)
    } else if(operator == "-"){
        return console.log(par1-par2)
    }else if(operator =="/"){
        return console.log(par1-par2)
    }else if(operator =="*"){
        return console.log(par1*par2)
    }else{
        console.log("alert")
    }
}

export default calc