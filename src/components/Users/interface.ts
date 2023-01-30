export interface UsersProps {
  id: number;
  title: string;
}

export interface ModalProps {
  close: () => void;
  removeItem: () => void;
  changeTitle: any;
  title: string;
  currentModal: boolean;
}

export interface ButtonProps {
  clickButton: () => void;
  children: React.ReactNode;
  text: string;
}

export interface PersonProps {
  posts: Array<UsersProps>;
  isLoading: boolean;
  isRemovePost: boolean;
}
