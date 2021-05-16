import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helper/api-util";
import Head from "next/head";
const HomePage = (props) => {
  const { featuresEvents } = props;
  return (
    <div>
      <Head>
        <title>Next Event</title>
      </Head>
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
