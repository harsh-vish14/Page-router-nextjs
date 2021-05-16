import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../helper/api-util";
const EventFilter = ({ filteredEvents }) => {
  return filteredEvents.length > 0 ? (
    <EventList items={filteredEvents} />
  ) : (
    <h1>No Event Available</h1>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const year = params.fliter[0];
  const month = params.fliter[1];
  if (
    isNaN(year) ||
    isNaN(month) ||
    year < 1 ||
    year > 2030 ||
    month < 1 ||
    month > 12
  ) {
    return {
      notFound: true,
    };
  }
  const filteredEvents = await getFilteredEvents({
    year: Number(year),
    month: Number(month),
  });
  return {
    props: {
      filteredEvents,
    },
  };
};

export default EventFilter;
