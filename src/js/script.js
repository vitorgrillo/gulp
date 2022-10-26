const $title = document.querySelector('h1');

$title.addEventListener('click', () => {
  document
    .querySelector('body')
    .insertAdjacentHTML('afterend', '<div class="block"></div>');

  let heightMain = document.querySelector('main').offsetHeight;

  let $block = document.querySelector('.block');

  const progressBlock = setInterval(() => {
    if (heightMain > 0) {
      $block.style.cssText = `top: ${heightMain}px;`;
      heightMain--;
    } else {
      $block.remove();
      clearTimeout(progressBlock);
    }
  }, 5);
});
