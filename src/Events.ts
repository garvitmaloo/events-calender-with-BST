class Events {
  eventId: number;
  eventTime: Date;
  title: string;
  description: string;

  constructor(eventTime: Date, title: string, description: string) {
    this.eventTime = eventTime;
    this.title = title;
    this.description = description;

    this.eventId = new Date(eventTime).getTime();
  }
}

export { Events };
