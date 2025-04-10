import Music from '../models/Post.js';

// Get all posts
export const getPosts = async (req, res) => {
    try {
        const posts = await Music.find();
        res.status(200).json({messsage: 'Posts fetched successfully', posts});
    } catch (error) {
        res.status(500).json({ message: 'Server error'});
    }
};

// Get a single post
export const getSingularPost = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await user.findById(userId); 
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Create a new post
export const createPost = async (req, res) => {
    const { title, artist, album, genre, releaseDate } = req.body;
    try {
        const newPost = new Music({ title, artist, album, genre, releaseDate });
        res.status(201).json({ message: 'Post created successfully', newPost });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


module.exports = { getPosts, getSingularPost, createPost };  // Exporting the functions