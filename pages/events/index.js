import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

const Events = () => {
  const allEvent = getAllEvents();
  const router = useRouter();
  const findEvents = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <div>
      <EventSearch onSearch={findEvents} />
      <EventList items={allEvent} />
    </div>
  );
};

export default Events;
