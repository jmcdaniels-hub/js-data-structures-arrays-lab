// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    drivers.push('Ralph');
}

function destructivelyPrependDriver(name){

    drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(name){
    
   let allDrivers = [...drivers, name]
   return allDrivers
}

function prependDriver(name){
    let allDrivers = [name, ...drivers]
    return allDrivers
}
function removeLastDriver(){
    return drivers.slice(0,-1)
}
    
function removeFirstDriver(){
    return drivers.slice(1)
}
