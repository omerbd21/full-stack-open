const dummy = (blogs) => {
    return 1
}
const totalLikes = (blogs) => {
    if (blogs.length === 1) { return blogs[0].likes}
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return blogs.reduce(reducer)
}
const getFavouriteBlog = (blogs) => {
   const max = blogs.reduce(function(prev, current) {
        return (prev.likes > current.likes) ? prev : current
    })
    return (({ author, likes, title }) => ({ author, likes, title }))(max);
}
const mostBlogs = (blogs) => {
    const uniqueAuthors = [...new Set(blogs.map(blog => blog.author))]
    const getOccurrence = (array, value) => {
        let count = 0;
        array.forEach((v) => (v.author === value && count++));
        return count;
    }
    const authorCount = (uniqueAuthors, getOccurrence) => {
        return uniqueAuthors.map( (author) => ({author: author, blogs: getOccurrence(blogs,author)}))
    }
    const max = authorCount(uniqueAuthors, getOccurrence).reduce(function(prev, current) {
        return (prev.blogs > current.blogs) ? prev : current
    })
    return (({ author, blogs }) => ({ author, blogs }))(max);
}
const mostLikes = (blogs) => {
    const uniqueAuthors = [...new Set(blogs.map(blog => blog.author))]
    const getTotalLikes = (array, value) => {
        let count = 0;
        array.forEach((v) => {if (v.author === value) count+= v.likes});
        return count;
    }
    const authorCount = (uniqueAuthors, getTotalLikes) => {
        return uniqueAuthors.map( (author) => ({author: author, likes: getTotalLikes(blogs,author)}))
    }
    const max = authorCount(uniqueAuthors, getTotalLikes).reduce(function(prev, current) {
        return (prev.likes > current.likes) ? prev : current
    })
    return (({ author, likes }) => ({ author, likes }))(max);
}
module.exports = {dummy, totalLikes, getFavouriteBlog, mostBlogs, mostLikes}