const order = {
  init(param) {
      const that = this;
      const table = param.el;
      if (!table) return;

      const tbody = table.querySelector('tbody');
      const ths = Array.from(table.querySelectorAll('th'));
      const trs = Array.from(tbody.querySelectorAll('tr'));
      const list = this.getBodyList(trs);

      // 获取全选复选框
      const selectAllCheckbox = document.getElementById('select-all');
      // 获取行复选框列表
      const selectCheckboxes = tbody.querySelectorAll('.select-checkbox');

      // 全选按钮点击事件处理函数
      selectAllCheckbox.addEventListener('change', function() {
          const isChecked = selectAllCheckbox.checked;
          selectCheckboxes.forEach(checkbox => {
              checkbox.checked = isChecked;
          });
      });

      // 行复选框点击事件处理函数
      selectCheckboxes.forEach(checkbox => {
          checkbox.addEventListener('change', function() {
              const allChecked = [...selectCheckboxes].every(checkbox => checkbox.checked);
              selectAllCheckbox.checked = allChecked;
          });
      });

      ths.forEach((th, index) => {
          // 为每个表头 th 元素绑定点击事件
          th.addEventListener('click', () => {
              // 判断当前列是否为升序
              const isAsc = th.classList.contains('sorted-asc');
              // 根据当前排序状态进行排序
              list.sort((a, b) => {
                  if (a.value[index] < b.value[index]) return isAsc ? -1 : 1;
                  if (a.value[index] > b.value[index]) return isAsc ? 1 : -1;
                  return 0;
              });
              // 清空表格内容
              tbody.innerHTML = '';
              // 将排序后的列表重新插入表格中
              list.forEach(({ tr }) => tbody.appendChild(tr));
              // 更新排序状态类名
              th.classList.toggle('sorted-asc', !isAsc);
              th.classList.toggle('sorted-desc', isAsc);
          });
      });
  },

  getBodyList(trs) {
      return trs.map(tr => {
          // 获取 tr 的所有 td 元素，并将其转换为数组
          const tds = Array.from(tr.querySelectorAll('td'));
          // 将 td 内容转换为数字，如果不是数字则使用原始内容
          const val = tds.map(td => {
              const parsedValue = parseInt(td.textContent);
              return isNaN(parsedValue) ? td.textContent : parsedValue;
          });
          return { tr, value: val };
      });
  }
};

order.init({
  el: document.getElementById('sortable-table')
});
