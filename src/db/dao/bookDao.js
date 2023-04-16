import DB from '../db';

const STORE_NAME = 'books';

class BookDao {
    // constructor() {
    //     // this.db = await DB.init();
    // }

    async getDB() {
        return await DB.init();
    }

    async add(book) {
        const db = await this.getDB();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        return tx.store.add(book);
    }

    async getAll() {
        const db = await this.getDB();
        const tx = db.transaction(STORE_NAME, 'readonly');
        return tx.store.getAll();
    }

    async get(key) {
        const db = await this.getDB();
        const tx = db.transaction(STORE_NAME, 'readonly');
        return tx.store.get(key);
    }
}

const bookDao = new BookDao();

export default bookDao;
