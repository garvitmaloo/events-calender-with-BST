type EventDetails = {
  eventId: number;
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
