// 메뉴추가
const $ = (selector) => document.querySelector(selector);

const menuInput = $('#espresso-menu-name');
const menuList = $('#espresso-menu-list');
const submitButton = $('#espresso-menu-submit-button');

const menuItemTemplate = (
  menuItem
) => `<li class="menu-list-item d-flex items-center py-2">
                          <span class="w-100 pl-2 menu-name">${menuItem}</span>
                          <button
                              type="button"
                              class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
                          >
                              수정
                          </button>
                          <button
                              type="button"
                              class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
                          >
                              삭제
                          </button>
                          </li>`;

const resetInput = () => {
  menuInput.value = '';
};

const updateCount = () => {
  $('.menu-count').innerText = `총 ${menuList.childNodes.length}개`;
};
const addMenu = (menuItem) => {
  if (menuItem.trim().length === 0) return alert('메뉴를 입력해주세요');

  menuList.insertAdjacentHTML('beforeend', menuItemTemplate(menuItem));

  resetInput();
  updateCount();
};

const updateMenu = (target) => {
  const $currentMenu = target.closest('li').querySelector('.menu-name');

  const editedMenu = window.prompt('메뉴를 수정하세요', $currentMenu.innerText);
  $currentMenu.innerText = editedMenu;
};

function App() {
  $('#espresso-menu-form').addEventListener('submit', (e) =>
    e.preventDefault()
  );

  menuInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addMenu(e.target.value);
    }
  });

  submitButton.addEventListener('click', () => {
    addMenu(menuInput.value);
  });

  menuList.addEventListener('click', (e) => {
    if (target.classList.contains('menu-edit-button')) {
      // 어떤 버튼에 이벤트를 달았는지 표헌하는게 좋을 것 같음
      updateMenu(e.target);
    }
  });
}

App();
