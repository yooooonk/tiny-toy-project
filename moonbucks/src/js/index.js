// 메뉴추가
const $ = (selector) => document.querySelector(selector);

const menuInput = $('#espresso-menu-name');
const menuList = $('#espresso-menu-list');

function App() {
  $('#espresso-menu-form').addEventListener('submit', (e) =>
    e.preventDefault()
  );

  menuInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      // 메뉴 추가
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

      menuList.insertAdjacentHTML(
        'beforeend',
        menuItemTemplate(e.target.value)
      );
      // input reset
      menuInput.value = '';

      // count update
      $('.menu-count').innerText = `총 ${menuList.childNodes.length}개`;
    }
  });
}

App();
