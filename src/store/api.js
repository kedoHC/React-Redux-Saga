// const BASEURL = "https://jsonplaceholder.typicode.com";

// const url = BASEURL + "/posts/";

// const request = {
//     method:'GET',
//     body: JSON.stringify(post),
//     headers: {"Content-type":"application/json; charset=UTF-8"}
// };


export const apiGetPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json());
};

export const apiGetPhotos = () => {
    return fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json());
};

export const apiGetComments = () => {
    return fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json());
};
export const apiGetUserById = ( id ) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${ id }`)
        .then(response => response.json());
};