import { Todos } from "../models/todos";
/**
 * 
 * @param {Todos} todo 
 */


export const createTodo = ( todo ) => {  

    if( !todo ) throw new Error( 'This camp is required' );

        const htmlTodo = `<div class="view">
                                <input class="toggle" type="checkbox" ${ todo.done ? 'checeked' : '' }> 
                                    
                                    <label>${ todo.description }</label>
                                    <button class="destroy"></button>
                        </div>
                                <input class="edit" value="Create a TodoMVC template">`;
    
    const elementLi = document.createElement( 'li' );
    elementLi.innerHTML = htmlTodo;
    elementLi.setAttribute( 'data-id', todo.id ); 
    if( todo.done )
    elementLi.classList.add( 'completed' );
    return elementLi;

}