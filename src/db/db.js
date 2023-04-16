import { openDB, deleteDB, wrap, unwrap } from 'idb';

const DB_NAME = 'books_database';
const VERSION = 1;

let db;

class DB {
    static async init() {
        if(db) return db;


        if (!('indexedDB' in window)) {
            throw Error('indexedDB is not supported, user may have disabled it or it is just an ancient Browser.');
        }

        db = await openDB(DB_NAME, VERSION, {
            upgrade(db) {
                const store = db.createObjectStore('books', { keyPath: 'id', autoIncrement: true });
                store.createIndex('name_idx', 'name', { unique: false });
                store.createIndex('isbn_idx', 'name', { unique: true });
            },
        });

        console.log(`Database ${DB_NAME} is initialized successfully.`);
        return db;
    }
}

export default DB;
