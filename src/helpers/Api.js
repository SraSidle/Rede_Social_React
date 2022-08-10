const urls = {
    development: "http://localhost:3000",
    // production: "https://apirest-todolist-jsonserver.herokuapp.com",
};

export const Api = {
    baseURL : urls[process.env.NODE_ENV],
}