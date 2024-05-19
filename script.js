function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    window.requestAnimationFrame(animate);
}

function draw() {
    ctx.fillStyle = rgba(255 - (Math.random() * 255/2), 255, 255, this.opacity);
    ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
}

function calculateParticleCount() {
    return Math.floor((canvas.width * canvas.height) / 8000); // увеличиваем делитель
}

function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particleCount = calculateParticleCount();
    initParticles();
}

window.addEventListener('resize', onResize);

initParticles();
window.requestAnimationFrame(animate);

//section
