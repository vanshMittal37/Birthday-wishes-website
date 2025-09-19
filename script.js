 document.addEventListener("click", function() {
    const audio = document.getElementById("bg-music");
    audio.muted = false;
    audio.play();
  });

for (let i = 0; i < 10; i++) {
  const b = document.createElement("img");
  b.className = "landing-balloon";
  b.src = "/public/balloon.png"; // <-- save balloon PNG in same folder
  b.style.left = Math.random() * 100 + "vw";
  b.style.animationDuration = 6 + Math.random() * 6 + "s";
  b.style.animationDelay = Math.random() * 5 + "s";
  document.getElementById("landing").appendChild(b);
}

/* Floating sparkles for eye-catching effect */
for (let i = 0; i < 24; i++) {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.style.left = Math.random() * 100 + "vw";
  s.style.bottom = Math.random() * 215 + "px";
  s.style.width = 6 + Math.random() * 18 + "px";
  s.style.height = s.style.width;
  s.style.animationDuration = 3.8 + Math.random() * 5.4 + "s";
  s.style.animationDelay = Math.random() * 7 + "s";
  document.getElementById("landing").appendChild(s);
}

/* Cake click to hide landing */
document.getElementById("cake").addEventListener("click", () => {
  document.getElementById("landing").classList.add("hidden");
});

/* Confetti */
const c = document.getElementById("confetti");
const cx = c.getContext("2d");
function sizeCanvas() {
  c.width = innerWidth;
  c.height = innerHeight;
}
sizeCanvas();
addEventListener("resize", sizeCanvas);
const flakes = Array.from({ length: 140 }, () => ({
  x: Math.random() * innerWidth,
  y: Math.random() * innerHeight,
  s: Math.random() * 6 + 2,
  sp: Math.random() * 2 + 1,
  h: Math.floor(Math.random() * 360),
}));
function confetti() {
  cx.clearRect(0, 0, c.width, c.height);
  for (const f of flakes) {
    cx.strokeStyle = `hsl(${f.h},100%,60%)`;
    cx.lineWidth = f.s / 2;
    cx.beginPath();
    cx.moveTo(f.x, f.y);
    cx.lineTo(f.x + f.s * Math.sin(f.h), f.y + f.s);
    cx.stroke();
    f.y += f.sp + 0.5;
    f.x += Math.sin(f.h / 15);
    if (f.y > innerHeight) {
      f.y = -10;
      f.x = Math.random() * innerWidth;
    }
  }
  requestAnimationFrame(confetti);
}
confetti();

/* Balloons */
for (let i = 0; i < 14; i++) {
  const b = document.createElement("div");
  b.className = "balloon";
  b.style.left = Math.random() * 100 + "vw";
  b.style.background = `hsl(${Math.random() * 25}, 95%, 60%)`;
  b.style.animationDuration = 8 + Math.random() * 6 + "s";
  document.body.appendChild(b);
}

