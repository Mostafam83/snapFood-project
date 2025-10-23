const items = [
  { img: "./src/assets/image-header/restaurant-desktop.png", title: "رستوران" },
  { img: "./src/assets/image-header/supermarket-desktop.png", title: "سوپرمارکت" },
  { img: "./src/assets/image-header/dairy-desktop.png", title: "لبنیات" },
  { img: "./src/assets/image-header/bread-desktop.png", title: "نانوایی" },
  { img: "./src/assets/image-header/confectionary-desktop.png", title: "شیرینی" },
  { img: "./src/assets/image-header/fruit-desktop.png", title: "میوه" },
  { img: "./src/assets/image-header/protein-desktop.png", title: "پروتئین" },
  { img: "./src/assets/image-header/flower-desktop.png", title: "گل و گیاه" },
  { img: "./src/assets/image-header/cafe-desktop.png", title: "کافه" },
  { img: "./src/assets/image-header/icecream-desktop.png", title: "بستنی" },
  { img: "./src/assets/image-header/coffe-desktop.png", title: "قهوه و شکلات" },
  { img: "./src/assets/image-header/nuts-desktop.png", title: "آجیل" },
  { img: "./src/assets/image-header/attari-desktop.png", title: "عطاری" },
  { img: "./src/assets/image-header/organics_desktop_psa.png", title: "ارگانیک" },
  { img: "./src/assets/image-header/coffe-desktop.png", title: "محصولات طبیعی" },
  { img: "./src/assets/image-header/beauti-desktop.png", title: "سلامت و زیبایی" },
  { img: "./src/assets/image-header/desktop_9_674c202b2b4c4_other_psa.png", title: "سایر" },
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
  { img: "./src/assets/image-main/irani_1.jpg", title: "ایرانی" },
  { img: "./src/assets/image-main/fastfood_1.jpg", title: "فست‌فود" },
  { img: "./src/assets/image-main/kebab_1.jpg", title: "کباب" },
  { img: "./src/assets/image-main/pizza_1.jpg", title: "پیتزا" },
  { img: "./src/assets/image-main/berger_1.jpg", title: "برگر" },
  { img: "./src/assets/image-main/sandwich_1.jpg", title: "ساندویچ" },
  { img: "./src/assets/image-main/sokhari_1.jpg", title: "سوخاری" },
  { img: "./src/assets/image-main/italy_1.jpg", title: "پاستا" },
  { img: "./src/assets/image-main/seafood_1.jpg", title: "دریایی" },
  { img: "./src/assets/image-main/international_1.jpg", title: "بین‌الملل" },
  { img: "./src/assets/image-main/gilani_1.jpg", title: "گیلانی" },
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
    { img: "./src/assets/image-timer/zereshkpolo.jpg", title: "زرشک پلو با مرغ (ران)", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 10, rate: "4.2" },
    { img: "./src/assets/image-timer/kabab.jpg", title: "چلو کباب کوبیده", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 8, rate: "4.4" },
    { img: "./src/assets/image-timer/makhlot.jpg", title: "پیتزا مخلوط ۳۰ سانتی متری", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 10, rate: "4.2" },
    { img: "./src/assets/image-timer/qeyme.jpeg", title: "چلو خورشت قیمه", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 8, rate: "4.4" },
    { img: "./src/assets/image-timer/stanboli.jpg", title: "استرامبولی استیک پنیری", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 10, rate: "4.2" },
    { img: "./src/assets/image-timer/pizza-time.png", title: "پیتزا چیکن آلفردو یکنفره", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 8, rate: "4.4" },
    { img: "./src/assets/image-timer/stanboli.jpg", title: "استرامبولی استیک پنیری", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 10, rate: "4.2" },
    { img: "./src/assets/image-timer/kabab.jpg", title: "چلو کباب کوبیده", oldPrice: "۳۹۹,۰۰۰", newPrice: "۲۹۹,۰۰۰", remain: 8, rate: "4.4" }
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
  


  // --- 1. DATA ---
const restaurants = [
    { name: 'کاکتی کافه', mainImage: './src/assets/image-newsnap/kaktos.jpg', logoImage: './src/assets/image-newsnap/68d1a3cc18938.png', rating: 'جدید', category: 'کافه، چای و دمنوش، قهوه سرد', deliveryFee: '۱۵,۵۰۰ تومان', isExpress: true, },
    { name: 'فست فود نانو بیسترو', mainImage: './src/assets/image-newsnap/22.jpg', logoImage: './src/assets/image-newsnap/66ec1b7b94675.jpg', rating: '۴.۵', category: 'فست فود، پیتزا ایتالیایی، پپرونی', deliveryFee: '۲۰,۰۰۰ تومان', isExpress: false, },
    { name: 'ساندویچ روژک', mainImage: './src/assets/image-newsnap/09.jpg', logoImage: './src/assets/image-newsnap/66ec1b7b94675.jpg', rating: '۴.۱', category: 'فست فود، ساندویچ، نوستالژی', deliveryFee: '۱۷,۴۰۰ تومان', isExpress: true, },
    { name: 'آجیل و خشکبار رضا', mainImage: './src/assets/image-newsnap/02.jpg', logoImage: './src/assets/image-newsnap/68b9f14e83643.jpg', rating: 'جدید', category: 'خشکبار، آجیل، تنقلات', deliveryFee: '۳۰,۰۰۰ تومان', isExpress: false, },
    { name: 'کافه ویونا', mainImage: './src/assets/image-newsnap/47.jpg', logoImage: './src/assets/image-newsnap/66ec1b7b94675.jpg', rating: '۴.۸', category: 'کافه، کیک و شیرینی، صبحانه', deliveryFee: '۱۸,۰۰۰ تومان', isExpress: true, },
    { name: 'پیتزا هات', mainImage: './src/assets/image-newsnap/09.jpg', logoImage: './src/assets/image-newsnap/66ec1b7b94675.jpg', rating: '۴.۳', category: 'پیتزا آمریکایی، سوخاری', deliveryFee: '۲۵,۰۰۰ تومان', isExpress: true, },
    
    { name: 'کباب سرای ریحون', mainImage: './src/assets/image-main/kebab_1.jpg', logoImage: './src/assets/image-newsnap/66ec1b7b94675.jpg', rating: '۴.۶', category: 'چلوکباب، غذای ایرانی', deliveryFee: '۱۲,۰۰۰ تومان', isExpress: true, },
];

// --- 2. DOM Elements ---
const sliderTrack = document.getElementById('slider-track');
const backButton = document.getElementById('back-button');
const forwardButton = document.getElementById('forward-button');
const sliderContainer = document.getElementById('slider-container');

// --- 3. Render Cards ---
function renderCards() {
    sliderTrack.innerHTML = restaurants.map(resto => `
        <div class="flex-shrink-0 w-80 mx-2 hover:shadow-xl/30 ">
            <div class="w-full h-96 flex flex-col bg-white shadow-md rounded-lg relative overflow-hidden">
                <picture class="w-full h-1/2 block">
                    <img src="${resto.mainImage}" alt="${resto.name}" class="w-full h-full object-cover rounded-t-lg">
                </picture>
                <picture class="w-20 h-20 absolute top-1/3 left-1/2 -translate-x-1/2 border-4 border-white rounded-md shadow-lg">
                    <img src="${resto.logoImage}" alt="${resto.name} Logo" class="w-full h-full object-contain">
                </picture>
                <div class="rounded-b-lg w-full h-1/2 flex flex-col justify-center items-center pt-10 px-4 text-center">
                    <h3 class="mt-3 text-lg font-bold text-gray-800">${resto.name}</h3>
                    <div class="flex items-center mt-1">
                        <span class="ml-1 text-yellow-500">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M5.99984 9.62097L2.42572 11.5L3.10832 7.52016L0.216797 4.70163L4.21278 4.12098L5.99984 0.5L7.7869 4.12098L11.7829 4.70163L8.89136 7.52016L9.57395 11.5L5.99984 9.62097Z"></path></svg>
                        </span>
                        <p class="text-sm font-semibold">${resto.rating}</p>
                    </div>
                    <p class="text-xs text-gray-500 mt-1 truncate w-full">${resto.category}</p>
                    <div class="flex items-center shadow-xl rou text-xs mt-3 text-gray-600">
                       ${resto.isExpress ? `<span class="ml-1 shadow-2xl"><svg width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="#676A70"><path d="M14.5832 9.58325C14.1229 9.58325 13.7498 9.95635 13.7498 10.4166C13.7498 10.8768 14.1229 11.2499 14.5832 11.2499C15.0434 11.2499 15.4165 10.8768 15.4165 10.4166C15.4165 9.95635 15.0434 9.58325 14.5832 9.58325Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.55167 17.6256C5.58545 18.4597 3.42815 17.2569 2.99477 15.2849L2.80188 15.3599C2.54548 15.4596 2.25639 15.4264 2.02933 15.2711C1.80228 15.1157 1.6665 14.8584 1.6665 14.5833L1.6665 9.16659C1.6665 6.62223 2.7184 4.66703 4.31719 3.36431C5.89569 2.07812 7.96582 1.45825 9.99984 1.45825C12.0339 1.45825 14.104 2.07812 15.6825 3.36431C17.2813 4.66703 18.3332 6.62223 18.3332 9.16659V12.4999C18.3332 12.8344 18.1332 13.1364 17.8253 13.2671L7.55167 17.6256ZM9.90247 7.08896L3.45858 7.84706C3.73253 6.47175 4.43547 5.41782 5.36998 4.65636C6.60398 3.65088 8.28385 3.12492 9.99984 3.12492C11.7158 3.12492 13.3957 3.65088 14.6297 4.65636C15.8434 5.64531 16.6665 7.12761 16.6665 9.16659V11.9482L6.90075 16.0913C5.83543 16.5432 4.65792 15.7992 4.58658 14.6659L10.3019 12.4433C10.6222 12.3187 10.8332 12.0103 10.8332 11.6666V7.91659C10.8332 7.67861 10.7314 7.45199 10.5536 7.29386C10.3758 7.13572 10.1388 7.06115 9.90247 7.08896ZM9.1665 11.0965L3.33317 13.365L3.33317 9.53998L9.1665 8.85371L9.1665 11.0965Z"></path></svg></span><p>ارسال اکسپرس</p><span class="mx-2">·</span>` : ''}
                       <span>${resto.deliveryFee}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// --- 4. Slider Logic ---
let currentPage = 0;
let visibleCards = 0;

function updateSlider() {
    const card = sliderTrack.querySelector('.flex-shrink-0');
    if (!card) return;
    
    const cardWidth = card.offsetWidth;
    const cardMargin = parseInt(window.getComputedStyle(card).marginLeft) + parseInt(window.getComputedStyle(card).marginRight);
    const totalCardWidth = cardWidth + cardMargin;

    visibleCards = Math.floor(sliderContainer.offsetWidth / totalCardWidth);
    const totalPages = Math.ceil(restaurants.length / visibleCards);

    // RTL logic: Positive translateX moves the track to the right, showing items from the left.
    const offset = currentPage * visibleCards * totalCardWidth;
    sliderTrack.style.transform = `translateX(${offset}px)`;

    // Show/Hide Back (Previous) Button
    if (currentPage === 0) {
        backButton.classList.add('opacity-0', 'pointer-events-none');
    } else {
        backButton.classList.remove('opacity-0', 'pointer-events-none');
    }

    // Show/Hide Forward (Next) Button
    if (currentPage >= totalPages - 1) {
        forwardButton.classList.add('opacity-0', 'pointer-events-none');
    } else {
        forwardButton.classList.remove('opacity-0', 'pointer-events-none');
    }
}

// --- 5. Event Listeners ---
forwardButton.addEventListener('click', () => {
    const totalPages = Math.ceil(restaurants.length / visibleCards);
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateSlider();
    }
});

backButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateSlider();
    }
});

window.addEventListener('resize', () => {
    currentPage = 0; // Reset to first page on resize
    updateSlider();
});

// --- 6. Initialization ---
renderCards();
// A small delay to ensure layout is calculated before running the slider logic
setTimeout(updateSlider, 100);