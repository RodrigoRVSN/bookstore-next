import { describe, expect, it } from "vitest";
import { formatBookGenres } from "./formatBookGenres";
import { bookstore } from "@/../public/bookstore.json";

describe("<PageLayout />", () => {
  it("should not render back to home button when there is no redirect link prop", () => {
    const books = formatBookGenres(bookstore.genres);
    expect(books).toHaveLength(10);
    expect(books[0]).toHaveProperty("genre");
    expect(books[0]).toStrictEqual({
      author: "Andy Weir",
      description:
        "A story of an astronaut stranded on Mars, trying to survive.",
      genre: "Science Fiction",
      isbn: "978-0553418026",
      name: "The Martian",
    });
  });
});
