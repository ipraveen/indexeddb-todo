import { DB, TODO_STORE, TXN_WRITE } from '../db';

class TodoDao {
    async add(todo) {
        const db = await DB.openDB();
        const store = db.transaction([TODO_STORE], TXN_WRITE).objectStore(TODO_STORE);
        const todoKey = await store.add(todo);
        return store.get(todoKey);
    }

    async getAll() {
        const db = await DB.openDB();
        const store = db.transaction([TODO_STORE]).objectStore(TODO_STORE);
        return store.getAll();
    }

    async get(key) {
        const db = await DB.openDB();
        const store = db.transaction([TODO_STORE]).objectStore(TODO_STORE);
        return store.get(key);
    }
}

const todoDao = new TodoDao();

export default todoDao;
