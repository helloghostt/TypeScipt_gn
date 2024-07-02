
type Todo = {id:number, title:string, done:boolean};

let todoItems:Todo[]; //any로 했다가 Todo[]로 바꿈

//API
function fetchTodoItems():Todo[] {  // any로 했다가 Todo[]로 바꿈
    const todos = [
        {id: 1, title: "안녕", done:false},
        {id: 2, title: "타입", done:false},
        {id: 3, title: "스크립트", done:false},
    ];
    return todos;
}

//CRUD methods
function fetchTodos() {
    const todos = fetchTodoItems();
    return todos;
}

function addTodo(todo:Todo) {
    todoItems.push(todo);
}

function updateTodo(index:number) {
    todoItems.splice(index, 1);
}

function deleteTodo(index:number) {
    todoItems.splice(index, 1);
}

function completeTodo(index:number, todo: Todo) {
    todo.done=true;
    todoItems.splice(index, 1, todo);
}   

function logFirstTodo() : Todo { // 할일 목록에서 첫번째 출력
    return todoItems[0];
}

function showCompleted():Todo[] {
    return todoItems.filter((item) => item.done);
}


function log(): void {
    console.log(todoItems);
}
function addTwoTodoItems(): void {
    const item1 = {
        id:4,
        title: '아이템 4',
        done: false,
    }
    addTodo(item1);

    addTodo({
        id:5,
        title: '아이템 5',
        done: true,
    });
}
todoItems = fetchTodoItems();
addTwoTodoItems();
log();
// [
//     { id: 1, title: '안녕', done: false },
//     { id: 2, title: '타입', done: false },
//     { id: 3, title: '스크립트', done: false },
//     { id: 4, title: '아이템 4', done: false },
//     { id: 5, title: '아이템 5', done: true }
//   ]

completeTodo(1, todoItems[1]);
log();
// [
//     { id: 1, title: '안녕', done: false },
//     { id: 2, title: '타입', done: true },
//     { id: 3, title: '스크립트', done: false },
//     { id: 4, title: '아이템 4', done: false },
//     { id: 5, title: '아이템 5', done: true }
//   ]

let completedTodoList = showCompleted();
console.log(completedTodoList);

// [
//     { id: 2, title: '타입', done: true },
//     { id: 5, title: '아이템 5', done: true }
//   ]

deleteTodo(3); //0,1,2,'3'번째 삭제
log();
// [
//     { id: 1, title: '안녕', done: false },
//     { id: 2, title: '타입', done: true },
//     { id: 3, title: '스크립트', done: false },
//     { id: 5, title: '아이템 5', done: true }
//   ]