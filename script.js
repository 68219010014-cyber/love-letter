// สร้างหัวใจลอย
function createHearts() {
    const container = document.getElementById('heart-container');
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 3 + Math.random() * 4 + 's';
        document.body.appendChild(heart);
        
        // ลบออกหลังแอนิเมชันจบ
        setTimeout(() => heart.remove(), 6000);
      }, i * 300);
    }
  }
  
  document.getElementById('revealBtn').addEventListener('click', () => {
    document.getElementById('message').textContent = 'นี่คือสิ่งที่ฉันรู้สึก...';
    document.getElementById('loveText').classList.remove('hidden');
    document.getElementById('revealBtn').style.display = 'none';
    createHearts();
  });
  
  document.getElementById('moreBtn').addEventListener('click', () => {
    alert('เธอคือคำตอบของทุกคำถามในใจฉัน 💌\n(และใช่... ฉันรักเธอมากจริงๆ) 😊');
  });