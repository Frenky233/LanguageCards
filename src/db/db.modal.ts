import Dexie, { Table } from 'dexie';

export interface Card {
  id?: number;
  word: string;
  translations: string[];
  pronunciation: string;
  categories: string[];
}

export class DB extends Dexie {
  cards!: Table<Card>; 
  constructor() {
    super('cards');
    this.version(1).stores({
        cards: '++id, word, *translations, pronunciation, *categories'  
    });
  }
}
export const db = new DB();