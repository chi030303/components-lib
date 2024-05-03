document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById('file-input');
    const chooseFileBtn = document.getElementById('choose-file-btn');
    const fileList = document.getElementById('file-list');
  
    chooseFileBtn.addEventListener('click', function() {
      fileInput.click();
    });
  
    fileInput.addEventListener('change', function() {
      const files = fileInput.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name;
        const li = document.createElement('li');
        li.textContent = fileName;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '删除';
        deleteBtn.addEventListener('click', function() {
          li.remove();
        });
        li.appendChild(deleteBtn);
        fileList.appendChild(li);
      }
    });
  });
  