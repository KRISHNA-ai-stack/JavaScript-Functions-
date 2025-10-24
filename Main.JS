function RANDOM() {
    // CODE
    let NUMBER = Math.floor(Math.random() * 5) + 1
    console.log("HELLO THIS IS BRO")
    return NUMBER
}
console.log(RANDOM) // 1
console.log(RANDOM) // 4
console.log(RANDOM) // 6
console.log(RANDOM) // 3

// ANYTHING WE WROTE AFTER RETURN IT IS NOT GOING TO EXECUTE FUNCTION BREAK POINT ! 


function GREET(NAME, AGE, HEIGHT) { // PARAMETERS 
    console.log("HELLO MY NAME IS ", NAME)
    console.log("HELLO MY AGE IS ", AGE)
    console.log("HELLO MY HEIGHT IS ", HEIGHT)
}
GREET("ALEX", 10, 170) // ARGUMENT
// IF WE DONT PASS ARGUMENT THEN IT WILL TAKE UNDEFINED !


function SUM(X, Y) {
    return X + Y
}
console.log(SUM(2, 2), 4) // 8 
// CALLING ONE FUNCTION TWO AT A TIME 🔴


// AVG OF 3 NUMBER'S 
function AVG(A, B, C) {
    return A + B + C
}
console.log(AVG(1, 1, 1)) // 1 

// PRINT TABLE 
function TABLE(N) {
    for (let X = 1; X <= 10; X++) {
        console.log(`${N} X ${X} = ${N * X}`)
    }
}
TABLE(2)

// PRINT FROM 1 TO N
function PRINT_SUM() {
    let SUM = 0
    for (let X = 1; X <= N; X++) {
        SUM = SUM + X
    }
    return SUM
}
console.log(PRINT_SUM(5))

// THERE ARE 4 SCOPE IN JS 👽
// SCOPE - LIKE WHERE THE VARIABLE IS GOING TO USE IN THE CODE 
// FUNCTION SCOPE 
// BLOCK SCOPE 
// LEXICAL SCOPE 
// GLOBAL SCOPE 

// FUNCTION SCOPE 

let X = 100 // GLOBAL SCOPE - CAN BE USED IN CODE ANYWHERE ! 
function FN1() {
    let X = 1 // FUNCTION SCOPE - CAN BE USED IN FUNCTION ONLY ! 
    console.log(X) // 1
}
FN1() // X = 1
console.log(X) // X = 100

// BLOCK SCOPE 
{
    let X = 10
    console.log(X) // 10 
    const Y = 10
    console.log(Y) // 10 
    var Z = 10
    console.log(Z) // 10 
}
console.log(X) // ERROR - X IS NOT DEFINE 
console.log(Y) // ERROR - Y IS NOT DEFINE 
console.log(Z) // 10 

// LEXICAL SCOPE 
// function OUTER() {
//     let X = 10
//     function INNER() {
//         console.log(X)
//     }
//     return INNER()
// }
// const CALL = OUTER()
// CALL() 


let A = 10 // GLOBAL VARIABLE 
function OUTER() {
    let B = 20 // OUTER FUNCTION VARIABLE 
    function INNER() {
        let C = 30 // INNER FUNCTION VARIABLE 
        console.log(A) // GLOBAL VARIABLE 
        console.log(B) // OUTER FUNCTION VARIABLE 
        console.log(C) // INNER FUNCTION VARIABLE 
    }
    console.log(C) // ERROR - C IS NOT DEFINE 
    INNER() // THIS FUNCTION CANT CALL OUTSIDE 
}
OUTER()
console.log(C) // ERROR - C IS NOT DEFINE 


// HIGHER ORDER FUNCTION 
function CONCAT_STRING(STRING_ARRAY) {
    if (STRING_ARRAY.length == 0) {
        return ("ARRAY OF STRING IS EMPTY")

    }
    else {
        let ZERO_STRING = " "
        for (let I = 0; I < STRING_ARRAY.length; I++) {
            ZERO_STRING = ZERO_STRING + STRING_ARRAY[I]
        }
        return ZERO_STRING
    }

}
// console.log(CONCAT_STRING(['HELLO', 'I', 'AM', 'NOOB']))
console.log(CONCAT_STRING([]))


let GREET = "HELLO" // GLOBAL SCOPE 
function CHANGEGREET() {
    let GREET = "NAMASTE" // FUNCTION SCOPE 
    console.log(GREET) // NAMASTE 
    function INNERGREET() {
        console.log(GREET) // NAMASTE
    }
    INNERGREET()
}
console.log(GREET) // HELLO 
CHANGEGREET()


// NAME LESS FUNCTION IS CALLED FUNCTION EXPRESSION 

let SUM = function (a, b) {
    return a + b
}
console.log(SUM(1, 1))
// CALLING IT BY NAME 👽

let HELLO = function () {
    console.log("HELLO")
}
HELLO() // HELLO 

// CHANGIN THE VALUE OF HELLO 
HELLO = function () {
    console.log("NAMASTE")
}
HELLO() // NAMASTE 



// HIGHER ORDER FUNCTION 
// - A FUNCTION THAT DOES ONE OR BOTH OF THE FOLLOWING  

// - TAKE ONE OR MORE FUNCTION AS AN ARGUMENT
function MULTIPLEGREET(GREET, COUNT) {
    for (let I = 1; I <= COUNT; I++) {
        GREET()
    }
}

let GREET = function () {
    console.log("HELLO")
}  // FUNCTION STORE IN GREET VARIABLE 

MULTIPLEGREET(GREET, 5)


function OUTER(SEMIOUTER, COUNT) {
    // LOOP 
    for (let X = 1; X <= COUNT; X++) {
        SEMIOUTER()
    }
}

// EXP FUNCTION 
let SEMIOUTER = function () {
    console.log("HELLO I AM SEMIOUTER")
}

OUTER(SEMIOUTER, 5)

// - RETURN A FUNCTION AS ITS RESULT 
function ODDEVENTEST(REQ) {
    if (REQ == "ODD") {
        return ODD
    } else if (REQ == "EVEN") {
        return EVEN
    } else {
        return "WRONG REQUEST"
    }
}

let ODD = function (n) {
    console.log(n % 2 != 0)
}

// ODD(2) // FALSE 
// ODD(3) // TRUE 

let EVEN = function (n) {
    console.log(n % 2 == 0)
}

// EVEN(2) // TRUE 
// EVEN(3) // FALSE




// METHODS 

const CAL = {

    // VARNAME : FUNCTION
    ADD : function(a , b) { return a + b } ,

    SUB : function(a , b) { return a - b } ,

    MUL : function(a , b) { return a * b } ,

    DIV : function(a , b) { return a / b } ,
    
    NUM : 55 ,
};

CAL.ADD(1, 1) // 2
CAL.SUB(1, 1) // 0
CAL.MUL(1, 1) // 1
CAL.DIV(1, 1) // 1
CAL.NUM // 55
