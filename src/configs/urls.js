const baseURL = 'https://jsonplaceholder.typicode.com';

const urls = {
    index: '/',
    todos: 'todos',
    albums: 'albums',
    comments: 'comments',
    postId: ':postId',
    postById: (id) => `/posts/${id}`
}

export {
    baseURL,
    urls
};