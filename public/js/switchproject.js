// 获取所有的 a 标签
var links = document.querySelectorAll('.project-a');

let currentActiveATag = links[0];

let currentActiveProject = 'igem2021';
document.getElementById(currentActiveProject).style.display = 'flex';

// 遍历所有 a 标签，为它们绑定点击事件
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认事件
    currentActiveATag.classList.remove('active');
    console.log(this);
    this.classList.add('active');
    currentActiveATag = this;
    document.getElementById(currentActiveProject).style.display = 'none';
    // 获取当前点击的 a 标签的 data-target 属性值
    var targetId = this.getAttribute('data-target');
    // 获取目标元素，并显示它
    var targetElement = document.getElementById(targetId);
    targetElement.style.display = 'flex';
    currentActiveProject = targetId;
  });
}