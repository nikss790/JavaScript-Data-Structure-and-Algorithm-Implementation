/**
 * Stack implementation using  Array 
 * Stack Data structure works on LIFO -- Last in and First out
 * E.g.
 * Back buttons of Browsers
 * call stack used in recurssion
 *  Undo/Redo
 */

 var stack = []
 stack.push('google.com')
 stack.push('facebook.com')
 stack.push('youtube.com')
 console.log(stack)
/**
 * lets utilize the in-built array implementation for Stack 
 */

 console.log(stack.pop()) // removing the last element from the array , satisfying condition last added value is being removed first.
 stack.push('netflix.com')
 //Now lets add one more element and check if last added data is being removed --following stack concepts
console.log(stack.pop()) // now again netflix.com will be removed.

/**
 * Similar to push and pop , we can use unshift () and shift () method
 * This e.g. is just to visulalize the stack but it  not best implementation as Big O can cause the bad performance.
 */