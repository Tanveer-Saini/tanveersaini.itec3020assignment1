document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');

    fetch('../data/posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                // Create a card container
                const postElement = document.createElement('div');
                postElement.classList.add('card', 'mb-4'); // Add Bootstrap card classes

                // Create card body
                postElement.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${post.date} | ${post.author}</h6>
                        <div class="card-text">${post.content}</div>
                    </div>
                `;

                // Append the card to the blog list
                blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
});
