export interface PostProps {
  posts: Array<UsersProps>;
  isLoading: boolean;
  isOpenModal: boolean;
  removeModal: boolean;
  currentID: number | string;
}

export interface UsersProps {
  id: number | string;
  title: string;
}

export interface ModalProps {
  removeModal: boolean;
  currentID: number | string;
  changeElement: any;
  removeElement: any;
  // removeElement: (id: number | string) => number | string;
  closeModal: any;
}
