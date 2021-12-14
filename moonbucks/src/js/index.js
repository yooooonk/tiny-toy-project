// 메뉴추가
const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem('menu', JSON.stringify(menu));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem('menu'));
  }
};

const menuInput = $('#espresso-menu-name');
const menuList = $('#espresso-menu-list');
const submitButton = $('#espresso-menu-submit-button');

function App() {
  this.menu = [];
  this.init = () => {
    if (store.getLocalStorage().length > 1) {
      this.menu = store.getLocalStorage();
    }
  };

  const menuItemTemplate = (
    menuItem,
    id
  ) => `<li data-menu-id=${id} class="menu-list-item d-flex items-center py-2">
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

  const updateMenu = (e) => {
    const menuId = e.target.closest('li').dataset.menuId;
    const $currentMenu = e.target.closest('li').querySelector('.menu-name');
    const editedMenu = window.prompt(
      '메뉴를 수정하세요',
      $currentMenu.innerText
    );

    menu[menuId].name = editedMenu;
    $currentMenu.innerText = editedMenu;

    store.setLocalStorage(menu);
  };

  const removeMenu = (e) => {
    const currentMenu = e.target.closest('li');
    if (
      window.confirm(
        `${currentMenu.querySelector('.menu-name').innerText}를 삭제하겠습니까?`
      )
    ) {
      const menuId = currentMenu.dataset.menuId;
      this.menu.splice(menuId, 1);

      store.setLocalStorage(menu);

      currentMenu.remove();

      updateCount();
    }
  };
  const addMenu = (menuItem) => {
    if (menuItem.trim().length === 0) return alert('메뉴를 입력해주세요');

    this.menu.push({ name: menuItem });
    // 메뉴 배열을 렌더링
    const lists = this.menu
      .map((menu, idx) => menuItemTemplate(menu.name, idx))
      .join('');
    menuList.innerHTML = lists;

    store.setLocalStorage(this.menu);
    resetInput();
    updateCount();
  };
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
    if (e.target.classList.contains('menu-edit-button')) {
      // 어떤 버튼에 이벤트를 달았는지 표헌하는게 좋을 것 같음
      updateMenu(e);
    }
  });

  menuList.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-remove-button')) {
      removeMenu(e);
    }
  });
}

const app = new App();

app.init();
