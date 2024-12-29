
function typeLyrics(lyrics, declaration) {
  const typingElement = document.getElementById(declaration);
  let lineIndex = 0;
  let charIndex = 0;

  function type() {
    if (lineIndex < lyrics.length) {
      if (charIndex < lyrics[lineIndex].length) {
        // Create a new div for each line
        if (charIndex === 0) {
          const newLine = document.createElement('div');
          typingElement.appendChild(newLine); // Add the new div to the container
        }
        const currentLine = typingElement.lastElementChild;
        currentLine.textContent += lyrics[lineIndex][charIndex];
        charIndex++;

        // Recursively call type() with a timeout to simulate typing
        setTimeout(type, 5); // Adjust typing speed here
      } else {
        charIndex = 0;
        lineIndex++;
        setTimeout(type, 500); // Pause before showing the next line
      }
    }
  }

  type(); // Start typing the lyrics
}

function startSequence() {
  const bgMusic = document.getElementById('bg-music');
  bgMusic.play();
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('step1').classList.remove('hidden');
  
  const lyrics = [
    "Selamat ulang tahun salmaa!!",
    "Yeayyy udah 19 tahun aja nihh",
    "Huuu Tuaaa wkwkwkwk",
    "Weitt lanjutin web ini sampe selesai yaakk!",
    "cape loh ini bikinnya wkwkw next lanjutt!"
  ]; 
  typeLyrics(lyrics, "animated-text"); 
}

function nextStep1(current, next) {
  // Menyembunyikan langkah saat ini
  document.getElementById(current).classList.add('hidden');
  
  // Menampilkan langkah berikutnya
  const nextStepElement = document.getElementById(next);
  nextStepElement.classList.remove('hidden');
  
  let count = 0;
  const maxBalloons = 19; // Set maxBalloons menjadi 19
  const popSound = new Audio('music/backsound-balon.mp3'); // Tambahkan path ke file suara pop

  function popBalloon(balloon) {
    // Mainkan suara saat balon di-pop
    popSound.play();

    // Tambahkan animasi untuk balon terbang
    balloon.style.transform = 'translateY(-100vh)';
    balloon.style.opacity = '0';

    // Setelah animasi selesai, hapus elemen balon
    setTimeout(() => {
      balloon.remove();
      count++;
      document.getElementById('counter').textContent = `Umur Kamu ${count} Tahun`;

      // Jika jumlah balon belum mencapai maksimum, buat balon baru
      if (count < maxBalloons) {
        createBalloon();
      } else {

        showCongrats();
      }
    }, 1000);
  }

  function createBalloon() {
    const balloon = document.createElement('img');
    const randomImage = ['img/ballon1.svg', 'img/ballon2.svg', 'img/ballon3.svg'][Math.floor(Math.random() * 3)];
    balloon.src = randomImage;

    // Posisikan balon di tengah layar
    const topPosition = window.innerHeight / 2;
    const leftPosition = window.innerWidth / 2;

    balloon.style.position = 'absolute';
    balloon.style.top = `${topPosition}px`;
    balloon.style.left = `${leftPosition}px`;
    balloon.style.opacity = '1';
    balloon.style.transition = 'transform 1s, opacity 1s';
    balloon.onclick = () => popBalloon(balloon);
    document.querySelector('.baloons').appendChild(balloon);
  }

  function showCongrats() {
    document.getElementById('congrats').style.display = 'block';
    document.getElementById('counter').style.display = 'none';
  }

  // Inisialisasi balon pertama setelah langkah berikutnya dipilih
  createBalloon();  
}


