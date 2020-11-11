export const getTodoList = state => {
    return state.todoList.filter(todo => !todo.isDelete);  // 删除的过滤掉
}

export const getTodoId = (state, getters) => (id) => { // state 是必选参数，也可以使用其他getters属性
    return getters.getTodoList.find (todo => {
        if (todo.id === id) {
            return todo;
        }
    });
}