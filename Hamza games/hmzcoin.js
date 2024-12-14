// const coins = [
//     { 
//         value: 0.5, 
//         images: ['hamzacoins/hmz-0.5f.png', 'hamzacoins/hmz-0.5b.png'] 
//     },
//     { 
//       value: 1, 
//       images: ['hamzacoins/hmz-1f.png','hamzacoins/hmz-1b.png'] 
//     },
//     { 
//       value: 5, 
//       images: ['hamzacoins/hmz-5f.png','hamzacoins/hmz-5b.png'] 
//     },
//     { 
//       value: 10, 
//       images: ['hamzacoins/hmz-10f.png','hamzacoins/hmz-10b.png','hamzacoins/hmz-o10f.png','hamzacoins/hmz-o10b.png','hamzacoins/hmz-n10f.png','hamzacoins/hmz-n10b.png'] 
//     },
//     { 
//       value: 20, 
//       images: ['hamzacoins/hmz-20f.png','hamzacoins/hmz-20b.png','hamzacoins/hmz-n20f.png','hamzacoins/hmz-n20b.png'] 
//     },
//     { 
//         value: 50, 
//         images: ['hamzacoins/hmz-50f.png','hamzacoins/hmz-50b.png',] 
//     },
//     { 
//         value: 100, 
//         images: ['hamzacoins/hmz-100f.png','hamzacoins/hmz-100b.png',] 
//     },
//     { 
//         value: 200, 
//         images: ['hamzacoins/hmz-200f.png','hamzacoins/hmz-200b.png',] 
//     },
//   ];
  
//   let correctSum = 0;
//   let score = 0;
//   let timer = 300;
//   let level = 1;
//   let timerInterval;
  
//   const correctSound = new Audio('sounds/correct.mp3');
//   const wrongSound = new Audio('sounds/wrong.mp3');
  
//   // توليد العملات
//   function generateCoins() {
//     const coinsArea = document.getElementById('coins-area');
//     coinsArea.innerHTML = '';
//     correctSum = 0;
  
//     const numberOfCoins = level + 2; // زيادة العملات مع كل مستوى
  
//     for (let i = 0; i < numberOfCoins; i++) {
//       const randomCoin = coins[Math.floor(Math.random() * coins.length)];
//       const randomImage = randomCoin.images[Math.floor(Math.random() * randomCoin.images.length)];
//       correctSum += randomCoin.value;
  
//       const imgElement = document.createElement('img');
//       imgElement.src = randomImage;
//       imgElement.alt = `${randomCoin.value} جنيه`;
//       coinsArea.appendChild(imgElement);
//     }
//   }
  
//   // التحقق من الإجابة
//   function checkAnswer() {
//     const userAnswer = Number(document.getElementById('total').value);
//     const result = document.getElementById('result');
  
//     if (userAnswer === correctSum) {
//       result.textContent = 'إجابة صحيحة! أحسنت!';
//       result.style.color = 'green';
//       correctSound.play();
//       score += 10;
//       levelUp();
//     } else {
//       result.textContent = `إجابة خاطئة. المجموع الصحيح هو ${correctSum}`;
//       result.style.color = 'red';
//       wrongSound.play();
//       score -= 5;
//     }
  
//     updateScore();
//     generateCoins();
//   }
  
//   // تحديث النقاط
//   function updateScore() {
//     document.getElementById('score').textContent = score;
//   }
  
//   // إنهاء اللعبة
//   function endGame() {
//     clearInterval(timerInterval);
//     document.getElementById('result').textContent = `انتهى الوقت! مجموع نقاطك: ${score}`;
//     document.getElementById('result').style.color = 'blue';
//     document.getElementById('check-answer').disabled = true;
//   }
  
//   // بدء المؤقت
//   function startTimer() {
//     timer = 300; // إعادة ضبط المؤقت
//     document.getElementById('timer').textContent = timer;
  
//     timerInterval = setInterval(() => {
//       timer--;
//       document.getElementById('timer').textContent = timer;
  
//       if (timer === 0) {
//         endGame();
//       }
//     }, 1000);
//   }
  
//   // ترقية المستوى
//   function levelUp() {
//     if (score % 50 === 0 && score > 0) { // ترقية كل 50 نقطة
//       level++;
//       alert(`أحسنت! انتقلت إلى المستوى ${level}`);
//     }
//   }
//   // عرض نافذة Modal
// function showLevelUpModal(currentLevel) {
//   const modal = document.getElementById('levelModal');
//   const modalText = document.getElementById('modalText');
//   const closeModal = document.querySelector('.close');

