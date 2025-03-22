// Create stars
document.addEventListener('DOMContentLoaded', function() {
    const starContainer = document.getElementById('stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation delay
        const delay = Math.random() * 2;
        
        star.style.top = `${top}%`;
        star.style.left = `${left}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        
        starContainer.appendChild(star);
    }

    // Add event listener to the share button
    const shareButton = document.querySelector('.share-button');
    shareButton.addEventListener('click', function() {
        // If Web Share API is available
        if (navigator.share) {
            navigator.share({
                title: 'שבת שלום מאביב',
                text: 'שבת שלום ומבורכת מאביב!',
                url: window.location.href,
            })
            .catch((error) => console.log('Error sharing:', error));
        } else {
            alert('ניתן להעתיק את הקישור ולשתף ידנית בווטסאפ');
        }
    });
});
