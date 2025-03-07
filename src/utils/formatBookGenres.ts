import { BookWithGenre, Genre } from "@/models/bookstore";

export const formatBookGenres = (genres: Genre[]): BookWithGenre[] => {
  return genres.flatMap((genre) => {
    return genre.books.map((book) => ({ ...book, genre: genre.name }));
  });
};
