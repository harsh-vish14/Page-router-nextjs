export async function getAllEvents() {
  const response = await fetch(
    "https://events-e7578-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  var event = [];
  for (const key in data) {
    event.push({
      id: key,
      ...data[key],
    });
  }
  return event;
}

export async function getFeaturedEvents() {
  const AllEvents = await getAllEvents();

  return AllEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const AllEvents = await getAllEvents();
  return AllEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const AllEvents = await getAllEvents();
  const { year, month } = dateFilter;

  let filteredEvents = AllEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
