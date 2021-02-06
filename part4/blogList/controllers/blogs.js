const Blog = require("../models/blog");
const blogsRouter = require('express').Router()

blogsRouter.get('/', async (request, response) => {
    const blogs  = await Blog.find({})
    response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
    const blog = new Blog({...request.body, likes: request.body.likes ? request.body.likes : 0})
    try {
        const result = await blog.save()
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
        await Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()
    }
    catch (err) {
        next(err)
        response.status(400)
    }
})
module.exports = blogsRouter