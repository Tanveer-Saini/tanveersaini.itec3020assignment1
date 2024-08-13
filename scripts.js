document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');

    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post', 'mb-4'); // Add classes for styling and spacing

                // Add title, date, content, image, and location to the post element
                postElement.innerHTML = `
                    <div class="card">
                        <img src="${post.image}" class="card-img-top" alt="${post.title}">
                        <div class="card-body">
                            <h2 class="card-title">${post.title}</h2>
                            <p class="card-text"><small class="text-muted">By ${post.author} on ${post.date} - Location: ${post.location}</small></p>
                            <div class="card-text">${post.content}</div>
                        </div>
                    </div>
                `;

                // Append the post element to the blog list
                blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
});
