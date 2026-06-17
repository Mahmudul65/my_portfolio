document.addEventListener('DOMContentLoaded', () => {
    console.log('System Configuration: Premium Trust-Enforced Pipeline active with Design & AI Labs.');

    // Gracefully fade in components on render to simulate native desktop/mobile app fluid performance
    const cards = document.querySelectorAll('.skill-card, .item-card, p.summary-text, header, .research-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(8px)';
        card.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 60 * index);
    });

    // Handle Name Interactivity
    const devName = document.getElementById('dev-name');
    if (devName) {
        devName.addEventListener('click', () => {
            devName.style.color = '#38bdf8';
            setTimeout(() => {
                devName.style.color = '';
            }, 400);
        });
    }
});