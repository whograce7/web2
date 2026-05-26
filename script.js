/* ===================== METEOR & SPACE EFFECTS ===================== */
function createMeteorBackground() {
    const meteorContainer = document.createElement('div');
    meteorContainer.className = 'meteor-container';
    
    const starsBackground = document.createElement('div');
    starsBackground.className = 'stars-background';
    
    // Create stars
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsBackground.appendChild(star);
    }
    
    // Create floating particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        starsBackground.appendChild(particle);
    }
    
    meteorContainer.appendChild(starsBackground);
    document.body.insertBefore(meteorContainer, document.body.firstChild);
    
    // Start meteor effect
    createMeteors(meteorContainer);
}

function createMeteors(container) {
    function spawnMeteor() {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        
        // Random start position (top area)
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * 100 - 100;
        
        meteor.style.left = startX + 'px';
        meteor.style.top = startY + 'px';
        
        // Random animation duration (2-5 seconds)
        const duration = Math.random() * 3 + 2;
        meteor.style.animationDuration = duration + 's';
        
        // Random animation variant
        const variants = ['meteorFall', 'meteorFallVar1', 'meteorFallVar2'];
        const randomVariant = variants[Math.floor(Math.random() * variants.length)];
        meteor.style.animationName = randomVariant;
        
        const starsBackground = container.querySelector('.stars-background');
        starsBackground.appendChild(meteor);
        
        // Remove meteor after animation completes
        setTimeout(() => {
            meteor.remove();
        }, duration * 1000);
    }
    
    // Spawn meteors every 1.5 seconds
    setInterval(spawnMeteor, 1500);
    
    // Spawn first meteor immediately
    spawnMeteor();
}

// Initialize meteor background
document.addEventListener('DOMContentLoaded', createMeteorBackground);

