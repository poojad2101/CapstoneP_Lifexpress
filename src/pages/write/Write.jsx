import { useState } from 'react';
import './Write.css';

import { createPost } from '../../utilities/posts-api';

export default function Write({ user }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await createPost({ userId: user?._id, title, desc });
    setTitle('')
    setDesc('')
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://i0.wp.com/knowledgeenthusiast.com/wp-content/uploads/2020/04/pexels-photo-2379653.jpeg?fit=1880%2C1253&ssl=1"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: 'none' }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
