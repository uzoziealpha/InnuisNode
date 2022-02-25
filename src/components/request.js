const API_URL = 'http://localhost:3003';

async function httpGetAllalbums() {
    const response =  await fetch('${API_URL}/getallalbums')
    return await response.json();
}