/* Galleries data */
const galleries = {
  memories: [
    {
      src: "birthday_memories/W1 (1).jpg",
      cap: "A birthday as sweet as all your favorite chocolates. Feeling so much joy and love! 🍫✨",
    },
    {
      src: "birthday_memories/W1 (2).jpg",
      cap: "Blowing kisses to everyone who made my day so special. Thank you for all the love! 😘",
    },
    {
      src: "birthday_memories/W1 (3).jpg",
      cap: "Finally 18!!! Looks very excited for this new chapter. Ready for all the adventures ahead 🥳",
    },
    {
      src: "birthday_memories/W1 (4).jpg",
      cap: "Stepping into our new chapter with a little bit of sparkle ✨",
    },
    {
      src: "birthday_memories/W1 (5).jpg",
      cap: "That birthday glow! Feeling cute, happy, and so very celebrated 😊",
    },
    {
      src: "birthday_memories/W1 (6).jpg",
      cap: "The first bite of birthday cake is pure happiness! Definitely the best part of the day.🎂",
    },
    {
      src: "birthday_memories/W1 (7).jpg",
      cap: "Making a wish for the year ahead. Feeling so blessed and happy.🕯",
    },
    { src: "birthday_memories/W1 (8).jpg", cap: "Birthday queen for a day 👑" },
    {
      src: "birthday_memories/W1 (9).jpg",
      cap: "Switching up the look but keeping the birthday vibes going.💙",
    },
    {
      src: "birthday_memories/W1 (10).jpg",
      cap: "Cherishing these precious memories.❤",
    },
    {
      src: "birthday_memories/W1 (11).jpg",
      cap: "Soaking in the birthday spotlight. Feeling happy and celebrated! 👑✨",
    },
    {
      src: "birthday_memories/W1 (12).jpg",
      cap: "Stepping into a new year with confidence and a whole lot of sparkle. ✨🎉",
    },
    {
      src: "birthday_memories/W1 (13).jpg",
      cap: "That Friday feeling with the best people. Blurry moments make the best memories. 💃❤",
    },
    {
      src: "birthday_memories/W1 (14).jpg",
      cap: "All smiles with my favorite girls. Sending love to my squad! 👯‍♀💕",
    },
    {
      src: "birthday_memories/W1 (15).jpg",
      cap: "Good times and happy selfies with this one. 😊🤳",
    },
    {
      src: "birthday_memories/W1 (16).jpg",
      cap: "Good food and even better company. Couldnot ask for more. 🍕❤",
    },
    {
      src: "birthday_memories/W1 (17).jpg",
      cap: "Kicking off the celebration with the entire crew. Best Friday ever! 🎉🤩",
    },
    {
      src: "birthday_memories/W1 (18).jpg",
      cap: "Birthday shenanigans with my favorite people. Pizza night is always a good idea! 🍕🥳",
    },
    {
      src: "birthday_memories/W1 (19).jpg",
      cap: "Just a fun, happy moment captured with these two. 😄✌",
    },
    {
      src: "birthday_memories/W1 (20).jpg",
      cap: "Making memories with the best people around the table. ❤🥰",
    },
    {
      src: "birthday_memories/W1 (21).jpg",
      cap: "Triple the smiles, double the peace ✌️🎉 Birthday vibes at their best!",
    },
    {
      src: "birthday_memories/W1 (22).jpg",
      cap: "Squad goals unlocked! 💖👭👫 Celebrating friendship and fun 🎁🎈",
    },
  ],
  school: [
    {
      src: "school_gossip/sg (1).jpg",
      cap: "Three smiles are better than one! 🤩 Cherishing moments with my besties.✨",
    },
    {
      src: "school_gossip/sg (2).jpg",
      cap: "A fun day out, making new friends with this unique statue! 🧑‍🤝‍🧑😁",
    },
    {
      src: "school_gossip/sg (3).jpg",
      cap: "✨ A blurry beautiful Tuesday, just me and my thoughts. 🌸 Capturing the calm in time. ⏰",
    },
    {
      src: "school_gossip/sg (4).jpg",
      cap: "A blurry but beautiful Tuesday with a special someone. 🥰 Captured a moment in time! ⏰",
    },
    {
      src: "school_gossip/sg (5).jpg",
      cap: "Double the fun, double the style! 👯 Rocking these hats with my favorite person.",
    },
    {
      src: "school_gossip/sg (6).jpg",
      cap: "Feeling good, looking good! 😎 That perfect smile on a perfect day. 😊",
    },
    {
      src: "school_gossip/sg (7).jpg",
      cap: "Twinning vibes, double the charm! 👯 Sharing smiles and style with my favorite person. ❤",
    },
    {
      src: "school_gossip/sg (8).jpg",
      cap: "School memories are the best memories. 🏫 Friends who study together, stay together! 📚",
    },
    {
      src: "school_gossip/sg (9).jpg",
      cap: "Playgrounds and corridors hold the best stories. 🏃‍♂✨ Friends who laugh together, shine together! 🌟",
    },
    {
      src: "school_gossip/sg (10).jpg",
      cap: "Good times and great company. 🎉 Celebrating with the crew! 🥳",
    },
    {
      src: "school_gossip/sg (11).jpg",
      cap: "A classic moment with the best crew. 🖤 Good times with the best people. ✨",
    },
    {
      src: "school_gossip/sg (12).jpg",
      cap: "Unleashing our inner mystery! 👻 Ready to take on the night with our wings on. 🦋",
    },
    {
      src: "school_gossip/sg (13).jpg",
      cap: "Party mode activated! 🎉 Celebrating with my people. 🎂",
    },
    {
      src: "school_gossip/sg (14).jpg",
      cap: "Stepping into the night with a spark of magic ✨ Cloaked in mystery, but flying free with my wings. 🦇🦋 😅",
    },
    {
      src: "school_gossip/sg (15).jpg",
      cap: "A perfect evening filled with good company and great vibes. 🎶✨",
    },
    {
      src: "school_gossip/sg (16).jpg",
      cap: "All smiles in our happy place! 😄✨ Making memories, one laugh at a time.",
    },
    {
      src: "school_gossip/sg (17).jpg",
      cap: "All smiles and good times with this one! 😊💖 So glad we got to hang out.",
    },
    {
      src: "school_gossip/sg (18).jpg",
      cap: "Squad goals! 💯 So glad to be with your favorite people. ✨",
    },
    {
      src: "school_gossip/sg (19).jpg",
      cap: "Great vibes and even better company! ❤ Fun times with the crew. 🎉",
    },
    {
      src: "school_gossip/sg (20).jpg",
      cap: "Enjoying a chill moment together. 😌 Good food and even better company. 🍔🍟",
    },
    {
      src: "school_gossip/sg (21).jpg",
      cap: "Making memories, one selfie at a time. 📸",
    },
    {
      src: "school_gossip/sg (22).jpg",
      cap: "All smiles and good vibes with a great friend. 😄",
    },
    {
      src: "school_gossip/sg (23).jpg",
      cap: "The best kind of hugs and the best kind of friends. 🤗 So grateful for you.",
    },
    {
      src: "school_gossip/sg (24).jpg",
      cap: "A sweet moment captured with my girl. 🥰 So glad we got to hang out.",
    },
    {
      src: "school_gossip/sg (26).jpg",
      cap: "Mirror, mirror on the wall, who is the best group of all? Us! 😉 Capturing a fun moment. ✨",
    },
    {
      src: "school_gossip/sg (27).jpg",
      cap: "Winter adventures with my favorite crew! ❄ Making the best memories together. 🫶",
    },
    {
      src: "school_gossip/sg (28).jpg",
      cap: "A day filled with laughter and good company. 😄 So happy to have these friends. ❤",
    },
    {
      src: "school_gossip/sg (29).jpg",
      cap: "Bundled up and smiling! 😊 Cold weather cannot stop the fun with my bestiee. 🧣",
    },
    {
      src: "school_gossip/sg (30).jpg",
      cap: " The perfect trio. ✨ Soaking up the sunshine with my besties ☀ (shh… don’t tell the 4th one 🤫😂)",
    },
    {
      src: "school_gossip/sg (31).jpg",
      cap: "The perfect trio! 💖 So happy to be with you both. ✨",
    },
    {
      src: "school_gossip/sg (32).jpg",
      cap: "Making new friends at the museum! 🖼 This statue has some serious style. ✨ 😂",
    },
    {
      src: "school_gossip/sg (33).jpg",
      cap: "Enjoying the bus ride and the view. 🚌 Ready for the adventure! 🗺",
    },
    {
      src: "school_gossip/sg (34).jpg",
      cap: "Bus rides with my favorite people! 🚌 Smiles all around. 😊",
    },
    {
      src: "school_gossip/sg (35).jpg",
      cap: "Earphones in, world out. 🎶 Just me, my playlist, and good vibes. 😎✨",
    },
    {
      src: "school_gossip/sg (36).jpg",
      cap: "A little bit of science and a whole lot of fun. 💀🚲 Learning something new",
    },
    {
      src: "school_gossip/sg (37).jpg",
      cap: "Bus ride vibes with the gang! 🚌✨ Laughs, chaos, and a little mystery",
    },
  ],
  bestie: [
    {
      src: "bestie_moment/BM (1).jpg",
      cap: "Making beautiful memories with my bestie 🌸💕",
    },
    {
      src: "bestie_moment/BM (2).jpg",
      cap: "A dreamy Wednesday throwback to cherished moments",
    },
    {
      src: "bestie_moment/BM (3).jpg",
      cap: "Smiling together in ethnic grace ✨",
    },
    {
      src: "bestie_moment/BM (4).jpg",
      cap: 'Good vibes only when I"m with my bestiee 🖼',
    },
    {
      src: "bestie_moment/BM (5).jpg",
      cap: "Friendship and tradition, the perfect combination ❤",
    },
    {
      src: "bestie_moment/BM (6).jpg",
      cap: "Peace, love, and fun times with bestiee ✌",
    },
  ],
  Cuteness: [
    {
      src: "cuteness_Ahead/I9 (1).jpg",
      cap: "Bright smile Brightning the world 🌸💖",
    },
    {
      src: "cuteness_Ahead/I9 (2).jpg",
      cap: "Sweet little face full of joy 😇✨",
    },
    {
      src: "cuteness_Ahead/I9 (3).jpg",
      cap: "Joyful expression in sunlight 🌟",
    },
    {
      src: "cuteness_Ahead/I9 (4).jpg",
      cap: "Playful cutie stealing my heart 💕🥰",
    },
    { src: "cuteness_Ahead/I9 (5).jpg", cap: "Cheerful mood in soft glow 🌹❤" },
    {
      src: "cuteness_Ahead/I9 (6).jpg",
      cap: "Peaceful child enjoying nature 🤭🤭🤪",
    },
    {
      src: "cuteness_Ahead/I9 (7).jpg",
      cap: "Cheerful cuteness in gentle pose 😊💞",
    },
    {
      src: "cuteness_Ahead/I9 (8).jpg",
      cap: "Relaxed face under daylight 🧸💝",
    },
    {
      src: "cuteness_Ahead/I9 (9).jpg",
      cap: "Beautiful smile I adore forever 🌷😍",
    },
  ],
  // I9 (1).jpg – Sweetheart smile brightening my world
  // I9 (2).jpg – Little angel glowing with joy
  // I9 (3).jpg – Darling eyes full of wonder 🌟👀
  // I9 (4).jpg – Playful cutie stealing my heart 💕🥰
  // I9 (5).jpg – Lovely soul shining with love 🌹❤
  // I9 (6).jpg – Precious charm melting my heart 💖🌈
  // I9 (7).jpg – Sweet darling full of happiness 😊💞
  // I9 (8).jpg – Tiny treasure loved so deeply 🧸💝
  // I9 (9).jpg – Beautiful smile I adore forever 🌷😍
};

