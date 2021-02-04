const dummy = (blogs) => {
    return 1
}
const totalLikes = (blogs) => {
    if (blogs.length === 1) { return blogs[0].likes}
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return blogs.reduce(reducer)
}
module.exports = {dummy, totalLikes}