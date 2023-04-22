export const TODO_STORE = 'todos';
export const DB_NAME = 'todo_db';
export const DB_VERSION = 1;


// 

export const TXN_WRITE = 'readwrite';

class DB {
    static openDB() {
        return new Promise((resolve, reject) => {
            const request = window.indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = () => {
                reject(new Error('No permission to open DB!'));
            };

            request.onsuccess = (event) => {
                const db = event.target.result;
                resolve(db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                const store = db.createObjectStore(TODO_STORE, { keyPath: 'id', autoIncrement: true });

                store.transaction.oncomplete = () => {
                    console.log(`Store ${TODO_STORE} has been created`);
                };
            };
        });
    }
}

export { DB };
