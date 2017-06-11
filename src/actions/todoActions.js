export function addToDo(text){
    return {type: "ADD_TODO", payload: text};
}

export function removeToDo(index){
    return {type: "REMOVE_TODO", payload: index};
}