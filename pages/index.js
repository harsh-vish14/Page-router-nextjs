import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";
const HomePage = () => {
  const featuresEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuresEvents} />
    </div>
  );
};

export default HomePage;
