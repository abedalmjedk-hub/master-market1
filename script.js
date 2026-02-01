document.addEventListener('DOMContentLoaded', () => {
    const circlesContainer = document.createElement('ul');
    circlesContainer.classList.add('circles');

    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        circlesContainer.appendChild(li);
    }

    document.body.appendChild(circlesContainer);
});
