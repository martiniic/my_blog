document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("postForm");
    const postContent = document.getElementById("postContent");
    const feed = document.getElementById("feed");

    // Load posts from localStorage
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    renderPosts();

    // Form submission
    postForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const content = postContent.value.trim();
        if (content === "") return;

        const newPost = {
            id: Date.now(),
            text: content,
            date: new Date().toLocaleString(),
        };

        posts.unshift(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));

        postContent.value = "";
        renderPosts();
    });

    function renderPosts() {
        feed.innerHTML = "";
        posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML = `<p>${post.text}</p><small>${post.date}</small>`;
            feed.appendChild(postDiv);
        });
    }
});