document.addEventListener('DOMContentLoaded', function() {
  // 获取侧边栏树形菜单元素
  var tree = document.getElementById('tree');

  // 获取主页面的 iframe 元素
  var mainIframe = document.getElementById('main-iframe');

  // 给每个 summary 元素添加点击事件处理程序
  tree.addEventListener('click', function(event) {
      // 确定点击的元素是 summary 元素或其子元素
      var target = event.target.closest('summary');
      if (!target) return; // 如果点击的不是 summary 元素，则退出

      // 查找与点击的 summary 相关联的 span 元素
      var span = target.querySelector('.tree-item');
      if (!span) return; // 如果找不到相关的 span 元素，则退出

      var itemName = span.textContent.trim(); // 获取点击的项目名称
      var src = ""; // 设置相应的 HTML 页面的 URL
      // 根据点击的项目名称设置相应的 HTML 页面的 URL
      switch(itemName) {
          case 'Button':
              src = 'myButtons.html';
              break;
          case 'Form':
              src = 'myInput.html';
              break;
          case 'Checkbox':
              src = 'myCheckbox.html';
              break;
          case 'Layout':
              src = 'myLayout.html';
              break;
          case 'Tree':
              src = 'myTree.html';
              break;
          case 'Table':
              src = 'myTable.html';
              break;
          case 'Colors':
              src = 'myColors.html';
              break;
          case 'Pagination':
              src = 'myPagination.html';
              break;
          case 'Label':
              src = 'myLabel.html';
              break;
          case 'Carousel':
              src = 'myCarousel.html';
              break;
          case 'File':
              src = 'myFile.html';
              break;
          case 'Select':
              src = 'mySelect.html';
              break;
          // bonus
          // 添加其他项目的处理
      }
      // 将 iframe 的 src 属性设置为相应的 HTML 页面
      mainIframe.src = src;
  });
});
