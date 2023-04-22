import { DB, TODO_STORE, TXN_WRITE } from '../db';

class TodoDao {
    async add(todo) {
        const db = await DB.openDB();

        return new Promise((resolve, reject) => {
            const store = db.transaction([TODO_STORE], TXN_WRITE).objectStore(TODO_STORE);
            const request = store.add(todo);

            request.onsuccess = () => {
                const todoKey = request.result;

                this.get(todoKey).then((todoDb) => {
                    resolve(todoDb);
                });
            };
        });
    }

    async getAll() {
        const db = await DB.openDB();

        return new Promise((resolve, reject) => {
            const store = db.transaction([TODO_STORE]).objectStore(TODO_STORE);
            const request = store.getAll();

            request.onsuccess = () => {
                const todos = request.result;
                resolve(todos);
            };
        });
    }

    async get(key) {
        const db = await DB.openDB();
        return new Promise((resolve, reject) => {
            const store = db.transaction([TODO_STORE]).objectStore(TODO_STORE);
            const request = store.get(key);

            request.onsuccess = () => {
                const todoDb = request.result;

                resolve(todoDb);
            };
        });
    }
}

const todoDao = new TodoDao();

export default todoDao;
