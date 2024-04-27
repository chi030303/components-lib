// 渲染标签
function renderTags() {
    const tagContainer = document.getElementById('tag-container');

    // 遍历所有标签
    const tags = tagContainer.querySelectorAll('.tag');
    tags.forEach(tag => {
        // 检查是否为可删除标签
    // 检查是否为可删除标签
    // 获取所有标签
    const tags = document.querySelectorAll('.tag');
    const lastIndex = tags.length - 1;
    const currentIndex = Array.from(tags).indexOf(tag);

    // 确保标签不是第一个也不是最后一个
    if (currentIndex !== 0 && currentIndex !== lastIndex) {
            // 为标签添加关闭按钮
            const closeButton = document.createElement('span');
            closeButton.classList.add('close-button');
            closeButton.innerHTML = '&times;'; // 使用×符号表示关闭按钮
            closeButton.addEventListener('click', () => removeTag(tag));
            tag.appendChild(closeButton);
        }
    });

    // 添加动态标签输入框
    const newTag = document.getElementById('new-tag');
    newTag.addEventListener('click', () => {
        newTag.contentEditable = true;
        newTag.innerText = ''; // 清空初始文本
        newTag.focus();
    });
    newTag.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault(); // 阻止默认回车行为（避免换行）
            const newTagName = newTag.innerText.trim();
            if (newTagName && newTagName !== '+ New Tag') {
                addTag(newTagName);
                newTag.innerText = '+ New Tag'; // 重置为初始文本
                newTag.contentEditable = false; // 禁止编辑状态
            }
        }
    });
}

// 添加标签
function addTag(newTagName) {
    const newTag = document.createElement('div');
    newTag.classList.add('tag');
    newTag.innerText = newTagName;

    // 添加关闭按钮
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;'; // 使用×符号表示关闭按钮
    closeButton.addEventListener('click', () => removeTag(newTag));
    newTag.appendChild(closeButton);

    // 将新标签添加到容器中
    const tagContainer = document.getElementById('tag-container');
    tagContainer.insertBefore(newTag, document.getElementById('new-tag'));
}

// 移除标签
function removeTag(tag) {
    // 获取所有标签
    const tags = document.querySelectorAll('.tag');
    const lastIndex = tags.length - 1;
    const currentIndex = Array.from(tags).indexOf(tag);

    // 确保标签不是第一个也不是最后一个
    if (currentIndex !== 0 && currentIndex !== lastIndex) {
        tag.parentNode.removeChild(tag);
    }
}

// 初始化标签
renderTags();
