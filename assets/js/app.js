
// alert('ok');

var cl = console.log;

let skills = ["HTML","CSS","SASS","JQUERY","Angular","Javascript","Typescript","Bootstrap","Python"];
// cl(skills);

// skills.forEach(function (skill,i){
	// cl(skill);
// });

// skills.forEach(skill => cl(skill));


let ages = [20,30,10,40,65,70,25,34,55,12];
// cl(ages);


// ages.forEach(age => cl(age));


let companies = [
	{ name: "Company One", category: "Finance", start: 1981 , end: 2003},
	{ name: "Company Two", category: "Retail", start: 1992 , end: 2008},
	{ name: "Company Three", category: "Auto", start: 1999 , end: 2007},
	{ name: "Company Four", category: "Retail", start: 1989 , end: 2010},
	{ name: "Company Five", category: "Technology", start: 2009 , end: 2014},
	{ name: "Company Six", category: "Finance", start: 1987 , end: 2010},
	{ name: "Company Seven", category: "Auto", start: 1986 , end: 1996},
	{ name: "Company Eight", category: "Technology", start: 2011 , end: 2016},
	{ name: "Company Nine", category: "Retail", start: 1981 , end: 1989},
];


// company name

let companyNames = [];  // array initialization >> to store the value 

companies.forEach(function (comp){
	cl(comp.name);
	companyNames.push(comp.name);
});
cl(companyNames);

// [1981-2003,1992-2008,1999-2007];


let compDuration = [];

companies.forEach(function (comp){
	// cl(`${comp.start}-${comp.end}`);
	compDuration.push((`${comp.start}-${comp.end}`));
});
cl(compDuration);


// compatleast10


let compatleast10 = [];

companies.forEach(function (comp){
	// cl(comp);
	if((comp.end-comp.start) >= 10){
		cl(comp);
		compatleast10.push(comp);
		// compatleast10.push(`${comp.end}-${comp.start}`);
	}
});
cl(compatleast10);


// [{compName : "Company One", duration : 22}, {compName : "Company Two", duration : 16}];

let companyDuration = [];

// companies.forEach(function(comp){
	// cl(comp);
	// let obj = {
		// companyName : comp.name,
		// duration : comp.end - comp.start
	// }
	// cl(obj);
	// companyDuration.push(obj);
// });
// cl(companyDuration);

companies.forEach(comp => companyDuration.push({
	compName : comp.name,
	duration : comp.end - comp.start
}));
cl(companyDuration);


// finance companies 

let financecomp = [];

// companies.forEach(function(comp){
	// if(comp.category.toLowerCase().trim() === "finance"){
		// financecomp.push(comp);
	// }
// });
// cl(financecomp);

companies.forEach(comp => {
	if(comp.category.toLowerCase().trim() === "finance"){
	financecomp.push(comp);
	}
});

cl(financecomp);

// retailcomp run atleast 15yrs 

let retailcompatleast15 = [];

// companies.forEach(function (comp){
	// if((comp.category.toLowerCase().trim() === "retail") && ((comp.end-comp.start) >= 15)){
		// retailcompatleast15.push(comp);
	// }
// });

// cl(retailcompatleast15);

companies.forEach(comp => {
	if((comp.category.toLowerCase().trim() == "retail")&& ((comp.end-comp.start) >= 15)){
		retailcompatleast15.push(comp);
	}
});
cl(retailcompatleast15);

let allduration = 0;

// companies.forEach(comp => {
	// let age = comp.end-comp.start;
	// cl(age);
	// allduration = allduration + age
// });
// cl(allduration);

companies.forEach(comp => {
	allduration += comp.end-comp.start;
});
cl(allduration);


const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
	
	




// inventors.forEach(inventor => {
	// cl(inventor);
// });

// 1. How many years did all the inventors live all together?


let inventorlife = 0;

inventors.forEach(inventor => {
	let life = inventor.passed-inventor.year
	cl(life);
	inventorlife = inventorlife + life;
});
cl(inventorlife);


// 2. Give us an array of the inventors first and last names // "Albert Einstein"

let inventorsName = [];

// inventors.forEach(inventor => {
	// cl(inventor);
	// cl(`${inventor.first} ${inventor.last}`);
	// inventorsName.push(`${inventor.first} ${inventor.last}`);
// });
// cl(inventorsName);

inventors.forEach(inventor => inventorsName.push(`${inventor.first} ${inventor.last}`));
cl(inventorsName);


// 3. Filter the list of inventors for those who were born in the 15th century


let inventorsbornin15 = [];

inventors.forEach(inventor => {
	if(inventor.year >= 1500 && inventor.year <= 1600){
		inventorsbornin15.push(inventor);
	}
});
cl(inventorsbornin15);


// 4. Filter the list of inventors for those who were born in the 18th century

let inventorsbornin18 = [];

inventors.forEach(inventor => {
	if(inventor.year >= 1800 && inventor.year <= 1900){
		inventorsbornin18.push(inventor);
	}
});
cl(inventorsbornin18);



// 5. Filter the list of inventors for those who were passed in the 19th century

let inventorspassedin19 = [];

inventors.forEach(inventor => {
	if(inventor.passed >= 1900 && inventor.passed <= 2000){
		inventorspassedin19.push(inventor);
	}
});
cl(inventorspassedin19);


let inventorslife = 0;

inventors.forEach(inventor => {
	// cl((inventor.passed-inventor.year));
	let ages = inventor.passed-inventor.year;
	inventorslife = inventorslife + ages;
});
cl(inventorslife);

