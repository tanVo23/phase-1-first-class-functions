 function receivesAFunction(callback){
    console.log('receives a function and calls it');
    callback();
}

function returnsANamedfunction(name) {
    let name = 'function' + name;
    return name;
}

function returnsAnAnonymousFunction() { return() => console.log("yay");}

