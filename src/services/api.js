export const getPosts = async () => {
    const response = await fetch('http://localhost:3001/api/users')
    return response.json();
}