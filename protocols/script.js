"use strict";

function fun1() {
   let options = document.getElementById("mySelect").value;
   let name = document.getElementById("Name");
   console.log(options.checked);
   if (options === "ІВ-93" || options.checked) {
      name.innerHTML = "Стеценко Богдан та Гулак Іван";
   } else {
      name.innerHTML = "Губенко Владислав";
   }
}
let buttons = document.getElementsByClassName("left-part__item"); // select for laba#1
let buttons_2 = document.getElementsByClassName("left-part__item-second"); // select for laba#2
let buttons_3 = document.getElementsByClassName("left-part__item-third"); // select for laba#3
let buttons_4 = document.getElementsByClassName("left-part__item-fourth"); // select for laba#4
let buttons_5 = document.getElementsByClassName("left-part__item-fifth"); // select for laba#5
let buttons_6 = document.getElementsByClassName("left-part__item-sixth"); // select for laba#6
let buttons_7 = document.getElementsByClassName("left-part__item-seventh"); // select for laba#7
let buttons_8 = document.getElementsByClassName("left-part__item-eights_ninth"); // select for laba#7

let opuc = document.getElementById("code");
let divText = document.getElementById("right-part");
let code = document.getElementById("code"); // select for laba#1
let code_2 = document.getElementById("code_2"); // select for laba#2
let code_3 = document.getElementById("code_3"); // select for laba#3
let code_4 = document.getElementById("code_4"); // select for laba#4
let code_5 = document.getElementById("code_5"); // select for laba#5
let code_6 = document.getElementById("code_6"); // select for laba#6
let code_7 = document.getElementById("code_7"); // select for laba#7
let code_8_9 = document.getElementById("code_8_9"); // select for laba#7
let text = document.querySelector(".text");


let lab1 = document.querySelectorAll('.labs__button')
console.log(lab1);
let main1 = document.querySelector('.main_1'); // select for laba#1
let main2 = document.querySelector('.main_2'); // select for laba#2
let main3 = document.querySelector('.main_3'); // select for laba#3
let main4 = document.querySelector('.main_4'); // select for laba#4
let main5 = document.querySelector('.main_5'); // select for laba#5
let main6 = document.querySelector('.main_6'); // select for laba#6
let main7 = document.querySelector('.main_7'); // select for laba#6
let main_8_9 = document.querySelector('.main_8_9'); // select for laba#6



