// javascript

function reverseString(str) {
    return str;
}

/*
reverseString("hello") should become "olleh"
reverseString("Howdy") should become "ydwoH"
reversString("Greetings from Earth") should return ("htraE morf sgniteerG")
*/






// function reversSting() {
// Step 1. Use the split() method to return a new array


// Step 2. Use the reverse() method to reverse the new created array


// Step 3. Use the join() method to join all elements of the array into a string

// Step 4. Return the reversed string

//}










// function reverseString(str) {
    // Step1. Create an empty string that will host the new created string


    // Step 2. Create FOR loop
    /* The starting point of the loop will be (st.length -1) which corresponds to the
    last character of the string, "o"
    As long as i is greater than equals 0, the loop will go on
    We decrement i after each iteration */

// Step 3. Return the reversed string

// }





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

const display = document.getElementById("display");

function render(func) {
    display.textContent = func;
}

render(reversString("hello"))