import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost, updatePost } from '../../services/api';

// NewPost component
const NewPost = ({ post }) => {
    const [formData, setFormData] = useState({
        title: post ? post.title : '',
        author: post ? post.author : '',
        content: post ? post.content : '',
        date: post ? post.date : '',
    });
    const navigate = useNavigate();

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (post) {
                await updatePost(post._id, formData);
            } else {
                await createPost(formData);
            }
            navigate('/');
        } catch (error) {
            console.error('Error creating/updating post:', error);
        }
    };

    //Render the form
    return (
        <main>
            <section>
                <h1 className="post-heading">{post ? 'Edit Post' : 'Create New Post'}</h1>
                <form className="post-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author:</label>
                        <input
                            id="author"
                            name="author"
                            type="text"
                            value={formData.author}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content:</label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button className="submit-button" type="submit">
                        {post ? 'Update Post' : 'Create Post'}
                    </button>
                </form>
            </section>
        </main>
    );
};

export default NewPost;