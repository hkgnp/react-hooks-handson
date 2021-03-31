import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Posts() {
  const [post, setPost] = useState({});
  const [currentPostId, setPostId] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/' + currentPostId
      );
      setPost(response.data);
    };

    fetch();
  }, [currentPostId]);

  // if the second argument of useEffect is an empty array.
  // then the effect will only trigger once after the component is rendered for the first time
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setTasks(response.data);
    };
    fetch();
  }, []);

  return (
    <React.Fragment>
      <h1>Posts</h1>
      <input
        type="text"
        value={currentPostId}
        onChange={(e) => {
          setPostId(e.target.value);
        }}
      />
      <div>
        <ul>
          <li>Post ID: {post.id}</li>
          <li>Title: {post.title}</li>
          <li>Body: {post.body}</li>
        </ul>
      </div>
      <h2>Todos</h2>
      <ul className="list-group">
        {tasks.map((t) => (
          <li className="list-group-item">{t.title}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}
