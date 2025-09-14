const items = [
  { img: "./assets/image-header/restaurant-desktop.png", title: "رستوران" },
  { img: "./assets/image-header/supermarket-desktop.png", title: "سوپرمارکت" },
  { img: "./assets/image-header/dairy-desktop.png", title: "لبنیات" },
  { img: "./assets/image-header/bread-desktop.png", title: "نانوایی" },
  { img: "./assets/image-header/confectionary-desktop.png", title: "شیرینی" },
  { img: "./assets/image-header/fruit-desktop.png", title: "میوه" },
  { img: "./assets/image-header/protein-desktop.png", title: "پروتئین" },
  { img: "./assets/image-header/flower-desktop.png", title: "گل و گیاه" },
  { img: "./assets/image-header/cafe-desktop.png", title: "کافه" },
  { img: "./assets/image-header/icecream-desktop.png", title: "بستنی" },
  { img: "./assets/image-header/coffe-desktop.png", title: "قهوه و شکلات" },
  { img: "./assets/image-header/nuts-desktop.png", title: "آجیل" },
  { img: "./assets/image-header/attari-desktop.png", title: "عطاری" },
  { img: "./assets/image-header/organics_desktop_psa.png", title: "ارگانیک" },
  { img: "./assets/image-header/coffe-desktop.png", title: "محصولات طبیعی" },
  { img: "./assets/image-header/beauti-desktop.png", title: "سلامت و زیبایی" },
  { img: "./assets/image-header/desktop_9_674c202b2b4c4_other_psa.png", title: "سایر" },
];

const slider = document.getElementById("slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");


items.forEach(item => {
  const card = document.createElement("div");
  card.className = "flex flex-col w-24 h-36 cursor-pointer";
  card.innerHTML = `
    <div class="bg-violet-50 w-24 h-36 flex flex-col rounded-xl shadow-md">
      <img src="${item.img}" alt="${item.title}" class="w-24 h-24 rounded-full">
      <p class="text-center">${item.title}</p>
    </div>
  `;
  slider.appendChild(card);
});


slider.style.transition = "transform 0.5s ease-in-out";

let isSecondSlide = false;
const firstSlideCount = 13; 


nextBtn.addEventListener("click", () => {
  if (!isSecondSlide) {
    const cardWidth = slider.children[0].offsetWidth + 16;
    slider.style.transform = `translateX(${cardWidth * firstSlideCount}px)`;
    isSecondSlide = true;

    
    nextBtn.classList.add("opacity-0", "pointer-events-none");
    prevBtn.classList.remove("opacity-0", "pointer-events-none");
  }
});


prevBtn.addEventListener("click", () => {
  if (isSecondSlide) {
    slider.style.transform = `translateX(0px)`;
    isSecondSlide = false;

    // تغییر دکمه‌ها
    prevBtn.classList.add("opacity-0", "pointer-events-none");
    nextBtn.classList.remove("opacity-0", "pointer-events-none");
  }
});


const categories = [
  { img: "./assets/image-main/irani_1.jpg", title: "ایرانی" },
  { img: "./assets/image-main/fastfood_1.jpg", title: "فست‌فود" },
  { img: "./assets/image-main/kebab_1.jpg", title: "کباب" },
  { img: "./assets/image-main/pizza_1.jpg", title: "پیتزا" },
  { img: "./assets/image-main/berger_1.jpg", title: "برگر" },
  { img: "./assets/image-main/sandwich_1.jpg", title: "ساندویچ" },
  { img: "./assets/image-main/sokhari_1.jpg", title: "سوخاری" },
  { img: "./assets/image-main/italy_1.jpg", title: "پاستا" },
  { img: "./assets/image-main/seafood_1.jpg", title: "دریایی" },
  { img: "./assets/image-main/international_1.jpg", title: "بین‌الملل" },
  { img: "./assets/image-main/gilani_1.jpg", title: "گیلانی" },
];

const container = document.getElementById("category-container");

categories.forEach((category, index) => {
  const card = document.createElement("div");
  card.id = `snap${index + 1}`;
  card.className = "relative h-28 rounded-2xl border-2 border-white shadow-md/20 flex-none";

  card.innerHTML = `
    <img src="${category.img}" alt="${category.title}" class="w-full h-full rounded-2xl border-2 border-white object-cover">
    <a href="#" class="absolute w-20 h-10 bg-white bottom-[-2px] flex items-center rounded-br-xl rounded-tl-xl">
      <p class="mx-2">${category.title}</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="7.58" height="13.17" viewBox="0 0 9 16" fill="currentColor" class="text-pink-600 transition-transform duration-300 hover:-translate-x-1">
        <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
      </svg>
    </a>
  `;

  container.appendChild(card);
});

