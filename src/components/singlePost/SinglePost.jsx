import React from './SinglePost.css';
import { getPost, deletePost, editPost } from '../../utilities/posts-api';
import { useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { useNavigate } from 'react-router-dom';

export default function SinglePost({ postId }) {
  const navigate = useNavigate();
  const [currentPost, setCurrentPost] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const removePost = async (postId) => {
    const response = await deletePost(postId);
    if (response) {
      navigate('/dashboard', { replace: true });
    }
  };

  const fetchPost = async () => {
    const response = await getPost(postId);
    setCurrentPost(response.data);
  };

  const updatePost = async (postId) => {
    const response = await editPost({ postId, title, desc });
    setIsEditing(false);
    fetchPost();
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="SinglePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        {!isEditing && (
          <button
            onClick={() => {
              setIsEditing(true);
              setTitle(currentPost?.title);
              setDesc(currentPost?.desc);
            }}
          >
            Edit
          </button>
        )}
        <button onClick={() => removePost(currentPost?._id)}>Delete</button>
        {/* <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div> */}
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">{currentPost?.title}</h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostCreator">
            Creator: <b>{currentPost?.user?.username}</b>
          </span>
          {<span>{format(currentPost?.createdAt)}</span>}
        </div>
      </div>
      {isEditing ? (
        <textarea
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      ) : (
        <p className="singlePostDesc">{currentPost?.desc}</p>
      )}

      {isEditing && (
        <div>
          <button onClick={() => updatePost(currentPost?._id, title, desc)}>
            Save
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
