export type BookstoreResponse = {
  name: string;
  description: string;
  location: string;
  genres: Genre[];
  reading_events: ReadingEvent[];
};

type Genre = {
  name: string;
  description: string;
  books: Book[];
};

type Book = {
  name: string;
  author: string;
  description: string;
  isbn: string;
};

export type ReadingEvent = {
  name: string;
  description: string;
  event_time: string;
  author: string;
  book: string;
};

export type BookWithGenre = Book & {
  genre: string;
};