let timeLeft = 5 * 60 * 60;

  const updateTimer = () => {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById('timeAlarm').textContent = `${hours}:${minutes}:${seconds}`;

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(timer);
      alert("⏰ تایمر تموم شد!");
    }
  }

  let timer = setInterval(updateTimer, 1000);
  updateTimer();

  const items2 = [
    { img: "./assets/image-timer/zereshkpolo.jpg", title: "زرشک پلو با مرغ (ران)", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 10, rate: "4.2" },
    { img: "./assets/image-timer/kabab.jpg", title: "چلو کباب کوبیده", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 8, rate: "4.4" },
    { img: "./assets/image-timer/makhlot.jpg", title: "پیتزا مخلوط ۳۰ سانتی متری", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 10, rate: "4.2" },
    { img: "./assets/image-timer/qeyme.jpeg", title: "چلو خورشت قیمه", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 8, rate: "4.4" },
    { img: "./assets/image-timer/stanboli.jpg", title: "استرامبولی استیک پنیری", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 10, rate: "4.2" },
    { img: "./assets/image-timer/pizza-time.png", title: "پیتزا چیکن آلفردو یکنفره", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 8, rate: "4.4" },
    { img: "./assets/image-timer/stanboli.jpg", title: "استرامبولی استیک پنیری", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 10, rate: "4.2" },
    { img: "./assets/image-timer/kabab.jpg", title: "چلو کباب کوبیده", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 8, rate: "4.4" }
  ];

  const slider1 = document.getElementById("slider1");
  const nextBtn1 = document.getElementById("next1");
  const prevBtn1 = document.getElementById("prev1");

  // ساخت کارت‌ها (۴ کارت در هر اسلاید)
  items2.forEach(item => {
    const card2 = document.createElement("div");
    card2.className = "flex flex-col bg-white rounded-xl shadow-md w-56 shrink-0 cursor-pointer overflow-hidden items-center my-2";

    card2.innerHTML = `
      <h5 class="text-sm text-gray-400 mt-3">پیتزا شیلا (سعدی)</h5>
      <img src="${item.img}" alt="${item.title}" class="h-28 w-28 object-cover flex mt-5">
      <div class="p-3 flex flex-col gap-2 w-11/12 border-b-2 border-pink-600">
        <p class="text-sm font-bold line-clamp-1 flex justify-center my-7">${item.title}</p>
        <div class="flex justify-between text-xs text-gray-500">
          <span>⭐ ${item.rate}</span>
          <span>${item.remain} عدد باقی مانده</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">%۲۵ تخفیف</span>
          <div class="flex flex-col text-xs text-right">
            <span class="line-through text-gray-400">${item.oldPrice} تومان</span>
            <span class="text-pink-600 font-bold">${item.newPrice} تومان</span>
          </div>
        </div>
      </div>
    `;
    slider1.appendChild(card2);
  });


  // کنترل اسلاید
  let currentIndex = 0;
  const cardsPerView = 4;
  const totalCards = items2.length;

  // محاسبه عرض هر کارت واقعی (با gap)
  function getCardWidth() {
    const card = slider1.children[0];
    if (!card) return 0;
    const cardStyles = window.getComputedStyle(card);
    const gap = parseInt(window.getComputedStyle(slider1).gap) || 0;
    return card.offsetWidth + gap;
  }

  function updateSlider() {
    const cardWidth = getCardWidth();
    const offset = -(currentIndex * cardWidth);
    slider1.style.transform = `translateX(${offset}px)`;

    // کنترل دکمه‌ها
    if (currentIndex === 0) {
      prevBtn1.classList.add("opacity-0", "pointer-events-none");
    } else {
      prevBtn1.classList.remove("opacity-0", "pointer-events-none");
    }

    if (currentIndex >= totalCards - cardsPerView) {
      nextBtn1.classList.add("opacity-0", "pointer-events-none");
    } else {
      nextBtn1.classList.remove("opacity-0", "pointer-events-none");
    }
  }

  nextBtn1.addEventListener("click", () => {
    if (currentIndex < totalCards - cardsPerView) {
      currentIndex += cardsPerView;
      updateSlider();
    }
    
  });

  prevBtn1.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= cardsPerView;
      updateSlider();
    }
  });

  window.addEventListener("load", updateSlider);
  window.addEventListener("resize", updateSlider); // ریسپانسیو
  