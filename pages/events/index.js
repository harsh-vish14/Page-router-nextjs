import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

const Events = () => {
  const allEvent = getAllEvents();

  return (
    <div>
      <EventList items={allEvent} />
    </div>
  );
};

export default Events;
