import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';

export interface Word {
  id?: string;
  word: string;
  meaning: string;
  example?: string;
  createdAt?: Timestamp;
}

const COLLECTION_NAME = 'words';

// Get all words
export const getWords = async (): Promise<Word[]> => {
  try {
    const wordsRef = collection(db, COLLECTION_NAME);
    const q = query(wordsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Word));
  } catch (error) {
    console.error('Error fetching words:', error);
    throw error;
  }
};

// Add a new word
export const addWord = async (word: Omit<Word, 'id' | 'createdAt'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...word,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding word:', error);
    throw error;
  }
};

// Update a word
export const updateWord = async (id: string, word: Partial<Word>): Promise<void> => {
  try {
    const wordRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(wordRef, word);
  } catch (error) {
    console.error('Error updating word:', error);
    throw error;
  }
};

// Delete a word
export const deleteWord = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    console.error('Error deleting word:', error);
    throw error;
  }
};
