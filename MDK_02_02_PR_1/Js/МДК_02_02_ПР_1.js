"use strict"

class Pokemon{
  constructor(Name, number, type){
    this.Name = Name;
    this.number = number;
    this.type = type;
  }
}

let arr = [];
let Name, number, type, i = 0;

function add(){
  Name = document.getElementById('Name').value;
	number = document.getElementById('number').value;
	type = document.getElementById('type').value;
	arr[arr.length] = new Pokemon(Name, number, type);
  Name = document.getElementById('Name').value = "";
	number = document.getElementById('number').value = "";
	type = document.getElementById('type').value = "";
  update();
  alert(`${arr[arr.length - 1].Name} успешно добавлен`);
}

function remove(){
  let index = +prompt("Введите индекс элемента, который хотите удалить");
  alert(`${arr[index].Name} успешно удалён`)
  arr.splice(index, 1);
  update();
}

function filter(){
  arr.sort((a, b) => a.number - b.number);
  update();
  alert('Массив успешно отфильтрован')
}

function update(){
  document.getElementById("list").value = "";
  let j = 0;
  for(let k of arr){
    document.getElementById('list').value += `${j}й элемент:\n`;
    document.getElementById("list").value += `${k.Name}\n`;
    document.getElementById('list').value += `${k.number}\n`;
    document.getElementById('list').value += `${k.type}\n\n`;
    j++;
  }
}




