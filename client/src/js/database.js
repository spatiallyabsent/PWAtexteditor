import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// using 23 as a reference for the content
export const putDb = async (content) => {
  const jateDB = await openDB('jate', 1);
  // new transaction and priveleges
  const tx = jateDB.transaction('jate', 'readwrite');
  // access desired object store
  const store = tx.objectStore('jate');
  // add content to object store
  const request = store.put({ id: 1, value: content });
  // wait for transaction to complete
  const result = await request;
  // log result
  console.log('Content added to database', result);
  return result;
};


// TODO: Add logic for a method that gets all the content from the database
// using 23 as a reference for the content
export const getDb = async () => {
  const jateDB = await openDB('jate', 1);
  // new transaction and priveleges
  const tx = jateDB.transaction('jate', 'readonly');
  // access desired object store
  const store = tx.objectStore('jate');
  // get all content from object store
  const request = store.getAll();
  // wait for transaction to complete
  const result = await request;
  // log result
  console.log('Content retrieved from database', result);
  return result;
};

initdb();
