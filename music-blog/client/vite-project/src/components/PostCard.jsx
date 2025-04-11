import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
const { title, author, date, excerpt, postId } = post;

return (
    <div className="post-card">
        <h2>{title}</h2>
        <p>
            <strong>By:</strong> {author} | <strong>Date:</strong> {date}
        </p>
        <p>{excerpt}</p>
        <Link to={`/post/${postId}`}>Read More</Link>
    </div>
)
}

export default PostCard;