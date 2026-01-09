// 2026 Year End Report - JavaScript
// Extracted from index.html

// ========================================
// Section Data Array for Dynamic Sections
// ========================================
const sectionsData = [
    {
        headerBg: 'https://www.cet-taiwan.org/sites/cet-taiwan.org/files/glazed-builder/20220609-13.jpg',
        cardsBg: '#e5e5e5',
        title: '促成制度變革',
        subtitle: '從法規到政策的實質推進',
        description: '我們不只發現問題，更直指問題核心，推動長遠的法規與政策改變，為台灣奠定永續基礎。',
        cards: [
            { icon: 'map-pin', title: '國土計畫', text: '透過跨領域分享會，系統性說明國土計畫改革對環境治理的意義，串連環境組織、學界、業界、政府智庫，建立國土治理轉型的公共討論基礎。' },
            { icon: 'sun', title: '屋頂光電', text: '透過拜會立委與媒體行動，促成全國性的屋頂光電修法通過，讓再生能源成為更具韌性與全民共享的友善能源。' },
            { icon: 'bar-chart', title: '產業轉型', text: '倡議產業轉型以達成2050淨零目標，呼籲政府檢討高碳排產業減碳措施及政策，如中油四輕更新擴產計畫應審慎評估並加強減污與減碳。' },
            { icon: 'home', title: '校園空污與空品標準', text: '針對校園空污威脅學童健康，舉辦論壇、記者會，透過國會遊說及公眾參與機制提出政策建言。<br><br>促成政府對鄰近校園的高風險工業區執行空污監測、溯源之體檢，加強推動校園周邊設立空氣品質維護區。<br><br>成功促使空氣品質標準加嚴，包括PM2.5的24小時標準及AQI警戒值修訂。' }
        ]
    },
    {
        headerBg: 'https://www.cet-taiwan.org/sites/cet-taiwan.org/files/glazed-builder/20210609-12.jpg',
        cardsBg: '#c8d3d0',
        title: '捍衛環境正義',
        subtitle: '從環境現場出發，守護土地與人權',
        description: '環境問題，往往也關乎人們的生存。我們深入受影響的環境現場支援，確保轉型跟開發過程的公平與正義。',
        cards: [
            { icon: 'layers', title: '花東發展與氣候調適', text: '持續關注與參與花東地區觀光、礦業、能源等各類開發案與制度倡議，提供在地居民法規制度諮詢、捍衛自然主權，與花東地方社群共同探索可行發展方式。於花蓮馬太鞍災區現場協助調度志工累積千名人次、前進堰塞湖現場勘查紀錄。' },
            { icon: 'sun', title: '屋頂光電', text: '透過官方溝通及在地方辦理屋頂光電講座，推動高雄後勁舊社區納入市府淨零示範區規劃，促使台灣最大污染廠址積極進行治理重建。' },
            { icon: 'briefcase', title: '台積電環評', text: '促使環評委員關注台積電於高雄開發帶來的耗電問題、衍生的社會影響，及生態公園等課題。' },
            { icon: 'edit', title: '南高雄污染', text: '監督高雄新的工業開發，參加於大林蒲的新材料循環園區環評，發言要求嚴審進駐產業，並盡全力減污減碳。' },
            { icon: 'alert-triangle', title: '非核行動', text: '在核三重啟公投過程中，深度串連屏東在地社群，深化地方反核行動主體性，開出全國最高反對票。', fullWidth: true }
        ]
    },
    {
        headerBg: 'https://www.cet-taiwan.org/sites/cet-taiwan.org/files/glazed-builder/20220609-13.jpg',
        cardsBg: '#e5e5e5',
        title: '監督治理課責',
        subtitle: '緊盯污染源與行政怠惰，落實數據透明',
        description: '我們扮演生態環境守門員的角色，運用調查數據與行政監督，迫使政府與企業面對真相。',
        cards: [
            { icon: 'home', title: '違章工廠', text: '完成違章工廠調查並送交重點6縣市，其中彰化與高雄已回覆案件核對，分別為206件與27件。<br><br>於2025年4月拜會監察院，指出地方政府在裁罰率、拆除率、人力配置與權責分工的缺失，並建請啟動專案調查。 多次拜會國土署改善違章工廠裁罰資料格式，避免案件無故下架。<br><br>追查「農業及農地資源盤查結果」的數據落差問題，以提升農地變化判讀精準度，減緩新增的農地違章工廠。 ' },
            { icon: 'sun', title: '空污監測與污染改善', text: '監督石化工業區有害空污監測機制及結果，要求完整數據公開以落實社區知情權，促進各界重視工業區與社區相鄰之環境風險與環境正義。<br><br>持續督促政府加強對高雄鋼鐵業空污的管制，促進業者盡速汰除老舊設備、強化推動減污減碳轉型。<br><br>持續監督半導體和高污染產業的社會責任，例如納入PFAS 與空污監測。<br><br>追蹤高雄工業管線治理，推動管線資訊公開、整合防災應變及宣導資訊。' }
        ]
    }
    // 「擴大社會共鳴」區塊已移至 HTML 進行特殊設計
];

