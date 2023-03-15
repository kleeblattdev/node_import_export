function bigPopulation(city){
    let newPopulation=city.filter(function(element){
        return element.population> 100000
    })
    console.log(newPopulation)
}

function smallPopulation(city){
    let newPopulation=city.filter(function(element){
        return element.population< 100000
    })
    console.log(newPopulation)
}

export {bigPopulation,smallPopulation}