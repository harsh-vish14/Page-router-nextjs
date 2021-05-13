import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";
const EventFilter = () => {
  const router = useRouter();
  console.log(router.query.fliter);
  const year = router.query.fliter[0];
  const month = router.query.fliter[1];
  if (
    isNaN(year) ||
    isNaN(month) ||
    year < 1 ||
    year > 2030 ||
    month < 1 ||
    month > 12
  ) {
    router.push("/not-found");
  }
  const routerData = {
    year: Number(year),
    month: Number(month),
  };
  const filteredEvents = getFilteredEvents(routerData);
  return filteredEvents.length > 0 ? (
    <EventList items={filteredEvents} />
  ) : (
    <h1>No Event Available</h1>
  );
};
export default EventFilter;
