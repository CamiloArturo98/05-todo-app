import { createTodo } from "./create.todo.html";

let element;
/**
 * 
 * @param {String} idElement 
 * @param {Todo} todos 
 */
export const renderTodos = ( idElement, todos = [] ) => {  

    if( !element )
        element = document.querySelector( idElement );
    
    if( !element ) throw new Error( `Elemento${ idElement } not found` );

    element.innerHTML = '';

    todos.forEach(todo => {
        element.append( createTodo( todo ) );
    });
}