// ប្តូរទំព័រដោយរលូន
function goToPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    setTimeout(() => {
        document.getElementById(`page${pageNumber}`).classList.add('active');
    }, 150);
}

// បើកសៀវភៅកំណត់ហេតុសម្ងាត់
function openDiary() {
    document.getElementById('bookCover').style.display = 'none';
    document.getElementById('bookContent').style.display = 'block';
    document.getElementById('diaryBook').style.cursor = 'default';
}

// ប្តូររូបភាព Polaroid ចំនួន ៥ រូប ជាមួយអត្ថបទផ្អែមល្ហែមទាក់ទងនឹងខួបកំណើតនិងក្ដីស្រឡាញ់
let photoIndex = 0;
const photos = [
    {
        img: "1.jpg",
        text: '<i class="fa-solid fa-heart"></i>Every Smile of Yours is My Treasure ✨ '
    },
    {
        img: "2.jpg",
        text: '<i class="fa-solid fa-star"></i> Happy Birthday Jee NITA 🎂'
    },
    {
        img: "3.jpg",
        text: '<i class="fa-solid fa-cake-candles"></i>  The Day My Heart Chose You 💕'
    },
    {
        img: "4.jpg",
        text: '<i class="fa-solid fa-face-smile"></i> You Make My Life So Beautiful 💖'
    },
    {
        img: "5.jpg",
        text: '<i class="fa-solid fa-infinity"></i> Growing Old Together Forever ♾️'
    },
    {
        img: "6.jpg",
        text: '<i class="fa-solid fa-gift"></i> The Greatest Gift is Having You 🎁'
    },
    {
        img: "7.jpg",
        text: '<i class="fa-solid fa-sun"></i> You Light Up My World Every Day ☀️'
    },
];

function switchPolaroidPhoto() {
    const card = document.getElementById('polaroidCard');
    const imgElement = document.getElementById('polaroidImg');
    const textElement = document.getElementById('polaroidText');

    card.style.transform = "rotate(-12deg) scale(0.94)";
    
    setTimeout(() => {
        photoIndex = (photoIndex + 1) % photos.length;
        imgElement.src = photos[photoIndex].img;
        textElement.innerHTML = photos[photoIndex].text;
        
        card.style.transform = "rotate(4deg) scale(1)";
    }, 200);
}

// កាត់នំខេក
function cutCake() {
    document.getElementById('cuttingLine').style.height = '100%';
    setTimeout(() => {
        document.getElementById('birthdayCake').innerHTML = '<i class="fa-solid fa-cake-candles" style="color: #ff4d6d;"></i> ✨';
        document.getElementById('knifeBtn').style.display = 'none';
        document.getElementById('cakeNextBtn').style.display = 'inline-flex';
    }, 600);
}

// បង្ហាញបំណងប្រាថ្នាពេលចុចលើពពុះគ្រីស្តាល់
function revealWish(element, message) {
    document.getElementById('wishDisplay').innerHTML = `<p>${message}</p>`;
    document.querySelectorAll('.crystal-bubble').forEach(b => {
        b.style.background = 'rgba(255, 255, 255, 0.85)';
        b.style.color = '#9e324f';
    });
    element.style.background = '#d85777';
    element.style.color = 'white';
}

// បើកប្រអប់កាដូព្រីមៀម
function openGiftBox() {
    document.getElementById('giftBox').innerHTML = '<i class="fa-solid fa-teddy-bear" style="color: #ff6b8b;"></i>🤍';
    document.getElementById('finalMessage').innerHTML = "🎉 Happy Birthday to my absolute everything! Thank you for existing and making my life complete. I love you endlessly! 🎂❤️✨";
}