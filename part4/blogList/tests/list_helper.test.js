
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe('total likes', () => {
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })
})
describe('favourite blog', () => {
    const blogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: 'aaa8',
            title: 'blabla',
            author: 'me',
            url: 'tictactoe.com',
            likes: 100,
            __v: 0
        }
    ]

    test('get favourite blog', () => {
        const result = listHelper.getFavouriteBlog(blogs)
        expect(result).toEqual({
            title: "blabla",
            author: "me",
            likes: 100
        })
    })
})
describe('most blogs', () => {
    const blogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: 'aaa8',
            title: 'blabla',
            author: 'me',
            url: 'tictactoe.com',
            likes: 100,
            __v: 0
        },
        {
            _id: 'tata',
            title: 'Golang',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/aaa.html',
            likes: 5,
            __v: 0
        }
    ]

    test('get most blogs', () => {
        const result = listHelper.mostBlogs(blogs)
        expect(result).toEqual({
            author: "Edsger W. Dijkstra",
            blogs: 2
        })
    })
})
describe('most likes', () => {
    const blogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: 'aaa8',
            title: 'blabla',
            author: 'me',
            url: 'tictactoe.com',
            likes: 100,
            __v: 0
        },
        {
            _id: 'tata',
            title: 'Golang',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/aaa.html',
            likes: 5,
            __v: 0
        }
    ]

    test('get most likes', () => {
        const result = listHelper.mostLikes(blogs)
        expect(result).toEqual({
            author: "me",
            likes: 100
        })
    })
})