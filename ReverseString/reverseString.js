// javascript

function reverseString(str) {
    return str;
}

/*
reverseString("hello") should become "olleh"
reverseString("Howdy") should become "ydwoH"
reversString("Greetings from Earth") should return ("htraE morf sgniteerG")
*/






function reverseSting(str) {
// Step 1. Use the split() method to return a new array
    let splitString = str.split("") 
    console.log (splitString)  // > ["h", "a", "l", "l", "o"]

// Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse();
    console.log (reverseArray) // ["o", "l", "l", "a", "h"]

// Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverse.Array.join("");
    console.log(joinArray) // ["olleh"]
// Step 4. Return the reversed string
    return joinArray
}

function reverseStringEfficient(str) {
    return str.split("").reverse().join("");
}






 function reverseStringWithoutBuiltInMethods(str) {
    // Step 1. Create an empty string that will host the new created string
    let newString = ""

    // Step 2. Create FOR loop
    /* The starting point of the loop will be (st.length -1) which corresponds to the
    last character of the string, "o"
    As long as i is greater than equals 0, the loop will go on
    We decrement i after each iteration */
    for (let i = str.length -1; i >= 0; i--)
        newString += str.[i];
        console.log(newString) // > o  // > ol // > oll // > olle  // > olleh

// Step 3. Return the reversed string
    return newString
 }





// recursion, function calls itself until it is stopped by base case
//if (str === "") {// base case/stopping condition - condition that stops recursion
    // console.log(str)
    //return "";
// } else {
    // console.log(str)
    // console.log(reverseString(str))
    // return reversString(str.substr(1)) + str.charAt(0);
//first call "ello" + "h" - "elloh"
//second call "llo" + "e" - "llohe"
//third call "lo" + "l" - "lohel"
//fourth call "o" + "l" - "ohell"
//fifth call "" + "o" - "hello" ? "olleh"
//sixth call "" - meets if condition
// }


function reverseStringWithRecursion(str) {
        //charAt(), substr()
    // return str.charAt(0) //> h
    // return str.substr(1) //> ello

    if (str === "")
        return "";
    else 
        return reverseStringWithRecursion(str.substr(1)) + str.charAt(0)
}

function reverseStringRecursionTurnery() {
    return (str === "" ? "" : reverseStringRecursionTurnery(str.substr(1) + str.charAt(0)) )
}



const display = document.getElementById("display");

function render(func) {
    display.textContent = func;
}

render(reversString("hello"))