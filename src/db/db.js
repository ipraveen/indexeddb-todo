import * as idb from 'idb';

export const TODO_STORE = 'todos';
export const DB_NAME = 'todo_db';
export const DB_VERSION = 2;

export const TXN_WRITE = 'readwrite';

class DB {
    static openDB() {
        return idb.openDB(DB_NAME, DB_VERSION, {
            upgrade(db, oldVersion, newVersion) {
                if(newVersion !== oldVersion){
                    db.deleteObjectStore(TODO_STORE);
                }
                
                const store = db.createObjectStore(TODO_STORE, { keyPath: 'id', autoIncrement: true });
                store.createIndex('idx_label', 'label', {unique:false})
                store.transaction.oncomplete = () => {
                    console.log(`Store ${TODO_STORE} has been created`);
                };
            },
        });
    }
}

export { DB };
