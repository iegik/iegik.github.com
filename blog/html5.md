Заголовок
=========

Глава I
-------

### Эпизод первый: Убираем лишнее
#### Цитата

    <blockquote>
      <p>a</p>
      <address>b</address>
    </blockquote>

> Но важен не результат. Важен процесс, то есть та истовость, с которой мы бесконечно обращаем жернова моления и писания, составляя истину из малых крупиц. Если же машина выдаст тебе правду немедленно, ты эту правду не примешь, ибо сердце твое не будет очищено продолжительным испытанием. <address>[Умберто Эко]('#Умберто Эко' 'author'), <cite>Маятник Фуко</cite></address>

#### Абзац

    <p><b>a</b>b</p>

<b>Всё ускоряющаяся эволюция компьютерных технологий предъявила жёсткие требования к производителям как собственно вычислительной техники</b>, так и периферийных устройств.

    <p>a</p>

Юный директор целиком сжевал весь объём продукции фундука (товара дефицитного и деликатесного), проходя энергично через хрустящий камыш.


    <s>a</s><sup>b</sup>
    <strong>a</strong>
    <em>a</em>

Cово<s>глупость</s><sup>купность</sup> слов, набранных исключительно в разбросанном порядке, рязделённых запятыми, точками и прочими пунктуальностями обычно именуют **абзацем**.
<br/>Однако, *новое предложение* или новая строчка не всегда прерывает абзац!

Новый обзац стараются отделить от предыдущего, чтобы сосредоточить читателя на сути, новой идеи, заложенной в новом островке текста.
Абзац не должен превышать длинну позволительной для восприятия, иначе текст теряется и уходит в бездну.

#### Списки

    <ul>
      <li>a</li>
      <li>b</li>
    </ul>

Обычный список:

- продукты
    - фрукты
        - яблоки
        + груши
        * сливы
            - чернослив
                - чертополох
                    - чебурашка


Пронумерованный список:

1. вождение
    1. теория
    3. практика
        0. зачёт
            0. проверка
                0. тех. осмотр
2. экзамен


#### Код

    <pre>a</pre>

Подсвечиваемый код:

    <script>
    // Код
    function Microtime(){
      this.started = false;
      this.stopped = false;
      this.start = function(){
        var d = new Date();
        this.started = (d.getMilliseconds()/1000)+(d.getSeconds()+d.getMinutes()*60);
        return this.started;
      }
      this.stop = function(){
          var d = new Date();
        this.stopped = (d.getMilliseconds()/1000)+(d.getSeconds()+d.getMinutes()*60);
        return this.stopped - this.started;
      }
    }

    mt = new Microtime();
    mt.start();

    console.log(mt.stop());
    </script>

#### Фигуры ####

    <figure><figcaption>a</figcaption>b</figure>

<figure>
<img src="/img/free_spirit_by_nyaa_n-d4tf51p.jpg" width="1024px"/>
<figcaption>Обычно я вставляю какую-нибудь картинку с <a href="http://placekitten.com" alt="PlaceKitten.com">этого</a> сайта.</figcaption>
</figure>

---

<figure>
<video src="out.webm"  controls autobuffer>
<p>You can <a  href="out.webm"> download the  video</a>.</p>
</video>
<figcaption>Видео.</figcaption>
</figure>

</section>

---

#### Текст

    <ruby>a<rt>b</rt></ruby>

В иврите некоторые многие слова можно прочесть не верно, поэтому, чтобы помочь с произношением, над словом пишут произношение или транскрипцию, например: <ruby>ישראל<rt>l e ra s i</rt></ruby>

    <data value="a">b</data>

<figure>
<data class="ean13" value="2HDJhjd*aaefeb*">Krievijas 45% Siers</data>Uzglabaš. temp.: +2 +6 ℃. Beztauku daļas mitrums 57%. Piens. sāls. cietināt. -㎉. hlorīds. ferments. dab. krāsv. piensk. bakt. ieraugs. Izpl: Baltic Trade Network SIA
<figcaption></figcaption>
</figure>
