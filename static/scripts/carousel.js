document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const carouselItems = carouselInner.querySelectorAll('.carousel-item');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const indicators = carousel.querySelectorAll('.indicator');
  
    let currentIndex = 0;
    const totalItems = carouselItems.length;
    let autoPlayInterval;
  
    // 左右按钮点击事件
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
      restartAutoPlay();
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
      restartAutoPlay();
    });
  
    // 指示器点击事件
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        restartAutoPlay();
      });
    });
  
    // 自动轮播
    function startAutoPlay() {
      autoPlayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
      }, 3000); // 每 3 秒切换一次
    }
  
    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }
  
    function restartAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }
  
    // 页面加载时启动自动轮播
    startAutoPlay();
  
    // 更新轮播图
    function updateCarousel() {
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
  });  