// -------------------- By click on labs button number 1 another buttons don't show anything --------------------
lab1[0].addEventListener('click', function () {
   if (main1.style.display === 'none') {
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';
      main1.style.display = 'block';
      protocolFirst();
   } else {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';

   }
})
// ---------------------------------------------------------------------------------------------------------------
// -------------------- By click on labs button number 2 another buttons don't show anything --------------------
lab1[1].addEventListener('click', function () {
   if (main2.style.display === 'none') {
      main1.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';
      main2.style.display = 'block';
      protocolSecond();
   } else {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';

   }
})
// ---------------------------------------------------------------------------------------------------------------
// -------------------- By click on labs button number 3 another buttons don't show anything --------------------
lab1[2].addEventListener('click', function () {
   if (main3.style.display === 'none') {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';
      main3.style.display = 'block';
      protocolThird();
   } else {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';

   }
})
// ---------------------------------------------------------------------------------------------------------------
// -------------------- By click on labs button number 4 another buttons don't show anything --------------------
lab1[3].addEventListener('click', function () {
   if (main4.style.display === 'none') {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';
      main4.style.display = 'block';
      protocolFourth();
   } else {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';
   }
})
// ---------------------------------------------------------------------------------------------------------------
// -------------------- By click on labs button number 5 another buttons don't show anything --------------------
lab1[4].addEventListener('click', function () {
   if (main5.style.display === 'none') {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';
      main5.style.display = 'block';
      protocolFifth();
   } else {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';
   }
})
lab1[5].addEventListener('click', function () {
   if (main6.style.display === 'none') {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';
      main6.style.display = 'block';
      protocolSixth();
   } else {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';
   }
})
lab1[6].addEventListener('click', function () {
   if (main6.style.display === 'none') {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main_8_9.style.display = 'none';
      main7.style.display = 'block';
      protocolSeventh();
   } else {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';
   }
})
lab1[7].addEventListener('click', function () {
   if (main_8_9.style.display === 'none') {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main_8_9.style.display = 'block';
      main7.style.display = 'none';
      protocolEighth();
   } else {
      main1.style.display = 'none';
      main2.style.display = 'none';
      main3.style.display = 'none';
      main4.style.display = 'none';
      main5.style.display = 'none';
      main6.style.display = 'none';
      main7.style.display = 'none';
      main_8_9.style.display = 'none';
   }
})
// ------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------  Work with Buttons info for laba# 1  --------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
function protocolFirst() {
   buttons[0].addEventListener("click", function () {
      code.innerHTML = `
   Цей проект буде демонструвати виконання лабораторних робіт, бригадою №4 на прикладі сайту з надання допомоги в програмному забезпечені <br>
   та створенні веб-сервісів.<br>
   Предметною областю є робота компанії наж наданням послуг, зокрема верстка сайті, створення функціоналу, повне проектування сайт роботи.<br>
   Основною метою роботи Iddly є розробка веб-сервісів різної складності, надання допомоги у розробці та дизайні. Таким чином,<br>
   бажаючі отримати послуги стаюсь замовниками нашого сервісу.Бажаючі отримати консультацію, можуть залишити заяву, заповнивши форму <br>
   на головній сторінці.<br>
   <br>
   Цей продукт розробляється для користування таких груп людей:<br>
      - для компаній(розробка веб-сервісів, дизайну та верстка макету, відповідно до потреб замовника)<br>
      - для публічних персон(створення сайті візиток)<br>
      - для брендів(розробка веб-магазинів)<br>
      - для громадських організацій(розробка сайті відповідно до потреб організації)<br>

   Functionality — Функціональні вимоги: зворотній зв'язок з замовником, статистика, e-mail розсилки з гнучкими налаштуваннями.<br>
   Usability — Вимоги до зручності використання (UX): гарний дизайн, юзабельність, відсутність речей, що відбивають бажання користуватися <br>
   веб-сервісом.<br>
   Reliability — Вимоги до надійності: низька частота можливих збоїв, надійність.<br>
   Performance — Вимоги до продуктивності: швидкий час відгуку, гнучке використання ресурсів, ефективність, потужність, масштабованість, <br>
   адаптивність.<br>
   Supportability - Вимоги до підтримки: можливість підтримки, ремонтопридатність, гнучкість, доопрацювання. <br>
   <br>Посилання на GitHub : <a href="https://github.com/Devy707/Back-Front-Iddly">Посилання</a><br>
   `;
   });

   buttons[1].addEventListener("click", function () {
      code.innerHTML = `
   Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОГО ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, 
   ФОРМАМИ в HTML-ДОКУМЕНТІ.

   Мета: придбати практичні навички роботи  з HTML-документом, таблицями,формами, зображеннями, посиланнями.
   Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.

   Лабораторна розташована за посиланням: <a target="_blank" href="https://github.com/Devy707/Back-Front-Iddly">https://github.com/Devy707/Back-Front-Iddly</a>
   `;
   });

   buttons[3].addEventListener("click", function () {
      code.textContent = `
   <section class="table-section">
   <div class="container">
   <table class="main-table">
     <tr>
       <th>Name</th>
       <th>Age</th>
       <th>Position</th>
     </tr>
     <tr>
       <td>Stetsenko Bogdan</td>
       <td>19</td>
       <td>Programmer, Team Lead</td>
     </tr>
     <tr>
       <td>Gulak Ivan</td>
       <td>19</td>
       <td>Programmer</td>
     </tr>
     <tr>
       <td>Gubenko Vlad</td>
       <td>19</td>
       <td>Programmer</td>
     </tr>
   </table>
 </div>
 </section>
   `;
   });

   buttons[5].addEventListener("click", function () {
      code.textContent = `
   <section class="project-section-images">
      <div class="project-section-images__content">
         <div class="project-section-images__image1">
         </div>
         <div class="project-section-images__image2">
         </div>
         <div class="project-section-images__image3">
         </div>
         <div class="project-section-images__image4"></div>
         </div>
      </div>
   </section>
   `;
   });

   buttons[4].addEventListener("click", function () {
      code.textContent = `
   <section class="form-section">
      <div class="conteiner">
         <div class="form-section__content">
            <form action="#" method="post">
               <input placeholder="+38" type="phone" name="usertel">
               <input placeholder="e-mail" type="text" name="useremail">
               <input placeholder="name" type="text" name="username">
               <input placeholder="surname" type="text" name="usersurname">
               <button class="form-section__button" type="submit">Contact US</button>
            </form>
         </div>
      </div>
   </section>
   `;
   });

   buttons[6].addEventListener("click", function () {
      code.textContent = `
   Під час лабораторної роботи ми придбали практичні навички роботи  з HTML-документом, таблицями,формами, зображеннями, посиланнями.
   Створили шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт. Також було на половину розроблено
   головну сторінку нашого веб-сервісу, де відображені усі результати роботи.
   
   `;
   });

}
// ------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------  Work with Buttons info for laba# 2  --------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
function protocolSecond() {
   buttons_2[0].addEventListener("click", function () {
      code_2.textContent = `Если вам необходимо изменить внешний вид содержимого, которое находится в каком-либо теге, используйте CSS селекторы тегов. 
Допустим, вам нужно изменить шрифт и цвет всех тегов <h1>, которые имеются на веб-странице. Для этого вам понадобится создать стиль, 
где селектором будет h1 (обратите внимание: в CSS угловые скобки <> тега не записываются, а используется только его имя):

h2 {
   text-align: center;
   padding: 100px 0px 50px 0px;
   color: #ffe000;
   text-transform: uppercase;
}
* Код, указанный в качестве примера использовался в работе.

Написав один такой стиль, вы измените шрифт сразу для всех тегов <h2> на странице, сколько бы их ни было. 
Согласитесь, что это очень быстро и удобно. Аналогично можно создавать стили для других тегов, заменяя название селектора на нужное вам  
(p, h1, span, h3 и т. д.).`;
   });
   buttons_2[1].addEventListener("click", function () {
      code_2.textContent = `Классы CSS – это отличный инструмент, который расширяет возможности создания стилей в разы. 
Для лучшего понимания мы будем рассматривать всё на примерах.
   
Итак, чуть выше мы применили стиль для всех тегов <h2> на веб-странице – текст имеет выравнивание по центру, внутрений отступ сверху и снизу,
   верхний регистр всех букв и цвет в шестнадцатеричной форме записи. Но что делать, если вам понадобилось изменить цвет одного из тегов <h3> 
   на зеленый? На помощь приходят селекторы классов. Всё что вам необходимо сделать, это создать стиль,
   где селектор – придуманное вами имя класса. 
   Мы назовем класс greentext и запишем правило:

.greentext {
   color: green;
}
Но это еще не всё. Теперь, чтобы изменить цвет для одного из тегов <h2> на странице, нужно отредактировать HTML-документ, 
применив класс greentext к необходимому нам тегу. Записывается это так:

<h2 class="greentext"></h2>
Созданный класс можно применять к любым элементам веб-страницы. Вы можете придавать стиль не только целым заголовкам и абзацам,
   но и отдельным фрагментам страницы.

Запомните несколько правил написания классов:

- в CSS перед названием селектора класса обязательно ставится точка (но при присвоении класса в HTML-документе эта точка не нужна);
- в названии классов можно использовать только буквы латинского алфавита, дефис, символ подчеркивания, цифры;
- название класса всегда должно начинаться с буквы (правильные варианты названий: .labs__button, .labs-content, .main_2; 
   неправильные: .2main, .-link, ._divider);
- названия классов CSS чувствительны к регистру, поэтому классы вроде .review и .Review будут восприниматься как два отдельных.`;
   });
   buttons_2[2].addEventListener("click", function () {
      code_2.textContent = `Идентификатор определяет уникальное название элемента. Записывается он почти так же, как и класс,
только в CSS вместо точки ставится символ решетки #:
   
#Name {
   width: 310px;
   }
В HTML-документе идентификатор присваивается с помощью атрибута id:

<div id="right-part">
Возможно, у вас возник вопрос: в чем разница между идентификатором и классом? Существует несколько отличий:

ID – это уникальное название элемента на веб-странице, которое должно встречаться на ней только один раз 
(например, шапка сайта и подвал: id="header" и id="footer"), в то время как класс может присваиваться нескольким 
элементам с целью отличать их от остальных;
идентификаторы удобны для JavaScript-разработчиков, поскольку позволяют получить быстрый доступ к элементу DOM из скриптов 
(во многом именно поэтому необходимо, чтобы ID встречался на странице лишь один раз);
каждое правило CSS имеет свой так называемый вес (от веса зависит, какое из правил получит более высокий приоритет при выполнении). 
Идентификатор имеет больший вес, чем класс, поэтому, если элементу присвоен и ID, и класс, предпочтение отдается ID. Пример:
<p id="text" class="content">текст</p>
#text {
   color: yellow;
}

.content {
   color: blue;
}
У ID больший вес, поэтому цвет текста будет желтым (yellow).

с помощью идентификаторов можно ставить якорные ссылки на определенные элементы веб-страницы. Достаточно присвоить этому элементу ID:
<h3 id="description">Описание</h3>
и дать на него ссылку вида http://site.com/category/page/#description.`;
   });

   buttons_2[4].addEventListener("click", function () {
      code_2.textContent = `Соседними называются элементы веб-страницы, когда они следуют непосредственно друг за другом в коде документа.
Синтаксис: E + F { Описание правил стиля }

Для управления стилем соседних элементов используется символ плюса (+), который устанавливается между двумя селекторами E и F. 
Пробелы вокруг плюса не обязательны. Стиль при такой записи применяется к элементу F, но только в том случае, если он является 
соседним для элемента E и следует сразу после него. Рассмотрим несколько примеров.

<p>Lorem ipsum <b>dolor</b> sit amet.</p>

Элемент <b> является дочерним по отношению к <p>, поскольку он находится внутри этого контейнера. Соответственно <p> выступает 
в качестве родителя <b>.

<p>Lorem ipsum <b>dolor</b>  <var>sit</var> amet.</p>

Элементы <var> и <b> никак не перекрываются и представляют собой соседние элементы. То, что они расположены внутри контейнера <p>,
   не влияет на их отношение.

<p>Lorem <b>ipsum </b> dolor sit amet, <i>consectetuer</i> adipiscing <tt>elit</tt>.</p>

Соседними здесь являются элементы <b> и <i>, а также <i> и <tt>. При этом <b> и <tt> к соседним элементам не относятся из-за того,
что между ними расположен контейнер <i>.`;
   });

   buttons_2[5].addEventListener("click", function () {
      code_2.textContent = `Дочерним называется элемент, который непосредственно располагается внутри родительского элемента. 
Какой элемент выступает родителем, а какой его потомком легко выяснить с помощью дерева элементов — так называется структура 
отношений элементов документа между собой

<body>
   <div>
      <p>Text</p>
   <p>
   <strong>Text</strong>
   </p>
   </div>
</body>

На приведённом выше примере в удобном виде представлена вложенность элементов и их иерархия. 
Здесь дочерним элементом по отношению к <div> выступает элемент <p>. Вместе с тем <strong> не является дочерним для элемента <div>,
   поскольку он расположен в контейнере <p>.

Синтаксис: 
E > F { Описание правил стиля }

Стиль применяется к элементу F, только когда он является дочерним для элемента E.`;
   });

   buttons_2[6].addEventListener("click", function () {
      code_2.textContent = `Устанавливает стиль для элемента, если задан специфичный атрибут. Его значение в данном случае не важно.

Синтаксис
[<атрибут>] { Описание правил стиля }
E[<атрибут>] { Описание правил стиля }

Пример:

HTML:
<body>
   <div class="wrapper">
      <p>Lorem, ipsum dolor.</p>
      <p atr="мой атрибут">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, numquam?</p>
   </div>
</body>

CSS:
p{
   font-size: 30px;
   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
p[atr]{
   color: red;
}

В данном примере меняется цвет текста внутри параграфа <p>, когда к нему добавляется атрибут atr. 
Обратите внимание, что для селектора p[atr] нет нужды повторять стилевые свойства, поскольку они наследуются от селектора p.`;
   });

   buttons_2[7].addEventListener("click", function () {
      code_2.textContent = `Иногда требуется установить одновременно один стиль для всех элементов веб-страницы,
например, задать шрифт или начертание текста. В этом случае поможет универсальный селектор, который соответствует
любому элементу веб-страницы.

Синтаксис
* { Описание правил стиля }

Для обозначения универсального селектора применяется символ звёздочки (*). В некоторых случаях указывать 
универсальный селектор не обязательно. Так, например, записи *.class и .class являются идентичными по своему результату.

Пример использование универсального селектора в нашей ЛР№2:

*,
*::after,
*::before {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}`;
   });

   buttons_2[9].addEventListener("click", function () {
      code_2.textContent = `Маркированный список определяется тем, что перед каждым элементом списка добавляется небольшой маркер,
обычно в виде закрашенного кружка. Сам список формируется с помощью контейнера <ul>, а каждый пункт списка начинается с тега <li>.
В списке непременно должен присутствовать закрывающий тег </ul> или </ol>, иначе возникнет ошибка. 
Закрывающий тег </li> хотя и не обязателен, но советуем всегда его добавлять, чтобы четко разделять элементы списка.
Ниже приведен пример, как можно использовать списки для создания меню. 
* Код без классов, чтобы было легко понять принцип

<nav>
   <ul>
      <li"><a>About</a></li>
      <li><a>Portfolio</a></li>
      <li><a>Labaratory</a>
         <ul>
            <li><a target="_blank" href="protocols/index-1.html">Labaratory work #1</a></li>
            <li><a target="_blank" href="protocols/index-2.html">Labaratory work #2</a></li>
            <li><a>Labaratory work #3</a></li>
            <li><a>Labaratory work #4</a></li>
            <li><a>Labaratory work #5</a></li>
            <li><a>Labaratory work #6</a></li>
            <li><a>Labaratory work #7</a></li>
            <li><a>Labaratory work #8</a></li>
            <li><a>Labaratory work #9</a></li>
         </ul>
      </li>
   </ul>
</nav>

Так же списки бывают еще нумероваными! Для них всё тоже самое но тег <ol>
Маркеры могут принимать один из трех видов: круг (по умолчанию type="disc"), окружность (type="circle") и квадрат (type="square").
   Для выбора стиля маркера используется атрибут type тега <ul>

Так же в виде маркеров можно использовать изображение. 
Для этого в каскадной таблице стилей для всех тегов <li> задаётся свойство background со значение url('адрес картинки') 0 0 no-repeat;`;
   });

   buttons_2[10].addEventListener("click", function () {
      code_2.textContent = `CSS имеет несколько опций для определения цвета текста и фоновых областей на веб-странице. 
Эти опции по работе с цветом не только заменяют аналогичные в простом HTML, но и дают массу новых возможностей. 
Например, традиционный путь для создания цветной области, заключается в применении таблицы. Стили позволяют отказаться 
от подобного использования таблиц предлагая более простые и удобные варианты управления цветом.

Ниже перечислены свойства элементов, предназначенных для задания цвета.

1) color;
2) background-color;
3) background-image;
4) background-repeat;
5) background-attachment;
6) background-position;

Установка цвета
Цвет, используя CSS, можно задавать тремя способами: словом, по его шестнадцатеричному значению и с помощью RGB и RGBA 
(Можно определить цвет используя значения красной, зеленой и синей составляющей в десятичном исчислении. 
   Значение каждого из трех цветов может принимать значения от 0 до 255. Также можно задавать цвет в процентном отношении).
RGBA это то же самое что и RGB просто добавлен альфа канал opacity.

Установка цвета фона и фонового рисунка
Цвет фона определяется значением свойства background-color, а изображение, которое используется в качестве фона,
   задается свойством background-image. Значением по умолчанию для цвета фона является transparent,
   которое устанавливает прозрачный фон. Для установки фонового рисунка используется абсолютный или относительный адрес к файлу.
   Рекомендуется задавать одновременно фоновый рисунок и цвет фона, который будет использоваться в случае недоступности файла изображения.

Если задано фоновое изображение, то свойство background-repeat определяет его повторяемость и способ, как это делать.
   Допустимыми значениями являются repeat (повторяемость по вертикали и горизонтали), repeat-x (по горизонтали),
   repeat-y (по вертикали) и no-repeat (только один рисунок, без повторения). 

Положение фона определяется свойством background-position.
   У него два значения, положение по горизонтали (может быть — right, left, center) и вертикали (может быть — top, bottom, center).
   Положение можно, также, задавать в процентах, пикселах или других абсолютных единицах

Свойство background-attachment: fixed фиксирует фон, чтобы он оставался неподвижным при прокрутке содержимого окна браузера.

Пример использования в коде HTML:

.header {
   background: url("header/bg/bg.jpg") center center / cover no-repeat;
   height: 1500px;
   }`;
   });

   buttons_2[11].addEventListener("click", function () {
      code_2.textContent = `Внутренний отступ - пустое пространство между содержимым элемента и его рамкой (если она установлена).
Для добавления и управления шириной внутренних отступов со всех четырех сторон элемента используется свойство padding.

Внешний отступ - пустое пространство, отделяющее элемент от других элементов или краев окна браузера.
   Для добавления и управления шириной внешних отступов со всех четырех сторон элемента используется свойство margin.

Свойства padding и margin могут принимать от одного до четырех значений:

padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;

Где значения устанавливаются по часовой стрелке, начиная с верхнего: 
padding: top, right, bottom, left;
margin: top, right, bottom, left;

Если у свойств указать всего одно значение, то отступы со всех сторон будут одинаковой ширины.


Для отступов, так же как и для рамок, есть свойства позволяющие управлять размером отступа с каждой стороны отдельно.
   Внутренние отступы регулируются свойствами: padding-top, padding-right, padding-bottom и padding-left. 
   Внешние отступы регулируются свойствами: margin-top, margin-right, margin-bottom и margin-left.

* значения свойств padding и margin не наследуются дочерними элементами, поэтому нужно указывать ширину отступов отдельно 
   для каждого элемента, которому они необходимы.`;
   });

   buttons_2[12].addEventListener("click", function () {
      code_2.textContent = `Плавающие элементы используются на веб-странице обычно для того, чтобы установить вокруг объекта обтекание текста.
В качестве таких объектов могут применяться рисунки или слои, содержащие изображения и надписи.
Для создания обтекания предназначено стилевое свойство float со значением left или right.
Значение left выравнивает слой, к которому добавлен float, по левому краю, а обтекание происходит по свободным сторонам.
Значение right, наоборот, выравнивает слой по правому краю.

Кроме такой очевидной ориентации плавающих элементов, с их помощью можно располагать слои по горизонтали и 
таким образом формировать колонки.Хотя свойство float исходно не предназначалось для такой роли, создание многоколонного 
макета веб-страницы на основе float достаточно устоялось.Такой способ имеет некоторые недостатки, но их можно учитывать 
и применять в своих целях.`;
   });


   // //родственные
   // buttons[5].addEventListener("click", function () {
   //    code.textContent = `Родственные селекторы по своему поведению похожи на соседние селекторы (запись вида E + F), но в отличие от них стилевые правила применяются ко всем ближайшим элементам. К примеру, для селектора h1~p стиль будет применяться ко всем элементам <p>, располагающихся после заголовка <h1>. При этом <h1> и <p> должны иметь общего родителя, так что если <p> вставить внутрь <div>, то стили применяться уже не будут.

   //    Здесь красный цвет текста будет установлен для всех абзацев.

   //    h1 ~ p { color: red; }
   //    <h1>Заголовок</h1>
   //    <p>Абзац 1</p>
   //    <p>Абзац 2</p>

   //    Здесь красный цвет текста будет установлен для первого и третьего абзацев. Ко второму абзацу стиль не применяется, поскольку <h1> и <p> не имеют общего родителя.

   //    h1 ~ p { color: red; }
   //    <h1>Заголовок</h1>
   //    <p>Абзац 1</p>
   //    <div><p>Абзац 2</p></div>
   //    <p>Абзац 3</p>

   //    Синтаксис E ~ F { Описание правил стиля }`;
   // });
}
// ------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------  Work with Buttons info for laba# 3  --------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
function protocolThird() {
   buttons_3[0].addEventListener("click", function () {
      code_3.innerHTML = `
      Тема: БЛОЧНА ВЕРСТКА HTML-ДОКУМЕНТУ ЗА МАКЕТОМ. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.

      Мета: 
      ⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, 
      з’ясувати переваги та недоліки типів макетів веб-сторінок
      ⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX

      <br>Посилання на GitHub : <a href="https://github.com/Devy707/Back-Front-Iddly">Посилання</a><br>

      `;
   });

   buttons_3[2].addEventListener("click", function () { // Ivan-layout
      code_3.innerHTML = `
      <img src="../some_images/ivan.png" alt="">

      Посилання на роботу студента.
      Репозиторій на GitHub: <a target="_blank" href="https://github.com/ivanhulak/my_projects_VERSTKA/tree/master/lab3_project">https://github.com/ivanhulak/my_projects_VERSTKA/tree/master/lab3_project</a>
      
      Або одразу переглянути роботу: <a target="_blank" href="https://ivanhulak.github.io/my_projects_VERSTKA/lab3_project/">Тут можна переглянути роботу за допомогою сервісу GitHub Pages</a>
      
      `;
   });

   buttons_3[3].addEventListener("click", function () { // Bogdan-layout
      code_3.innerHTML = `
      <img src="../some_images/bogdan.png" alt="">

      Посилання на роботу студента.
      Репозиторій на GitHub: <a target="_blank" href="https://github.com/Devy707/lab3bb">https://github.com/Devy707/lab3bb</a>
      `;
   });

   buttons_3[4].addEventListener("click", function () { // Vlad-layout
      code_3.innerHTML = `
      <img src="../some_images/layout_lab3.png" alt="">
      `;
   });

   buttons_3[6].addEventListener("click", function () {
      code_3.textContent = `
   <div class="wrapper">
      <table>
          <table class="main-table first-table">
              <tr class="main-table__row first">
                  <td class="main-table__column"></td>
                  <td class="main-table__column">1</td>
              </tr>
          </table>
          <div class="main-table__div">
              <table class="main-table second-table">
                  <tr class="main-table__row second">
                      <td class="main-table__column">2</td>
                  </tr>
              </table>
              <table class="main-table third-table">
                  <tr class="main-table__row third">
                      <td class="main-table__column">3</td>
                  </tr>
              </table>
              <table class="main-table fourth-table">
                  <tr class="main-table__row fourth">
                      <td class="main-table__column">4</td>
                  </tr>
              </table>
              <table class="main-table fifth-table">
                  <tr class="main-table__row fifth">
                      <td class="main-table__column">5</td>
                  </tr>
              </table>
          </div>
          <table class="main-table sixth-table">
              <tr class="main-table__row sixth">
                  <td class="main-table__column">6</td>
              </tr>
          </table>
      </table>
   </div>
   `;
   });

   buttons_3[7].addEventListener("click", function () {
      code_3.textContent = `
      <!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
   <div class="wrapper">
      <div class="container">
         <header class="header">
            <div class="white-left"></div>
            <div class="transparent">
            <div class="transparent-right">1</div></div>
         </header>
         <main class="main-content">
            <div class="left-blue">2</div>
            <div class="main-right">
               <div class="main-header"></div>
               <div class="main-right__content">
                  <div class="main-right__content-left">3
                     <div class="red"></div>
                  </div>
                  <div class="main-right__content-right">
                     4
                  </div>
               </div>
            </div>
         </main>
         <footer class="footer">
            5
         </footer>
      </div>
   </div>
</body>
</html>
   `;
   });

   buttons_3[9].addEventListener("click", function () {
      code_3.textContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="style.css">
         <title>LABA #3 Hulak Ivan IV-93</title>
      </head>
      <body>
         <div class="wrapper">
            <div class="content">
                  <div class="top__menu">
                     <div class="container">
                        <div class="menu__row">
                              <div class="form__edu block">Форми навчання</div>
                              <div class="measures block">Заходи</div>
                              <div class="about block">Про Академію</div>
                              <div class="contacts block">Контакти</div>
                              <div class="town block"><span>Київ</span></div>
                        </div>
                     </div>
                  </div>
                  <div class="java__employment">
                     <div class="container">
                        <div class="java__title">Курс програмування</div>
                        <div class="java__subtitle">Java з працевлаштуванням:</div>
                        <div class="java__row">
                              <div class="java__image">
                                 <img src="img/final_girl.webp" alt="">
                              </div>
                              <div class="java__body">
                                 <div class="java__column">
                                    <div class="orange__circle"></div>
                                    <div class="label">Стажування в IT-компанії</div>
                                    <div class="text">Покажи себе на курсі і ще до закінчення 
                                    навчання ми відправимо тебе на стажування в IT-компанію</div>
                                 </div>
                                 <div class="java__column">
                                    <div class="orange__circle"></div>
                                    <div class="label">Три випускних проекти</div>
                                    <div class="text">Наприкінці курсу ти будеш мати три проекти, 
                                    з якими легко працевлаштуєшся</div>
                                 </div>
                                 <div class="java__column">
                                    <div class="orange__circle"></div>
                                    <div class="label">Інтенсивність</div>
                                    <div class="text">На відміну від інших нащі студенти вчаться 6 разів 
                                    на тиждень впродовж всього терміну. Саме тому вони краще за випускників 
                                    всіх інших шкіл та легко працевлаштовуються</div>
                                 </div>
                              </div>
                        </div>
                     </div>
                  </div>
                  <div class="graduate">
                     <div class="container">
                        <div class="student__title">Більше 800 випускників</div>
                        <div class="student__subtitle">Досягли успіху в IT-сфері</div>
                        <div class="student__row">
                              <div class="student">
                                 <img src="img/new/anna.jpg" alt="">
                              </div>
                              <div class="student">
                                 <img src="img/new/ivan.jpg" alt="">
                              </div>
                              <div class="student">
                                 <img src="img/new/kyrylo.jpg" alt="">
                              </div>
                              <div class="student">
                                 <img src="img/new/orysya.jpg" alt="">
                              </div>
                              <div class="student">
                                 <img src="img/new/vlad.jpg" alt="">
                              </div>
                              <div class="student">
                                 <img src="img/new/yura.jpg" alt="">
                              </div>
                        </div>
                     </div>
                  </div>
                  <div class="quastions">
                     <div class="container">
                        <div class="quastions__title">Чому варто нам довіряти</div>
                        <div class="quastions__subtitle">Часті запитання</div>
                        <div class="quastions__row">
                              <div class="left__column">
                                 <div class="column">
                                    <div class="column__row">
                                          <div class="number">01</div>
                                          <div class="column__row__title">Гарантії працевлаштування?</div>
                                    </div>
                                    <div class="column__text">
                                          Всі хто проходив наш унікальний курс з інкубатором досвіду 
                                          влаштувались на роботу. І ми єдині в Україні, хто мають відео 
                                          відгуки від роботодавців.
                                    </div>
                                 </div>
                                 <div class="column">
                                    <div class="column__row">
                                          <div class="number">02</div>
                                          <div class="column__row__title">Що таке "повторка"?</div>
                                    </div>
                                    <div class="column__text">
                                          Це можливість пройти курс повторно у разі якщо ви щось пропустили. 
                                          Вона повністю безкоштовна, та має необмежену кільскість разів. 
                                          Іншими словами з нами ви отримаєте знання не переплачуючи за них.
                                    </div>
                                 </div>
                                 <div class="column">
                                    <div class="column__row">
                                          <div class="number">03</div>
                                          <div class="column__row__title">Що таке "інкубатор"?</div>
                                    </div>
                                    <div class="column__text">
                                          Інкубатор досвіду - стажування на власному проекті впродовж 5 місяців 
                                          після закінчення навчання. Саме під час цього періоду ви отримаєте 
                                          практичний досвід, який так необхідний для успішного проходження співбесіди.
                                    </div>
                                 </div>
                              </div>
                              <div class="right__column">
                                 <div class="column">
                                    <div class="column__row">
                                          <div class="number">04</div>
                                          <div class="column__row__title">Рейтинг компанії?</div>
                                    </div>
                                    <div class="column__text">
                                          Більше 300 відео відгуків від працевлаштованих, 
                                          відео відгуки роботодавців, більше 600 відео в Google та Facebook 
                                          з загальним рейтингом 4.9 зірок, та більше 800 працевлаштованих випускників.
                                    </div>
                                 </div>
                                 <div class="column">
                                    <div class="column__row">
                                          <div class="number">05</div>
                                          <div class="column__row__title">Розтермінування?</div>
                                    </div>
                                    <div class="column__text">
                                          Є можливість Розтермінування платежів строком до 24 місяців 
                                          з закріпленням ціни. Це найкращі умови Розтермінування в Україні. 
                                          Всі деталі щодо розтермінування, ви можете дізнатись в нашого менеджера.
                                    </div>
                                 </div>
                                 <div class="column">
                                    <div class="column__row">
                                          <div class="number">06</div>
                                          <div class="column__row__title">Скільки триває курс?</div>
                                    </div>
                                    <div class="column__text">
                                          Базовий курс з інкубатором досвіду тривае 909 годин, 
                                          базовий курс - 230 годин. Це найбільший курс на ринку України та СНД. 
                                          Заняття 6 разів на тиждень. Саме тому така висока продуктивність. 
                                          Поки інші відпочивають ви навчаєтесь. 
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </div>
                  </div>
            </div>
            <footer class="footer">
                  <div class="container">
                     <div class="footer__row">
                        <div class="footer__title">Навчайся зараз, сплачуй <br>потім</div>
                        <ul class="footer__list">
                              <li>Розтермінування на 24 місяці</li>
                        </ul>
                     </div>
                  </div>
            </footer>
         </div>
      </body>
      </html>
   `;
   });

   buttons_3[10].addEventListener("click", function () {
      code_3.textContent = `
            /*Null style*/
            *{padding:0;margin:0;border:0;}
            *,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}
            :focus,:active{outline:none;}
            a:focus,a:active{outline:none;}
            nav,footer,header,aside{display:block;}
            html,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
            input,button,textarea{font-family:inherit;}
            input::-ms-clear{display:none;}
            button{cursor:pointer;}
            button::-moz-focus-inner{padding:0;border:0;}
            a,a:visited{text-decoration:none;}
            a:hover{text-decoration:none;}
            ul li{list-style:none;}
            img{vertical-align:top;}
            h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;}
            /*----------------------------------------*/

            body{
               font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            }

            .wrapper{
               min-height: 100%;
               overflow: hidden;
               display: flex;
               flex-direction: column;
            }
            .container{
               max-width: 1180px;
               margin: 0px auto;
            }
            .content{
               flex: 1 1 auto;
            }
            /* --------------------------------------------------------------------------------*/
            /* --------------------------------------------------------------------------------*/
            /* ----------------------------------   TOP MENU   ------------------------------- */
            .top__menu{}
            .menu__row{
               display: flex;
               justify-content: space-between;
            }
            .block{
               background-color: black;
               color: #fff;
               font-weight: 500;
               display: flex;
               align-items: center;
               justify-content: center;
               text-align: center;
               font-size: 28px;
               margin: 20px 10px;
               line-height: 50px;
               padding: 0px 15px;
            }
            .form__edu{
               width: 25%;
            }
            .measures{}
            .about{
               width: 20%;
            }
            .contacts{}
            .town{
               width: 30%;
            }
            .town span{
               width: 100%;
               background: url('img/dot.png') right no-repeat;
            }
            /* --------------------------------------------------------------------------------*/
            /* --------------------------------------------------------------------------------*/
            /* ----------------------------------   JAVA EMPLOYMENT   ------------------------ */
            .java__employment{
               background: url('img/java.jpg') 300px -80px no-repeat;
            }
            .java__title{
               text-align: center;
               color: rgb(238, 130, 48);
               font-weight: 700;
               font-size: 22px;
               text-transform: uppercase;
               margin: 10px 0px;
            }
            .java__subtitle{
               text-align: center;
               font-weight: 800; 
               font-size: 36px;
               text-transform: uppercase;
            }
            .java__row{
               display: flex;
               justify-content: space-between;
            }
            .java__image{
               margin: 60px 0px 20px 14px;
               flex: 0 1 403px;
            }
            .java__body{
               max-width: 50%;
               margin: 45px 20px 20px 0px;
               padding: 12px;
               max-height: 400px;
               overflow: scroll;
            }
            .java__column{
               margin: 0px 0px 22px 0px;
            }
            .orange__circle{
               background:rgb(232, 127, 47);
               height: 13px;
               width: 13px;
               display: inline-block;
               border: 3px solid #000;
               border-radius: 50%;
               margin: 0px 10px 0px 0px;
            }
            .label{
               display: inline-block;
               font-size: 20px;
               font-weight: 700;
               margin: 0px 0px 12px 0px;
            }
            .text{
               color: rgb(34, 47, 40);
               font-size: 16px;
               letter-spacing: 1px;
               margin: 0px 0px 0px 27px;
            }
            /* --------------------------------------------------------------------------------*/
            /* --------------------------------------------------------------------------------*/
            /* ----------------------------------   Student   ---------------------------------*/
            .graduate{
               background-color: rgb(31, 31, 31);
               padding: 15px 0px 0px 0px;
            }
            .student__title{
               text-align: center;
               font-size: 40px;
               font-weight: 900;
               color: #fff;
               margin: 20px 0px 10px 0px;
            }
            .student__subtitle{
               text-align: center;
               font-size: 26px;
               color: rgb(42, 131, 239);
               font-weight: 700;
               margin: 0px 0px 30px 0px;
            }
            .student__row{
               display: flex;
               justify-content: space-evenly;
               flex-wrap: wrap;
               padding: 0px 20px;
            }
            .student{
               flex: 0 1 340px;
               margin: 0px 0px 30px 0px;
            }
            .student img{
               display: block;
               border-radius: 5px;
            }
            /* --------------------------------------------------------------------------------*/
            /* --------------------------------------------------------------------------------*/
            /* ----------------------------------   Quastions   ---------------------------------*/
            .quastions{
               padding: 30px 0px 10px 0px;
               background: url('img/wemen.jpg') center 80px no-repeat;
            }
            .quastions__title{
               text-align: center;
               font-size: 24px;
               color: rgb(42, 131, 239);
               font-weight: 700;
               text-transform: uppercase;
               margin: 0px 0px 10px 0px;
            }
            .quastions__subtitle{
               text-align: center;
               font-size: 44px;
               font-weight: 900;
               text-transform: uppercase;
               margin: 0px 0px 20px 0px;
            }
            .quastions__row{
               display: flex;
               justify-content: space-between;
               padding: 0px 15px;
            }
            .left__column{
               display: flex;
               flex-direction: column;
               justify-content: space-between;
               align-items: center;
               max-width: 30%;
            }
            .right__column{
               display: flex;
               flex-direction: column;
               max-width: 30%;
            }
            .column{}
            .column__row{
               display: flex;
               align-items: center;
               margin: 0px 0px 3px 0px;
            }
            .number{
               color: rgb(42, 131, 239);
               font-weight: 900;
               font-size: 70px;
               padding: 0px 10px 0px 20px;
            }
            .column__row__title{
               color: rgb(238, 130, 48);
               font-weight: 900;
               font-size: 18px;
               text-transform: uppercase;
               line-height: 16px;
               padding: 0px 10px 0px 0px;
            }
            .column__text{
               color: rgb(34, 47, 40);
               line-height: 18px;
               padding: 5px 10px 5px 20px;
            }
            /* --------------------------------------------------------------------------------*/
            /* --------------------------------------------------------------------------------*/
            /* ----------------------------------   Footer   --------------------------------- */
            .footer{
               background: rgb(238, 130, 48);
               height: 10%;
            }
            .footer__row{
               display: flex;
               justify-content: space-around;
            }
            .footer__title{
               max-width: 50%;
               font-size: 30px;
               color: #fff;
               font-weight: 900;
               text-transform: uppercase;
               margin: 20px 30px 20px 20px;
               padding: 0px 50px 0px 0px;
            }
            .footer__list{
               display: flex;
               align-items: center;
               font-size: 24px;
               line-height: 36px;
               font-weight: 600;
               text-transform: uppercase;
               margin: 20px 50px 20px 20px;
               padding: 0px 20px;
            }
            .footer__list li{
               background: url('img/check-mark.png') left 2px no-repeat;
               padding: 0px 0px 0px 45px;
            }

   `;
   });

   buttons_3[11].addEventListener("click", function () {
      code_3.textContent = `
      Висновки: у даній лабораторній роботі ми вивчили та на практиці закріпили навички
      по роботі з табличною версткою, версткою за допомогою плаваючих елементів та
      технологією FLEXBOX.

      Ми виконали всі завдання, а саме: 
         1) розробили розмітку сайту за допомогою таблиць (table);
         2) розробили розмітку сайту, використовуючи плаваючі блоки (float);
         3) Самостійно по макету в docs зверстали сайт, використовуючи технологію FLEXBOX.

      Кожен з учасників бригади виконував завдання відповідно свого варіанту
      
      У звіті показано, хто який макет робив та залишені посилання на власні репозиторії,
      де знаходиться виконана робота студента.
   `;
   });
}
// ------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------  Work with Buttons info for laba# 4  --------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
function protocolFourth() {
   buttons_4[0].addEventListener("click", function () {
      code_4.innerHTML = `
      Під час лабораторної роботи ми придбали практичні навички роботи маніпулювання інформаційним вмістом Web-документа засобами мови JavasSript,<br>
      використання об’єктів,масивів, функцій, подій, обробників подій у сценаріях на мові JavasSript<br>
      <br>Посилання на GitHub : <a href="https://github.com/Devy707/Back-Front-Iddly">Посилання</a><br>

      `;
   });

   buttons_4[2].addEventListener("click", function () { // Ivan-layout
      code_4.textContent = `
      <button class="header-content__second button"><a href="JavaScript:alert('Check this button later!');">Download</a></button>
      `;
   });

   buttons_4[3].addEventListener("click", function () { // Bogdan-layout
      code_4.textContent = `
      <button class="header-content__first button" onclick="alert('Check this button later!');">Learn more</button>
      `;
   });

   buttons_4[4].addEventListener("click", function () { // Vlad-layout
      code_4.textContent = `
      <script src="script.js"></script>
      `;
   });

   buttons_4[5].addEventListener("click", function () {
      code_4.textContent = `
