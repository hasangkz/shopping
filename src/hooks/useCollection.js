import { useState, useEffect } from 'react';

import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

export const useCollection = (col) => {
  const [documents, setDocuments] = useState(null);
  useEffect(() => {
    let ref = collection(db, col);
    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let result = [];

        snapshot.docs.forEach((doc) => {
          result.push({ id: doc.id, ...doc.data() });
        });
        setDocuments(result);
      },
      (err) => console.log(err)
    );
    return () => unsub();
  }, []);
  return { documents };
};
