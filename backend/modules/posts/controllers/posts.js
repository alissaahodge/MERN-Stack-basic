import express from 'express';
import PostMessage from "../models/postMessage.js";

import mongoose from 'mongoose';

const router = express.Router();


export const getPosts = async (req, res) => {
    const {page} = req.query;
    try {
        const limit = 8;
        const startIndex = (Number(page) - 1) * limit;
        const total = await PostMessage.countDocuments({});
        const posts = await PostMessage.find().sort({_id: -1}).limit(limit).skip(startIndex);

        res.status(200).json({data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / limit)});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const getPost = async (req, res) => {
    const {id} = req.params;

    try {
        const post = await PostMessage.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const getPostsBySearch = async (req, res) => {
    const {searchQuery, tags} = req.query;

    try {
        const title = new RegExp(searchQuery, 'i');
        const posts = await PostMessage.find({$or: [{title}, {tags: {$in: tags.split(',')}}]});
        res.json({data: posts})
    } catch (error) {
        res.status(404).json({message: 'No Posts Found'});
    }
};


export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString()});
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});

    }
};


export const updatePosts = async (req, res) => {
    const {id} = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {...post, id}, {new: true});
    res.json(updatedPost);
};


export const deletePosts = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    await PostMessage.findByIdAndRemove(id);
    res.json({message: 'Post Deleted Successfully!'});
};



export default router;
