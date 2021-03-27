//Cvičení 2 - Vytvořte podobnou stránku s vaším vlastním tématem.
// 1.	Vytvořte prázdnou stránku, do které vložte knihovnu dayjs.
// 2.	Vyberte si nějakou budoucí událost, jejíž datum je pevně určeno. Za pomoci knihovny dayjs vytvořte stránku zobrazující velké ANO nebo NE případně krátkou zprávu podle toho, zda už událost nastala či nikoliv.
// 3.	Publikuje vaši stránku na GitHub pages.
const velikonoce = dayjs('2021-04-04');
const dnes = dayjs();

const parElm = document.querySelector('#msg');

if (dnes.isAfter(velikonoce)) {
  parElm.textContent = 'ANO, POČKEJ SI ZA ROK';
  parElm.classList.add('msg--already');
} else {
  parElm.textContent = 'JEŠTĚ NE, ALE UŽ BRZY!';
  parElm.classList.add('msg--notYet');
}