'use strict';
let array = [];
let arrayB = [];


let number;
let max = 0;
let maxB = 0;
function randomInt(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}

function findMaxA() {
   let count = 0;
   for (let i = 0; i < array.length; i++) {
      if (array[i] > count) {
         count = array[i];
      }
   }
   max = count;
   document.querySelector('.createB').style.display = 'block';
   document.querySelector('.header__max').style.display = 'block';
   document.querySelector('.header__max').innerHTML = max;

}

function findMaxB() {
   let count = 0;
   for (let i = 0; i < arrayB.length; i++) {
      if (arrayB[i] > count) {
         count = arrayB[i];
      }
   }
   maxB = count;
}

function setNumber() {
   number = parseInt(document.querySelector('.header__number').value);
   if (!isNaN(number) || number > 40) {
      document.querySelector('.header__array').style.display = 'block';
      document.querySelector('.header__number').value = number;
      for (let i = 0; i < number; i++) {
         array[i] = randomInt(1, number);
      }
      document.querySelector('.header__array').innerHTML = 'A = ${'array'}';
      document.querySelector('.header__find-max').style.display = 'block';
      console.log(array);
   }
}

function createB(){
   for (let i = 0; i < number; i++) {
      arrayB[i] = array[i]*max;
   }
   document.querySelector('.header__array-b').innerHTML = 'B = ${'arrayB'}';
   document.querySelector('.header__array-b').style.display = 'block';
   document.querySelector('.sort__button').style.display = 'block';
}
function sortArrayB(){
   for (let i = 1; i < arrayB.length; i++) {
      let j = i - 1;
      let tmp = arrayB[i];
      while (j >= 0 && arrayB[j] < tmp) {
        arrayB[j + 1] = arrayB[j];
        j--;
      }
      arrayB[j+1] = tmp;
    }
    document.querySelector('.header__sort').style.display = 'block';
    document.querySelector('.header__sort').innerHTML = '${'arrayB'}';
}
   `;
   });

   buttons_4[6].addEventListener("click", function () {
      code_4.textContent = `
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
   <div id="calc-wrap">
      <div id="calc">
          <textarea id=inputVal>0</textarea>
      </div>
  </div> 
  <script src="script.js"></script>
