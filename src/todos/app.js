import html from "./app.html?raw";
import todoStore from '../store/todo.store';
import { renderTodos } from "./use-cases";
/**
 * 
 * @param {String} idElement 
 */

let elemtIdHtml = {  
    todoList : '.todo-list',
    newTodo : '#new-todo-input',
};


export const myApp = ( idElement ) => { 

    const showTodos = () => {  
        
        const todos = todoStore.getTodo( todoStore.currentFilter() );
        renderTodos( elemtIdHtml.todoList, todos );
    };


    (()=>{  

        const elementCreate = document.createElement( 'div' );
        elementCreate.innerHTML = html;
        document.querySelector( idElement ).append(elementCreate);
        showTodos();
    })();


    //HTML's references 

    const newDescriptionTodo = document.querySelector( elemtIdHtml.newTodo );
    const todoList = document.querySelector( elemtIdHtml.todoList );

    // Listeners 

    newDescriptionTodo.addEventListener('keyup', ( event ) => {  

        if( event.keyCode !== 13 ) return;
        if( event.target.value.trim().length === 0 ) return ;
        
        todoStore.addTodo( event.target.value );
        showTodos();
        event.target.value = '';

    } );

        todoList.addEventListener( 'click', ( event )=> {  

        const element = event.target.closest( '[data-id]' );
        todoStore.toggleTodo( element.getAttribute( 'data-id' ) );
        showTodos();
        
    } );

};