function nextStep(){
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('scrapbook').classList.remove('hidden');
  
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const pesan_arin = [
  "happy birthday salmaaa!! semoga makin",
  "cantik,, makin pinter biar bisa ngajarin ",
  "gua ekonomi yh yh pls pls,",
  "sehat selalu, semoga kita bisa temenan",
  " terus sampe lulus yh xixixi",
  " jgn somss, hope u got best moment",
  "on ur birthdayyy, cheersss🍻🤍"
]; 
const pesan_ais = [
  "happy birthday bro saleuma💅🏻 akhir ",
  "tahun banget ye ultahnya wkwk bisa kali",
  " traktir susu mbok darmi enak tuuu👀",
    "semangat menerjang kalkulus sist🤘🏻",
    "semoga kita bisa terus jadi temen curhat yaa bub,",
    " bahagia selalu geulis🤍✨"
]
const pesan_naifaa = [
  "halow saleuma, happy birthdayyyy….",
  "cie 19thn tua lu wkwk🧏‍♀️",
   "terimakasih ya sudah menjadi teman, ",
   "yang sangat amat humble,",
    "bisa diajak nongkrong kemana pun,",
    " menemani kegabutan gua di dramagon",
    " yang panas itu, see u next year yaaa,",
      "mari penuhi wish list kita yang banyak ituuuu🧘‍♀️",
       "semoga dapet notif tosca dari ipbm😋",
"n the last one… i hope today be as ",
"good as u wish yaaa. HAPPY BIRTHDAY💗"
]
const pesan_aku = [
  "wihh HBDD lucuu gaa pesan dari merekaa??",
  "kalo dari aku sih semoga diumur yang ",
  "semakin tua semakin baik dan semakin",
  " bermanfaat buat orang lain",
  "Tetapp semangaatt i will always be with youu"
]
// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 6;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

let hasTypedLyrics = [false, false, false, false, false]; // Array untuk menyimpan status pengetikan

function goNextPage() {
    if(currentLocation <= maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                if (!hasTypedLyrics[0]) {
                    typeLyrics(pesan_arin, "pesan-arin");
                    hasTypedLyrics[0] = true;
                }
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                if (!hasTypedLyrics[1]) {
                  typeLyrics(pesan_ais, "pesan-ais");
                  hasTypedLyrics[1] = true;
              }
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                if (!hasTypedLyrics[2]) {
                  typeLyrics(pesan_naifaa, "pesan-naifa");
                  hasTypedLyrics[2] = true;
              }
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                if (!hasTypedLyrics[3]) {
                  typeLyrics(pesan_aku, "pesan-aku");
                  hasTypedLyrics[3] = true;
              }
                break;
            case 5:
              paper5.classList.add("flipped");
              paper5.style.zIndex = 5;
              closeBook(false);
              break;
           
            case 6:
                document.getElementById('scrapbook').classList.add('hidden');
                document.getElementById('message-form').classList.remove('hidden');
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:
                
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6:
                  openBook(true);
                  paper5.classList.remove("flipped");
                  paper5.style.zIndex = 1;
                  break;
              
            default:
                throw new Error("unknown state");
        }

        currentLocation--;
    }
}

}
function showMessageForm() {
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('message-form').classList.remove('hidden');
}

