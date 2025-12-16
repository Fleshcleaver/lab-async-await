// Write your code here!

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(post => {
      // Add content to #post-list
      const postList = document.querySelector("#post-list");
      postList.innerHTML = post.title;

      // Create h1 and p elements
      const h1 = document.createElement("h1");
      h1.textContent = post.title;

      const p = document.createElement("p");
      p.textContent = post.body;

      // Append to the page
      document.body.appendChild(h1);
      document.body.appendChild(p);
    });
});