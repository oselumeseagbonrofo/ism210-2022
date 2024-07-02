"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
async function fetch_data(url:string): Promise<void>{
let response = await fetch(url);
let data:any = await response.json();
for (let element of data){
    let todo_array: Todo;
    todo_array = new Todo(element.userId,element.id,element.title, element.completed);
    todo_array.title = `This is todo with id number ${todo_array.id}`
    console.log(todo_array.title);
}
}

fetch_data("https://jsonplaceholder.typicode.com/todos")
*/
let test = {
    name: "man",
    age: 22
};
let test2 = Object.assign(Object.assign({}, test), { age: 44 });
console.log(test2);
//# sourceMappingURL=index.js.map