function timeline() {
  var selectors = {
    id: document.querySelector("#shell"),
    item: document.querySelectorAll("#shell .timeline-item"),
    activeClass: "timeline-item--active",
    img: ".timeline-img"
  };
  for (let i = 0; i < 1; i ++){
    selectors.item[i].classList.add(selectors.activeClass);
    selectors.id.style.backgroundImage = "url(" + selectors.item[i].querySelector(selectors.img).getAttribute("src") + ")";
  }
  let currentActive = 0;
  window.addEventListener("scroll", function () {
    var max, min;
    var pos = window.scrollY;
    selectors.item.forEach(function (item, i) {
      let itemRect = item.getBoundingClientRect();
      let itemTop = itemRect.top + window.pageYOffset;
      min = itemTop;
      max = itemTop + item.offsetHeight;
      if (pos <= max && pos >= min - 300) {
        if(currentActive !== i){
          selectors.item[currentActive].classList.remove(selectors.activeClass);
          selectors.id.style.backgroundImage =
            "url(" +
            item.querySelector(selectors.img).getAttribute("src") +
            ")";
          selectors.item[i].classList.add(selectors.activeClass);
        }
        currentActive = i;
      }
    });
  });
}

function throttle(func, delay) {
  let timerId;
  return function (...args) {
    if (!timerId) {
      timerId = setTimeout(() => {
        func.apply(this, args);
        timerId = null;
      }, delay);
    }
  };
}

// throttle(timeline(), 500);
timeline();