const overlay = document.getElementById("overlay");
const closeModal = document.getElementById("closeModal");
const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const modalTitle = document.getElementById("modalTitle");
const prevBtn = document.getElementById("prevImg");
const nextBtn = document.getElementById("nextImg");

let currentGallery = [];
let currentIndex = 0;
let autoPlayInterval = null;

function showImage(index) {
  if (currentGallery.length === 0) return;

  currentIndex = (index + currentGallery.length) % currentGallery.length;

  const item = currentGallery[currentIndex];

  // हर बार नया src assign करके browser को force reload कराओ
  galleryImage.src = item.src + "?v=" + new Date().getTime();

  // पहले caption clear करके दोबारा set करो (UI lag fix)
  galleryCaption.textContent = "";
  setTimeout(() => {
    galleryCaption.textContent = item.cap || "";
  }, 50);
}

function openGallery(key) {
  currentGallery = galleries[key] || [];
  modalTitle.textContent = key;
  overlay.classList.add("active");
  showImage(0);
  startAutoPlay();
}

function closeGallery() {
  overlay.classList.remove("active");
  stopAutoPlay();
}

// function startAutoPlay(){
//   stopAutoPlay();
//   autoPlayInterval = setInterval(()=> showImage(currentIndex+1), 3000);
// }

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
}

prevBtn.addEventListener("click", () => {
  showImage(currentIndex - 1);
  startAutoPlay();
});
nextBtn.addEventListener("click", () => {
  showImage(currentIndex + 1);
  startAutoPlay();
});
closeModal.addEventListener("click", closeGallery);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeGallery();
});

document.querySelectorAll(".fcard").forEach((el) => {
  el.addEventListener("click", () => openGallery(el.dataset.key));
});
