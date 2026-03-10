// Mock Database of Grooming Shops
const shops = [
    {
        id: 1,
        name: '살롱 드 몽몽 (Salon de Mongmong)',
        distance: '0.8km',
        rating: 4.9,
        reviewsCount: 128,
        breeds: ['poodle', 'bichon', 'maltese'],
        styles: ['teddy', 'spoing', 'hygiene'],
        price: '75,000원~',
        time: '약 2시간 소요',
        heroImg: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
        portfolio: [
            'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1601758177266-bc5f3afb17b6?auto=format&fit=crop&q=80&w=400'
        ],
        reviews: [
            { author: '김수진', text: '우리 초코가 예민한 편인데 너무 다정하게 잘 다뤄주셨어요. 테디베어 컷 완전 예술입니다!' },
            { author: '박지훈', text: '매장도 청결하고 미용 후 스트레스도 없네요. 다음에도 무조건 여기로 올게요.' }
        ]
    },
    {
        id: 2,
        name: '퍼피 부티크 강남점',
        distance: '1.2km',
        rating: 4.8,
        reviewsCount: 95,
        breeds: ['pomeranian', 'poodle', 'retriever'],
        styles: ['lion', 'summer', 'hygiene'],
        price: '60,000원~',
        time: '약 1시간 30분 소요',
        heroImg: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
        portfolio: [
            'https://images.unsplash.com/photo-1588165171080-c89acab8cb1e?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=400'
        ],
        reviews: [
            { author: '이정아', text: '포메 라이언 컷 장인이십니다. 주변에서 다들 어디서 했냐고 물어봐요!' },
            { author: '최민수', text: '가격대비 만족도가 정말 높습니다. 예약 잡기가 조금 힘들지만 그럴만한 가치가 있네요.' }
        ]
    },
    {
        id: 3,
        name: '해피테일즈 스튜디오',
        distance: '2.5km',
        rating: 4.7,
        reviewsCount: 204,
        breeds: ['bichon', 'maltese', 'pomeranian'],
        styles: ['spoing', 'teddy', 'summer', 'hygiene'],
        price: '85,000원~',
        time: '약 2시간 30분 소요',
        heroImg: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=800',
        portfolio: [
            'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400'
        ],
        reviews: [
            { author: '한지민', text: '가위컷 전문이라 그런지 디테일이 살아있어요. 털 엉킴도 다 풀어주셔서 너무 감사했습니다.' },
            { author: '오창석', text: '원장님이 정말 친절하시고 아이들 다루는 솜씨가 대박이에요.' }
        ]
    },
    {
        id: 4,
        name: '젠틀독 그루밍',
        distance: '1.8km',
        rating: 4.6,
        reviewsCount: 67,
        breeds: ['retriever', 'poodle'],
        styles: ['summer', 'hygiene'],
        price: '90,000원~',
        time: '약 2시간 소요',
        heroImg: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800',
        portfolio: [
            'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400'
        ],
        reviews: [
            { author: '정다은', text: '대형견 미용 받아주시는 곳 찾기 힘들었는데 너무 깔끔하게 잘해주셨어요.' },
            { author: '송중기', text: '여름맞이 썸머컷 했는데 시원해보이고 좋네요. 대형견 목욕 시설이 잘 되어있습니다.' }
        ]
    }
];

// Helper dictionaries for display names
const styleNames = {
    'teddy': '테디베어 컷',
    'lion': '라이언 컷',
    'summer': '썸머 컷',
    'hygiene': '위생 미용',
    'spoing': '스포팅 (가위컷)'
};

const breedNames = {
    'poodle': '푸들',
    'pomeranian': '포메라니안',
    'bichon': '비숑',
    'maltese': '말티즈',
    'retriever': '리트리버'
};

// DOM Elements
const searchBtn = document.getElementById('search-btn');
const aiLoading = document.getElementById('ai-loading');
const resultsSection = document.getElementById('results-section');
const shopGrid = document.getElementById('shop-grid');
const breedSelect = document.getElementById('breed-select');
const styleSelect = document.getElementById('style-select');
const resultsCount = document.getElementById('results-count');
const modalOverlay = document.getElementById('shop-modal');
const modalContent = document.getElementById('modal-content');
const toast = document.getElementById('toast');

// Search and Filter Logic
searchBtn.addEventListener('click', () => {
    const breed = breedSelect.value;
    const style = styleSelect.value;

    if (!breed || !style) {
        alert('견종과 희망 스타일을 모두 선택해주세요.');
        return;
    }

    // Start AI matching simulation
    resultsSection.classList.add('hidden');
    aiLoading.classList.remove('hidden');

    // Simulate network/AI delay
    setTimeout(() => {
        aiLoading.classList.add('hidden');
        renderResults(breed, style);
        resultsSection.classList.remove('hidden');
        
        // Scroll to results smoothly
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }, 2500);
});

