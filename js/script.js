const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];


//question 1

const cat = {
  complain: function () {
    console.log("Meow");
  },
};
cat.complain(cat);


//Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


//question 3

heading.style.fontSize = "2em";


//question 4

heading.classList.add("Subheading");


//question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}


//question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p> New paragraph </p>";
resultsContainer.style.backgroundColor = "Yellow";


//question 7

function catlist(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catlist(cats);


//question 8

function createCats(cats) {
  let addedItems = "";
  for (let i = 0; i < cats.length; i++) {
    let catAge = cats[i].age;
    let catName = cats[i].name;
    if (catAge === undefined) {
      catAge = "Age unknown";
    } 
    addedItems +="<div>" + "<h5>" + catName + "</h5>" + "<p>" + catAge + "</p>" + "</div>";
  }
  return addedItems;
}
var container = document.querySelector(".cat-container");
container.innerHTML = createCats(cats);
