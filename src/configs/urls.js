const baseURL = 'https://jsonplaceholder.typicode.com';

const urls = {
    index: '/',
    todos: 'todos',
    albums: 'albums',
    comments: 'comments',
    postsId: ':postsId',
    postById: (id) => `/posts/${id}`
}

export {
    baseURL,
    urls
};