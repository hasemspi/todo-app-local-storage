const getElement = (id) => {
    const Elements = document.getElementById(id);
    return Elements
}

const GetData = () => {
    const getValues = getElement('todo-text');
    const setData = getValues.value;
    getValues.value = '';
    const getStorage = JSON.parse(localStorage.getItem("toDo"));
    //console.log(getStorage);

    if (!getStorage) {
        const todoList = [{
            title: setData,
            completed: false,
        }, ];
        localStorage.setItem("toDo", JSON.stringify(todoList));

    } else {
        const todoList = [
            ...getStorage,
            {
                title: setData,
                completed: false,
            },
        ];
        localStorage.setItem("toDo", JSON.stringify(todoList));

    }
    reander();
}


const reander = () => {
    const getDatas = JSON.parse(localStorage.getItem("toDo"));
    // console.log(getDatas);
    const ul = getElement('todo-list');
    ul.innerHTML = '';
    getDatas.forEach((item) => {
        const li = document.createElement("li");
        //li.innerHTML = '';
        li.classList.add('bys');
        li.innerText = item.title
        ul.appendChild(li);
    });
}
reander();


const deleteHanddel = () => {
    localStorage.removeItem("toDo");
    reander();
}