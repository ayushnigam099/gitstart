// console.dir(document);
// console.dir(document.domain);

// console.log(document.title)
// console.log(document.title=123);
// let item = document.getElementsByClassName('title');
// // console.log(item[0]);

// let header= document.getElementById('header-title');
// let headerparent= document.getElementById('main-header');
// headerparent.style.border="2px solid black";
// // console.log(header);
// header.style.color="pink";
// item[0].style.color="green";
// // item.style.borderBottom="4px solid orange";
// item[0].style.fontWeight= "bold";
// header.style.border="5px solid pink";


// //Make the 3 rd element in the list have green background color
// let hidden= document.getElementsByClassName('list-group-item');
//  console.log(hidden);
// hidden[2].style.backgroundColor= "green";

// //Make all the elements in the list have bold color font
// for(let i =0;i<hidden.length; i++)
// {
//     hidden[i].style.fontWeight= "bold";
// }

//--------------------------------------------------------------------------------------------------------------------------------------//

// TASK 5 -Added a new li element without the same class Name as "newone", And try editing it with getelementsbyclassname and then by getelementbytagname

//By ClassName
// let linew= document.getElementsByClassName('newone');
// linew[0].style.color="blue";
 
// By Tagname

// let li= document.getElementsByTagName('li');
// console.log(li[4].textContent);
// li[4].style.color="red";
// li[4].style.backgroundColor="yellow";

// TASK 6-
// a) Make the 2nd item have green background color 
// b) Make the 3rd item invisible.
// c) Using QuerySelectorALL change the font color to green for 2nd item in the item list
// d) Choose all the odd elements and make their background green using QuerySelectorALL
  
// let item2= document.querySelector('.list-group-item:nth-child(2)');
// item2.style.backgroundColor= "green";
// let item3= document.querySelector('.list-group-item:nth-child(3)');
// item3.style.visibility="hidden";
 
 
// let seconditem= document.querySelectorAll('li:nth-child(2)')
//I have changed the font color to light green as green font became invisible on green background.
// seconditem[0].style.color= "green";


// let odd= document.querySelectorAll('li:nth-child(odd)');
// console.log(odd);
//  for(let i=0;i<odd.length;i++)
//  {
//     odd[i].style.backgroundColor="green";
//  }
// --------------------------------------------------------------------------------------------------------------------------------

// TRAVERSING THE DOM

// parentNode
// let itemlist=document.querySelector('#items');
//  console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor="green";
// console.log(itemlist.parentNode.parentNode);
// console.log(itemlist.parentNode.parentNode.parentNode);

// parentElement
let itemlist=document.querySelector('#items');
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor="green";
// console.log(itemlist.parentElement.parentElement);
// console.log(itemlist.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemlist.childNodes); 

// console.log(itemlist.children);
// itemlist.children[0].style.backgroundColor=" orange";

// firstChild
// console.log(itemlist.firstChild);
// firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='HELLO';

// lastChild
// console.log(itemlist.lastChild);
// lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='HELLO';

// nextSibling
// console.log(itemlist.nextSibling);
// nextElementSibling
// console.log(itemlist.nextElementSibling);

// previousSibling
// console.log(itemlist.previousSibling);
// previousElementSibling
// console.log(itemlist.previousElementSibling);

// Now go head and add HEllo word before Item Lister but I added Hello World :)
// create element
let newdiv= document.createElement('div');
// add classname
newdiv.className="new-one";
// add id
newdiv.id="new-one-div";
console.log(newdiv);

// set attributes 
newdiv.setAttribute('title', 'new div');

// add text to div
let text= document.createTextNode('Hello world');
newdiv.appendChild(text);

let container= document.querySelector('header .container');
// console.log(container);
let header= document.querySelector('header h1');
// append newdiv below the first header
container.insertBefore(newdiv, header);
newdiv.style.color="red";

// newdiv.style.fontSize= "20px";

// Now go head and add HEllo word before Item 1 but I added Hello World :)

let newspan= document.createElement('span');
let newtext= document.createTextNode('Hello World');
newspan.appendChild(newtext);
// console.log(newspan);
let li= document.querySelector('ul .list-group-item');
// console.log(li);
let container1= document.querySelector('#items');
container1.insertBefore(newspan, li);
newspan.style.color="red";


