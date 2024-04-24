// 树状菜单打开、折叠的icon变化逻辑
document.addEventListener('DOMContentLoaded', function() {
  var summaries = document.querySelectorAll('summary');
  summaries.forEach(function(summary) {
    // 初始状态下显示 sort-right 图标
    summary.style.backgroundImage = 'url("../source/sort-right.png")';
    // 监听 summary 元素的点击事件
    summary.addEventListener('click', function() {
      // 检查当前 summary 是否有子元素
      var hasChildren = summary.parentElement.querySelector('details');
      if (hasChildren) {
        // 如果有子元素，则切换到 sort-down 图标
        summary.style.backgroundImage = 'url("../source/sort-down.png")';
      }
    });
  });
});
