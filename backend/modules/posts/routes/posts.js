import express from 'express';
import {getPosts, createPosts, updatePosts, deletePosts, getPost, getPostsBySearch} from '../controllers/posts.js';
import auth from '../../../middleware/auth.js';

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPosts);
router.patch('/:id', auth, updatePosts);
router.delete('/:id', auth, deletePosts);



export default router;
