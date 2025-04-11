import axios from 'axios';

const getAllPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users/');
  };
  
  const getSingularPost= (paramId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${paramId}`);
  };

    const createPost = (post) => {
    return axios.post('https://jsonplaceholder.typicode.com/users', post);
    };

    const updatePost = (postId, post) => {
    return axios.put(`https://jsonplaceholder.typicode.com/users/${postId}`, post);
    }
  
  export default { getAllPosts, getSingularPost, createPost, updatePost, };
  