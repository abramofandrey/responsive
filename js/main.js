function changeTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active');

  document.querySelectorAll('.tab__item-btn').forEach(btn => {
    btn.classList.remove('tab__item-btn--active');
  });

  document.getElementById(`${tabId}Btn`).classList.add('tab__item-btn--active');

  document.querySelectorAll('.tab__item-btn .svg-icon path').forEach(path => {
    path.style.fill = '#000000';
  });

  const activeSvgPaths = document.getElementById(`${tabId}Btn`).querySelectorAll('.svg-icon path');
  activeSvgPaths.forEach(path => {
    path.style.fill = '#fff';
  });
}

document.getElementById('tab1Btn').addEventListener('click', function () {
  changeTab('tab1');
});

document.getElementById('tab2Btn').addEventListener('click', function () {
  changeTab('tab2');
});

document.getElementById('tab3Btn').addEventListener('click', function () {
  changeTab('tab3');
});

document.addEventListener('DOMContentLoaded', () => {
  const showMoreButton = document.querySelector('.show-more__btn');
  const hiddenPosts = document.querySelectorAll('.feature-page__post:nth-child(n+13)');

  showMoreButton.addEventListener('click', () => {
    hiddenPosts.forEach(post => {
      post.style.display = 'block';
    });

    // Дополнительный код, который может быть добавлен для скрытия кнопки после отображения всех постов
    showMoreButton.style.display = 'none';
  });
});

// прокручивает страницу к элементу, чей идентификатор указан в атрибуте "data-link"
const links = document.querySelectorAll(".navigation__item > a");
links.forEach(link => {
  link.onclick = () => {
    const targetId = link.getAttribute("data-link");
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };
});

const footerLinks = document.querySelectorAll(".footer-navigation__item > a");
footerLinks.forEach(link => {
  link.onclick = () => {
    const targetId = link.getAttribute("data-link");
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };
});

// Функция для прокрутки страницы вверх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
