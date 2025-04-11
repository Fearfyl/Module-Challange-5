import React from 'react';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard'; // Adjust the path as needed

// Home component
    const Home = () => {
        const [posts, setPosts] = useState([]);

        // Fetch posts from the backend
        useEffect(() => {
            const fetchPosts = async () => {
                try {
                    const response = await fetch('http://localhost:5000/posts'); // Replace with your backend URL
                    const data = await response.json();
                    setPosts(data);
                } catch (error) {
                    console.error('Error fetching posts:', error);
                }
            };

            fetchPosts();
        }, []);

        // Render the home page
        return (
            <div>
                <h1>Welcome to the Music Blog</h1>
                <p>Discover the latest music trends and news.</p>
                <Link to="/newposts">Create a New Post</Link>
                <Link to="/postdetails">View Post Details</Link>
                <Link to="/posts">View All Posts</Link>
                <div>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        );
    };

    export default Home;