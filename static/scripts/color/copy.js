// 获取所有颜色卡片元素
var colorCards = document.querySelectorAll('.color-card');

// 为每个颜色卡片添加点击事件监听器
colorCards.forEach(function(colorCard) {
  colorCard.addEventListener('click', function() {
    // 获取颜色值
    var colorValue = colorCard.querySelector('.color-value').textContent.trim();

    // 创建临时文本输入框
    var tempInput = document.createElement('input');
    tempInput.setAttribute('type', 'text');
    tempInput.setAttribute('value', colorValue);
    document.body.appendChild(tempInput);

    // 选中文本
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // 复制文本
    document.execCommand('copy');

    // 移除临时输入框
    document.body.removeChild(tempInput);

    // 可以添加一些提示，比如提示框或者控制台输出
    console.log('已复制颜色值：' + colorValue);
  });
});