</body>
</html>
   `;
   });

   buttons_4[7].addEventListener("click", function () {
      code_4.textContent = `
      .btn {
         width: 60px;
         height: 60px;
         background: #fc0;
         display: inline-block;
         text-align: center;
         line-height: 60px;
         user-select: none;
      }
      
      .btn:hover {
         background: #f70;
         color: #fff;
      }
      
      #calc-wrap {
         padding: 10px;
         width: 100%;
         text-align: center;
         background: #eee;
      }
      
      #calc {
         width: 240px;
         display: inline-block;
      }
      
      #inputVal {
         width: 100%;
         border: 0;
         font-size: 16px;
         resize: vertical;
      }
   `;
   });

   buttons_4[8].addEventListener("click", function () {
      code_4.textContent = `
      window.addEventListener('load', function OnWindowLoaded() {
         let signs = [
             '1', '2', '3', '+',
             '4', '5', '6', '-',
             '7', '8', '9', '/',
             '0', '=', '.', 'c',
             '%','*','√'
         ];
      
         let calc = document.getElementById('calc');
      
         let textArea = document.getElementById('inputVal');
      
         signs.forEach(function (sign) {
             let signElement = document.createElement('div');
             signElement.className = 'btn';
             signElement.innerHTML = sign;
             calc.appendChild(signElement);
         });
      
         document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
             button.addEventListener('click', onButtonClick);
         });
      
         function onButtonClick(e) {
             if (e.target.innerHTML === 'c') {
                 textArea.innerHTML = '0';
             }else if(e.target.innerHTML === '√'){
               textArea.innerHTML = Math.sqrt(textArea.innerHTML);
             } else if (e.target.innerHTML === '=') {
                 textArea.innerHTML = eval(textArea.innerHTML);
             } else if (textArea.innerHTML === '0') {
                 textArea.innerHTML = e.target.innerHTML;
             } else {
                 textArea.innerHTML += e.target.innerHTML;
             }
         }
      });
   `;
   });

   buttons_4[9].addEventListener("click", function () {
      code_4.textContent = `