// Icon SVG definitions
const iconSvgs = {
    'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
    'sun': '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
    'bar-chart': '<path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path>',
    'home': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
    'layers': '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
    'briefcase': '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
    'edit': '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
    'alert-triangle': '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>'
};

// Generate card HTML
function generateCardHTML(card) {
    const colClass = card.fullWidth ? 'col-12' : 'col-12 col-lg-6';
    return `
        <div class="${colClass}">
            <div class="h-100 p-4" style="background-color: rgba(255,255,255,0.95); border-radius: 20px; border-left: 5px solid #009d7e;">
                <div class="mb-3" style="width: 50px; height: 50px; background-color: rgba(0,157,126,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009d7e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        ${iconSvgs[card.icon] || iconSvgs['map-pin']}
                    </svg>
                </div>
                <h4 class="font-700 mb-3" style="color: #2d3748;">${card.title}</h4>
                <p class="mb-0 px-0" style="color: #4a5568; text-align: left;">${card.text}</p>
            </div>
        </div>
    `;
}

// Generate section HTML
function generateSectionHTML(section, index) {
    const cardsHTML = section.cards.map(card => generateCardHTML(card)).join('');

    return `
        <section>
            <div class="container-fluid px-0">
                <!-- Header Area -->
                <div class="section-hero" style="background-image: url('${section.headerBg}');">
                    <div class="container-readable">
                        <div class="row mx-3 mx-lg-0">
                            <div class="col-12">
                                <div class="text-center p-4" style="background-color: rgba(255,255,255,0); border-radius: 15px;">
                                    <h2 class="font-900 heading-2 mb-4 decorated-title">${section.title}</h2>
                                    <h4 class="font-500 mb-3" style="color: #fff;">${section.subtitle}</h4>
                                    <p class="text-center mb-0 px-3" style="font-size: 1.1rem; color: #fff;">${section.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Cards Area -->
                <div class="py-2 pb-5 mb-0" style="background-size: cover; background-position: top center; background-repeat: no-repeat; background-color: ${section.cardsBg};">
                    <div class="container-readable">
                        <div class="row g-4 mx-3 mx-lg-0">
                            ${cardsHTML}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Render all sections
function renderSections() {
    const container = document.getElementById('dynamic-sections');
    if (container) {
        container.innerHTML = sectionsData.map((section, index) => generateSectionHTML(section, index)).join('');
    }
}

// ========================================
// Footer Equal Height
// ========================================
function setEqualHeight_2() {
    var div1 = document.getElementById('paragraph_1');
    var div2 = document.getElementById('paragraph_2');
    var div3 = document.getElementById('paragraph_3');
    var div4 = document.getElementById('paragraph_4');

    if (div1 && div2 && div3 && div4) {
        var maxHeight = Math.max(div1.offsetHeight, div2.offsetHeight);
        div1.style.height = maxHeight + 'px';
        div2.style.height = maxHeight + 'px';
        div3.style.height = maxHeight + 'px';
        div4.style.height = maxHeight + 'px';
    }
}

// ========================================
// Toggle Years Expand/Collapse
// ========================================
function initToggleYears() {
    var toggle = document.getElementById('toggle-years');
    var more = document.getElementById('more-years');
    if (!toggle || !more) {
        return;
    }

    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        var isOpen = more.classList.toggle('is-open');
        var label = toggle.querySelector('.toggle-years-label');
        if (label) {
            label.textContent = isOpen
                ? toggle.dataset.openText
                : toggle.dataset.closeText;
        } else {
            toggle.textContent = isOpen
                ? toggle.dataset.openText
                : toggle.dataset.closeText;
        }
    });
}

// ========================================
// Scroll Down Arrow Click
// ========================================
function initScrollDown() {
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', function () {
            const frontCover = document.getElementById('front-cover');
            const nextSection = frontCover.closest('section').nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// ========================================
// Statistics Data and Count-Up Animation
// ========================================
const statisticsData = [
    { number: 47, unit: '場', label: '活動', icon: 'book' },
    { number: 60, unit: '場', label: '對外演講', icon: 'users' },
    { number: 14500, unit: '人次', label: '實體互動', icon: 'bar-chart' },
    { number: 300, unit: '篇', label: '臉書訊息', icon: 'clock' },
    { number: 300000, unit: '人次', label: '線上互動', icon: 'play' },
    { number: 48, unit: '場', label: '記者會', icon: 'mic' },
    { number: 41, unit: '篇', label: '投書與深入報導', icon: 'newspaper' },
    { number: 4.1, unit: '天', label: '就有一次媒體露出', icon: 'monitor' }
];

// Stats Icon SVG definitions
const statsIconSvgs = {
    'bar-chart': '<path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path>',
    'clock': '<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>',
    'play': '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
    'monitor': '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
    'book': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
    'users': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    'mic': '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
    'newspaper': '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6z"></path>'
};

// Generate a single statistic item HTML
function generateStatHTML(stat, index) {
    return `
        <div class="col-6 col-lg-3 text-center">
            <div class="p-3">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    ${statsIconSvgs[stat.icon] || statsIconSvgs['bar-chart']}
                </svg>
                <div class="mt-2 mb-1 d-flex align-items-baseline justify-content-center">
                    <h3 class="font-900 stat-number mb-0" data-target="${stat.number}" style="font-size: 2.5rem; color: #333;">0</h3>
                    <span class="font-700" style="font-size: 1.2rem; color: #333; margin-left: 0.3rem;">${stat.unit}</span>
                </div>
                <p class="mb-0 px-0 text-center" style="color: #666;">${stat.label}</p>
            </div>
        </div>
    `;
}

// Render all statistics
function renderStatistics() {
    const container = document.getElementById('statistics-container');
    if (container) {
        container.innerHTML = statisticsData.map((stat, index) => generateStatHTML(stat, index)).join('');
        // Initialize count-up observer after rendering
        initCountUpObserver();
    }
}

// Count-up animation function
function animateCount(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Intersection Observer for count-up animation
function initCountUpObserver() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length === 0) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statNumbers.forEach(el => {
                    const target = parseInt(el.dataset.target, 10);
                    animateCount(el, target);
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    // Observe the first stat element's parent container
    const container = document.getElementById('statistics-container');
    if (container) {
        observer.observe(container);
    }
}

// ========================================
// Initialize All on DOM Ready
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    // Render dynamic sections
    renderSections();

    // Render statistics with count-up animation
    renderStatistics();

    // Footer equal height (desktop only)
    if (window.innerWidth >= 576) {
        setEqualHeight_2();
    }

    // Toggle years expand/collapse
    initToggleYears();

    // Scroll down arrow
    initScrollDown();
});
