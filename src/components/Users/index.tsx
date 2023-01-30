import React from "react";
import UsersItem from "./UserItem";
import { PersonProps } from "./interface";

import "./style.css";

class Users extends React.Component {
  state: PersonProps = {
    posts: [],
    isLoading: true,
    isRemovePost: false,
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

  render() {
    const { posts, isLoading } = this.state;
    
    return (
      <>
        {!isLoading ? (
          <ul className="user__list">
            {posts.map((postItem, key) => (
              <UsersItem key={key} id={postItem.id} title={postItem.title} />
            ))}
          </ul>
        ) : (
          <h1>Loading...</h1>
        )}
      </>
    );
  }
}

export default Users;
