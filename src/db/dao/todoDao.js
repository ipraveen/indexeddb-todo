import { DB, TODO_STORE, TXN_WRITE } from '../db';

class TodoDao {
    async add(todo) {
        const db = await DB.openDB();
        // const store = db.transaction([TODO_STORE], TXN_WRITE).objectStore(TODO_STORE);
        // const todoKey = await store.add(TODO_STORE, todo);
        // return store.get(todoKey);

        const todoKey = await db.add(TODO_STORE, todo);
        return db.get(TODO_STORE, todoKey);
    }

    async getLabels() {
        const db = await DB.openDB();
        let cursor = await db
            .transaction(TODO_STORE)
            .objectStore(TODO_STORE)
            .index('idx_label')
            .openKeyCursor(null, 'nextunique');

        const labels = [];
        while (cursor) {
            labels.push(cursor.key);
            cursor = await cursor.continue();
        }

        return labels;
    }

    async getAll(filter) {
        const db = await DB.openDB();
        const store = db.transaction([TODO_STORE]).objectStore(TODO_STORE);
        if (filter?.label) {
            return store.index('idx_label').getAll(filter?.label);
        }
        return store.getAll();
    }

    async get(key) {
        const db = await DB.openDB();
        const store = db.transaction([TODO_STORE]).objectStore(TODO_STORE);
        return store.get(key);
    }

    async delete(id) {
        const db = await DB.openDB();
        // const store = db.transaction([TODO_STORE], TXN_WRITE).objectStore(TODO_STORE);
        // return store.delete(id);

        return db.delete(TODO_STORE, id);
    }

    async update(todo) {
        const db = await DB.openDB();
        const store = db.transaction([TODO_STORE], TXN_WRITE).objectStore(TODO_STORE);
        return store.put(todo);
    }
}

const todoDao = new TodoDao();

export default todoDao;
