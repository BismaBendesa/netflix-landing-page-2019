const tabItems = document.querySelectorAll('.tab-item'); //nodeList
const tabContentItems = document.querySelectorAll('.tab-content-item'); // nodeList like array


function removeShow(){
  tabContentItems.forEach(item => item.classList.remove('show'));
}

function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Select tab content item 
function selectItem(e){
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add('tab-border');
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

// Click event
tabItems.forEach(item => item.addEventListener('click', selectItem));