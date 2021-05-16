import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../helper/api-util";

const Events = ({ allEvent }) => {
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

export const getStaticProps = async (context) => {
  const allEvent = await getAllEvents();

  return {
    props: {
      allEvent,
    },
    revalidate: 60,
  };
};

export default Events;
