const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function removeBorder() {
  for (const tabItem of tabItems) {
    tabItem.classList.remove("tab-border");
  }
}

function removeShow() {
  for (const tabContentItem of tabContentItems) {
    tabContentItem.classList.remove("show");
  }
}
function selectItem() {
  removeBorder();
  this.classList.add("tab-border");
  removeShow();
  const tabContentItem = document.getElementById(`${this.id}-content`);

  tabContentItem.classList.add("show");
}

for (const tabItem of tabItems) {
  tabItem.addEventListener("click", selectItem);
}
