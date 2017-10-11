const api = "http://localhost:3001"

// Generate a unique token for storing data on the backend server.
// let token = localStorage.token
// if (!token)
//   token = localStorage.token = Math.random().toString(36).substr(-8)

const token = "priscilla";

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// CATGORIES
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)



// POSTS
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getPostDetail= (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())

export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json())


// COMMENTS
export const getComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