function renderResults(breed, style) {
    // Filter shops based on selected breed and style
    const matchedShops = shops.filter(shop => 
        shop.breeds.includes(breed) && shop.styles.includes(style)
    );

    // Sort by rating (mock "AI recommendation" sort)
    matchedShops.sort((a, b) => b.rating - a.rating);

    resultsCount.textContent = matchedShops.length;
    shopGrid.innerHTML = '';

    if (matchedShops.length === 0) {
        shopGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                조건에 맞는 미용샵을 찾지 못했습니다. 다른 스타일을 선택해보세요.
            </div>
        `;
        return;
    }

    matchedShops.forEach((shop, index) => {
        // Create tag HTML
        let tagsHtml = '';
        shop.breeds.slice(0, 2).forEach(b => tagsHtml += `<span class="tag">${breedNames[b]} 전문</span>`);
        shop.styles.slice(0, 2).forEach(s => tagsHtml += `<span class="tag">${styleNames[s]}</span>`);

        const card = document.createElement('div');
        card.className = 'shop-card glass-card fade-in-up';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="card-image-wrap">
                <img src="${shop.heroImg}" alt="${shop.name}" class="card-image">
                <div class="match-badge">
                    <i class="ri-blaze-line"></i> 99% 매칭
                </div>
            </div>
            <div class="card-content">
                <div class="card-title-row">
                    <div>
                        <h3 class="shop-name">${shop.name}</h3>
                        <div class="shop-distance"><i class="ri-map-pin-2-line"></i> ${shop.distance}</div>
                    </div>
                    <div class="rating"><i class="ri-star-fill"></i> ${shop.rating}</div>
                </div>
                <div class="tags">
                    ${tagsHtml}
                </div>
                <div class="card-footer">
                    <div class="price-time">
                        <span class="price">${shop.price}</span>
                        <span class="time">${shop.time}</span>
                    </div>
                    <button class="primary-btn" style="padding: 10px 20px;">예약하기</button>
                </div>
            </div>
        `;

        card.addEventListener('click', () => openModal(shop));
        shopGrid.appendChild(card);
    });
}

// Modal Logic
function openModal(shop) {
    let portfolioHtml = shop.portfolio.map(img => 
        `<img src="${img}" alt="Portfolio" class="portfolio-img">`
    ).join('');

    let reviewsHtml = shop.reviews.map(review => `
        <div class="review-card">
            <div class="reviewer">
                <strong>${review.author}</strong>
                <div class="rating"><i class="ri-star-fill"></i> 5.0</div>
            </div>
            <p style="font-size: 0.875rem; color: var(--text-muted);">${review.text}</p>
        </div>
    `).join('');

    modalContent.innerHTML = `
        <div class="modal-hero" style="background-image: url('${shop.heroImg}')">
            <div class="modal-hero-overlay">
                <div class="badge" style="background: rgba(16, 185, 129, 0.2); border-color: rgba(16, 185, 129, 0.4); color: #10b981;">예약 가능</div>
                <h2 style="font-size: 2.5rem; margin-bottom: 8px;">${shop.name}</h2>
                <div style="display: flex; gap: 16px; color: var(--text-main);">
                    <span><i class="ri-star-fill" style="color: var(--star)"></i> ${shop.rating} (${shop.reviewsCount})</span>
                    <span><i class="ri-map-pin-line"></i> 현재 위치에서 ${shop.distance}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-body">
            <div class="shop-stats">
                <div class="stat">
                    <span class="stat-label">전문 스타일</span>
                    <span class="stat-value"><i class="ri-scissors-2-line"></i> ${shop.styles.map(s => styleNames[s]).join(', ')}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">소요 시간</span>
                    <span class="stat-value"><i class="ri-time-line"></i> ${shop.time}</span>
                </div>
            </div>

            <h3 style="margin-bottom: 16px;">포트폴리오</h3>
            <div class="portfolio-grid">
                ${portfolioHtml}
            </div>

            <div class="reviews-section">
                <h3 style="margin-bottom: 16px;">베스트 리뷰</h3>
                ${reviewsHtml}
            </div>

            <div class="book-btn-container">
                <div>
                    <div style="font-size: 0.875rem; color: var(--text-muted);">예상 결제 금액</div>
                    <div class="total-price gradient-text">${shop.price}</div>
                </div>
                <button id="confirm-book-btn" class="primary-btn glow-effect" style="width: 200px;">예약 확정하기</button>
            </div>
        </div>
    `;

    document.getElementById('confirm-book-btn').addEventListener('click', (e) => {
        e.stopPropagation(); // prevent modal click bubbling
        closeModal();
        showToast();
    });

    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore background scrolling
}

// Close modal when clicking X button or outside modal
document.querySelector('.close-modal').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

// Toast Logic
function showToast() {
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}
