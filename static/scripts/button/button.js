// 获取所有按钮元素
const buttons = document.querySelectorAll('.button');

// 为每个按钮添加点击事件处理函数
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('按钮被点击了！');
  });
});
