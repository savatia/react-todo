export function addToDo(text){
    return {type: "ADD_TODO", payload: text};
}

export function removeToDo(todo){
    return {type: "REMOVE_TODO", payload: todo};
}

export function editToDo(text, id){
    return {type: "EDIT_TODO", payload: {id, text}};
}