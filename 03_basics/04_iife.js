//Immediately invoked function expressions (IIFE)
//to save code from global scope pollution 
//and to execute some code liek db connection whenver the app restarts
(function chai() {
    //named IIFE
    console.log(`DB connected`);
})(); //semicolon mandatory b/w two IIFE when one fun ends and another starts

// (fun def)(execution call )

//arrow fun
( (name) => {
    //unnamed IIFE with paramenter
    console.log(`DB connected too ${name}`);
}) ('hari')
/*
Javascript Execution Context
//browser this context - 
//js is single threaded window object

-> global execution context(this)
-> function execution context
-> eval execution context

JS code file 
-> memory creation phase
-> execution phase

1. Global execution(allocated to this keyword):
   The value of `this` keyword is set to Global Execution Context 
   (which is an empty Object in NODE environment, & window object in browser environment)
2. Memory Phase(variables created with values undefined, function definition)
   During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. 
   For variables they are 'undefined' and for functions they are set to their function definition
3. Execution Phase(variables values updated-> function execution context created for each fun -> new variable env + execution thread; 
    again memory phase and execution phase for those fun separately, and value returned to parent execution context, now this fun execution context deleted)
   After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
    1. Memory phase 
    2. Execution phase 
    📝The return value of the 'Function Execution' context is passed to the Global Execution Context
    
    Call Stack:
    fun call2
    fun call1
    Global Exec
*/