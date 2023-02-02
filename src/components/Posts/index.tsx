import React from "react";
import Modal from "./Modal";
import { PostProps } from "./interface";

import "./style.css";

class Posts extends React.Component {
  state: PostProps = {
    posts: [],
    isLoading: true,
    isOpenModal: false,
    removeModal: true,
    currentID: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status === 200) {
          this.setState({ isLoading: false });
          return response.json();
        }
      })
      .then((json) => this.setState({ posts: json }))
      .catch((error) => error);
  }

  removeElement = (id: number | string) => {
    const newPosts = this.state.posts.filter((postItem) => postItem.id !== id);
    this.setState({ posts: newPosts });
  };

  changeElement = (id: number | string, value: string) => {
    const newPosts = this.state.posts.map((item) =>
      item.id === id ? { ...item, title: value } : item
    );
    this.setState({ posts: newPosts });
  };

  openModal = (isRemoveModal: number, id: number | string) => {
    this.setState({ isOpenModal: true });
    this.setState({ currentID: id });
    if (isRemoveModal !== 1) {
      this.setState({ removeModal: false });
    } else {
      this.setState({ removeModal: true });
    }
  };

  closeModal = () => {
    this.setState({ isOpenModal: false }); 
  }

  componenWillUnmount() {
    this.setState({ isOpenModal: false });
    this.setState({ currentID: '' });
  }

  render() {
    const { isLoading, posts, isOpenModal, removeModal, currentID } = this.state;

    return (
      <>
        {!isLoading ? (
          <ul className="user__list">
            {posts.map((postItem, index) => (
              <li className="user__list-item" key={index}>
                <div>
                  <span className="user__list-id">{postItem.id}</span>
                  <span className="user__list-title">{postItem.title}</span>
                </div>
                <div>
                  <button onClick={() => this.openModal(1, postItem.id)} className="btn remove">
                    Remove
                  </button>
                  <button onClick={() => this.openModal(2, postItem.id)} className="btn change">
                    Change
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h1>Loading...</h1>
        )}
        {isOpenModal ? (
          <Modal
            removeModal={removeModal}
            currentID={currentID}
            changeElement={this.changeElement}
            removeElement={this.removeElement}
            closeModal={this.closeModal}
          />
        ) : null}
      </>
    );
  }
}

export default Posts;
