import express from 'express';
import { getPosts, getSingularPost, createPost } from '../controllers/postController.js';

const router = express.Router();

// Define routes
router.get('/', getPosts);

router.get('/:id', getSingularPost);

router.post('/', createPost);

//Export Router
export default router;
