const coins = [
    { 
        value: 0.5, 
        images: ['hamzacoins/hmz-0.5f.png', 'hamzacoins/hmz-0.5b.png'] 
    },
    { 
      value: 1, 
      images: ['hamzacoins/hmz-1f.png','hamzacoins/hmz-1b.png'] 
    },
    { 
      value: 5, 
      images: ['hamzacoins/hmz-5f.png','hamzacoins/hmz-5b.png'] 
    },
    { 
      value: 10, 
      images: ['hamzacoins/hmz-10f.png','hamzacoins/hmz-10b.png','hamzacoins/hmz-o10f.png','hamzacoins/hmz-o10b.png','hamzacoins/hmz-n10f.png','hamzacoins/hmz-n10b.png'] 
    },
    { 
      value: 20, 
      images: ['hamzacoins/hmz-20f.png','hamzacoins/hmz-20b.png','hamzacoins/hmz-n20f.png','hamzacoins/hmz-n20b.png'] 
    },
    { 
        value: 50, 
        images: ['hamzacoins/hmz-50f.png','hamzacoins/hmz-50b.png',] 
    },
    { 
        value: 100, 
        images: ['hamzacoins/hmz-100f.png','hamzacoins/hmz-100b.png',] 
    },
    { 
        value: 200, 
        images: ['hamzacoins/hmz-200f.png','hamzacoins/hmz-200b.png',] 
    },
  ];
  
  let correctSum = 0;
  let score = 0;
  let timer = 300;
  let level = 1;
  let timerInterval;
  
  const correctSound = new Audio('sounds/correct.mp3');
  const wrongSound = new Audio('sounds/wrong.mp3');
  
  // توليد العملات
  function generateCoins() {
    const coinsArea = document.getElementById('coins-area');
    coinsArea.innerHTML = '';
    correctSum = 0;
  
    const numberOfCoins = level + 2; // زيادة العملات مع كل مستوى
  
    for (let i = 0; i < numberOfCoins; i++) {
      const randomCoin = coins[Math.floor(Math.random() * coins.length)];
      const randomImage = randomCoin.images[Math.floor(Math.random() * randomCoin.images.length)];
      correctSum += randomCoin.value;
  
      const imgElement = document.createElement('img');
      imgElement.src = randomImage;
      imgElement.alt = `${randomCoin.value} جنيه`;
      coinsArea.appendChild(imgElement);
    }
  }
  
  // التحقق من الإجابة
  function checkAnswer() {
    const userAnswer = Number(document.getElementById('total').value);
    const result = document.getElementById('result');
  
    if (userAnswer === correctSum) {
      result.textContent = 'إجابة صحيحة! أحسنت!';
      result.style.color = 'green';
      correctSound.play();
      score += 10;
      levelUp();
    } else {
      result.textContent = `إجابة خاطئة. المجموع الصحيح هو ${correctSum}`;
      result.style.color = 'red';
      wrongSound.play();
      score -= 5;
    }
  
    updateScore();
    generateCoins();
  }
  
  // تحديث النقاط
  function updateScore() {
    document.getElementById('score').textContent = score;
  }
  
  // إنهاء اللعبة
  function endGame() {
    clearInterval(timerInterval);
    document.getElementById('result').textContent = `انتهى الوقت! مجموع نقاطك: ${score}`;
    document.getElementById('result').style.color = 'blue';
    document.getElementById('check-answer').disabled = true;
  }
  
  // بدء المؤقت
  function startTimer() {
    timer = 300; // إعادة ضبط المؤقت
    document.getElementById('timer').textContent = timer;
  
    timerInterval = setInterval(() => {
      timer--;
      document.getElementById('timer').textContent = timer;
  
      if (timer === 0) {
        endGame();
      }
    }, 1000);
  }
  
  // ترقية المستوى
  function levelUp() {
    if (score % 50 === 0 && score > 0) { // ترقية كل 50 نقطة
      level++;
      alert(`أحسنت! انتقلت إلى المستوى ${level}`);
    }
  }
  
  // إعداد اللعبة
  function setupGame() {
    score = 0;
    level = 1;
    document.getElementById('check-answer').disabled = false;
    updateScore();
    generateCoins();
    startTimer();
  }
  
  // إضافة الأحداث
  document.getElementById('check-answer').addEventListener('click', checkAnswer);
  
  // بدء اللعبة
  setupGame();
  