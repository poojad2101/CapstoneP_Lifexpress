import Axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/posts/';

export const createPost = async ({ userId, title, desc }) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const response = await Axios.post(
      `${BASE_URL}`,
      { userId, title, desc },
      { headers }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(`Error inserting a post. ErrorMessage: ${error}`);
  }
};

export const getAllPosts = async () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const response = await Axios({
      method: 'GET',
      url: `${BASE_URL}`,
      headers,
    });
    return response;
  } catch (error) {
    console.log(`Error fetching posts. ErrorMessage: ${error}`);
  }
};

export const getPost = async (postId) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const response = await Axios({
      method: 'GET',
      url: `${BASE_URL}/${postId}`,
      headers,
    });
    return response;
  } catch (error) {
    console.log(`Error fetching a post. ErrorMessage: ${error}`);
  }
};

export const deletePost = async (postId) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const response = await Axios({
      method: 'DELETE',
      url: `${BASE_URL}/${postId}`,
      headers,
    });
    return response;
  } catch (error) {
    console.log(`Error fetching a post. ErrorMessage: ${error}`);
  }
};

export const editPost = async (updatedPost) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const response = await Axios.patch(`${BASE_URL}`, updatedPost, { headers });
    console.log(response);
    return response;
  } catch (error) {
    console.log(`Error updating a user post. ErrorMessage: ${error}`);
  }
};