/* ===================== WAIFU DATA & FUNCTIONALITY ===================== */
const waifuData = [
    { id: 1, name: "Rem", anime: "Re:Zero", genre: "isekai", image: "https://i.ibb.co.com/LzMJBy6c/52917364367731988.jpg", description: "Demon maid biru yang setia", rating: 9.2 },
    { id: 2, name: "Asuna", anime: "Sword Art Online", genre: "seinen", image: "https://i.ibb.co.com/gL3Vdg63/121597258681435563.jpg", description: "Pemain SAO yang kuat", rating: 8.9 },
    { id: 3, name: "Mitsuri", anime: "Demon Slayer", genre: "shounen", image: "https://i.ibb.co.com/spcbZnhj/No-ze.jpg", description: "Love Hashira berambut pink", rating: 9.1 },
    { id: 4, name: "Emilia", anime: "Re:Zero", genre: "isekai", image: "https://i.ibb.co.com/rG5kTD5g/Emilia-From-Re-zero.jpg", description: "Kandidat Raja", rating: 8.7 },
    { id: 5, name: "Zero Two", anime: "Darling in the Franxx", genre: "shoujo", image: "https://i.ibb.co.com/8gxqHGj7/icon.jpg", description: "Pilot hybrid dengan tanduk", rating: 9.3 },
    { id: 6, name: "Chika", anime: "Kaguya-sama", genre: "shoujo", image: "https://i.ibb.co.com/hJQZXpqZ/Chika-Fujiwara-Kaguya-sama-Love-Is-War.jpg", description: "Vice President penuh energi", rating: 9.0 },
    { id: 7, name: "Makima", anime: "Chainsaw Man", genre: "seinen", image: "https://i.ibb.co.com/wrdzN8pp/61994932366130325.jpg", description: "Control Devil misterius", rating: 8.8 },
    { id: 8, name: "Saber", anime: "Fate Series", genre: "seinen", image: "https://i.ibb.co.com/4bp00nQ/51791464458280008.jpg", description: "Servant legendaris", rating: 9.2 },
    { id: 9, name: "Ochako", anime: "My Hero Academia", genre: "shounen", image: "https://i.ibb.co.com/8LVyGjQZ/ochakouraraka-mha.jpg", description: "Siswa UA dengan quirk gravity", rating: 8.6 },
    { id: 10, name: "Anya", anime: "Spy x Family", genre: "shoujo", image: "https://i.ibb.co.com/k6sjZ5Sw/image.jpg", description: "Esper menggemaskan", rating: 9.4 },
    { id: 11, name: "Shinobu", anime: "Demon Slayer", genre: "shounen", image: "https://i.ibb.co.com/6R5cppKt/66920744457988876.jpg", description: "Insect Hashira berbisa", rating: 9.0 },
    { id: 12, name: "Momo", anime: "My Hero Academia", genre: "shounen", image: "https://i.ibb.co.com/HTwyjDh1/momo-yaoyorozu.jpg", description: "Creation Quirk user", rating: 8.8 },
    { id: 13, name: "Yor", anime: "Spy x Family", genre: "shoujo", image: "https://i.ibb.co.com/zhLpWCby/722546334009610771.jpg", description: "Mata-mata profesional", rating: 9.3 },
    { id: 14, name: "Nezuko", anime: "Demon Slayer", genre: "shounen", image: "https://i.ibb.co.com/pjnjT0ZP/7881368092142339.jpg", description: "Demon girl baik hati", rating: 8.9 },
    { id: 15, name: "Mikasa", anime: "Attack on Titan", genre: "shounen", image: "https://i.ibb.co.com/chm6VGfk/Mikasa-Ackerman-season-4-last-part.jpg", description: "Prajurit devoted", rating: 8.8 },
    { id: 16, name: "Historia", anime: "Attack on Titan", genre: "shounen", image: "https://i.ibb.co.com/hJxx1jp2/147211481568773859.jpg", description: "Ratu berambut pirang", rating: 8.5 },
    { id: 17, name: "Ram", anime: "Re:Zero", genre: "isekai", image: "https://i.ibb.co.com/RRCVpyk/391742867604707210.jpg", description: "Demon maid merah", rating: 8.8 },
    { id: 18, name: "Akame", anime: "Akame ga Kill!", genre: "seinen", image: "https://i.ibb.co.com/qF9kx2hk/294141419434876790.jpg", description: "Pembunuh profesional", rating: 8.9 },
    { id: 19, name: "Esdeath", anime: "Akame ga Kill!", genre: "seinen", image: "https://i.ibb.co.com/wNhfd3Sd/267401296616259665.jpg", description: "Jenderal Es", rating: 8.7 },
    { id: 20, name: "Leone", anime: "Akame ga Kill!", genre: "seinen", image: "https://i.ibb.co.com/CKLvBmRv/236157574202759377.jpg", description: "Petarung singa", rating: 8.8 },
    { id: 21, name: "Tohru", anime: "Miss Kobayashi's Dragon Maid", genre: "shoujo", image: "https://i.ibb.co.com/DHbv4jxW/12947917674708892.jpg", description: "Naga maid", rating: 9.1 },
    { id: 22, name: "Kanna", anime: "Miss Kobayashi's Dragon Maid", genre: "shoujo", image: "https://i.ibb.co.com/k2w4h4Hm/397020523417012504.jpg", description: "Naga kecil menggemaskan", rating: 9.0 },
    { id: 23, name: "Lucoa", anime: "Miss Kobayashi's Dragon Maid", genre: "shoujo", image: "https://i.ibb.co.com/TqdwFmnM/179299628910885215.jpg", description: "Dewi santai", rating: 8.9 },
    { id: 24, name: "Aqua", anime: "KonoSuba", genre: "isekai", image: "https://i.ibb.co.com/GfBJwpnP/454793262393262894.jpg", description: "Dewi air mudah tersinggung", rating: 8.6 },
    { id: 25, name: "Darkness", anime: "KonoSuba", genre: "isekai", image: "https://i.ibb.co.com/PsNk085z/295619163061820958.jpg", description: "Paladin masochist", rating: 8.8 },
    { id: 26, name: "Megumin", anime: "KonoSuba", genre: "isekai", image: "https://i.ibb.co.com/tpqT0kK0/T-A-G-S-pfp-pdp-pp-pfps-icon-icons.jpg", description: "Wizard explosion", rating: 9.2 },
    { id: 27, name: "C.C", anime: "Code Geass", genre: "seinen", image: "https://i.ibb.co.com/dwSrkQ9b/364650901102979922.jpg", description: "Witch immortal", rating: 9.1 },
    { id: 28, name: "Kallen", anime: "Code Geass", genre: "seinen", image: "https://i.ibb.co.com/qYtSTJjF/294071050690288079.jpg", description: "Red haired rebel", rating: 8.9 },
    { id: 29, name: "Euphemia", anime: "Code Geass", genre: "seinen", image: "https://i.ibb.co.com/WN7SPqnR/1010143391406409867.jpg", description: "Princess berhati baik", rating: 8.7 },
    { id: 30, name: "Hinata", anime: "Naruto", genre: "shounen", image: "https://i.ibb.co.com/QjjxGw7R/Hinata-Hyuga-official-illustration.jpg", description: "Hyuuga lembut", rating: 9.0 },
    { id: 31, name: "Sakura", anime: "Naruto", genre: "shounen", image: "https://i.ibb.co.com/ZqzN28n/image.jpg", description: "Kunoichi medis", rating: 8.4 },
    { id: 32, name: "Maomao", anime: "The Apothecary", genre: "isekai", image: "https://i.ibb.co.com/R4T4xNZQ/Mao-Mao.jpg", description: "Poison Maiden", rating: 8.7 },
    { id: 33, name: "Tsunade", anime: "Naruto", genre: "shounen", image: "https://i.ibb.co.com/QvWNvy0v/Narutoshippuden.jpg", description: "Hokage legendaris", rating: 8.8 },
    { id: 34, name: "Konan", anime: "Naruto", genre: "shounen", image: "https://i.ibb.co.com/VYtbC1V7/584905070396993306.jpg", description: "Paper kunoichi", rating: 8.6 },
    { id: 35, name: "Erza", anime: "Fairy Tail", genre: "shounen", image: "https://i.ibb.co.com/CNQ8hwn/82472236923571100.jpg", description: "Armor mage", rating: 9.1 },
    { id: 36, name: "Lucy", anime: "Fairy Tail", genre: "shounen", image: "https://i.ibb.co.com/xqmmHnMh/Lucy-Heartfilia-icon-Anime-Fairy-Tail.jpg", description: "Celestial wizard", rating: 8.9 },
    { id: 37, name: "Juvia", anime: "Fairy Tail", genre: "shounen", image: "https://i.ibb.co.com/bgqfN2L2/anime-fyp-explore-foryou-foryoupage-icons.jpg", description: "Water mage", rating: 8.7 },
    { id: 38, name: "Wendy", anime: "Fairy Tail", genre: "shounen", image: "https://i.ibb.co.com/wZXtPt7B/40039884185342791.jpg", description: "Dragon slayer muda", rating: 8.5 },
    { id: 39, name: "Mirajane", anime: "Fairy Tail", genre: "shounen", image: "https://i.ibb.co.com/h1KwKdK5/132856257754008948.jpg", description: "Take-over mage", rating: 9.0 },
    { id: 40, name: "Rin", anime: "Blue Exorcist", genre: "shounen", image: "https://i.ibb.co.com/C5fwkt1G/354095589464139314.jpg", description: "Half-demon", rating: 8.8 },
    { id: 41, name: "Kagura", anime: "Gintama", genre: "shounen", image: "https://i.ibb.co.com/wFtpQ0dZ/1337074888400150.jpg", description: "Alien girl", rating: 8.9 },
    { id: 42, name: "Tsukuyo", anime: "Gintama", genre: "shounen", image: "https://i.ibb.co.com/j9rQSVJ2/gintama-ginpachi-tsukuyo-ginpachi3-Z-sensei.jpg", description: "Courtesan ninja", rating: 8.7 },
    { id: 43, name: "Komi Shouko", anime: "Komi Can't Communicate", genre: "shoujo", image: "https://i.ibb.co.com/4w5S4PTT/8022105580723346.jpg", description: "Gadis cantik pemalu", rating: 9.2 },
    { id: 44, name: "Nagatoro", anime: "Don't Toy With Me", genre: "shoujo", image: "https://i.ibb.co.com/h1rdky45/116812184077578002.jpg", description: "Nakal imut", rating: 8.8 },
    { id: 45, name: "Nia", anime: "Tengen Toppa Gurren Lagann", genre: "shounen", image: "https://i.ibb.co.com/GQ5hZ3Rq/330170216450582357.jpg", description: "Putri robot", rating: 8.6 },
    { id: 46, name: "Yoko", anime: "Tengen Toppa Gurren Lagann", genre: "shounen", image: "https://i.ibb.co.com/3mp6SYwy/345299496453791969.jpg", description: "Sniper girl", rating: 8.9 },
    { id: 47, name: "Sento", anime: "Amagi Brilliant Park", genre: "shoujo", image: "https://i.ibb.co.com/FL1yVD6j/162340761545790850.jpg", description: "Robot cantik", rating: 8.7 },
    { id: 48, name: "Satanichia", anime: "Gabriel Dropout", genre: "shoujo", image: "https://i.ibb.co.com/PG4mVL7c/401805598024197601.jpg", description: "Demon girl imut", rating: 8.8 },
    { id: 49, name: "Raphiel", anime: "Gabriel Dropout", genre: "shoujo", image: "https://i.ibb.co.com/k66pQ0Vb/Raphiel-Ainsworth-Gabriel-Dropout.jpg", description: "Angel licik", rating: 8.6 },
    { id: 50, name: "Erina", anime: "JoJo's Bizarre Adventure", genre: "seinen", image: "https://i.ibb.co.com/jP2c0Ww8/311452130492804978.jpg", description: "Wanita vintage", rating: 8.5 },
    // Demons
    { id: 51, name: "Nezuko Kamado", anime: "Demon Slayer", genre: "demons", image: "https://i.ibb.co.com/pjnjT0ZP/7881368092142339.jpg", description: "Demon girl pelindung", rating: 9.1 },
    { id: 52, name: "Rias Gremory", anime: "High School DxD", genre: "demons", image: "https://i.pinimg.com/736x/0c/48/2c/0c482c5d5f2b3a7e5e5e6d7b8c9a0b1d.jpg", description: "Putri Demon berambut merah", rating: 9.0 },
    { id: 53, name: "Albedo", anime: "Overlord", genre: "demons", image: "https://i.pinimg.com/736x/1a/2b/3c/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d.jpg", description: "Overseer of the Floor Guardians", rating: 8.9 },
    { id: 54, name: "Kurumi Tokisaki", anime: "Date A Live", genre: "demons", image: "https://i.pinimg.com/736x/aa/bb/cc/aabbcc112233445566778899aabbccdd.jpg", description: "Spirit pemburu waktu", rating: 9.3 },
    { id: 55, name: "Satanichia McDowell", anime: "Gabriel Dropout", genre: "demons", image: "https://i.ibb.co.com/PG4mVL7c/401805598024197601.jpg", description: "Demon girl lucu", rating: 8.7 },
    // Ecchi
    { id: 56, name: "Yoko Littner", anime: "Gurren Lagann", genre: "ecchi", image: "https://i.ibb.co.com/3mp6SYwy/345299496453791969.jpg", description: "Sniper seksi dari bawah tanah", rating: 8.9 },
    { id: 57, name: "Lucoa", anime: "Miss Kobayashi Dragon Maid", genre: "ecchi", image: "https://i.ibb.co.com/TqdwFmnM/179299628910885215.jpg", description: "Dewi santai berpenampilan mencolok", rating: 8.7 },
    { id: 58, name: "Rangiku Matsumoto", anime: "Bleach", genre: "ecchi", image: "https://i.ibb.co.com/Y3tbf8VP/rangiku-bleach.jpg", description: "Shinigami cantik Gotei 13", rating: 8.8 },
    { id: 59, name: "Akeno Himejima", anime: "High School DxD", genre: "ecchi", image: "https://i.ibb.co.com/BtDhN0NW/akeno-dxd.jpg", description: "Ratu petir memikat", rating: 9.0 },
    // Drama
    { id: 60, name: "Violet Evergarden", anime: "Violet Evergarden", genre: "drama", image: "https://i.ibb.co.com/Ld9hNRnS/violet-evergarden.jpg", description: "Mantan senjata mencari makna cinta", rating: 9.5 },
    { id: 61, name: "Sawako Kuronuma", anime: "Kimi ni Todoke", genre: "drama", image: "https://i.ibb.co.com/SFtdpMxw/sawako-kimi-ni-todoke.jpg", description: "Gadis pendiam berhati murni", rating: 9.0 },
    { id: 62, name: "Kaori Miyazono", anime: "Your Lie in April", genre: "drama", image: "https://i.ibb.co.com/N7yFdFmh/kaori-shigatsu.jpg", description: "Violinis bebas bersemangat", rating: 9.4 },
    { id: 63, name: "Nagisa Furukawa", anime: "Clannad", genre: "drama", image: "https://i.ibb.co.com/0rsxCqpT/nagisa-clannad.jpg", description: "Gadis rapuh penuh tekad", rating: 9.2 },
    // Game
    { id: 64, name: "Asuna Yuuki", anime: "Sword Art Online", genre: "game", image: "https://i.ibb.co.com/gL3Vdg63/121597258681435563.jpg", description: "The Flash dalam SAO", rating: 9.0 },
    { id: 65, name: "Shiro", anime: "No Game No Life", genre: "game", image: "https://i.ibb.co.com/qyBgGmV6/shiro-ngnl.jpg", description: "Genius gamer berambut putih", rating: 9.1 },
    { id: 66, name: "Silica", anime: "Sword Art Online", genre: "game", image: "https://i.ibb.co.com/1dHqgS5M/silica-sao.jpg", description: "Beast tamer imut SAO", rating: 8.5 },
    { id: 67, name: "Maple", anime: "BOFURI", genre: "game", image: "https://i.ibb.co.com/4gVkLvRR/maple-bofuri.jpg", description: "Shield player overpowered", rating: 8.8 },
    // Harem
    { id: 68, name: "Chitoge Kirisaki", anime: "Nisekoi", genre: "harem", image: "https://i.ibb.co.com/PmkJwMGJ/chitoge-nisekoi.jpg", description: "Pacar pura-pura berambut pirang", rating: 8.9 },
    { id: 69, name: "Kosaki Onodera", anime: "Nisekoi", genre: "harem", image: "https://i.ibb.co.com/3zqkZ8wC/kosaki-nisekoi.jpg", description: "Gadis manis kelas satu", rating: 8.7 },
    { id: 70, name: "Koneko Toujou", anime: "High School DxD", genre: "harem", image: "https://i.ibb.co.com/gLJqwnmN/koneko-dxd.jpg", description: "Nekoshou bermata tajam", rating: 8.3 },
    { id: 71, name: "Yui Yuigahama", anime: "OreGairu", genre: "harem", image: "https://i.ibb.co.com/dWCB0Lqt/yui-oregairu.jpg", description: "Gadis populer berhati hangat", rating: 9.0 },
    // Magic
    { id: 72, name: "Megumin", anime: "KonoSuba", genre: "magic", image: "https://i.ibb.co.com/tpqT0kK0/T-A-G-S-pfp-pdp-pp-pfps-icon-icons.jpg", description: "Arch Wizard obsesi explosion", rating: 9.3 },
    { id: 73, name: "Sakura Kinomoto", anime: "Cardcaptor Sakura", genre: "magic", image: "https://i.ibb.co.com/SccGSZQv/sakura-cardcaptor.jpg", description: "Penyihir kartu ajaib", rating: 9.0 },
    { id: 74, name: "Hayate Yagami", anime: "Magical Girl Lyrical Nanoha", genre: "magic", image: "https://i.ibb.co.com/XkmjZ0xW/hayate-nanoha.jpg", description: "Mage terkuat berbakat", rating: 8.7 },
    { id: 75, name: "Kiki", anime: "Kiki Delivery Service", genre: "magic", image: "https://i.ibb.co.com/d0bbQ6XS/kiki-delivery.jpg", description: "Penyihir muda pengantar surat", rating: 9.1 },
    // Music
    { id: 76, name: "Kaori Miyazono", anime: "Your Lie in April", genre: "music", image: "https://i.ibb.co.com/N7yFdFmh/kaori-shigatsu.jpg", description: "Violinis yang mengubah hidupmu", rating: 9.5 },
    { id: 77, name: "Nino Nakano", anime: "The Quintessential Quintuplets", genre: "music", image: "https://i.ibb.co.com/DvH9yK0P/nino-quintuplets.jpg", description: "Si tsundere berambut merah muda", rating: 9.0 },
    { id: 78, name: "Kumiko Oumae", anime: "Hibike! Euphonium", genre: "music", image: "https://i.ibb.co.com/mrmSr0Jk/kumiko-hibike.jpg", description: "Pemain euphonium berdedikasi", rating: 8.8 },
    { id: 79, name: "Carole Stanley", anime: "Carole and Tuesday", genre: "music", image: "https://i.ibb.co.com/s3G7KjRR/carole-tuesday.jpg", description: "Musisi jalanan penuh semangat", rating: 8.9 },
    // === SHOUNEN TAMBAHAN ===
    { id: 80, name: "Nami", anime: "One Piece", genre: "shounen", image: "https://i.ibb.co.com/nami-one-piece.jpg", description: "Navigator ulung Straw Hat", rating: 9.0 },
    { id: 81, name: "Robin", anime: "One Piece", genre: "shounen", image: "https://i.ibb.co.com/robin-one-piece.jpg", description: "Arkeolog misterius Straw Hat", rating: 9.1 },
    { id: 82, name: "Nefertari Vivi", anime: "One Piece", genre: "shounen", image: "https://i.ibb.co.com/vivi-one-piece.jpg", description: "Putri Arabasta berhati mulia", rating: 8.7 },
    { id: 83, name: "Yamato", anime: "One Piece", genre: "shounen", image: "https://i.ibb.co.com/yamato-one-piece.jpg", description: "Putri Kaido yang kuat", rating: 9.0 },
    { id: 84, name: "Hancock", anime: "One Piece", genre: "shounen", image: "https://i.ibb.co.com/hancock-one-piece.jpg", description: "Empress paling cantik di dunia", rating: 9.2 },
    { id: 85, name: "Bulma", anime: "Dragon Ball", genre: "shounen", image: "https://i.ibb.co.com/bulma-dragonball.jpg", description: "Jenius inventor pencari Dragon Ball", rating: 8.8 },
    { id: 86, name: "Android 18", anime: "Dragon Ball Z", genre: "shounen", image: "https://i.ibb.co.com/android18-dbz.jpg", description: "Cyborg kuat berambut pirang", rating: 9.0 },
    { id: 87, name: "Winry Rockbell", anime: "Fullmetal Alchemist", genre: "shounen", image: "https://i.ibb.co.com/winry-fma.jpg", description: "Mekanik automail berbakat", rating: 8.9 },
    { id: 88, name: "Izumi Curtis", anime: "Fullmetal Alchemist", genre: "shounen", image: "https://i.ibb.co.com/izumi-fma.jpg", description: "Alchemist guru yang keras", rating: 8.8 },
    { id: 89, name: "Olivier Armstrong", anime: "Fullmetal Alchemist", genre: "shounen", image: "https://i.ibb.co.com/olivier-fma.jpg", description: "Jenderal besi dari utara", rating: 9.1 },
    { id: 90, name: "Nobara Kugisaki", anime: "Jujutsu Kaisen", genre: "shounen", image: "https://i.ibb.co.com/nobara-jjk.jpg", description: "Sorcerer paku bernyali besar", rating: 9.2 },
    { id: 91, name: "Maki Zenin", anime: "Jujutsu Kaisen", genre: "shounen", image: "https://i.ibb.co.com/maki-jjk.jpg", description: "Weapons master tanpa cursed energy", rating: 9.3 },
    { id: 92, name: "Mei Mei", anime: "Jujutsu Kaisen", genre: "shounen", image: "https://i.ibb.co.com/meimei-jjk.jpg", description: "Sorcerer profesional bertaktik cerdas", rating: 8.9 },
    { id: 93, name: "Mirko", anime: "My Hero Academia", genre: "shounen", image: "https://i.ibb.co.com/mirko-mha.jpg", description: "Rabbit Hero nomor 5", rating: 9.3 },
    { id: 94, name: "Mt. Lady", anime: "My Hero Academia", genre: "shounen", image: "https://i.ibb.co.com/mtlady-mha.jpg", description: "Hero raksasa berpopularitas tinggi", rating: 8.7 },
    { id: 95, name: "Ryuko Matoi", anime: "Kill la Kill", genre: "shounen", image: "https://i.ibb.co.com/ryuko-killakill.jpg", description: "Pejuang berseragam hidup", rating: 9.1 },
    { id: 96, name: "Satsuki Kiryuin", anime: "Kill la Kill", genre: "shounen", image: "https://i.ibb.co.com/satsuki-killakill.jpg", description: "Ratu besi berambut hitam", rating: 9.2 },
    { id: 97, name: "Ichigo", anime: "Darling in the Franxx", genre: "shounen", image: "https://i.ibb.co.com/ichigo-ditf.jpg", description: "Squad leader setia dan kuat", rating: 8.6 },
    { id: 98, name: "Retsuko", anime: "Aggretsuko", genre: "shounen", image: "https://i.ibb.co.com/retsuko-aggretsuko.jpg", description: "Red panda yang suka death metal", rating: 8.5 },
    { id: 99, name: "Revy", anime: "Black Lagoon", genre: "shounen", image: "https://i.ibb.co.com/revy-blacklagoon.jpg", description: "Penembak brutal tak kenal takut", rating: 9.0 },
    // === SHOUJO TAMBAHAN ===
    { id: 100, name: "Tohru Honda", anime: "Fruits Basket", genre: "shoujo", image: "https://i.ibb.co.com/tohru-fruitsbasket.jpg", description: "Gadis baik hati penuh semangat", rating: 9.3 },
    { id: 101, name: "Akito Sohma", anime: "Fruits Basket", genre: "shoujo", image: "https://i.ibb.co.com/akito-fruitsbasket.jpg", description: "Kepala keluarga Sohma misterius", rating: 8.8 },
    { id: 102, name: "Usagi Tsukino", anime: "Sailor Moon", genre: "shoujo", image: "https://i.ibb.co.com/usagi-sailormoon.jpg", description: "Sailor Moon sang guardian cinta", rating: 9.2 },
    { id: 103, name: "Rei Hino", anime: "Sailor Moon", genre: "shoujo", image: "https://i.ibb.co.com/rei-sailormoon.jpg", description: "Sailor Mars miko berapi", rating: 8.9 },
    { id: 104, name: "Minako Aino", anime: "Sailor Moon", genre: "shoujo", image: "https://i.ibb.co.com/minako-sailormoon.jpg", description: "Sailor Venus bintang cinta", rating: 8.8 },
    { id: 105, name: "Maka Albarn", anime: "Soul Eater", genre: "shoujo", image: "https://i.ibb.co.com/maka-souleater.jpg", description: "Meister buku berjiwa keras", rating: 8.9 },
    { id: 106, name: "Yona", anime: "Akatsuki no Yona", genre: "shoujo", image: "https://i.ibb.co.com/yona-akatsuki.jpg", description: "Putri yang bangkit jadi petarung", rating: 9.1 },
    { id: 107, name: "Haruhi Fujioka", anime: "Ouran Host Club", genre: "shoujo", image: "https://i.ibb.co.com/haruhi-ouran.jpg", description: "Scholarship student pragmatis", rating: 9.0 },
    { id: 108, name: "Misaki Ayuzawa", anime: "Kaichou wa Maid-sama", genre: "shoujo", image: "https://i.ibb.co.com/misaki-maidsama.jpg", description: "Ketua OSIS siang maid malam", rating: 9.1 },
    { id: 109, name: "Tohru Honda", anime: "Fruits Basket", genre: "shoujo", image: "https://i.ibb.co.com/tohru2-fruitsbasket.jpg", description: "Hati penuh kasih sayang", rating: 9.2 },
    { id: 110, name: "Nana Osaki", anime: "NANA", genre: "shoujo", image: "https://i.ibb.co.com/nana-osaki.jpg", description: "Vokalis punk berjiwa bebas", rating: 9.3 },
    { id: 111, name: "Nana Komatsu", anime: "NANA", genre: "shoujo", image: "https://i.ibb.co.com/nana-komatsu.jpg", description: "Gadis romantis pencari cinta", rating: 8.8 },
    { id: 112, name: "Shirayuki", anime: "Snow White with Red Hair", genre: "shoujo", image: "https://i.ibb.co.com/shirayuki-snowwhite.jpg", description: "Apoteker berambut merah berani", rating: 9.1 },
    { id: 113, name: "Chitanda Eru", anime: "Hyouka", genre: "shoujo", image: "https://i.ibb.co.com/chitanda-hyouka.jpg", description: "Gadis penasaran keturunan bangsawan", rating: 9.0 },
    { id: 114, name: "Taiga Aisaka", anime: "Toradora", genre: "shoujo", image: "https://i.ibb.co.com/taiga-toradora.jpg", description: "Palmtop Tiger tsundere terkuat", rating: 9.4 },
    { id: 115, name: "Minori Kushieda", anime: "Toradora", genre: "shoujo", image: "https://i.ibb.co.com/minori-toradora.jpg", description: "Gadis ceria penuh energi", rating: 8.7 },
    // === SEINEN TAMBAHAN ===
    { id: 116, name: "Motoko Kusanagi", anime: "Ghost in the Shell", genre: "seinen", image: "https://i.ibb.co.com/motoko-gits.jpg", description: "Cyborg polisi masa depan", rating: 9.3 },
    { id: 117, name: "Faye Valentine", anime: "Cowboy Bebop", genre: "seinen", image: "https://i.ibb.co.com/faye-cowboybebop.jpg", description: "Bounty hunter misterius", rating: 9.1 },
    { id: 118, name: "Balalaika", anime: "Black Lagoon", genre: "seinen", image: "https://i.ibb.co.com/balalaika-blacklagoon.jpg", description: "Pemimpin mafia Rusia bertato", rating: 8.9 },
    { id: 119, name: "Yoruichi Shihoin", anime: "Bleach", genre: "seinen", image: "https://i.ibb.co.com/yoruichi-bleach.jpg", description: "Goddess of Flash bertransformasi", rating: 9.3 },
    { id: 120, name: "Unohana Retsu", anime: "Bleach", genre: "seinen", image: "https://i.ibb.co.com/unohana-bleach.jpg", description: "Kenpachi pertama yang lembut", rating: 9.0 },
    { id: 121, name: "Misato Katsuragi", anime: "Neon Genesis Evangelion", genre: "seinen", image: "https://i.ibb.co.com/misato-eva.jpg", description: "Komandan NERV penuh luka", rating: 9.0 },
    { id: 122, name: "Rei Ayanami", anime: "Neon Genesis Evangelion", genre: "seinen", image: "https://i.ibb.co.com/rei-eva.jpg", description: "Pilot Eva unit 00 misterius", rating: 9.2 },
    { id: 123, name: "Asuka Langley", anime: "Neon Genesis Evangelion", genre: "seinen", image: "https://i.ibb.co.com/asuka-eva.jpg", description: "Pilot tsundere penuh trauma", rating: 9.3 },
    { id: 124, name: "Rize Kamishiro", anime: "Tokyo Ghoul", genre: "seinen", image: "https://i.ibb.co.com/rize-tokyoghoul.jpg", description: "Binge eater ghoul menggoda", rating: 8.8 },
    { id: 125, name: "Touka Kirishima", anime: "Tokyo Ghoul", genre: "seinen", image: "https://i.ibb.co.com/touka-tokyoghoul.jpg", description: "Waitress Anteiku yang kuat", rating: 9.1 },
    { id: 126, name: "Power", anime: "Chainsaw Man", genre: "seinen", image: "https://i.ibb.co.com/power-chainsawman.jpg", description: "Blood Fiend bersemangat", rating: 9.4 },
    { id: 127, name: "Himeno", anime: "Chainsaw Man", genre: "seinen", image: "https://i.ibb.co.com/himeno-chainsawman.jpg", description: "Devil Hunter yang cool", rating: 8.9 },
    { id: 128, name: "Reze", anime: "Chainsaw Man", genre: "seinen", image: "https://i.ibb.co.com/reze-chainsawman.jpg", description: "Bomb Girl misterius", rating: 9.0 },
    { id: 129, name: "Yuki Tsunoda", anime: "Berserk", genre: "seinen", image: "https://i.ibb.co.com/casca-berserk.jpg", description: "Casca pejuang wanita tangguh", rating: 9.0 },
    { id: 130, name: "Celty Sturluson", anime: "Durarara!!", genre: "seinen", image: "https://i.ibb.co.com/celty-durarara.jpg", description: "Dullahan headless kurir malam", rating: 9.1 },
    // === ISEKAI TAMBAHAN ===
    { id: 131, name: "Maple", anime: "BOFURI", genre: "isekai", image: "https://i.ibb.co.com/maple-bofuri2.jpg", description: "Perisai manusia OP dunia game", rating: 8.8 },
    { id: 132, name: "Raphtalia", anime: "Shield Hero", genre: "isekai", image: "https://i.ibb.co.com/raphtalia-shieldhero.jpg", description: "Tanuki wanita setia Shield Hero", rating: 9.2 },
    { id: 133, name: "Filo", anime: "Shield Hero", genre: "isekai", image: "https://i.ibb.co.com/filo-shieldhero.jpg", description: "Filolial peri bersayap putih", rating: 8.8 },
    { id: 134, name: "Shalltear Bloodfallen", anime: "Overlord", genre: "isekai", image: "https://i.ibb.co.com/shalltear-overlord.jpg", description: "Vampire guardian lantai 1-3", rating: 9.0 },
    { id: 135, name: "Evileye", anime: "Overlord", genre: "isekai", image: "https://i.ibb.co.com/evileye-overlord.jpg", description: "Vampire mage Adamantite rank", rating: 8.8 },
    { id: 136, name: "Silica", anime: "Sword Art Online", genre: "isekai", image: "https://i.ibb.co.com/silica-sao.jpg", description: "Dragon tamer berambut cokelat", rating: 8.5 },
    { id: 137, name: "Sinon", anime: "Sword Art Online", genre: "isekai", image: "https://i.ibb.co.com/sinon-sao.jpg", description: "Sniper terbaik GGO", rating: 9.0 },
    { id: 138, name: "Alice Zuberg", anime: "Sword Art Online", genre: "isekai", image: "https://i.ibb.co.com/alice-sao.jpg", description: "Integrity Knight berambut emas", rating: 9.1 },
    { id: 139, name: "Eris", anime: "Mushoku Tensei", genre: "isekai", image: "https://i.ibb.co.com/eris-mushokutensei.jpg", description: "Swordswomen berambut merah liar", rating: 8.9 },
    { id: 140, name: "Roxy Migurdia", anime: "Mushoku Tensei", genre: "isekai", image: "https://i.ibb.co.com/roxy-mushokutensei.jpg", description: "Mage guru pertama Rudeus", rating: 9.1 },
    { id: 141, name: "Sylphiette", anime: "Mushoku Tensei", genre: "isekai", image: "https://i.ibb.co.com/sylphie-mushokutensei.jpg", description: "Elf mage berhati baik", rating: 8.8 },
    { id: 142, name: "Shuna", anime: "That Time I Got Reincarnated as a Slime", genre: "isekai", image: "https://i.ibb.co.com/shuna-slime.jpg", description: "Putri Oni berambut merah muda", rating: 8.9 },
    { id: 143, name: "Milim Nava", anime: "That Time I Got Reincarnated as a Slime", genre: "isekai", image: "https://i.ibb.co.com/milim-slime.jpg", description: "Demon Lord terkuat dan ceria", rating: 9.2 },
    { id: 144, name: "Shion", anime: "That Time I Got Reincarnated as a Slime", genre: "isekai", image: "https://i.ibb.co.com/shion-slime.jpg", description: "Sekretaris Rimuru yang setia", rating: 8.7 },
    // === DEMONS TAMBAHAN ===
    { id: 145, name: "Doma", anime: "Demon Slayer", genre: "demons", image: "https://i.ibb.co.com/doma-kimetsu.jpg", description: "Upper Moon Two kultus sekte", rating: 8.5 },
    { id: 146, name: "Tamayo", anime: "Demon Slayer", genre: "demons", image: "https://i.ibb.co.com/tamayo-kimetsu.jpg", description: "Demon dokter yang melawan Muzan", rating: 8.9 },
    { id: 147, name: "Sucy Manbavaran", anime: "Little Witch Academia", genre: "demons", image: "https://i.ibb.co.com/sucy-littlewitchacademia.jpg", description: "Penyihir jamur misterius", rating: 8.7 },
    { id: 148, name: "Demon Girl Shamiko", anime: "Machikado Mazoku", genre: "demons", image: "https://i.ibb.co.com/shamiko-mazoku.jpg", description: "Demon girl gagal menggemaskan", rating: 9.0 },
    { id: 149, name: "Layla Heartfilia", anime: "Fairy Tail", genre: "demons", image: "https://i.ibb.co.com/layla-fairytail.jpg", description: "Celestial wizard ibunda Lucy", rating: 8.6 },
    { id: 150, name: "Morrigan Aensland", anime: "Darkstalkers", genre: "demons", image: "https://i.ibb.co.com/morrigan-darkstalkers.jpg", description: "Succubus penguasa dunia sihir", rating: 9.0 },
    { id: 151, name: "Benimaru", anime: "That Time I Got Reincarnated as a Slime", genre: "demons", image: "https://i.ibb.co.com/benimaru-slime.jpg", description: "Oni api terkuat Tempest", rating: 8.8 },
    { id: 152, name: "Ramiris", anime: "That Time I Got Reincarnated as a Slime", genre: "demons", image: "https://i.ibb.co.com/ramiris-slime.jpg", description: "Fairy Demon Lord mini lucu", rating: 8.7 },
    // === ECCHI TAMBAHAN ===
    { id: 153, name: "Darkness Lalatina", anime: "KonoSuba", genre: "ecchi", image: "https://i.ibb.co.com/darkness-konosuba.jpg", description: "Crusader masochist tak terkalahkan", rating: 8.9 },
    { id: 154, name: "Momo Belia Deviluke", anime: "To Love Ru Darkness", genre: "ecchi", image: "https://i.ibb.co.com/momo-toloverudark.jpg", description: "Adik Lala yang manipulatif", rating: 8.8 },
    { id: 155, name: "Nana Deviluke", anime: "To Love Ru", genre: "ecchi", image: "https://i.ibb.co.com/nana-toloveru.jpg", description: "Adik Lala pecinta binatang", rating: 8.6 },
    { id: 156, name: "Xenovia Quarta", anime: "High School DxD", genre: "ecchi", image: "https://i.ibb.co.com/xenovia-dxd.jpg", description: "Eks exorcist pengguna Excalibur", rating: 8.9 },
    { id: 157, name: "Asia Argento", anime: "High School DxD", genre: "ecchi", image: "https://i.ibb.co.com/asia-dxd.jpg", description: "Nun penyembuh berambut pirang", rating: 8.7 },
    { id: 158, name: "Koneko Toujou", anime: "High School DxD", genre: "ecchi", image: "https://i.ibb.co.com/koneko-dxd.jpg", description: "Nekoshou mungil bermata serius", rating: 8.8 },
    { id: 159, name: "Irina Shidou", anime: "High School DxD", genre: "ecchi", image: "https://i.ibb.co.com/irina-dxd.jpg", description: "Angel cheerful mantan exorcist", rating: 8.6 },
    { id: 160, name: "Rias Gremory", anime: "High School DxD", genre: "ecchi", image: "https://i.ibb.co.com/rias2-dxd.jpg", description: "Crimson-haired Ruin Princess", rating: 9.2 },
    // === DRAMA TAMBAHAN ===
    { id: 161, name: "Shigatsu Kaori", anime: "Your Lie in April", genre: "drama", image: "https://i.ibb.co.com/kaori2-shigatsu.jpg", description: "Cahaya yang datang lalu pergi", rating: 9.5 },
    { id: 162, name: "Anohana Menma", anime: "AnoHana", genre: "drama", image: "https://i.ibb.co.com/menma-anohana.jpg", description: "Arwah teman masa kecil", rating: 9.4 },
    { id: 163, name: "Yukine Chris", anime: "Senki Zesshou Symphogear", genre: "drama", image: "https://i.ibb.co.com/chris-symphogear.jpg", description: "Ksatria lagu penuh trauma", rating: 8.8 },
    { id: 164, name: "Shiori Shinomiya", anime: "Clannad After Story", genre: "drama", image: "https://i.ibb.co.com/shiori-kanon.jpg", description: "Gadis rapuh menghadapi takdir", rating: 9.1 },
    { id: 165, name: "Yuuki Konno", anime: "Sword Art Online", genre: "drama", image: "https://i.ibb.co.com/yuuki-sao.jpg", description: "Absolute Sword berhati tegar", rating: 9.4 },
    { id: 166, name: "Chizuru Mizuhara", anime: "Rent-a-Girlfriend", genre: "drama", image: "https://i.ibb.co.com/chizuru-rentakanojo.jpg", description: "Rental girlfriend berbakat akting", rating: 9.0 },
    { id: 167, name: "Saber Alter", anime: "Fate/Stay Night", genre: "drama", image: "https://i.ibb.co.com/saber-alter.jpg", description: "Artoria dalam kegelapan", rating: 9.1 },
    { id: 168, name: "Homura Akemi", anime: "Puella Magi Madoka Magica", genre: "drama", image: "https://i.ibb.co.com/homura-madoka.jpg", description: "Time looper penuh pengorbanan", rating: 9.6 },
    { id: 169, name: "Madoka Kaname", anime: "Puella Magi Madoka Magica", genre: "drama", image: "https://i.ibb.co.com/madoka-kaname.jpg", description: "Gadis harapan semesta", rating: 9.5 },
    { id: 170, name: "Mami Tomoe", anime: "Puella Magi Madoka Magica", genre: "drama", image: "https://i.ibb.co.com/mami-madoka.jpg", description: "Senior magical girl bijak", rating: 9.2 },
    // === GAME TAMBAHAN ===
    { id: 171, name: "Steph Dola", anime: "No Game No Life", genre: "game", image: "https://i.ibb.co.com/steph-ngnl.jpg", description: "Putri Elkia yang sering kalah", rating: 8.7 },
    { id: 172, name: "Jibril", anime: "No Game No Life", genre: "game", image: "https://i.ibb.co.com/jibril-ngnl.jpg", description: "Flugel haus ilmu pengetahuan", rating: 9.2 },
    { id: 173, name: "Izuna Hatsuse", anime: "No Game No Life", genre: "game", image: "https://i.ibb.co.com/izuna-ngnl.jpg", description: "Werebeast gadis bersemangat", rating: 8.8 },
    { id: 174, name: "Bell Cranel", anime: "Danmachi", genre: "game", image: "https://i.ibb.co.com/bell-danmachi.jpg", description: "Adventurer terkuat dalam dungeon", rating: 8.9 },
    { id: 175, name: "Hestia", anime: "Danmachi", genre: "game", image: "https://i.ibb.co.com/hestia-danmachi.jpg", description: "Dewi mini penuh semangat", rating: 9.3 },
    { id: 176, name: "Ais Wallenstein", anime: "Danmachi", genre: "game", image: "https://i.ibb.co.com/ais-danmachi.jpg", description: "Sword Princess level 6", rating: 9.2 },
    { id: 177, name: "Eris Boreas Greyrat", anime: "Mushoku Tensei", genre: "game", image: "https://i.ibb.co.com/eris-mushoku2.jpg", description: "Noble girl berjiwa petarung", rating: 8.9 },
    { id: 178, name: "Kirito", anime: "Sword Art Online", genre: "game", image: "https://i.ibb.co.com/kirito-sao.jpg", description: "Black Swordsman legenda SAO", rating: 9.0 },
    { id: 179, name: "Yuuki Asuna", anime: "Sword Art Online Alicization", genre: "game", image: "https://i.ibb.co.com/asuna2-sao.jpg", description: "Asuna dalam Underworld", rating: 9.1 },
    { id: 180, name: "Kuroyukihime", anime: "Accel World", genre: "game", image: "https://i.ibb.co.com/kuroyukihime-accelworld.jpg", description: "Black Lotus brain burst master", rating: 9.0 },
    // === HAREM TAMBAHAN ===
    { id: 181, name: "Ichika Nakano", anime: "The Quintessential Quintuplets", genre: "harem", image: "https://i.ibb.co.com/ichika-quint.jpg", description: "Si sulung aktris berbakat", rating: 8.8 },
    { id: 182, name: "Nino Nakano", anime: "The Quintessential Quintuplets", genre: "harem", image: "https://i.ibb.co.com/nino-quint.jpg", description: "Si tsundere chef muda", rating: 9.1 },
    { id: 183, name: "Miku Nakano", anime: "The Quintessential Quintuplets", genre: "harem", image: "https://i.ibb.co.com/miku-quint.jpg", description: "Si tiga pemalu sejarah", rating: 9.0 },
    { id: 184, name: "Yotsuba Nakano", anime: "The Quintessential Quintuplets", genre: "harem", image: "https://i.ibb.co.com/yotsuba-quint.jpg", description: "Si empat ceria atletis", rating: 9.2 },
    { id: 185, name: "Itsuki Nakano", anime: "The Quintessential Quintuplets", genre: "harem", image: "https://i.ibb.co.com/itsuki-quint.jpg", description: "Si bungsu bermahkota bintang", rating: 8.9 },
    { id: 186, name: "Onodera Haru", anime: "Nisekoi", genre: "harem", image: "https://i.ibb.co.com/haru-nisekoi.jpg", description: "Adik Onodera yang aktif", rating: 8.5 },
    { id: 187, name: "Tachibana Marika", anime: "Nisekoi", genre: "harem", image: "https://i.ibb.co.com/marika-nisekoi.jpg", description: "Putri yakuza yang manja", rating: 8.6 },
    { id: 188, name: "Tsugumi Seishirou", anime: "Nisekoi", genre: "harem", image: "https://i.ibb.co.com/tsugumi-nisekoi.jpg", description: "Pembunuh bayaran berambut abu", rating: 8.8 },
    { id: 189, name: "Eris", anime: "KonoSuba", genre: "harem", image: "https://i.ibb.co.com/eris-konosuba.jpg", description: "Dewi keberuntungan yang pemalu", rating: 8.9 },
    { id: 190, name: "Wiz", anime: "KonoSuba", genre: "harem", image: "https://i.ibb.co.com/wiz-konosuba.jpg", description: "Lich mage toko ajaib", rating: 8.7 },
    // === MAGIC TAMBAHAN ===
    { id: 191, name: "Nanoha Takamachi", anime: "Magical Girl Lyrical Nanoha", genre: "magic", image: "https://i.ibb.co.com/nanoha-lyricalnanoha.jpg", description: "Magical girl friendship cannon", rating: 9.2 },
    { id: 192, name: "Fate Testarossa", anime: "Magical Girl Lyrical Nanoha", genre: "magic", image: "https://i.ibb.co.com/fate-lyricalnanoha.jpg", description: "Lightning mage berambut pirang", rating: 9.1 },
    { id: 193, name: "Lotte Yanson", anime: "Little Witch Academia", genre: "magic", image: "https://i.ibb.co.com/lotte-lwa.jpg", description: "Penyihir Finlandia penyuka spirit", rating: 8.6 },
    { id: 194, name: "Atsuko Kagari", anime: "Little Witch Academia", genre: "magic", image: "https://i.ibb.co.com/akko-lwa.jpg", description: "Penyihir tak berbakat bermimpi besar", rating: 9.1 },
    { id: 195, name: "Diana Cavendish", anime: "Little Witch Academia", genre: "magic", image: "https://i.ibb.co.com/diana-lwa.jpg", description: "Penyihir elitis terbaik kelas", rating: 9.0 },
    { id: 196, name: "Ursula Callistis", anime: "Little Witch Academia", genre: "magic", image: "https://i.ibb.co.com/ursula-lwa.jpg", description: "Guru misterius penyimpan rahasia", rating: 8.9 },
    { id: 197, name: "Theresa Apocalypse", anime: "Honkai Impact", genre: "magic", image: "https://i.ibb.co.com/theresa-honkai.jpg", description: "Valkyrie mini penuh kasih", rating: 9.0 },
    { id: 198, name: "Kiana Kaslana", anime: "Honkai Impact", genre: "magic", image: "https://i.ibb.co.com/kiana-honkai.jpg", description: "Valkyrie berambut putih pemberani", rating: 9.1 },
    // === MUSIC TAMBAHAN ===
    { id: 199, name: "Reina Kousaka", anime: "Hibike! Euphonium", genre: "music", image: "https://i.ibb.co.com/reina-hibike.jpg", description: "Pemain trompet terbaik prefektur", rating: 9.1 },
    { id: 200, name: "Hazuki Katou", anime: "Hibike! Euphonium", genre: "music", image: "https://i.ibb.co.com/hazuki-hibike.jpg", description: "Pemain tuba pemula bersemangat", rating: 8.5 },
    { id: 201, name: "Mio Akiyama", anime: "K-ON!", genre: "music", image: "https://i.ibb.co.com/mio-kon.jpg", description: "Bassis pemalu Light Music Club", rating: 9.3 },
    { id: 202, name: "Yui Hirasawa", anime: "K-ON!", genre: "music", image: "https://i.ibb.co.com/yui-kon.jpg", description: "Gitaris ceria penuh energi", rating: 9.2 },
    { id: 203, name: "Ritsu Tainaka", anime: "K-ON!", genre: "music", image: "https://i.ibb.co.com/ritsu-kon.jpg", description: "Drummer semangat ketua klub", rating: 8.9 },
    { id: 204, name: "Mugi Kotobuki", anime: "K-ON!", genre: "music", image: "https://i.ibb.co.com/mugi-kon.jpg", description: "Keyboardis bangsawan tulus", rating: 8.8 },
    { id: 205, name: "Azusa Nakano", anime: "K-ON!", genre: "music", image: "https://i.ibb.co.com/azusa-kon.jpg", description: "Gitaris junior serius bertelinga kucing", rating: 9.1 },
    { id: 206, name: "Nana Osaki", anime: "NANA", genre: "music", image: "https://i.ibb.co.com/nana-osaki-music.jpg", description: "Vokalis BLAST berjiwa rock", rating: 9.3 },
    { id: 207, name: "Tuesday Simmons", anime: "Carole and Tuesday", genre: "music", image: "https://i.ibb.co.com/tuesday-carol.jpg", description: "Penyanyi noble bermimpi besar", rating: 8.8 },
    { id: 208, name: "Uta", anime: "One Piece Film: Red", genre: "music", image: "https://i.ibb.co.com/uta-onepiece.jpg", description: "Penyanyi terbaik dunia anak Shanks", rating: 9.2 }
];

