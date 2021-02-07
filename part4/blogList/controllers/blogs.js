const Blog = require("../models/blog");
const blogsRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')



blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog
        .find({}).populate('user', { username: 1, name: 1 })
    response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
    const body = request.body
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!decodedToken || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    const blog = new Blog({...body, likes: body.likes ? body.likes : 0, user: user.id})
    try {
        const result = await blog.save()
        user.blogs = user.blogs.concat(result.id)
        await user.save()
        response.status(201).json(result)
    }
    catch (err) {
        next(err)
        response.status(400)
    }
})
blogsRouter.put('/:id', async (request, response) => {
    try {
        const body = request.body
        const id = request.params.id
        const updatedBlog = {
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes ? body.likes : 0,
            ...Blog.find({_id:id})
        }

        await Blog.findByIdAndUpdate(request.params.id, updatedBlog, { new: true })

        response.status(200).json(updatedBlog)
    }
    catch (err) {
        next(err)
        response.status(400)
    }
})
blogsRouter.delete('/:id', async (request, response) => {
    try {
        const blog = await Blog.findById(request.params.id)
        const userid = await User.findById(request.params.user.id)
        if ( blog.user.toString() === userid.toString() )
        {
            await Blog.findByIdAndRemove(request.params.id)
            response.status(204).end()
        }
        else{
            response.status(403).end()
        }
    }
    catch (err) {
        next(err)
        response.status(400)
    }
})
module.exports = blogsRouter