Висновки: у даній лабораторній роботі придбали практичні навички роботи маніпулювання інформаційним вмістом Web-документа засобами мови JavasSript,
 використання об’єктів,масивів, функцій, подій, обробників подій у сценаріях на мові JavasSript.
Ми виконали всі завдання, а саме: 
   1) У власному сайті або на окремій WEB-сторінці, використовучі функції , застосували  3 способи функціонального застосування JavaScript:
      • гіпертекстове посилання (схема URL);
      • обробник події (handler);
      • вставка (тег SCRIPT).
   2) Використовуючи сценарій на JavaScript, виконали завдання. яке приведене у Таблиці №1. 
   3) Забезпечили виконання завдання згідно із варіантом (Таблиця №2), сформували необхідні дані, вбудовані у програму, у вигляді масивів,
    виконали тестування програми.
Кожен з учасників бригади виконував завдання відповідно свого варіанту
У звіті показано, хто який варіант робив.
   `;
   });
}
// ------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------  Work with Buttons info for laba# 5  --------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
function protocolFifth() {
   buttons_5[0].addEventListener("click", function () {
      code_5.innerHTML = `
      Тема: ВИКОРИСТАННЯ В СЦЕНАРІЯХ JAVASCRIPT БІБЛІОТЕК КРОС-БРАУЗЕРНИХ ІНТЕРФЕЙСІВ МЕТОДІВ DOM.  БІБЛІОТЕКА JQUERY UI.<br>
      ЗАСОБИ НАЛАГОДЖЕННЯ І ТЕСТУВАННЯ СЦЕНАРІЇВ JAVASCRIPT.<br>
      <br>Посилання на GitHub : <a href="https://github.com/Devy707/Back-Front-Iddly">Посилання</a><br>

      Мета: придбати практичні навички роботи jQuery UI, вміти додавати до сайту <br>
      динамічні елементи цієї бібіліотеки, плагін галереї UniteGallery, <br>
      кнопки соціальних мереж, інформери та інше.<br>
      `;
   });

   buttons_5[1].addEventListener("click", function () { // Ivan-layout
      code_5.innerHTML = `
      <pre>$(function () {
         $("#datepicker").datepicker();
         $('#menu').menu();
         $('#accordion').accordion();
         $("#gallery").unitegallery();
         $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
      });</pre>
   <img src="../protocols-images/Снимок2.png"> 
   <img src="../protocols-images/Снимок1.png"> 
      `;
   });

   buttons_5[3].addEventListener("click", function () { // Bogdan-layout
      code_5.innerHTML = `
         <img src="../protocols-images/slider-code.png">
         <img src="../protocols-images/Снимокbig.png">
      `;
   });

   buttons_5[4].addEventListener("click", function () { // Vlad-layout
      code_5.innerHTML = `
      <img src="../protocols-images/second-code.png">
      <img src="../protocols-images/second-slider-example.png">
      `;
   });

   buttons_5[5].addEventListener("click", function () {
      code_5.innerHTML = `
      <img src="../protocols-images/third-ex.png">
      <img class="third-slider-ex" src="../protocols-images/third-slider-example.png">
      `;
   });

   buttons_5[6].addEventListener("click", function () {
      code_5.innerHTML = `
      <img src="../protocols-images/buttons-image.png">
      <img class="butt-ex" src="../protocols-images/butt-ex.png">
   `;
   });

   buttons_5[7].addEventListener("click", function () {
      code_5.innerHTML = `
      <img src="../protocols-images/info-dollar-code.png">
      <img src="../protocols-images/info-dollar-code-ex.png">
      <img src="../protocols-images/info-clock-code.png">
      <img src="../protocols-images/info-clock-ex.png">
      `;
   });

   buttons_5[8].addEventListener("click", function () { // Ivan-layout
      code_5.innerHTML = `
      Висновки: у даній лабораторній роботі ми придбали практичні навички роботи з бібліотекою jQuery та jQuery UI.

      Навчилияс користуватися документацією бібліотеки https://jqueryui.com/  та додали до сайту по 2-3 динамічних елементи, що наведені в переліку:
      o	Accordion - набір елементів, що розгортаються/згортаються.
      o	Datepicker - вибір дати з календаря.
      o	Menu – випадне меню.
      o	Slider - вибір числа за допомогою повзунка.
      o	Tabs - організація вкладок на сторінці.
      o	Tooltip - організація спливаючих підказок.

      Попрацювали з плагіном галереї UniteGallery та зробили фотогалерею
      з можливістю перегляду збільшених зображень, а також: слайдер фотографій та слайдер відеоматеріалів
      
      Додали до сайту кнопки соціальних мереж: Facebook, Twitter, Instagram і тд.
      Додали до сайту інформери. Такі як курс валют або погода.
      `;
   });
}

function protocolSixth() {
   buttons_6[0].addEventListener("click", function () {
      code_6.innerHTML = `
