$(document).ready(function(){
  /*Скрипт анимаций*/
  const line = document.querySelectorAll('.gl');
  const lineR = document.querySelectorAll('.gr');
  const texts = document.querySelectorAll('.gt');
  const red = document.querySelectorAll('.red');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('line-animation');
      }
      else {
        entry.target.classList.remove('line-animation');
      }
    });
  });
  const observerR = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('line-animation2');
      }
      else {
        entry.target.classList.remove('line-animation2');
      }
    });
  });
  /*Без повтора при прокрутке*/
  const otx = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('topX');
      }
    });
  });
  const ext = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reduce');
      }
    });
  });
  /*Работа В зависимости от положения*/
  for (var i = 0; i < line.length; i++) {
    const r = line[i];
    observer.observe(r);
  }
  for (var i = 0; i < lineR.length; i++) {
    const s = lineR[i];
    observerR.observe(s);
  }
  for (var i = 0; i < texts.length; i++) {
    const x = texts[i];
    otx.observe(x);
  }
  for (var i = 0; i < red.length; i++) {
    const t = red[i];
    ext.observe(t);
  }
  /*Открытие меню при нажатии на логотип(Мобильная)*/
  $(".logo").click(function(){
    $(".menu").css('display', 'flex');
  });
  /*Прокрутка при нажатии на пункты меню*/
  $(".e1").click(function(){
    $('html, body').animate({
        scrollTop: $(".y1").offset().top
    }, 2000);
  });
  $(".e2").click(function(){
    $('html, body').animate({
        scrollTop: $(".y2").offset().top
    }, 2000);
  });
  $(".e3").click(function(){
    $('html, body').animate({
        scrollTop: $(".y3").offset().top
    }, 2000);
  });
  $(".e4").click(function(){
    $('html, body').animate({
        scrollTop: $(".w1").offset().top
    }, 2000);
  });
  /*Окно при нажатии Заказать консультацию*/
  $(".gobut").click(function(){
    $(".fix").show();
    $('body').css('background', 'grey');
  });
  /*Закрыть окно*/
  $(".close").click(function(){
    $(".fix").hide();
    $('body').css('background', 'white');
  });
});