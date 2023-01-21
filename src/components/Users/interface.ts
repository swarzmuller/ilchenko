export interface UsersProps {
  id: number;
  title: string;
}

export interface ModalProps {
  close: ()=> void
  title: string
}

export interface PersonProps {
  posts: Array<UsersProps>;
  isLoading: boolean;
}
