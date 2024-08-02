import './style.css'
import {myApp} from './src/todos/app'
import initStore from "./src/store/todo.store";

initStore.startStore();
myApp( '#app' );