//   modalText.textContent = `أحسنت! لقد انتقلت إلى المستوى ${currentLevel}`;
//   modal.style.display = 'block';

//   closeModal.onclick = () => {
//     modal.style.display = 'none';
//   };

//   window.onclick = (event) => {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   };
// }

// // ترقية المستوى
// function levelUp() {
//   if (score % 50 === 0 && score > 0) { // ترقية كل 50 نقطة
//     level++;
//     showLevelUpModal(level); // عرض الترقية في نافذة Modal
//   }
// }

  
//   // إعداد اللعبة
//   function setupGame() {
//     score = 0;
//     level = 1;
//     document.getElementById('check-answer').disabled = false;
//     updateScore();
//     generateCoins();
//     startTimer();
//   }
  
//   // إضافة الأحداث
//   document.getElementById('check-answer').addEventListener('click', checkAnswer);
  
//   // بدء اللعبة
//   setupGame();
  





















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

function generateCoins() {
    const coinsArea = document.getElementById('coins-area');
    coinsArea.innerHTML = '';
    correctSum = 0;

    const numberOfCoins = level; // كل مستوى يضيف عدد عملات مساوي للمستوى

    for (let i = 0; i < numberOfCoins; i++) {
        const randomCoin = coins[Math.floor(Math.random() * coins.length)];
        const randomImage = randomCoin.images[Math.floor(Math.random() * randomCoin.images.length)];
        correctSum += randomCoin.value;

        const imgElement = document.createElement('img');
        imgElement.src = randomImage;
        imgElement.alt = `${randomCoin.value} جنيه`;

        if (randomCoin.value === 0.5 || randomCoin.value === 1) {
          imgElement.style.width = '7%'; // حجم أصغر
          imgElement.style.height = '90px';
      } else {
          imgElement.style.width = '25%'; // الحجم الافتراضي
          imgElement.style.height = '170px';
      }

        coinsArea.appendChild(imgElement);
    }
}
document.addEventListener('DOMContentLoaded', () => {
  const userAnswerField = document.getElementById('total'); // الحقل الذي ستكتب فيه
  const checkButton = document.getElementById('check-answer'); // الزر المستخدم للفحص

  // عند الضغط على Enter
  userAnswerField.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
          event.preventDefault(); // منع السلوك الافتراضي
          checkButton.click(); // تنفيذ الضغط على الزر "Check Answer"
      }
  });
});

function checkAnswer() {
  const userAnswerField = document.getElementById('total');
  const userAnswer = Number(userAnswerField.value);
  const result = document.getElementById('result');

  // تحقق من الإجابة
  if (userAnswer === correctSum) {
      result.textContent = ' إجابة صحيحة ! أحسنت!  ';
      result.style.color = '#07f81b';
      score += 10;
      levelUp();
  } else {
      result.textContent = `إجابة خاطئة. المجموع الصحيح هو ${correctSum}`;
      result.style.color = 'red';
      score -= 5;
  }

  updateScore();
  generateCoins();

  // مسح النص والتركيز على الحقل
  setTimeout(() => {
      userAnswerField.value = ''; // مسح النص
      userAnswerField.focus();    // تركيز الحقل
  }, 100);
}



function updateScore() {
    document.getElementById('score').textContent = score;
}

function levelUp() {
  if (score % 20 === 0 && score > 0) {
      level++;
      updateLevelDisplay();
      showModal(level);
  }
}

function updateLevelDisplay() {
  const levelDisplay = document.getElementById('current-level-display');
  levelDisplay.textContent = level;
}
function showModal(currentLevel) {
    const modal = document.getElementById('levelModal');
    const levelSpan = document.getElementById('current-level');
    levelSpan.textContent = currentLevel;
    modal.style.display = 'flex';

    const closeModal = () => {
        modal.style.display = 'none';
    };

    document.querySelector('.close').onclick = closeModal;
    document.querySelector('.confirm').onclick = closeModal;
    window.onclick = (event) => {
        if (event.target === modal) closeModal();
    };
}
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

function setupGame() {
  score = 0;
  level = 1;
  updateScore();
  updateLevelDisplay(); // تحديث المستوى المعروض عند بدء اللعبة
  generateCoins();
  startTimer();
}
function endGame() {
      clearInterval(timerInterval);
      document.getElementById('result').textContent = `انتهى الوقت ! مجموع نقاطك: ${score}`;
      document.getElementById('result').style.color = 'blue';
      document.getElementById('check-answer').disabled = true;
    }
document.getElementById('check-answer').addEventListener('click', checkAnswer);

setupGame();
