window.onload = function () {
  const parallax = document.querySelector('.parallax');

  if (parallax) {
    const content = document.querySelector('.parallax__container');
    const layer1 = document.querySelector('.imgs-prlx__l1');
    const layer2 = document.querySelector('.imgs-prlx__l2');
    const layer3 = document.querySelector('.imgs-prlx__l3');
    const layer4 = document.querySelector('.imgs-prlx__l4');
    const layer5 = document.querySelector('.imgs-prlx__l5');
    const layer6 = document.querySelector('.imgs-prlx__l6');
    const layer7 = document.querySelector('.imgs-prlx__l7');

    // Коэффициенты

    const coefFor1 = 70;
    const coefFor2 = 60;
    const coefFor3 = 50;
    const coefFor4 = 40;
    const coefFor5 = 30;
    const coefFor6 = 20;
    const coefFor7 = 10;

    // Скорость анимации

    const speed = 0.05;

    // Объявление переменных

    let positionX = 0;
    let positionY = 0;
    let coordXpercent = 0;
    let coordYpercent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXpercent - positionX;
      const distY = coordYpercent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      // Передаем стили

      layer1.style.transform = `translate(${positionX / coefFor1}%,${positionY / coefFor1}%)`;
      layer2.style.transform = `translate(${positionX / coefFor2}%,${positionY / coefFor2}%)`;
      layer3.style.transform = `translate(${positionX / coefFor3}%,${positionY / coefFor3}%)`;
      layer4.style.transform = `translate(${positionX / coefFor4}%,${positionY / coefFor4}%)`;
      layer5.style.transform = `translate(${positionX / coefFor5}%,${positionY / coefFor5}%)`;
      layer6.style.transform = `translate(${positionX / coefFor6}%,${positionY / coefFor6}%)`;
      layer7.style.transform = `translate(${positionX / coefFor7}%,${positionY / coefFor7}%)`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener('mousemove', function (e) {
      // Получение ширины и высоты блока
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      // Ноль посередине
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      //  Получаем проценты
      coordXpercent = coordX / parallaxWidth * 100;
      coordYpercent = coordY / parallaxHeight * 100;
    });

    window.addEventListener('scroll', function () {
      const scrollTopPercent = window.pageYOffset / parallax.offsetHeight * 100;
      content.style.transform = `translateY(-${scrollTopPercent / 3}%)`;
      layer1.parentElement.style.transform = `translateY(-${scrollTopPercent / (coefFor1 / 20)}%)`;
      layer2.parentElement.style.transform = `translateY(-${scrollTopPercent / (coefFor2 / 18)}%)`;
      layer3.parentElement.style.transform = `translateY(-${scrollTopPercent / (coefFor3 / 16)}%)`;
      layer4.parentElement.style.transform = `translateY(-${scrollTopPercent / (coefFor4 / 14)}%)`;
      layer5.parentElement.style.transform = `translateY(-${scrollTopPercent / (coefFor5 / 12)}%)`;
      layer6.parentElement.style.transform = `translateY(-${scrollTopPercent / (coefFor6 / 10)}%)`;
      layer7.parentElement.style.transform = `translateY(-${scrollTopPercent / (coefFor7 / 8)}%)`;
    });
  }
}