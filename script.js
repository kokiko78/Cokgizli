let loveScore = 0;
let noClickCount = 0;

const question = document.getElementById('question');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const message = document.getElementById('message');
const loveScoreDisplay = document.getElementById('love-score');

// "Evet" Butonuna Tıklama
yesBtn.addEventListener('click', () => {
  loveScore++;
  loveScoreDisplay.textContent = `Sevgi Puanı: ${loveScore}`;
  message.textContent = "Yuppie! ❤";
  message.style.color = "green";
  spawnHearts();
});

// "Hayır" Butonuna Tıklama
noBtn.addEventListener('click', () => {
  noClickCount++;
  message.textContent = "😡 Kızgın!";
  message.style.color = "red";
  if (noClickCount > 3) {
    message.textContent = "Gerçekten mi? 🥊";
    document.body.style.background = "black";
    setTimeout(() => {
      document.body.style.background = "linear-gradient(to bottom, #ffcccc, #ffe6e6)";
    }, 1000);
  }
});

// Ekranda Kalp Animasyonu
function spawnHearts() {
  const heart = document.createElement('div');
  heart.classList.add('small-heart');
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

// Küçük Kalp Animasyonu
document.body.insertAdjacentHTML(
  "beforeend",
  `
<style>
  .small-heart {
    position: absolute;
    bottom: 0;
    width: 20px;
    height: 20px;
    background: red;
    animation: floatUp 3s linear infinite;
    border-radius: 50%;
    transform: rotate(-45deg);
  }
  
  .small-heart:before,
  .small-heart:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
  }

  .small-heart:before {
    top: -10px;
    left: 0;
  }

  .small-heart:after {
    left: 10px;
    top: 0;
  }

  @keyframes floatUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100vh);
    }
  }
</style>
`
);
