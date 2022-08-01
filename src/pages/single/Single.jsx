import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import './Single.css';
import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

export default function Single() {
  const { postId } = useParams();
  console.log('id', postId);

  return (
    <div className="single">
      <SinglePost postId={postId} />
      <Sidebar />
    </div>
  );
}
