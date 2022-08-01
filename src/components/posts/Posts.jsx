import Post from '../post/Post';
import { useEffect } from 'react';
import './Posts.css';

import { getAllPosts } from '../../utilities/posts-api';
import { useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getAllPosts();
      if (response) {
        setPosts(response.data);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="posts">
      {posts?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
