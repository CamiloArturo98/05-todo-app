import { v4 as uuid } from 'uuid';

export class Todos {  

    /**
     * 
     * @param {String} description 
     */
    constructor( description ){  
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.creatAt = new Date();
    };
};