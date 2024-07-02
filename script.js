document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.img-fluid');
    console.log(images)
    images.forEach((img, index) => {
      const lightboxId = `lightbox-${index}`;
      const link = document.createElement('a');
      link.href = `#${lightboxId}`;
      img.parentNode.insertBefore(link, img);
      link.appendChild(img);

      const lightbox = document.createElement('a');
      lightbox.href = "#_";
      lightbox.className = "lightbox";
      lightbox.id = lightboxId;

      const span = document.createElement('span');
      span.style.backgroundImage = `url('${img.src}')`;
      lightbox.appendChild(span);

      document.body.appendChild(lightbox);
    });
});
