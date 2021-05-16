import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helper/api-util";
const HomePage = (props) => {
  const { featuresEvents } = props;
  return (
    <div>
      <EventList items={featuresEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuresEvents = await getFeaturedEvents();
  return {
    props: {
      featuresEvents,
    },
    revalidate: 10,
  };
}

export default HomePage;
