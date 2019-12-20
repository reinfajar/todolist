let todo = ['mandi', 'beresin kasur', 'sarapan'];

function show() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    for (let i = 0; i < todo.length; i++) {
        let btnEdit = "<a href='#' onclick='edit(" + i + ")'>Edit</a>";
        let btnHapus = "<a href='#' onclick='deleteTodo(" + i + ")'>Hapus</a>";
        // let mvUp = "<a href='#' onclick='swapUp'(" + i + ")'>Move Up</a>"
        // let mvDown = "<a href='#' onclick='swapDown'(" + i + ")'>Move Down</a>"
        list.innerHTML += "<li>" + todo[i] + " [" + btnEdit + " | " + btnHapus + /*"  | " + mvUp + " | " + mvDown + */" ]</li>";
    }
}

function add() {
    let input = document.querySelector("input[name=todo]");
    todo.push(input.value);
    show();
}

function edit(id) {
    let newTodo = document.querySelector("input[name=todo]");
    todo[id] = newTodo.value;
    // let newTodo = prompt('Nama Baru', todo[id])
    // todo[id] = newTodo
    show();
}

function deleteTodo(id) {
    todo.splice(id, 1);
    show();
}

// function swapUp(id) {
//     // if (id == 0) {
//     //     return
//     // } else if (id !== 0) {
//         let tampung = todo[id - 1];
//         todo[id - 1] = todo[id];
//         todo[id] = tampung;
//     // }
//     show()
// }

// function swapDown(id) {
//     // if (id == todo.length - 1) {
//     //     return
//     // } else if (id !== todo.length - 1) {
//         let tampung = todo[id];
//         todo[id] = todo [id + 1]
//         todo[id + 1] = tampung
//     // }
//     show()
// }

show()