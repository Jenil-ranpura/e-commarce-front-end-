let in1 = document.querySelector(".input1");
let in2 = document.querySelector(".input2");
let in3 = document.querySelector(".input3");

let p1 = document.querySelector(".plus1");
let p2 = document.querySelector(".plus2");
let p3 = document.querySelector(".plus3");

let m1 = document.querySelector(".minus1");
let m2 = document.querySelector(".minus2");
let m3 = document.querySelector(".minus3");


let c1 = in1.innerHTML;
let c2 = in2.innerHTML;
let c3 = in3.innerHTML;

c1 = parseInt(c1);
c2 = parseInt(c2);
c3 = parseInt(c3);

//for first card
p1.addEventListener("click", () => {
	if(c1 >= 0) {
		c1++;
		in1.innerHTML = c1;
	}
})
m1.addEventListener("click", () => {
	if(c1 > 1) {
		c1--;
		in1.innerHTML = c1;
	}
})

//for secound card
p2.addEventListener("click", () => {
	if(c2 >= 0) {
		c2++;
		in2.innerHTML = c2;
	}
})
m2.addEventListener("click", () => {
	if(c2 > 1) {
		c2--;
		in2.innerHTML = c2;
	}
})

//for third card
p3.addEventListener("click", () => {
	if(c3 >= 0) {
		c3++;
		in3.innerHTML = c3;
	}
})
m3.addEventListener("click", () => {
	if(c3 > 1) {
		c3--;
		in3.innerHTML = c3;
	}
})