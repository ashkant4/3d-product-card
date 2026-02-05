const wrapper = document.querySelector('.card-wrapper');
const card = document.querySelector('.card');

if (wrapper && card) {
  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    
    // Mouse position relative to card center (-0.5 to +0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Max rotation angles (feel free to adjust)
    const rotateY = x * 28;
    const rotateX = -y * 28;
    
    // Apply 3D transform
    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(60px)
    `;
    
    // Dynamic reflection position
    card.style.setProperty('--x', `${(x + 0.5) * 100}%`);
    card.style.setProperty('--y', `${(y + 0.5) * 100}%`);
  });

  wrapper.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(20px)';
  });
}