Тема: WEB-СЕРВЕРИ ТА ПРИНЦИПИ ЇХ РОБОТИ З КОРИСТУВАЧЕМ. <br>
СЕРВЕРНІ WEB-ЗАСТОСУВАННЯ.
      <br>Посилання на GitHub : <a href="https://github.com/Devy707/Back-Front-Iddly">Посилання</a><br>

Мета: придбати практичні навички встановлення та конфігурування WEB-сервера, встановлення та налаштування Apache<br>
      `;
   });
}


function protocolEighth() {
   buttons_8[0].addEventListener("click", function () {
      code_8_9.innerHTML = `
Тема: ІНТЕРФЕЙСИ ВЗАЄМОДІЇ WEB-ЗАСТОСУВАНЬ З СИСТЕМОЮ КЕРУВАННЯ БАЗ ДАНИХ (СКБД). SQL-ЗАПИТИ У PHP-СЦЕНАРІЯХ. <br>
ІНТЕРФЕЙСИ WEB-ЗАСТОСУВАНЬ з СКБД. ВИКОРИСТАННЯ СЕСІЙ І COOKIES  В СЦЕНАРІЯХ АВТОРИЗАЦІЇ. 
РОЗРОБКА СЦЕНАРІЇВ ОБРОБКИ ДАНИХ З ФАЙЛІВ.<br>
      <br><br>
      <br>Посилання на GitHub : <a href="https://github.com/Devy707/Back-Front-Iddly">Посилання</a><br>
