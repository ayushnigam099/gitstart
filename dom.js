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


//Make the 3 rd element in the list have green background color
let hidden= document.getElementsByClassName('list-group-item');
console.log(hidden);
hidden[2].style.backgroundColor= "green";

//Make all the elements in the list have bold color font
for(let i =0;i<hidden.length; i++)
{
    hidden[i].style.fontWeight= "bold";
}
