function functionScope(){
    var variable1 = "Outer scope";
    if(variable1){
        var variable2 = "Inner scope (not really)";
        // variable2 is scoped to the function, not the if block
        console.log(variable1 + " " + variable2);
    }
    // both variable1 and variable2 are in-scope
    console.log(variable1+ " " + variable2);
}

console.log(functionScope()); 