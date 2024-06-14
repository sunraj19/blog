unction addPost() {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    if (title === "" || content === "") {
        alert("Please fill out both the title and content fields.");
        return;
    }

    const postsContainer = document.getElementById('posts');

    const post = document.createElement('div');
    post.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.textContent = title;

    const postContent = document.createElement('p');
    postContent.textContent = content;

    post.appendChild(postTitle);
    post.appendChild(postContent);
    postsContainer.appendChild(post);

    document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';
}
