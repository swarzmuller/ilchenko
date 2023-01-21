export interface UsersProps {
  id: number;
  title: string;
}

export interface ModalProps {
  close: () => void
  title: string,
  text: boolean,
}

export interface ButtonProps {
  clickButton: any
  children: any
  text: string
}

export interface PersonProps {
  posts: Array<UsersProps>;
  isLoading: boolean;
}
