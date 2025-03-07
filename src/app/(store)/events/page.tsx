import { bookstore } from "@/../public/bookstore.json";
import dayjs from "dayjs";

export default function Events() {
  const sortedEvents = bookstore.reading_events.sort(
    (a, b) => Number(new Date(b.event_time)) - Number(new Date(a.event_time)),
  );

  return (
    <section className="m-4 md:m-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedEvents.map((event) => (
        <div
          key={event.name}
          className="bg-gray-100 hover:bg-gray-200 p-4 flex flex-col gap-2 rounded-2xl duration-150"
        >
          <time className="text-xs text-gray-500">
            {dayjs(event.event_time).format("MMM D, YYYY - hh:mm A")}
          </time>
          <h3 className="font-bold text-lg">{event.name}</h3>
          <p className="text-sm text-gray-500">{event.description}</p>
          <p>
            <b>{event.book}</b>
            <span className="text-gray-500"> by {event.author}</span>
          </p>
        </div>
      ))}
    </section>
  );
}
