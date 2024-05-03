document.addEventListener("DOMContentLoaded", function() {
  const imageInput = document.getElementById('image-input');
  const imageContainer = document.getElementById('image-container');
  const imagePreview = document.getElementById('image-preview');

  // 当文件选择发生变化时执行预览操作
  imageInput.addEventListener('change', function() {
      const file = imageInput.files[0];

      // 清空预览区域
      imagePreview.innerHTML = '';

      // 验证文件是否为图片
      if (!file || !file.type.startsWith('image/')) {
          alert("请选择有效的图片文件。");
          return;
      }

      const reader = new FileReader();

      reader.onload = function(event) {
          const imageUrl = event.target.result;
          const img = document.createElement('img');
          img.src = imageUrl;
          imagePreview.appendChild(img);
      };

      reader.readAsDataURL(file);
  });

  // 点击 label 元素触发文件选择对话框
  imageContainer.addEventListener('click', function(event) {
      // 阻止默认行为，避免再次触发文件选择对话框
      event.preventDefault();
      // 点击后直接打开文件选择对话框
      imageInput.click();
  });
});
