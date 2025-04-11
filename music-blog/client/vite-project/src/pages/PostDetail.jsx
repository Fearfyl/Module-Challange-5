import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById, deletePost } from "../services/api";
import { Link } from 'react-router-dom';

// PostDetail component
function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch post details by ID
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPostById(postId);
        setPost(fetchedPost);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  // Handle post deletion
  const handleDelete = async () => {
    try {
      await deletePost(postId);
      navigate('/'); // Redirect to the main page after deletion
    } catch (err) {
      setError(err);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching post: {error.message}</p>;
  }

  if (!post) {
    return <p>Post not found.</p>;
  }

  // Render post details
  return (
    <div>
      <h1>{post.title}</h1>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
      <p>{post.content}</p>

      {/* Edit and Delete buttons */}
      <div>
        <Link to={`/edit/${postId}`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
        <Link to="/">Back to Posts</Link>
      </div>
    </div>
  );
}

export default PostDetail;


   