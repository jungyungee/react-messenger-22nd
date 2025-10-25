export interface Contact {
  id: number;
  name: string;
  phone: string;
  avatar?: string;
}

export interface Message {
  id: number;
  userId: number;
  text: string;
  type: "sent" | "received";
  createdAt: string;
  time: string;
}
