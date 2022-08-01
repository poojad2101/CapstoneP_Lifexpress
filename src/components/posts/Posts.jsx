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
      <Post img="https://images.pexels.com/photos/12604653/pexels-photo-12604653.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
      {posts?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
