// JavaScript for collapsible sections
document.querySelectorAll('h1, h2').forEach(heading => {
  heading.addEventListener('click', function() {
    let content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});

// Auto-generate Table of Contents
const toc = document.getElementById('toc');
document.querySelectorAll('h1, h2').forEach(heading => {
  const tocItem = document.createElement('li');
  tocItem.textContent = heading.textContent;
  toc.appendChild(tocItem);
});
