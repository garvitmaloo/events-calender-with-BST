import { Events } from "./Events";
import { EventDetails, Event, EventNode } from "./types";

class TreeNode {
  leftNode: TreeNode | null = null;
  rightNode: TreeNode | null = null;
  value: EventNode;

  constructor(value: EventNode) {
    this.value = value;
  }
}

class EventsBST {
  private rootNode: TreeNode | null = null;
  private sortedEvents: EventNode[] = [];

  constructor(treeNodes: EventNode[]) {
    this.rootNode = null;

    for (let i = 0; i < treeNodes.length; i++) {
      this.rootNode = this.buildTreeHelper(this.rootNode, treeNodes[i]);
    }
  }

  private buildTreeHelper(
    rootNode: TreeNode | null,
    eventNode: EventNode
  ): TreeNode {
    if (rootNode === null) {
      rootNode = new TreeNode(eventNode);
      return rootNode;
    }

    if (eventNode.date < rootNode.value.date) {
      rootNode.leftNode = this.buildTreeHelper(rootNode.leftNode, eventNode);
    } else {
      rootNode.rightNode = this.buildTreeHelper(rootNode.rightNode, eventNode);
    }

    return rootNode;
  }

  addEvent(eventParams: Events) {
    const eventDate = new Date(eventParams.eventTime);

    if (this.rootNode === null) {
      this.rootNode = new TreeNode({
        date: eventDate,
        events: [eventParams],
      });
      return;
    }

    // Case 1: Events already exist on the given date => Add event to the existing event array
    const requiredNode = this.findEventsOnDate(eventDate);

    if (requiredNode) {
      requiredNode.events.push(eventParams);
      return;
    }

    // Case 2: No events on the given date => Create a new event node and insert it
    const newNode = {
      date: eventDate,
      events: [eventParams],
    };
    this.insertNode(this.rootNode, newNode);
  }

  findEventsOnDate(
    date: Date,
    rootNode: TreeNode | null = this.rootNode
  ): EventNode | null {
    if (rootNode === null) return null;

    if (date.getTime() === rootNode?.value.date.getTime())
      return rootNode.value;

    if (date > rootNode.value.date) {
      return this.findEventsOnDate(date, rootNode.rightNode);
    } else {
      return this.findEventsOnDate(date, rootNode.leftNode);
    }
  }

  deleteEvent(
    eventDetails: EventDetails,
    rootNode = this.rootNode
  ): TreeNode | null {
    const eventDate = new Date(eventDetails.eventTime);

    // If no events exist on the given date => return null
    const eventNode = this.findEventsOnDate(eventDate);
    if (!eventNode) return null;

    if (rootNode === null) return null;

    if (eventDate.getTime() < rootNode.value.date.getTime()) {
      rootNode.leftNode = this.deleteEvent(eventDetails, rootNode.leftNode);
    } else if (eventDate.getTime() > rootNode.value.date.getTime()) {
      rootNode.rightNode = this.deleteEvent(eventDetails, rootNode.rightNode);
    } else {
      // If the node has more than one event on the given date, delete the event with the given eventId
      if (rootNode.value.events.length > 1) {
        const filteredEvents = rootNode.value.events.filter(
          (e) => e.eventId !== eventDetails.eventId
        );
        rootNode.value.events = filteredEvents;
        return rootNode;
      }

      // CASE 1 - when the node to be deleted is a leaf node
      if (rootNode.leftNode === null && rootNode.rightNode === null) {
        return null;
      }

      // CASE 2 - when the node to be deleted has only one child
      if (rootNode.leftNode === null) {
        return rootNode.rightNode;
      } else if (rootNode.rightNode === null) {
        return rootNode.leftNode;
      }

      // CASE 3 - when the node to be deleted has two children
      const inorderSuccessor = this.findInorderSuccessor(rootNode.rightNode);
      rootNode.value = inorderSuccessor.value;
      rootNode.rightNode = this.deleteEvent(
        {
          eventId: inorderSuccessor.value.events[0].eventId!,
          eventTime: inorderSuccessor.value.events[0].eventTime,
        },
        rootNode.rightNode
      );
    }

    return rootNode;
  }

  chronologicalSortEvents(
    rootNode: TreeNode | null = this.rootNode
  ): EventNode[] {
    if (rootNode === null) return [];

    this.chronologicalSortEvents(rootNode.leftNode);
    this.sortedEvents.push(rootNode.value);
    this.chronologicalSortEvents(rootNode.rightNode);

    return this.sortedEvents;
  }

  private insertNode(rootNode: TreeNode, eventNode: EventNode): void {
    if (eventNode.date.getTime() < rootNode.value.date.getTime()) {
      if (rootNode.leftNode === null) {
        rootNode.leftNode = new TreeNode(eventNode);
      } else {
        this.insertNode(rootNode.leftNode, eventNode);
      }
    } else {
      if (rootNode.rightNode === null) {
        rootNode.rightNode = new TreeNode(eventNode);
      } else {
        this.insertNode(rootNode.rightNode, eventNode);
      }
    }
  }

  private findInorderSuccessor(node: TreeNode): TreeNode {
    while (node.leftNode !== null) {
      node = node.leftNode;
    }

    return node;
  }
}

export default EventsBST;