let currentFilter = 'all';
let currentSearch = '';

const waifuGrid = document.getElementById('waifuGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const emptyState = document.getElementById('emptyState');
const totalCount = document.getElementById('totalCount');
const displayCount = document.getElementById('displayCount');

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase();
    renderWaifu();
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderWaifu();
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

function filterWaifu() {
    return waifuData.filter(waifu => {
        const matchFilter = currentFilter === 'all' || waifu.genre === currentFilter;
        const matchSearch = waifu.name.toLowerCase().includes(currentSearch) ||
                           waifu.anime.toLowerCase().includes(currentSearch);
        return matchFilter && matchSearch;
    });
}

function renderWaifu() {
    const filtered = filterWaifu();
    waifuGrid.innerHTML = '';

    if (filtered.length === 0) {
        emptyState.style.display = 'block';
        waifuGrid.style.display = 'none';
        displayCount.textContent = '0';
        return;
    }

    emptyState.style.display = 'none';
    waifuGrid.style.display = 'grid';
    displayCount.textContent = filtered.length;

    filtered.forEach(waifu => {
        const card = createWaifuCard(waifu);
        waifuGrid.appendChild(card);
    });
}

function createWaifuCard(waifu) {
    const card = document.createElement('div');
    card.className = 'waifu-card';
    card.innerHTML = `
        <img src="${waifu.image}" alt="${waifu.name}" class="waifu-image">
        <div class="waifu-info">
            <div class="waifu-name">${waifu.name}</div>
            <div class="waifu-anime">${waifu.anime}</div>
            <span class="waifu-genre">${waifu.genre.toUpperCase()}</span>
            <div class="waifu-rating">⭐ ${waifu.rating}</div>
        </div>
    `;
    
    card.addEventListener('click', () => openModal(waifu));
    return card;
}

function openModal(waifu) {
    document.getElementById('modalImage').src = waifu.image;
    document.getElementById('modalName').textContent = waifu.name;
    document.getElementById('modalAnime').textContent = waifu.anime;
    document.getElementById('modalGenre').textContent = waifu.genre.toUpperCase();
    document.getElementById('modalDescription').textContent = waifu.description;
    document.getElementById('modalRating').textContent = `⭐ ${waifu.rating}/10`;
    modal.style.display = 'block';
}

function init() {
    totalCount.textContent = waifuData.length;
    renderWaifu();
}

init();
