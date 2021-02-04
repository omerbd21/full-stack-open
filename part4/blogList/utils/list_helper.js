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
module.exports = {dummy, totalLikes, getFavouriteBlog}