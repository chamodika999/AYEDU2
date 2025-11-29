// video-modal.js

// Function to get YouTube thumbnail URL
function getYouTubeThumbnail(videoId) {
    // High quality thumbnail
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

// Function to get YouTube embed URL
function getYouTubeEmbedUrl(videoId) {
    // Add 'autoplay=1' to start playing automatically when the modal opens
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}

// Function to open the modal and load the video
function openVideoModal(videoId, title) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');
    const modalTitle = document.getElementById('modalTitle');

    modalTitle.textContent = title;
    iframe.src = getYouTubeEmbedUrl(videoId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling the background
}

// Function to close the modal and stop the video
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');

    iframe.src = ''; // Stop the video by clearing the iframe source
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close the modal when the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeVideoModal();
    }
}

// Initialize video buttons on page load
document.addEventListener('DOMContentLoaded', () => {
    const videoButtons = document.querySelectorAll('.video-button');
    videoButtons.forEach(button => {
        const videoId = button.getAttribute('data-video-id');
        const title = button.getAttribute('data-video-title');
        
        // Set the thumbnail image
        const thumbnailElement = button.querySelector('.video-thumbnail');
        if (thumbnailElement) {
            thumbnailElement.style.backgroundImage = `url('${getYouTubeThumbnail(videoId)}')`;
        }

        // Attach click event listener
        button.onclick = () => openVideoModal(videoId, title);
    });
});