function sendToWhatsApp() {
    const message = document.getElementById('user-message').value;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6282179475296?text=${encodedMessage}`, '_blank');
}


(function () {
    'use strict';
    
    var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d'),
        W = canvas.width = window.innerWidth,
        H = canvas.height = window.innerHeight,
        maxP = 700,
        minP = 1000,
        fireworks = [];
    
    function tick() {
      var newFireworks = [];
      ctx.clearRect(0, 0, W, H);
      
      fireworks.forEach(function (firework) {
        firework.draw();
        if (!firework.done) newFireworks.push(firework);
      });
      
      fireworks = newFireworks;
      window.requestAnimationFrame(tick);
    }
    
    function Vector(x, y) {
      this.x = x;
      this.y = y;
    }
    
    Vector.prototype = {
      constructor: Vector,
      
      add: function (vector) {
        this.x += vector.x;
        this.y += vector.y;
      },
      
      diff: function (vector) {
        var target = this.copy();
        return Math.sqrt(
          (target.x-=vector.x) * target.x + (target.y-=vector.y) * target.y
        );
      },
      
      copy: function () {
        return new Vector(this.x, this.y);
      }
    };
    
    var colors = [
      ['rgba(179,255,129,', 'rgba(0,255,0,'], //green / white
      ['rgba(0,0,255,', 'rgba(100,217,255,'], //blue / cyan
      ['rgba(255,0,0,', 'rgba(255,255,0,'], //red / yellow
      ['rgba(145,0,213,', 'rgba(251,144,204,'] //purple / pink
    ];
    
    function Firework(start, target, speed) {
      this.start = start;
      this.pos = this.start.copy();
      this.target = target;
      this.spread = Math.round(Math.random() * (maxP-minP)) + minP;
      this.distance = target.diff(start);
      this.speed = speed || Math.random() * 5 + 15;
      this.angle = Math.atan2(target.y - start.y, target.x - start.x);
      this.velocity = new Vector(
        Math.cos(this.angle) * this.speed,
        Math.sin(this.angle) * this.speed
      );
      
      this.particals = [];
      this.prevPositions = [];
      
      var colorSet = colors[Math.round(Math.random() * (colors.length -1))];
      
      for (var i=0; i<this.spread; i++) {
        this.particals.push(new Partical(target.copy(), colorSet));
      }
    }
    
    Firework.prototype = {
      constructor: Firework,
      
      draw: function () {
        var last = this.prevPositions[this.prevPositions.length -1] || this.pos;
        
        ctx.beginPath();
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(this.pos.x, this.pos.y);
        ctx.strokeStyle = 'rgba(255,255,255,.7)';
        ctx.stroke();
        
        this.update();
      },
      
      update: function () {
        if (this.start.diff(this.pos) >= this.distance) {
          var newParticals = [];
          this.particals.forEach(function (partical) {
            partical.draw();
            if (!partical.done) newParticals.push(partical);
          });
          
          this.particals = newParticals;
          this.prevPositions = [];
          
          if (!newParticals.length) this.done = true;
        } else {
          this.prevPositions.push(this.pos.copy());
          
          if (this.prevPositions.length > 8) {
            this.prevPositions.shift();
          }
  
          this.pos.add(this.velocity);
        }
      }
    };
    
    function Partical(pos, colors) {
      this.pos = pos;
      this.ease = 0.2;
      this.speed = Math.random() * 6 + 2;
      this.gravity = Math.random() * 3 + 0.1;
      this.alpha = .8;
      this.angle = Math.random() * (Math.PI*2);
      this.color = colors[Math.round(Math.random() * (colors.length - 1))];
      this.prevPositions = [];
    }
    
    Partical.prototype = {
      constructor: Partical,
      
      draw: function () {
        var last = this.prevPositions[this.prevPositions.length -1] || this.pos;
        
        ctx.beginPath();
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(this.pos.x, this.pos.y);
        ctx.strokeStyle = this.color + this.alpha + ')';
        ctx.stroke();
        
        this.update();
      },
      
      update: function () {
        if (this.alpha <= 0) {
          this.done = true;
        } else {
          this.prevPositions.push(this.pos.copy());
          
          if (this.prevPositions.length > 10) this.prevPositions.shift();
          if (this.speed > 1) this.speed -= this.ease;
          
          this.alpha -= 0.01;
          this.gravity += 0.01;
          
          this.pos.add({
            x: Math.cos(this.angle) * this.speed,
            y: Math.sin(this.angle) * this.speed + this.gravity
          });
        }
      }
    };
    
    function addFirework(target) {
      var startPos = new Vector(W/2, H);
      target = target || new Vector(Math.random() * W, Math.random() * (H - 300));
      fireworks.push(new Firework(startPos, target));
    }
    
    canvas.addEventListener('click', function (e) {
      addFirework(new Vector(e.clientX, e.clientY))
    }, false);
    
    function randomFirework() {
      addFirework();
      window.setTimeout(randomFirework, Math.random() * 500);
    }
    
    tick();
    randomFirework();
    
  })();