import Dexie, { Table } from 'dexie';

export interface Card {
  id?: number;
  word: string;
  translations: string[];
  pronunciation: string;
  categories: string[];
  correct: number;
  wrong: number
}

export class DB extends Dexie {
  cards!: Table<Card>; 
  constructor() {
    super('cards');
    this.version(1).stores({
        cards: '++id, word, *translations, pronunciation, *categories, correct, wrong'  
    });
  }
}
export const db = new DB();