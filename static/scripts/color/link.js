// 获取所有的颜色卡片元素
var colorCards = document.querySelectorAll('.color-card');

// 为每个颜色卡片添加点击事件监听器
colorCards.forEach(function(colorCard) {
  colorCard.addEventListener('click', function() {
    // 获取当前颜色卡片的 data-url 属性值，即对应的 URL
    var url = colorCard.getAttribute('url');
    // 如果存在对应的 URL，则重定向到该 URL
    if (url) {
      window.open(url, '_blank');
    }
  });
});
