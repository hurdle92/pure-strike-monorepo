export interface GuestbookInterface {
  id: number;
  content: string;
  created_at: string;
}

export interface GuestbookListResultInterface {
  data: GuestbookInterface[];
  count: number;
}
