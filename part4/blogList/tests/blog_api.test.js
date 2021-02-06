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
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/).expect(blogs => {if (blogs.length > 0) {blogs[0]._id}})
    jest.setTimeout(30000);
});
test('blogs are added correctly', async () => {
    const blogs = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    const oldLength = blogs.length
    await api
        .post('/api/blogs')
        .expect(201)
        .expect('Content-Type', /application\/json/).expect(blogs => blogs.length === oldLength + 1)
    jest.setTimeout(30000);

})
test('if no likes, there is none', async () => {
    await api
        .post('/api/blogs')
        .expect(201)
        .expect('Content-Type', /application\/json/).expect(request => request.body.likes === 0  )
    jest.setTimeout(30000);

})
test('if no url or name, return 400', async () => {
    await api
        .post('/api/blogs').set('Body', '{}')
        .expect(400)
        .expect('Content-Type', /application\/json/)
    jest.setTimeout(30000);

})


afterAll(() => {
    mongoose.connection.close()
})