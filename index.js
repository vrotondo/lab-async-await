// Write your code here!
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

function displayPosts(posts) {
    const postList = document.getElementById('post-list');

    postList.innerHTML = '';

    posts.forEach((post) => {
        const li = document.createElement('li');

        const h1 = document.createElement('h1');
        h1.textContent = post.title;

        const p = document.createElement('p');
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);

        postList.appendChild(li);
    });
}

async function main() {
    const posts = await fetchPosts();
    displayPosts(posts);
}

document.addEventListener('DOMContentLoaded', main);