Мета: придбати практичні навички роботи взаємодії WEB- застосувань з СКБД, використання сесій і cookies  в сценаріях авторизації,
розробки сценаріїв обробки даних з файлів.<br>
      `;
   });

   buttons_8[1].addEventListener("click", function () { // Ivan-layout
      code_8_9.innerHTML = `
      Тема: АСИНХРОННА ВЗАЄМОДІЯ КЛІЄНТСЬКОЇ І СЕРВЕРНОЇ ЧАСТИН WEB- ЗАСТОСУВАНЬ З ВИКОРИСТАННЯМ ТЕХНОЛОГІЇ AJAX.
      ФОРМУВАННЯ AJAX-ЗАПИТУ ЗАСОБАМИ JQUERY.<br> <br>

      Мета: придбати практичні навички роботи основ асинхронного обміну даними мовою JavaScript за допомогою технології Ajax та бібліотеки Jquery, <br>
      формування  Аjax-запиту засобами jQuery при реалізації практичних задач Web-програмування. <br>

      `;
   });

   buttons_8[2].addEventListener("click", function () { // Bogdan-layout
      code_8_9.innerHTML = `
         <img src="../protocols-images/ajax1.png">
         <img src="../protocols-images/ajax2.png">

      `;
   });

   buttons_8[3].addEventListener("click", function () { // Vlad-layout
      code_8_9.innerHTML = `
      <ul>
      <h1>Список функціоналу сайту</h1>
      <li>Меню</li>
      <li>Слайдер(галерея)</li>
      <li>Форма звязку</li>
      <li>Зміст постів</li>
      <li>Система рейтингу</li>
      <li>Авторизація</li>
      <li>Зміна мови</li>
      <li>Регестрація</li>
      </ul>

      `;
   });

   buttons_8[4].addEventListener("click", function () {
      code_8_9.innerHTML = ` У порівнянні з першою лабораторною роботою наш сайт доволі сильно змінився.<br> Ми зробили його повністю адаптивним, додали певний функціонал, який ви можете переглянути, нажавши попередню кнопку.<br>
