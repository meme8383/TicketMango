export default interface IEvent {
  _id: string;
  title: string;
  date: Date;
  description: string;
  location: string;
  maxParticipants: number;
  createdAt: Date;
}
