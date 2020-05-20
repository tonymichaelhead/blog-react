import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
  return function() {
    const response = await jsonPlaceholder.get('/posts');

    return {
      type: 'FETCH_POSTS',
      payload: response,
    };
  }
};