До сайту також була додана зміна мови, авторизація та регестрація тощо. Усе це ви можете переглянути на головній сторінці сайту <a href="../index.html">Головна сторінка</a>
      `;
   });

   buttons_8[5].addEventListener("click", function () {
      code_8_9.innerHTML = `
      <img src="../protocols-images/changelang-eng.PNG">
      <img style="width:80%;" src="../protocols-images/changelang-rus.PNG">

   `;
   });

   buttons_8[6].addEventListener("click", function () { // Ivan-layout
      code_8_9.innerHTML = `
      <img src="../protocols-images/login1.PNG">
      <img src="../protocols-images/login2.PNG">
      <img src="../protocols-images/login3.PNG">
      `;
   });
   buttons_8[7].addEventListener("click", function () { // Ivan-layout
      code_8_9.innerHTML = `
      <img style="width:90%;" src="../protocols-images/db.PNG">
      `;
   });
   buttons_8[8].addEventListener("click", function () { // Ivan-layout
      code_8_9.innerHTML = `
      <img style="width:90%;" src="../protocols-images/dt.PNG">
      `;
   });
   buttons_8[9].addEventListener("click", function () { // Ivan-layout
      code_8_9.innerHTML = `
      Під час лабораторних робіт ми придбали практичні навички роботи взаємодії WEB- застосувань з СКБД,<br> використання сесій і cookies  в сценаріях авторизації,
      розробки сценаріїв обробки даних з файлів.<br> Також ми придбали практичні навички роботи основ асинхронного обміну даними мовою JavaScript за допомогою технології Ajax та бібліотеки Jquery, <br>
      формування  Аjax-запиту засобами jQuery при реалізації практичних задач Web-програмування. <br>
      `;
   });
}

function protocolSeventh() {
   buttons_7[0].addEventListener("click", function () {
      code_7.innerHTML = `
Тема: ВЗАЄМОДІЯ WEB-ЗАСТОСУВАНЬ З СИСТЕМОЮ КЕРУВАННЯ БАЗАМИ ДАНИХ (СКБД). ОБРОБКА РЕЗУЛЬТАТІВ SQL-ЗАПИТІВ У PHP-СЦЕНАРІЇ.<br>
      <br>Посилання на GitHub : <a href="https://github.com/Devy707/Back-Front-Iddly">Посилання</a><br>
      
Мета: придбати практичні навички підключення до СКБД, вибора бази даних, виконання запиту, отримання результатів, відключення від СКБД<br>
      `;
   });

   buttons_7[1].addEventListener("click", function () { // Ivan-layout
      code_7.innerHTML = `
      Об'єкти предметної галузі представлені у вигляді ноутбуків з певними полями. Хожен ноутбук є унікальним. <br>
      Множиною об'єктів є множина ноутбуків. Їх властивості прописані у таблиці відповідно.<br>
      `;
   });

   buttons_7[2].addEventListener("click", function () { // Bogdan-layout
      code_7.innerHTML = `
         <img src="../protocols-images/inf-model.png">
         Кожен ноутбук буде мати свої певні поля:
         - айді
         - назва
         - модель
         - ціна
         Усі ці поля були обрано відповідно до магазинів, де ці ноутбуки продаються.
      `;
   });

   buttons_7[3].addEventListener("click", function () { // Vlad-layout
      code_7.innerHTML = `
      <img src="../protocols-images/dat-model.png">
      <pre>
      Відповідні поля біли створені з певними умовами, наприклад:
      - Поле ID є обов'язковим.
      - name э VARCHAR з максимальною кількістю символів = 100, так само і model
      - int це число з максимальною кількістю нулів = 6.
      id 	INT(7)	 	PRIMARY KEY AUTO_INCREMENT	
      name	VARCHAR (100) 	NOT NULL 
      model	VARCHAR (100)  NOT NULL 
      price	INT(6)	NOT NULL 
      </pre>
      `;
   });

   buttons_7[4].addEventListener("click", function () {
      code_7.innerHTML = `
      <img src="../protocols-images/bd1.png">
      <img class="third-slider-ex" src="../protocols-images/bd2.png">
      `;
   });

   buttons_7[5].addEventListener("click", function () {
      code_7.innerHTML = `
      <img src="../protocols-images/last.png">
   `;
   });

   buttons_7[6].addEventListener("click", function () { // Ivan-layout
      code_7.textContent = `
      Висновки: у даній лабораторній роботі ми придбали практичні навички підключення до СКБД, вибора бази даних, виконання запиту, 
      отримання результатів, відключення від СКБД
      було додано до сайту базу даних комп. техныки.
      Відповідно до варіанту індивідуального завдання Таблиці №1 було зроблено: 
      визначено класи об’єктів предметної області, дані  які будуть зберігатися у БД; 
      створено інфологічну модель; 
      нормалізувано реляційну базу та створено датологічну модель; 
      `;
   });
}