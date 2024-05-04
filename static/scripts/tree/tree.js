// 树状组件数据
const treeData = [
    {
      id: 1,
      name: "一级1",
      children: [
        {
          id: 2,
          name: "二级1-1",
          children: [
            {
              id: 3,
              name: "三级1-1-1"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "二级2",
      children: [
        {
          id: 5,
          name: "二级2-1"
        },
        {
          id: 6,
          name: "二级2-2"
        }
      ]
    }
  ];  
  
  // 渲染树形结构的函数
  function renderTree(data, parentElement) {
    data.forEach(item => {
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      const span = document.createElement('span');
      span.textContent = item.name;
      span.classList.add('tree-item');
      summary.appendChild(span);
  
      // 如果有子节点，递归渲染
      if (item.children && item.children.length) {
        renderTree(item.children, details);
      }
  
      details.appendChild(summary);
      parentElement.appendChild(details);
    });
  }
  
  // 主函数，用于初始化树形结构
  function initTree() {
    const container = document.getElementById('tree');
    renderTree(treeData, container);
  }
  
  // 当文档加载完成后初始化树形结构
  document.addEventListener('DOMContentLoaded', initTree);