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
        eturn (
            <div className="home">
                <div className="home-content">
                    <h1>Welcome to GreenSteps</h1>
                    <p>Your one-stop shop for all things eco-friendly.</p>
                  </div>
                <div className="posts">
                    {posts.map((post) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
                <div className="new-post">
                    <Link to="/newposts">
                        <button>Create New Post</button>
                    </Link>
                </div>
                <div className="contact-us" style={{ position: 'absolute', bottom: 0, left: 0 }}>
                    <button onClick={handleContactUs}>Contact Us</button>
                </div>
    
            </div>
        );
    };
    export default Home;