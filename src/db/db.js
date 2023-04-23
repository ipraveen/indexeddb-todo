import * as idb from 'idb';

export const TODO_STORE = 'todos';
export const DB_NAME = 'todo_db';
export const DB_VERSION = 1;

export const TXN_WRITE = 'readwrite';

class DB {
    static openDB() {
        return idb.openDB(DB_NAME, DB_VERSION, {
            upgrade(db) {
                const store = db.createObjectStore(TODO_STORE, { keyPath: 'id', autoIncrement: true });
                store.transaction.oncomplete = () => {
                    console.log(`Store ${TODO_STORE} has been created`);
                };
            },
        });
    }
}

export { DB };
