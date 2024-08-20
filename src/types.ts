type EventDetails = {
  eventId: number; // The timestamp of the event, could be some other unique id as well
  eventTime: Date;
};

type EventNode = {
  date: Date;
  events: Event[];
};

type Event = {
  eventId?: number;
  eventTime: Date;
  title: string;
  description: string;
};

export { EventDetails, Event, EventNode };
