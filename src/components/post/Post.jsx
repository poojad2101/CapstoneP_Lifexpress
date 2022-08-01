import './Post.css';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  return (
    <div className="post">
      <Link to={`/single/${post?._id}`}>
        <img
          className="postImg"
          src="https://media.istockphoto.com/photos/vegetable-salad-picture-id603906484?b=1&k=20&m=603906484&s=170667a&w=0&h=occFGDXX0fGM3jkfhNBSn49c1Jj-6A2VrGLbCsbvl48="
          alt=""
        />
      </Link>

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Food</span>
          <span className="postCat">Fitness</span>
        </div>
        <span className="postTitle">{post?.title}</span>
        <hr />
        <span className="postDate">{format(post?.createdAt)}</span>
      </div>
    </div>
  );
}
