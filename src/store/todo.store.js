import {Todos} from '../todos/models/todos'

const Filters = {  
    all : 'all',
    completed : 'completed',
    pending : 'pending',
}

const state = {  
    
    todos : [
        new Todos( 'Go to the gym' ),
        new Todos( 'Met whit your family' ),
        new Todos( 'Study or work hard' ),
        new Todos( 'Eat' ),
        new Todos( 'Repeat' ),
    ],

    filter : Filters.all,
};

const getTodo = ( filter = Filters.all ) => {  

    switch ( filter ){  
       
        case Filters.all : 
        return [...state.todos];

        case Filters.completed : 
        return  state.todos.filter( todo => todo.done ); // return true

        case Filters.pending : 
        return state.todos.filter( todo => !todo.done );

        default : 

        throw new Error( `${ filter } is not valid` );
        
    };
}

const startStore = () => { 
    console.log( 'Now store will be start 🥑' );
    console.log( state );
};


const loadStore = () => { 
    throw new Error('This method is not implemented yet');
}

/**
 * 
 * @param {String} todo 
 */

const addTodo = ( description ) => { 
    if( !description ) throw new Error( 'Descriptions is required' );
    state.todos.push( new Todos( description ) );
}

// Cambia el estado de el todo ej : si es verdadero a falso y si es falso a verdadero.

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => { 

    state.todos = state.todos.map( todo => {  
        if( todo.id === todoId ) { 
            todo.done = !todo.done;
        };
        return todo;
    } );

}
/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = ( todoId ) => { 
    
   state.todos =  state.todos.filter( todo => todo.id !== todoId );
}

const deleteCompleted = () => {  
    Filters.completed =  state.todos.filter( todo => todo.done ); // TODO : De no ser correcto cambiar 'FIlters.completed ' por state.todos.
}

/**
 * 
 * @param {Filters} newFilter 
 */

const selectFilter = ( newFilter = Filters.all ) => {  
    state.filter = newFilter;
};

const currentFilter = () => { 
    return state.filter;
}

export default {  
    addTodo,
    currentFilter,
    deleteCompleted,
    deleteTodo,
    getTodo,
    loadStore,
    selectFilter,
    startStore,
    toggleTodo,
};