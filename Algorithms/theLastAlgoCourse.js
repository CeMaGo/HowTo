 Big O notation

function sum_char_codes(n: string): number {
	let sum = 0;
	for (let i = 0; i < n.length; i++) {
		sum += n.charCodeAt(i);
	}

	return sum;
}

// we have an N relationship. O(N) time complexity
?// simplest trick for complexity is to look for loops

## Big o said differently,
	- as yout input grows,how fast does computation or memory grow?

	1. growth is with respectto the input
        2. obviously memory growing is not computational free but in the matter of thinking about algorithms, 
	   we do not necessary think about that.


2nd example:

	function sum_char_codes2(n: string): number{
		let sum = 0;
		for (let i = 0; i< n.length; i++) {
			sum += n.charCodeAt(i)
		}
		for (let i = 0; i< n.length; i++) {
			sum += n.charCodeAt(i)
		}
		return sum;
	}

// Nˆ2 = "N squarea"
//
// Important concepts:
// 1. growth is with respect to the input
// 2. Constance are dropped
//
// O(2N) -> O(N) and this makes sense. That is because the Big O is meant to describe the upper bound of 
// the algorithm (the growth of the algorithm). The constant becomes irrelevant.
//
// Take the following :
// N = 1,   O(10N)= 10,    O(Nˆ2) = 1
// N = 5,   O(10N)= 50,    O(Nˆ2) = 25
// N = 100, O(10N)= 1,000, O(Nˆ2) = 10,000 // 10x Bigger
// N = 1000, O(10N)= 10,000, O(Nˆ2) = 1,000,000 // 100x Bigger
// N = 10,000, O(10N)= 100,000, O(Nˆ2) = 100,000,000 // 1000x Bigger
//
//  There is practical vs theoretical difference
//  Just because N is faster than Nˆ2, doesn't mean practically it is always faster for smaller inputs.
//
//  Remember, we drop constants.Therefore  O(100N) is faster than O(Nˆ2) but practically speaking,
//  you would probably win for some small set of inputs.
//
//  ||----> " quick sort is Log of N " O(LogN)
//
//
 function sum_char_codes3(n: string): number {
	 let sum = 0;
	 for (let  i = 0; i< n.length; ++i) {
		 const charCode = n.charCodeAt(i);
		 // Capital E
		 if (charCode = 69) {
			 return sum;
		 }
		 sum += charCode;
	 }
	 return sum
 }



O complexity
//
//O(1) #3
//O(logn) #6 parallel to elements on x-achs
//O(n) #5 
//O(n logn) #4 in the middle between Y- operations and X -elements
//O(nˆ2) #3
//O(2ˆn) #2 *can't run on a traditional Computer, possibly on the quantum realm 
//O(n!) #1 closest to the Y operations, very short on the elements *can't run on a traditional Computer, possibly on the quantum realm
//


//! O(Nˆ2) "for N squared" (two loops, two dimentional search X/Y)
===========>>>

	function sum_char_codes4(n: string): number {
		let sum = 0;
		for (let i = 0; i < n.length; ++i) {
			for (let j = 0, j < n.length; ++j) {
			sum += charCode;
			}
		}
		return sum
	};


O(Nˆ3) "cube" (three loops, thre dimentional search)
===========>>>

	function sum_char_codes4(n: string): number {
		let sum = 0;
		for (let i = 0; i < n.length; ++i) {
			for (let j = 0, j < n.length; ++j) {
				for (let k = 0; k < n.length; ++k) {
					sum += charCode;
				}
			}
		}
		return sum;
	}

O(n log n)
===========>>>
       * Quicksort (we will implement and explain)

O(logn)
==========>>>
	*Binary search trees


O(sqrt(n)) "O of Squirt of N"/// " O of Squared of N, O of Square root of n"
==========>>>


