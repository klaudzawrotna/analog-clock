+++ // FUNCTIONS AND OBJECTS

function findBiggestFraction() {
	var result; 
	a > b ? result = ["firstFraction", a]: result = ["secondFraction", b]
}


var firstFraction  = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction,secondFraction); 
console.log(fractionResult);


console.log("First fraction result: ", firstFraction)
console.log("Second fraction result: ", secondFraction)
console.log("Fraction" + fractionResult[0] + "with a value of" + secondFraction); 






// anonymous function 

var a = 5/7;
var b = 18/45;

var theBiggest = function(a,b) { 
 	var result;
 	a>b ? result = ["a",a a] : result = ["b", b];
 	console.log(result)
}

theBiggest(7/9,15/50);

// invoked functional expressions 

var firstFraction = 7/9;
var secondFraction = 15/50;

var theBiggest = (function(a,b) { 
 	var result;
 	a>b ? result = ["a",a a] : result = ["b", b];
 	console.log(result)
})(firstFraction,secondFraction)



console.log(theBiggest)

// constance
const MYCONST = 5;
console.log(MYCONST);

//variables scope 

function logScope() {
	let localVar = 2;


	if(localVar) {
		let localVar = "I am different!";
		console.log("nested localVar", localVar);

		}

	console.log("logScope localVar: "; localVar);


}

logScope();


// OOP : create an obkect 
var course = new Object();

course.title = "haha"
course.instructuor


// OOP creation: short hand 
var course = {
	title: "ddd"
	level: 1, 
	views: 0
	updateViews: function() {
		return ++ course.views;
	}
}

console.log(course.title); 
course.updateViews();


// object constructors
 
function Course(title, instructor,level,published,views) {
	this.title = title;
	this.instrucot = instructor; 
	this.level = level;
	this.published = published;
	this.views = views
	this.updateViews = function() {
		return ++ this.views;
	};

}

var courses = [ 
	 new Course("Javascript Essential","M.O.Hen.", 1, true, 150)
	 new Course("Javascript 2 ","M.O.Hen.", 1, false, 0)

];


console.log(courses[1].instructor);


course.title 
course["title"]




// CLOSURES 
// is a funtion inside a function that relies on the variables outside of the scope of the function 
// calculating Ems sizes for pixels in CSS

function giveMeEms(pixels) {
	var baseValue = 16;
	
	function doTheMath() {
		return pixels/baseValue;
	}
	return doTheMath;
}

var smallSize= giveMeEms(12);
var mediumSize= giveMeEms(18);
var largeSize = giveMeEms(24);

console.log("Small size: ", smallSize);





+++ // JAVASCRIPT AND DOM: CHANNGING DOM ELEMENTS

// querySelector methods 
// add , remove , item , toggle, contains 

document.querySelector(".masthead").classlist.add("new class")
document.querySelector.classlist.remove("oneclass")

 // toggle to turn on/off the classes 

 document.querySelector(".new-class").classlist.toggle("masthead")

document.querySelector(".new-class").classlist.contains("masthead")

 // attributes property 

 const CTAELEMENT = document.querySelector(".cta.a");
 if CTAELEMENT.hasAttrivute("target")  {
 	console.log(CTAELEMENT.getAttribute("target");
 } else {
 	CTAELEMENT.setAttribute("target","blank");

 }

 console.log(CTAELEMENT.attributes);

// Add DOM elements 

const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

// append method
//captionElement.append(altText);
FEATURED.append(caption)//

var captionElement = document.createElement("figcaption");

// creeteTextNode and appendChild method
var captonText = document.createTextNode(altText);
captionElement.appenchChild(captionText);

FEATURED.appendChild(captionElement);
//

THEIMAGE.setAttribute("alt"," ");


// Inline CSS 

// check for style 
document.querySelector(".cta a").style

document.querySelector(".cta a".)style.backgroundColor = "green")

document.querySelector(".cta a").style.cssText = "padding: 1em; color white; background-color: red;"

document.querySelector(".cta a").setAttribute("style","padding: 2em"), color: green;)






