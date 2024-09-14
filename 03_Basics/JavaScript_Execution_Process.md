JavaScript Exexution Context -> how the program of javascript executes on different types of run-time environment.

Global Execution Context of Browser is Window Object. We can get it by using this keyword.

Global Execution Context of Node Js is an empty Object. We can get it by using this keyword.

JavaScript is a single threaded language. In this every code works as a process.

Functional Execution Context 

Eval Execution Context -> Property of a global object

In Js code is divided into two phases :-

1. Memory Creation Phase -> In this, only memory is allocated to different variables, functions, objects.

2. Execution Phase -> In this, operations are performed on these variables,etc.

let's take an example:-

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

1. Global Environment -> this

2. Memory Phase :
    val1 -> undefined
    val2 -> undefined
    addNum -> defination
    result1 -> undefined
    result2 -> undefined

3. Execution Phase:
    val1 -> 10
    val2 -> 5
    addNum -> new execution context is created -> New Variable Environment + Execution Thread
        - Memory Creation Phase of function:
            val1-> undefined
            val2-> undefined
            total->undeined
        Execution Phase of function:
            num1-> 10
            num2-> 5
            total->15
    