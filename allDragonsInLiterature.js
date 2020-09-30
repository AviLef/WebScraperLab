var getDragonNames = function() {
    return dragonNames;
}

var dragonNames = allDragons.name;

var dragonPromise = d3.csv("allDragonsInLiterature.csv");

var dragonPromiseSucc = function(dragonNames){
    console.log("Data collected successfully!", dragonNames);
}

var dragonPromiseFail = function(errorMsg){
    console.log("Uh oh! Something went wrong.", errorMsg);
}

dragonPromise.then(dragonPromiseSucc,dragonPromiseFail);