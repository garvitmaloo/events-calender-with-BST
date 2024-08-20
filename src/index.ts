import { Events } from "./Events";
import EventsBST from "./EventsBST";

const event1 = new Events(
  new Date("2024-08-13T13:00:00"),
  "Attend IG Call",
  "Mandatory"
);
const event2 = new Events(
  new Date("2024-08-15T17:00:00"),
  "Attend Sprint grooming",
  "To be declared"
);
const event3 = new Events(
  new Date("2024-08-11T11:00:00"),
  "Fix bugs",
  "Required"
);
const event4 = new Events(
  new Date("2024-08-11T16:00:00"),
  "Created TRD",
  "Required"
);

const treeNodes = [
  { date: new Date("2024-08-13"), events: [event1] },
  {
    date: new Date("2024-08-15"),
    events: [event2],
  },
  {
    date: new Date("2024-08-11"),
    events: [event3, event4],
  },
];

const tree = new EventsBST(treeNodes);
console.log(tree.findEventsOnDate(new Date("2024-08-11")));

tree.deleteEvent({
  eventId: 1723372200000,
  eventTime: new Date("2024-08-11"),
});

console.log(tree.findEventsOnDate(new Date("2024-08-11")));
console.log(tree.chronologicalSortEvents());
