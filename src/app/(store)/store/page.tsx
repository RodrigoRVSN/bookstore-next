import { bookstore } from "@/../public/bookstore.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BookWithGenre } from "@/models/bookstore";

export default function Store() {
  const books = bookstore.genres.flatMap((genre) => {
    return genre.books.map((book) => ({ ...book, genre: genre.name }));
  }) satisfies BookWithGenre[];

  return (
    <section className="m-4 md:m-16">
      <Table className="border-[1px]">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead>Name</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>ISBN</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.isbn}>
              <TableCell className="font-bold">{book.name}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.description}</TableCell>
              <TableCell>{book.isbn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
