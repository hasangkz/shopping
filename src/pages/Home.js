import { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

import { useCollection } from '../hooks/useCollection';

export default function Home() {
  const { documents: books } = useCollection('books');

  // const [books, setBooks] = useState(null);

  // const getData = async () => {
  //   const ref = collection(db, 'books');
  //   let result = [];
  //   await getDocs(ref).then((snap) =>
  //     snap.forEach((doc) => {
  //       result.push({ id: doc.id, ...doc.data() });
  //     })
  //   );
  //   setBooks(result);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className='App'>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
