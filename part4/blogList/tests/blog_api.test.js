const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/).expect(blogs => blogs.length === 0)
    jest.setTimeout(30000);

})
test('there is an id to a blog', async () => {
    const blogs = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/).expect(blogs => {if (blogs.length > 0) {blogs[0]._id}})
    jest.setTimeout(30000);
});


afterAll(() => {
    mongoose.connection.close()
})