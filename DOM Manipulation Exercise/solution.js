/*  
   Task 1
   Use innerText to change the content
   */
let test1 = document.getElementById("task1");
test1.innerText = "Test 1: ";
/*
   Task 2
   Use innerHTML to add a submit button
   */
let test2 = document.getElementById("task2");
test2.innerHTML = '<button type="submit">Test 2</button>';
/*
   Task 3
   Change background color
   */
document.body.style.backgroundColor = "#232323";
/*
   Task 4
   Add border to all elements with class "item"
   */
let test4 = document.querySelectorAll(".item");
for (let item of test4) {
  item.style.border = "1px solid black";
}
/*
   Task 5
   Change href attribute
   */
let test5 = document.querySelector("#task5");
test5.setAttribute("href", "https://www.springboard.com/");
/*
   Task 6
   Change input value
   */
let test6 = document.querySelector("#task6");
test6.value = "DOM Master";
/*
   Task 7
   Add class using classList
   */
let test7 = document.querySelector("#task7");
test7.classList.add("new-class");

/*
   Task 8
   Append new button
   */
const newButton = document.createElement("button");
let test8 = document.querySelector("#task8");
newButton.innerText = "Test 8";
test8.appendChild(newButton);
/*
   Task 9
   Remove element
   */
let test9 = document.querySelector("#task9");
test9.remove();
