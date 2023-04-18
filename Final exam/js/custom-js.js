//adding JS to load global footer and header
document.addEventListener('DOMContentLoaded', (loaded) => {
    console.log('Document is ready.');
    fetch('global-header.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('#global-header').innerHTML = html;
      });
      fetch('global-footer.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('#global-footer').innerHTML = html;
      });
});