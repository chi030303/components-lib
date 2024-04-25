// 获取开关元素和开关状态
var switchElement = document.getElementById("custom-switch");
var switchState = document.getElementById("toggle-switch").checked;

// 初始状态
switchElement.classList.toggle("switch-on", switchState);
switchElement.classList.toggle("switch-off", !switchState);

// 监听开关的点击事件
switchElement.addEventListener("click", function() {
    // 切换开关状态
    switchState = !switchState;
    // 更新开关样式
    switchElement.classList.toggle("switch-on", switchState);
    switchElement.classList.toggle("switch-off", !switchState);
    // 修改开关的背景色
    if (switchState) {
        switchElement.style.backgroundColor = "#007bff"; // 开关打开时的颜色
    } else {
        switchElement.style.backgroundColor = "#ccc"; // 开关关闭时的颜色
    }
});
