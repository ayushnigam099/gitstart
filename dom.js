// console.dir(document);
// console.dir(document.domain);

// console.log(document.title)
// console.log(document.title=123);
let item = document.getElementsByClassName('title');
console.log(item[0]);

let header= document.getElementById('header-title');
let headerparent= document.getElementById('main-header');
headerparent.style.border="2px solid black";
console.log(header);
header.style.color="pink";
item[0].style.color="green";
// item.style.borderBottom="4px solid orange";
item[0].style.fontWeight= "bold";
header.style.border="5px solid pink";