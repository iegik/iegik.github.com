## Enable I/O

    BEGIN
        DBMS_OUTPUT.ENABLE (buffer_size => NULL);
        DBMS_OUTPUT.put_line('Text,'||999);
    END;


## Behaviour Driven Development (BDD)

    DECLARE
      BDD T_VARCHAR := T_VARCHAR();
    BEGIN
      BDD.EXTEND(1);BDD(BDD.COUNT) := '*Funkcionalitāte:* ...';
      BDD.EXTEND(1);BDD(BDD.COUNT) := '  *Lai* ...';
      BDD.EXTEND(1);BDD(BDD.COUNT) := '  *Kā* ...';
      BDD.EXTEND(1);BDD(BDD.COUNT) := '  *Es grību* ...';
      BDD.EXTEND(1);BDD(BDD.COUNT) := '  *Scenārijs:* ...';
      BDD.EXTEND(1);BDD(BDD.COUNT) := '    *Kad* ...';
      BDD.EXTEND(1);BDD(BDD.COUNT) := '    *Un* ...';
      BDD.EXTEND(1);BDD(BDD.COUNT) := '    *Ja* ...';
      BDD.EXTEND(1);BDD(BDD.COUNT) := '    *Tad* ...';
      cucumber.parse(BDD);
    END;

Same type, as type of the some table

    tname user_tables.table_name%TYPE;


## Variables

### Strings

  CHAR(n)
	VARCHAR(n)
	LONG

### Numbers

	NUMBER(p,s) -- DECIMAL(p,s)
	NUMBER(38)  -- INTEGER, SMALLINT
	NUMBER      -- FLOAT(b)

	0
	.1
	0.1 = 0D1
	0990
	1,000
	$1,000 == C1G000 (currency in ISO)
	$1,000 == L1,000 (local currency symbol)
	1MI == -1
	1PR == <-1>
	14RN == XIV (1..3999)
	14rn == xiv
	S1 == -1 | +1
	1S == 1- | 1+
	1V10 = 1^10
	X (hex)

#### Custom subtypes

    SUBTYPE CHARACTER IS CHAR;
    SUBTYPE INTEGER IS NUMBER(38,0);
    SUBTYPE FLOAT IS REAL;

    CREATE OR REPLACE TYPE ARRAY IS VARRAY(0) of INTEGER;

### Objects

	TYPE ... IS
		VARRAY(size_limit)
		TABLE
	OF 
		BINARY_INTEGER, PLS_INTEGER
		BOOLEAN
		LONG, LONG RAW
		NATURAL, NATURALN
		POSITIVE, POSITIVEN
		REF CURSOR
		SIGNTYPE
		STRING
	;

	-- Simple array
	DECLARE
		  TYPE ARRAY IS TABLE OF LONG;
		  arr ARRAY:= ARRAY();
	BEGIN
		  --Add new Array Element
		  arr.EXTEND(1);arr(arr.COUNT) := 'f';
		  arr.EXTEND(1);arr(arr.COUNT) := 15;
			--
		  --dbms_output.enable;
		  --dbms_output.put_line('Count: '||arr.COUNT);
		  --dbms_output.put_line('First: '||arr(1));
		  --dbms_output.put_line('Last:  '||arr(arr.COUNT));
		  --
		  FOR i IN 1..arr.COUNT LOOP
		      dbms_output.put_line(i||': "'||arr(i)||'",');
		  END LOOP;
	END;
	/   -- EOF/break of the section


### Cursors

	cur%FOUND
	cur%FOUND

### Functions

    -- ab
	CONCAT('a','b');
	
	TO_BINARY_DOUBLE,
	TO_BINARY_FLOAT,
	TO_CHAR (character),
	TO_CHAR (datetime),
	TO_CHAR (number),
	TO_CLOB,
	TO_DATE,
	TO_DSINTERVAL,
	TO_LOB,
	TO_MULTI_BYTE,
	TO_NCHAR (character),
	TO_NCHAR (datetime),
	TO_NCHAR (number),
	TO_NCLOB,
	TO_NUMBER,
	TO_SINGLE_BYTE,
	TO_TIMESTAMP,
	TO_TIMESTAMP_TZ,
	TO_YMINTERVAL,

### Examples

#### Simple variable

		DECLARE

		 n NUMBER;

		 s VARCHAR2(36);
		BEGIN

			SELECT 1 INTO n FROM dual;

			s := 'text';

			dbms_output.enable;
			dbms_output.put_line(CONCAT(n,s));

		END;

#### Anonymous block

		DECLARE
			VariableName DataType;
			...
			ExceptionName EXCEPTION;
			...
			CURSOR cursor_name IS
			SELECT * FROM your_table;
			...
			PROCEDURE procedure_name IS
			BEGIN
				your_code;
			END;
		BEGIN
			...
			your_code;
			...
			BEGIN
				...
				your_code_in_child_block;
				...
			EXCEPTION
				child_block_exception _handler;
				...
			END;
			...
		EXCEPTION
			WHEN exception_name THEN
				...
				handle_named_exceptions;
				...
				WHEN others THEN
					IF SQLCODE=exception_code THEN
						...
						handle_unnamed_exceptions;
						...
					ELSE
						...
						generic_handler;
						...
					END IF;
		END;

#### IF statement

		IF condition THEN
			your_code;
		ELSEIF condition THEN
			your_code;
		ELSE
			your_code;
		END IF;

#### CASE statement

		CASE variable 
		WHEN valueA THEN
			your_code;
		WHEN valueB THEN
			your_code;
		ELSE
			your_code;
		END CASE;
	
#### Simple LOOP

		LOOP 
			your_code;
			EXIT WHEN exit_condition;
			your_code;
			IF another_condition THEN
				your_code;
				EXIT;
			END IF;
		END LOOP;

#### FOR loop

		FOR counter
		IN lower_bound...higher_bound
		LOOP
			your_code;
		END LOOP;

#### WHILE loop

		WHILE process_condition
		LOOP
			your_code;
		END LOOP;

#### Function

		CREATE OR REPLACE FUNCTION f_getEmp_dsp (
			i_empno NUMBER
		) RETURN VARCHAR2 IS
			v_out_tx VARCHAR2(2000);
		BEGIN
		  --
			SELECT ename || ' (' || job || ')'
			INTO v_out_tx
			FROM emp
			WHERE empno=i_empno;
			--
			RETURN v_out_tx;
		EXCEPTION
			WHEN no_data_found THEN
				RETURN 'Employee not found';
			WHEN other THEN
				RETURN 'Error#' || sqlcode || ': ' || sqlerrm;
		END;

#### Procedure

		CREATE OR REPLACE PROCEDURE p_printEmp (
			i_deptno IN NUMBER,
			o_count OUT NUMBER
		) IS
			--
			CURSOR c_emp(ci_deptno NUMBER) IS
				SELECT empno || ' ' || ename emp_dsp
				FROM emp
				WHERE deptno = ci_deptno
				ORDER BY empno;
				v_count_nr NUMBER := 0;
			--
		BEGIN
			--
			FOR r_emp IN c_emp (i_deptno)
			LOOP
				v_count_nr := v_count_nr + 1;
				DBMS_OUTPUT.put_line( r_emp.emp_dsp);
			END LOOP;
			--
			o_count := v_count_nr;
		END;

#### Package

		CREATE OR REPLACE PACKAGE pkg_emp IS
			--
			PROCEDURE p_setCurrentEmpno (
				i_empno NUMBER
			);
			--
			FUNCTION f_getCurrentEmpno RETURN NUMBER;
			--
			PROCEDURE p_giveRise (
				i_pcnt NUMBER
			);
		END;
		---
		CREATE OR REPLACE PACKAGE BODY pkg_emp IS
			v_current_empno NUMBER;
			--
			PROCEDURE p_setCurrentEmpno (
				i_empno NUMBER
			) IS
			BEGIN
				v_current_empno := i_empno;
			END;
			--
			FUNCTION f_getCurrentEmpno RETURN NUMBER IS
			BEGIN
				RETURN v_current_empno;
			END;
			--
			PROCEDURE p_giveRise (
				i_pcnt NUMBER
			) IS
			BEGIN
				--
				UPDATE emp
				SET sal = sal*(i_pcnt/100)*sal
				WHERE empno = pkg_emp.f_getCurrentEmpno;
				--
			END;
		END;
		---

#### Global Cursors

		create or replace package pkg_test is
				cursor c_emp is 
					select * from emp;
				r_emp c_emp%ROWTYPE;
				procedure run_query; 
		end;
		/
		create or replace package body pkg_test is
				procedure run_query is
				begin
				    open pkg_test.c_emp ;
				    loop
				        fetch pkg_test.c_emp into pkg_test.r_emp;
				        exit when pkg_test.c_emp%NOTFOUND;
				        DBMS_OUTPUT.put_line(pkg_test.r_emp.id);
				    end loop;
				    close pkg_test.c_emp;
				 end;
		end;
		/

#### Utils

	/
	CREATE OR REPLACE PACKAGE LE_UTILS 
	IS 
		TYPE ARRAY IS TABLE OF VARCHAR2(255);-- INDEX BY BINARY_INTEGER;
		FUNCTION SPLIT(pattern VARCHAR2, replacement VARCHAR2) RETURN T_VARCHAR; 
	END LE_UTILS; 
	/

	CREATE OR REPLACE PACKAGE BODY LE_UTILS IS 

		FUNCTION SPLIT (
		   pattern VARCHAR2
		  ,replacement VARCHAR2
		) RETURN T_VARCHAR IS 
		  pos     number :=0; 
		  tmp VARCHAR2(1000) := replacement;
		  strings T_VARCHAR:=T_VARCHAR();  
		BEGIN 
		  WHILE (length(tmp)>1) LOOP
		    pos := instr(tmp,pattern,1,1);
		    strings.extend(1);strings(strings.count()):= substr(tmp,1,pos);
		    tmp := substr(tmp,pos+1,length(tmp)); 
		  END LOOP;
		  strings.extend(1);strings(strings.count()):= tmp;
		  RETURN strings; 
		END SPLIT; 

	END LE_UTILS;
	/



#### Received Words

    ALTER, CREATE, DROP:

    CLUSTER,
    CONTEXT,
    CONTROLFILE,
    DATABASE,
    DATABASE LINK,
    DIMENSION,
    DIRECTORY,
    DISKGROUP,
    FUNCTION,
    INDEX,
    INDEXTYPE,
    JAVA,
    LIBRARY,
    MATERIALIZED VIEW,
    MATERIALIZED VIEW LOG,
    OPERATOR,
    OUTLINE,
    PACKAGE,
    PACKAGE BODY,
    PFILE,
    PROCEDURE,
    PROFILE,
    ROLE,
    ROLLBACK SEGMENT,
    SCHEMA,
    SEQUENCE,
    SPFILE,
    SYNONYM,
    ALTER SYSTEM,
    TABLE,
    TABLESPACE,
    TRIGGER,
    TYPE,
    TYPE BODY,
    USER,
    VIEW,

#### IN conditions,

    IS A SET conditions,
    IS ANY condition,
    IS EMPTY conditions,
    IS OF TYPE conditions,
    IS PRESENT condition,

## Сообщения об ошибках PL/SQL

PLS-00101:  reserved for future use
PLS-00101:  зарезервировано для будущего использования

   Версия:  отсутствует в версии 2.0.

PLS-00102:  parser stack overflow because nesting is too deep
PLS-00102:  переполнение стека разборки из-за слишком глубокой
            вложенности

  Причина:  При синтаксическом разборе используется стек памяти, объем
            которого оказался недостаточен из-за слишком глубокой
            вложенности вашего блока PL/SQL.

 Действие:  Реорганизуйте структуру ваших блоков, чтобы избежать
            слишком глубокой вложенности.

PLS-00103:  found 'СТРОКА' but expected one of the following: 'СТРОКА'
PLS-00103:  встречено: 'СТРОКА', но ожидалось одно из: 'СТРОКА'

  Причина:  При синтаксическом разборе встречен элемент, не подходящий
            к контексту.

 Действие:  Проверьте указанный элемент и предыдущие элементы. Номер
            строки и колонки в сообщении указывают на конец неверного
            конструкта.

PLS-00104:  empty argument list in call of procedure 'ИМЯ' must be
            omitted
PLS-00104:  пустой список аргументов в вызове процедуры 'ИМЯ' должен
            быть опущен

  Причина:  Вызов процедуры с пустым списком параметров, типа P(), не
            допускается.

 Действие:  Удалите пустой список параметров. Оставьте лишь имя
            процедуры.

PLS-00105:  at most one forward declaration of type 'ИМЯ' is permitted
PLS-00105:  допустимо не более одного forward-объявления типа 'ИМЯ'

   Версия:  Отсутствует в версии 2.0.

10-2  Руководство пользователя и справочник по PL/SQL

PLS-00108:  declarative units must be a single variable definition
PLS-00108:  декларативная единица должна объявлять одну переменную

  Причина:  Попытка откомпилировать более одного объявления таблицы в
            одной секции DECLARE. Каждое объявление таблицы должно
            передаваться компилятору отдельно, т.е. в предложении
            DECLARE TABLE, и не может появляться в блоке.

 Действие:  Объявите каждую таблицу в отдельной секции DECLARE.

PLS-00109:  unknown exception name 'ИМЯ' in PRAGMA EXCEPTION_INIT
PLS-00109:  неизвестное имя исключения 'ИМЯ' в PRAGMA EXCEPTION_INIT

  Причина:  В сфере видимости нет объявления для исключения.

 Действие:  Обеспечьте, чтобы прагма следовала за объявлением
            исключения внутри той же сферы.

PLS-00110:  bind variable 'ИМЯ' not allowed in this context
PLS-00110:  связная переменная 'ИМЯ' не допускается в этом контексте

  Причина:  Связная переменная (т.е. :идентификатор) обнаружена в
            неподходящем контексте.

 Действие:  Удалите двоеточие, или подставьте другой объект.

PLS-00111:  end-of-file in comment
PLS-00111:  конец файла внутри комментария

  Причина:  Внутри комментария, который был начат символами /*,
            встречен конец файла до обнаружения символов */.

 Действие:  Удалите признак начала комментария или добавьте символы
            конца комментария.

PLS-00112:  end-of-line in quoted identifier
PLS-00112:  конец файла внутри идентификатора в кавычках

  Причина:  Внутри идентификатора, который имел начальную кавычку,
            встречен конец строки до обнаружения закрывающей кавычки.

 Действие:  Удалите начальную кавычку или добавьте закрывающую.

                                              Сообщения об ошибках  10-3

PLS-00113:  END identifier 'ИМЯ1' must match 'ИМЯ2' at line ЧИСЛО,
            column ЧИСЛО
PLS-00113:  END-идентификатор 'ИМЯ1' должен совпадать с 'ИМЯ2' в
            строке ЧИСЛО, колонке ЧИСЛО

  Причина:  За словом END, заканчивающим некоторый конструкт (цикл,
            блок, функцию или процедуру), встречено имя, которое не
            совпадает с именем конструкта.

 Действие:  Проверьте структуру блока.

PLS-00114:  bind variable 'ИМЯ' exceeds implementation length
PLS-00114:  'ИМЯ' связной переменной слишком длинно

  Причина:  Имя объекта базы данных или переменной PL/SQL превышает 30
            символов.

            Эта ошибка возникает также, если вы заключаете строковый
            литерал в кавычки вместо апострофов.

 Действие:  Сократите имя до 30 символов, или замените кавычки
            апострофами.

PLS-00115:  this PRAGMA must follow the declaration of 'ИМЯ'
PLS-00115:  эта PRAGMA должна следовать за объявлением 'ИМЯ'

  Причина:  Прагма ссылается на объект, который не объявлен или лежит
            вне сферы видимости. Идентификатор должен быть объявлен
            прежде, чем на него можно ссылаться.

 Действие:  Проверьте правописание и объявление идентификатора.

PLS-00116:  duplicate WHERE clause in table expression
PLS-00116:  повторение фразы WHERE в выражении таблицы

  Причина:  Более одной фразы WHERE встречено в предложении DELETE,
            SELECT или UPDATE. Фраза WHERE специфицирует условие,
            при котором обрабатываются строки таблицы. Это условие
            может содержать несколько логических выражений, соединенных
            через AND или OR, но предложение может содержать только
            одну фразу WHERE.

 Действие:  Удалите лишние фразы WHERE. Если необходимо, составьте
            сложное условие, используя операторы AND или OR.

10-4  Руководство пользователя и справочник по PL/SQL

PLS-00117:  duplicate CONNECT BY clause in table expression
PLS-00117:  повторение фразы CONNECT BY в выражении таблицы

  Причина:  Более одной фразы CONNECT BY встречено в предложении
            SELECT. Фраза CONNECT BY определяет отношение, которое
            используется для выбора строк в иерархическом порядке.
            Это отношение может содержать два выражения, соединенных
            оператором отношения (таким как = или !=), но предложение
            может содержать только одну фразу CONNECT BY.

 Действие:  Удалите лишние фразы CONNECT BY. Если необходимо, соедините
            несколько выражений оператором отношения.

PLS-00118:  duplicate GROUP BY clause in table expression
PLS-00118:  повторение фразы GROUP BY в выражении таблицы

  Причина:  Более одной фразы GROUP BY встречено в предложении SELECT.
            Фраза GROUP BY перечисляет выражения столбцов, формирующие
            итоговую строку по каждой группе выбранных строк. Этот
            список может содержать несколько выражений столбцов,
            разделенных запятыми, но предложение может содержать только
            одну фразу GROUP BY.

 Действие:  Удалите лишние фразы GROUP BY. Если необходимо, соедините
            несколько выражений столбцов запятыми.

PLS-00119:  duplicate HAVING clause in table expression
PLS-00119:  повторение фразы HAVING в выражении таблицы

  Причина:  Более одной фразы HAVING встречено в предложении SELECT.
            Фраза HAVING специфицирует условие, при котором группы строк
            (формируемые фразой GROUP BY) включаются в результат. Это
            условие может содержать несколько логических выражений,
            соединенных через AND или OR, но предложение может
            содержать только одну фразу HAVING.

 Действие:  Удалите лишние фразы HAVING. Если необходимо, соедините
            несколько логических выражений операторами AND или OR.

PLS-00120:  inappropriate argument in OPEN statement
PLS-00120:  неподходящий аргумент в предложении OPEN

  Причина:  В предложении OPEN опущено имя курсора, или задано имя, не
            являющееся именем правильно объявленного курсора.

 Действие:  Проверьте написание имени курсора и его объявление.

                                              Сообщения об ошибках  10-5

PLS-00123:  program too large
PLS-00123:  программа слишком велика

  Причина:  Ваш блок PL/SQL слишком велик для компилятора.

 Действие:  Наилучшее решение - разбить вашу программу на модули,
            определив подпрограммы, которые можно сохранить в базе
            данных ORACLE. Другое решение - разделить программу на два
            подблока и заставить первый подблок вставить все данные,
            которые нужны второму подблоку, во временную таблицу базы
            данных.

PLS-00124:  name of exception expected for first argument in
            EXCEPTION_INIT pragma
PLS-00124:  Первым аргументом прагмы EXCEPTION_INIT должно быть имя
            исключения

  Причина:  Первый аргумент прагмы EXCEPTION_INIT не является именем
            законного исключения.

 Действие:  Исправьте ошибку.

PLS-00201:  identifier 'ИМЯ' must be declared
PLS-00201:  идентификатор 'ИМЯ' должен быть объявлен

  Причина:  Попытка обратиться к объекту, который либо не был объявлен,
            либо лежит вне сферы видимости.

 Действие:  Проверьте написание имени и место его объявления.

PLS-00202:  type 'ИМЯ' must be declared
PLS-00202:  тип 'ИМЯ' должен быть объявлен

  Причина:  Попытка обратиться к типу, который либо не был объявлен,
            либо лежит вне сферы видимости.

 Действие:  Проверьте написание идентификатора типа и место его
            объявления.

10-6  Руководство пользователя и справочник по PL/SQL

PLS-00203:  function DECODE must be called with at least 3 non_Boolean
            arguments
PLS-00203:  функция DECODE должна иметь не меньше 3 не-булевских
            аргументов

  Причина:  Встроенная функция DECODE принимает переменное число
            (не-булевских) аргументов, но не меньше трех.

 Действие:  Исправьте вызов функции.

PLS-00204:  function or pseudocolumn 'ИМЯ' may be used inside a SQL
            statement only
PLS-00204:  функцию или псевдостолбец 'ИМЯ' можно использовать только в
            предложении SQL

  Причина:  Эту функцию или псевдостолбец нельзя вызывать в процедурном
            предложении. Псевдостолбцы SQL (CURRVAL, LEVEL, NEXTVAL,
            ROWID, ROWNUM) можно использовать только в предложениях
            SQL. Аналогично, некоторые функции, такие как DECODE и
            групповые функции (AVG, MIN, MAX, COUNT, SUM, STDDEV,
            VARIANCE) можно использовать только в предложениях SQL.

 Действие:  Удалите ссылку на псевдостолбец или вызов функции из
            процедурного предложения. Альтернативно, вы можете заменить
            процедурное предложение предложением SELECT INTO; например,
            предложение

            bonus := DECODE(rating, 1, 5000, 2, 2500, ...);

            можно заменить следующим предложением:

            SELECT DECODE(rating, 1, 5000, 2, 2500, ...) INTO bonus
                FROM dual;

PLS-00205:  aggregate not allowed here
PLS-00205:  агрегат здесь не допускается

  Причина:  Агрегат, т.е. список значений в скобках, такой как (7788,
            'SCOTT', 20) ,встречен в неподходящем контексте.

 Действие:  Удалите или переместите агрегат.

PLS-00206:  %%TYPE must be applied to a variable or column, not 'ИМЯ'
PLS-00206:  %%TYPE можно применять к переменной или столбцу, но не к
            'ИМЯ'

  Причина:  Объект, объявленный с атрибутом %TYPE, не относится к
            соответствующему классу. Это может быть переменная,
            столбец, компонента записи, формальный параметр
            подпрограммы или иной объект, которому можно присваивать
            значения.

 Действие:  Объявите объект подходящего класса, или объявите его иным
            способом (например, через подтип или атрибут %ROWTYPE).

                                              Сообщения об ошибках  10-7

PLS-00207:  identifier 'ИМЯ', applied to implicit cursor SQL, is not a
            legal cursor attribute
PLS-00207:  идентификатор 'ИМЯ', примененный к неявному курсору SQL,
            не есть атрибут курсора

  Причина:  Идентификатор, присоединенный к имени SQL, не является
            допустимым именем атрибута.

            Действие: Проверьте написание имени атрибута курсора.   Имя
            должно  быть   одним  из   следующих:  %NOTFOUND,   %FOUND,
            %ROWCOUNT, %ISOPEN.

PLS-00208:  identifier 'ИМЯ' is not a legal cursor attribute
PLS-00208:  идентификатор 'ИМЯ' не есть атрибут курсора

  Причина:  Идентификатор, присоединенный к имени курсора, не является
            допустимым именем атрибута.

 Действие:  Проверьте написание имени атрибута курсора.   Имя
            должно  быть   одним  из   следующих:  %NOTFOUND,   %FOUND,
            %ROWCOUNT, %ISOPEN.

PLS-00209:  table 'ИМЯ' is not in FROM clause
PLS-00209:  таблица 'ИМЯ' не в фразе FROM

  Причина:  Таблица, указанная в списке select в запросе, отсутствует в
            фразе FROM этого запроса.

 Действие:  Проверьте написание имен таблиц. Обеспечьте, чтобы все
            таблицы из списка select участвовали в фразе FROM.

PLS-00210:  an OTHERS clause is required in this CASE statement
PLS-00210:  фраза OTHERS обязательна в этом предложении CASE

   Версия:  Отсутствует в версии 2.0.

PLS-00211:  CASE labels or ranges must not be duplicated in different
            WHEN clauses
PLS-00211:  метки или интервалы CASE не должны пересекаться в разных
            фразах WHEN

   Версия:  Отсутствует в версии 2.0.

PLS-00212:  could not obtain enough memory to compile CASE statement
PLS-00212:  не могу получить память для компиляции предложения CASE

   Версия:  Отсутствует в версии 2.0.

10-8  Руководство пользователя и справочник по PL/SQL

PLS-00213:  package STANDARD not accessible
PLS-00213:  пакет STANDARD недоступен

  Причина:  Компилятор PL/SQL не может найти пакет STANDARD в текущей
            базе данных ORACLE. Для компиляции программы необходимо
            наличие пакета STANDARD.

 Действие:  Обеспечьте доступность пакета STANDARD в базе данных.

PLS-00214:  BEGIN...END block nesting is too deep
PLS-00214:  слишком глубокая вложенность блоков BEGIN...END

  Причина:  Число вложенных блоков слишком велико. Глубина вложенности
            блоков не может превышать 255, но этот лимит дополнительно
            ограничивается системными ресурсами.

 Действие:  Реорганизуйте структуру ваших блоков.

PLS-00215:  string length constraints must be in range (1..32767)
PLS-00215:  длина строки должна быть в интервале (1..32767)

  Причина:  Вы объявили символьную переменную некорректной длины.
            Объявления вроде CHAR(0) или CHAR(-10) не поддерживаются.

 Действие:  Исправьте значение длины переменной.

PLS-00216:  NUMBER precision constraint must be in range (1 .. 38)
PLS-00216:  точность для NUMBER должна быть в интервале (1 .. 38)

  Причина:  Вы объявили числовую переменную некорректной точности.
            Объявления вроде NUMBER(800) или NUMBER(123,10) не
            поддерживаются.

 Действие:  Исправьте значение точности переменной.

                                              Сообщения об ошибках  10-9

PLS-00217:  NUMBER scale constraint must be in range (-84 .. 127)
PLS-00217:  масштаб для NUMBER должен быть в интервале (-84 .. 127)

  Причина:  Вы объявили числвую переменную некорректного масштаба.
            Объявления вроде NUMBER(10,345) или NUMBER(10,-100) не
            поддерживаются.

 Действие:  Исправьте значение масштаба переменной.

PLS-00218:  a variable declared NOT NULL must have an initialization
            assignment
PLS-00218:  переменная, объявляемая NOT NULL, должна быть
            инициализирована

  Причина:  Если в объявлении переменной участвует фраза NOT NULL, то
            это объявление должно включать инициализирующее выражение.
            Причина в том, что по умолчанию переменная инициализируется
            значением NULL.

 Действие:  Добавьте выражение инициализации в объявление переменной.

PLS-00219:  label 'ИМЯ' reference is out of scope
PLS-00219:  ссылка на метку 'ИМЯ' вне сферы

  Причина:  Метка блока или цикла, квалифицирующая переменную (скажем,
            внешний_блок.переменная) либо не была объявлена, либо
            находится вне сферы видимости.

 Действие:  Проверьте объявление и написание метки и имени переменной.
            Убедитесь, что объявление метки в сфере видимости.

PLS-00220:  simple name required in this context
PLS-00220:  в этом контексте требуется простое имя

  Причина:  Квалифицированное имя, типа A.B, здесь не допускается.

 Действие:  Используйте простое имя.

PLS-00221:  'ИМЯ' is not a procedure or is undefined
PLS-00221:  'ИМЯ' - не имя процедуры или не определено

  Причина:  Обращение к идентификатору осуществляется как к процедуре,
            однако этот идентификатор либо не был объявлен, либо был
            объявлен как иной объект (например, как функция).

 Действие:  Проверьте объявление и написание идентификатора.
            Убедитесь, что объявление идентификатора в сфере видимости.

10-10  Руководство пользователя и справочник по PL/SQL

PLS-00222:  no function with name 'ИМЯ' exists in this scope
PLS-00222:  нет функции с именем 'ИМЯ' в текущей сфере

  Причина:  Обращение к идентификатору осуществляется как к функции,
            однако этот идентификатор либо не был объявлен, либо был
            объявлен как иной объект (например, как процедура).

 Действие:  Проверьте объявление и написание идентификатора.
            Убедитесь, что объявление идентификатора в сфере видимости.

PLS-00223:  parameterless procedure 'ИМЯ' used as function
PLS-00223:  процедура без параметров 'ИМЯ' используется как функция

  Причина:  Обращение к идентификатору осуществляется как к функции без
            параметров, однако этот идентификатор был объявлен как
            процедура.

 Действие:  Проверьте объявление и написание идентификатора.
            Убедитесь, что объявление идентификатора в сфере видимости.
            Если необходимо, измените объявление идентификатора, или
            измените обращение так, чтобы оно не требовало возвращаемого
            значения.

PLS-00224:  object 'ИМЯ' must be of type function or array to be used
            this way
PLS-00224:  объект 'ИМЯ' должен быть функцией или массивом для такого
            использования

  Причина:  Обращение к идентификатору осуществляется как к функции или
            массиву, однако этот идентификатор был объявлен как объект
            (скажем, число или дата), к которому нельзя так обращаться.

 Действие:  Проверьте объявление и написание идентификатора.
            Убедитесь, что объявление идентификатора в сфере видимости.

PLS-00225:  subprogram or cursor 'ИМЯ' reference is out of scope
PLS-00225:  ссылка на подпрограмму или курсор 'ИМЯ' вне сферы

  Причина:  Курсор или подпрограмма ссылается на переменную, которая
            либо не объявлена, либо вне сферы видиомсти этого курсора
            или подпрограммы.

 Действие:  Проверьте объявление и написание имени переменной.
            Убедитесь, что объявление этого имени в сфере видимости.

                                             Сообщения об ошибках  10-11

PLS-00226:  package 'ИМЯ' used as variable reference
PLS-00226:  пакет 'ИМЯ' используется как переменная

  Причина:  Пакет используется в выражении, как будто это переменная
            или функция.  Либо ошибочно написано имя переменной или
            функции, либо ссылка не полностью квалифицирована. Например,
            чтобы вызвать функцию my_function, хранящуюся в пакете
            my_package, вы должны использовать следующее обозначение:

            ... my_package.my_function ...

 Действие:  Проверьте объявление и написание имени переменной или
            функции.  Используйте квалифицированную ссылку, если
            необходимо.

PLS-00227:  IN formal parameter 'ИМЯ' not allowed in this context
PLS-00227:  формальный параметр 'ИМЯ' с модой IN недопустим в этом
            контексте

  Причина:  При объявлении формальных параметров подпрограммы вы
            использовали один параметр для инициализации другого,
            например:

            PROCEDURE my_proc (j NUMBER, k NUMBER := j) IS ...

            Значение первого параметра не определено до времени
            исполнения, и потому не может использоваться для
            инициализации второго параметра.

 Действие:  Удалите некорректное обращение к формальному параметру.

PLS-00229:  attribute expression with SQL expression
PLS-00229:  выражение атрибута в выражении SQL

  Причина:  Вы использовали выражение атрибута, типа SQL%NOTFOUND,
            в предложении SQL; однако выражения атрибутов допускаются
            только в процедурных предложениях.

 Действие:  Чтобы обойти эту проблему, присвойте значение атрибута
            переменной, а затем используйте эту переменную в
            предложении SQL. Например, замените предложение

            INSERT INTO audits VALUES (c1%ROWCOUNT, ...)

            следующими двумя предложениями:

            row_count := c1%ROWCOUNT;
            INSERT INTO audits VALUES (row_count, ...)

10-12  Руководство пользователя и справочник по PL/SQL

PLS-00230:  OUT and IN OUT formal parameters may not have default
            expressions
PLS-00230:  формальные параметры OUT и IN OUT не могут иметь
            умалчиваемых выражений

  Причина:  В объявлении формальных пааметров процедуры вы используете
            инициализирующее выражение для параметра OUT или IN OUT,
            например:

            PROCEDURE calc_bonus (bonus OUT REAL := 0, ...) IS ...

            Однако инициализировать умалчиваемыми значениями допустимо
            лишь параметры IN.

 Действие:  Удалите незаконное выражение инициализации.

PLS-00231:  function 'ИМЯ' may not be used in SQL
PLS-00231:  функция 'ИМЯ' не может использоваться в SQL

            Причина: Вы используете недопустимый вызов функции в
            предложении SQL.  Некоторые функции, такие как SQLCODE и
            SQLERRM, можно использовать лишь в процедурных предложениях.

 Действие:  Удалите вызов функции из предложения SQL, или замените его
            локальной переменной. Например, следующее предложение
            незаконно:

            INSERT INTO errors VALUES (SQLCODE, SQLERRM);

            Однако вы можете присвоить значения SQLCODE и SQLERRM
            локальным переменным, а затем испоьзовать эти переменные
            в предложении SQL, например:

            err_num := SQLCODE;
            err_msg := SQLERRM;
            INSERT INTO errors VALUES (err_num, err_msg);

PLS-00232:  nested packages not permitted
PLS-00232:  вложенные пакеты не допускаются

  Причина:  Вы объявили пакет внутри другого пакета, что недопустимо.

 Действие:  Переместите объявление пакета на верхний уровень.

PLS-00233:  function 'ИМЯ' used as exception name in WHEN clause
PLS-00233:  функция 'ИМЯ' используется как имя исключения в фразе WHEN

  Причина:  Фраза WHEN в обработчике исключений содержит вызов функции
            вместо имени исключения. Фраза WHEN должна специфицировать
            имя исключения, за которым кодируются предложения, которые
            должны выполняться при возбуждении этого исключения.

 Действие:  Проверьте написание идентификатора в фразе WHEN. Замените
            вызов функции именем исключения.

                                             Сообщения об ошибках  10-13

PLS-00302:  component 'ИМЯ' must be declared
PLS-00302:  компонента 'ИМЯ' должна быть объявлена

  Причина:  Компонента квалифицированного имени (например, B в имени
            A.B) не была объявлена.

 Действие:  Проверьте объявление и написание имени. Убедитесь, что
            объявление этого имени в сфере видимости.

PLS-00303:  qualifier 'ИМЯ' must be declared
PLS-00303:  квалификатор 'ИМЯ' должен быть объявлен

  Причина:  Квалификатор квалифицированного имени (например, A в имени
            A.B) не был объявлен.

 Действие:  Проверьте объявление и написание квалификатора. Убедитесь,
            что объявление этого квалификатора в сфере видимости.

PLS-00304:  cannot compile body of 'ИМЯ' without its specification
PLS-00304:  нельзя откомпилировать тело  'ИМЯ' без его спецификации

  Причина:  Откомпилированная спецификация пакета, необходимая для
            компиляции его тела, не найдена. Возможные причины:

                *  опечатка в имени пакета

                *  спецификация пакета не была откомпилирована

                *  откомпилированная спецификация пакета недоступна

            Вы должны откомпилировать спецификацию пакета перед
            компиляцией его тела, и компилятор должен иметь доступ
            к откомпилированной спецификации.

 Действие:  Проверьте написание имени пакета.  Откомпилируйте
            спецификацию пакета перед компиляцией тела пакета.
            Убедитесь, что компилятор имеет доступ к откомпилированной
            спецификации.

10-14  Руководство пользователя и справочник по PL/SQL

PLS-00305:  previous use of 'ИМЯ' conflicts with this use
PLS-00305:  предыдущее использование 'ИМЯ' противоречит текущему

  Причина:  При поиске предыдущих объявлений курсора, процедуры, функции
            или пакета компилятор обнаружил другой объект с таким же
            именем в этой же сфере.

 Действие:  Проверьте написание имени курсора, процедуры, функции или
            пакета. Проверьте также имена всех констант, переменных,
            параметров и исключений, объявленных в этой же сфере.
            Удалите или переименуйте объект с повторяющимся именем.

PLS-00306:  wrong number or types of arguments in call to 'ИМЯ'
PLS-00306:  неверны число или типы аргументов в вызове 'ИМЯ'

  Причина:  Эта ошибка возникает, когда вызов подпрограммы не может
            быть отнесен ни к одному из объявлений имени этой
            подпрограммы.

 Действие:  Проверьте написание и объявление подпрограммы. Обеспечьте
            корректное число и типы аргументов.

PLS-00307:  too many declarations of 'ИМЯ' match this call
PLS-00307:  слишком много объявлений 'ИМЯ' отвечают этому вызову

  Причина:  Объявление имени подпрограммы двусмысленно, так как не
            существует точного соответствия между этим объявлением и
            вызовом, и несколько различных объявлений удовлетворяют
            вызову подпрограммы при неявном преобразовании типов
            данных параметров.

 Действие:  Проверьте написание и объявление имени подпрограммы.
            Обеспечьте корректное число и типы аргументов, и, если это
            не встроенная функция, что это объявление помещено в
            правильном месте в структуре блока.

                                             Сообщения об ошибках  10-15

PLS-00308:  this construct is not allowed as the origin of an
            assignment
PLS-00308:  этот конструкт не допускается как источник присваивания

  Причина:  Конструкт или выражение не обозначает значение, которое
            может быть присвоено переменной. Например, выражение вроде
            X := NUMBER незаконно.

 Действие:  Исправьте ошибку.

PLS-00309:  with %LAST attribute, 'ИМЯ' must be a variable of an
            enumerated type
PLS-00309:  для атрибута %LAST, 'ИМЯ' должна быть переменной
            перечислимого типа

   Версия:  Отсутствует в версии 2.0.

PLS-00310:  with %ROWTYPE attribute, 'ИМЯ' must name a cursor or table
PLS-00310:  для атрибута %ROWTYPE, 'ИМЯ' должно быть именем курсора
            или таблицы

  Причина:  Атрибут %ROWTYPE можно применять лишь к идентификатору,
            объявленному как курсор или таблица.

 Действие:  Исправьте ошибку.

PLS-00311:  the declaration of the type of 'ИМЯ' is incomplete or
            malformed
PLS-00311:  неполное или неверное объявление типа 'ИМЯ'

  Причина:  Тип данных идентификатора не может быть распознан.

 Действие:  Исправьте ошибку.

PLS-00312:  a positional parameter association may not follow a named
            association
PLS-00312:  Позиционное соотвествие не может следовать за именным

  Причина:  Если при передаче параметров подпрограмме или курсору вы
            используете как позиционное, так и именное соответствия, то
            все позиционные параметры должны быть заданы первыми.

 Действие:  Переупорядочьте параметры.

10-16  Руководство пользователя и справочник по PL/SQL

PLS-00313:  'ИМЯ' not declared in this scope
PLS-00313:  'ИМЯ' не объявлено в этой сфере

  Причина:  В текущей сфере видимости нет объявления для этого имени.

 Действие:  Проверьте объявление и написание идентификатора. Убедитесь,
            что объявление этого идентификатора в сфере видимости.

PLS-00314:  TABLE declarations are not allowed as PL/SQL local variables
PLS-00314:  объявления TABLE недопустимы как локальные переменные PL/SQL

  Причина:  Объявление таблицы встретилось внутри встроенного блока
            PL/SQL. Если встроенный блок PL/SQL обращается к таблице
            базы данных, которой еще не существует, то вы можете
            использовать предложение DECLARE TABLE, чтобы описать для
            компилятора структуру будущей таблицы. Однако предложения
            DECLARE TABLE допустимы лишь в хост-программе.

 Действие:  Удалите незаконное объявление таблицы. Если вы хотите
            объявить запись, соответствующую строке таблицы,
            используйте атрибут %ROWTYPE с таблицей или курсором.

PLS-00315:  PL/SQL TABLE declarations currently use BINARY_INTEGER
PLS-00315:  Объявления таблиц PL/SQL сейчас используют BINARY_INTEGER

  Причина:  В фразе INDEX BY в объявлении таблицы PL/SQL специфицирован
            тип данных, отличный от BINARY INTEGER. Таблицы PL/SQL могут
            иметь один столбец и один первичный ключ. Столбец может
            иметь любой скалярный тип, но первичный ключ должен иметь
            тип BINARY_INTEGER.

 Действие:  Замените спецификатор типа на BINARY_INTEGER.

PLS-00316:  PL/SQL TABLE declarations must currently use a single index
PLS-00316:  Объявления таблиц PL/SQL сейчас должны использовать
            единственный индекс

  Причина:  В фразе INDEX BY в объявлении таблицы PL/SQL специфицирован
            составной первичный ключ. Таблицы PL/SQL должны иметь
            простой, непоименованный первичный ключ типа BINARY_INTEGER.

 Действие:  Используйте фразу INDEX BY BINARY_INTEGER.

                                             Сообщения об ошибках  10-17

PLS-00319:  subquery in an IN or NOT IN clause must contain exactly
            one column
PLS-00319:  подзапрос в фразе IN или NOT IN должен содержать ровно
            один столбец

  Причина:  Вы использовали неверное выражение, подобное следующему:

            a IN (SELECT x, y, z FROM ...)

            Когда фраза [NOT] IN используется с подзапросом, она не
            проверяет на членство в множестве. Число выражений в фразе
            [NOT] IN и в списке select подзапроса должно совпадать.
            Следовательно, в примере выше подзапрос должен
            специфицировать не более одного столбца.

 Действие:  Измените подзапрос, чтобы выбирать ровно один столбец.

PLS-00320:  the declaration of the type of this expression is
            incomplete or malformed
PLS-00320:  неполное или неверное объявление типа этого выражения

  Причина:  Имя переменной или курсора в объявлении задано с ошибкой
            или подразумевает ссылку вперед. Такие ссылки не
            допускаются в PL/SQL. Вы должны объявить переменную (или
            курсор) прежде, чем можете ссылаться на нее в других
            предложениях или объявлениях. Например, следующее
            объявление записи dept_rec ошибочно:

            DECLARE
                dept_rec  dept_cur%ROWTYPE;
                CURSOR dept_cur IS SELECT ...
                ...

 Действие:  Проверьте написание и расположение объявлений в блоке. Если
            необходимо, переместите объявление в другое место.

PLS-00321:  expression 'СТРОКА' is inappropriate as the left hand side
            of an assignment statement
PLS-00321:  выражение 'СТРОКА' не может стоять в левой стороне
            предложения присваивания

  Причина:  В выражении не задана переменная, которой можно присваивать
            значение. Например, следующее присваивание незаконно, так
            как слева от знака равенства стоит системная функция:

            SYSDATE := '01-JAN-1990';

 Действие:  Исправьте ошибку.

10-18  Руководство пользователя и справочник по PL/SQL

PLS-00322:  declaration of a constant 'ИМЯ' must contain an
            initialization assignment
PLS-00322:  объявление константы 'ИМЯ' должно содержать выражение
            инициализации

  Причина:  В объявлении константы отсутствует выражение, присваивающее
            этой константе значение. Например:

            pi CONSTANT NUMBER := 3.14159;

 Действие:  Добавьте инициализирующее выражение для константы.

PLS-00323:  subprogram 'ИМЯ' is declared in a package specification
            and must be defined in the package body
PLS-00323:  подпрограмма 'ИМЯ' объявлена в спецификации пакета и
            должна быть определена в теле пакета

  Причина:  Вы поместили спецификацию подпрограммы в спецификацию
            пакета, но не поместили соответствующее тело подпрограммы
            в тело пакета. Тело пакета реализует спецификацию пакета.
            Поэтому тело пакета должно содержать определения всех
            подпрограмм, объявленных в спецификации пакета.

 Действие:  Проверьте написание имени подпрограммы. Если необходимо,
            добавьте отсутствующее тело подпрограммы в тело пакета.

PLS-00324:  cursor attribute may not be applied to non-cursor 'ИМЯ'
PLS-00324:  нельзя применять атрибут курсора к не курсору 'ИМЯ'

  Причина:  Эта ошибка возникает при применении атрибута курсора
            (%FOUND, %NOTFOUND, %ROWCOUNT или %ISOPEN) к объекту,
            который не был объявлен как курсор.

 Действие:  Проверьте написание и объявление имени объекта. Убедитесь,
            что объявление стоит в нужном месте в блоке.

PLS-00325:  non-integral numeric literal ЧИСЛО is inappropriate in
            this context
PLS-00325:  нецелый числовой литерал ЧИСЛО не подходит в этом контексте

  Причина:  Нецелый числовой литерал использован в контексте, требующем
            целого числа (числа без дробной части).

 Действие:  Исправьте ошибку.

                                             Сообщения об ошибках  10-19

PLS-00326:  IN clause must contain same number of expressions as
            subquery
PLS-00326:  фраза IN должна содержать столько же выражений, сколько в
            подзапросе

  Причина:  Число выражений в фразе IN не совпадает с числом элементов
            в списке select соответствующего подзапроса. Например,
            следующее предложение неверно:

            ... WHERE (ename, sal) IN (SELECT sal FROM emp);

 Действие:  Исправьте ошибку.

PLS-00328:  a subprogram body must be defined for the forward
            declaration of 'ИМЯ'
PLS-00328:  для упреждающего объявления 'ИМЯ' должно быть определено
            тело подпрограммы

  Причина:  Вы объявили спецификацию подпрограммы, но не объявили
            соответствующее тело подпрограммы. Вы можете написать
            спецификацию и тело подпрограммы как единицу. Альтернативно,
            можно разделить спецификацию и тело, что необходимо при
            определении взаимно рекурсивных подпрограмм или при
            помещении подпрограмм в пакет.

 Действие:  Проверьте написание имени подпрограммы. Если необходимо,
            предоставьте соответствующее тело подпрограммы.

PLS-00341:  declaration of cursor 'ИМЯ' is incomplete or malformed
PLS-00341:  неполное или неверное объявление курсора 'ИМЯ'

  Причина:  Выражение не может быть откомпилировано, так как объявление
            курсора некорректно, или ссылается на идентификатор,
            который не был объявлен должным образом. Возможно, вы
            ссылаетесь на несуществующую таблицу или необъявленный
            курсор. Например, следующее объявление незаконно, потому
            что курсор c1 еще не определен полностью:

            CURSOR c1 RETURN c1%ROWTYPE IS SELECT  ...  -- незаконно

            В данном примере нет необходимости объявлять тип возврата,
            потому что он определяется неявно.

 Действие:  Проверьте написание и объявление курсора и всех объектов,
            на которые ссылается это объявление. Убедитесь, что это
            объявление находится на должном месте в структуре блока.
            Если вы специфицировали тип возвращаемого значения,
            убедитесь, что он ссылается на существующую таблицу базы
            данных или на ранее объявленный курсор.

10-20  Руководство пользователя и справочник по PL/SQL

PLS-00351:  not logged on to database 'ИМЯ'
PLS-00351:  не подключен к базе данных 'ИМЯ'

  Причина:  Вы пытаетесь обратиться к базе данных ORACLE, не выполнив
            соединения. Возможно, имя пользователя или пароль были
            введены неверно.

 Действие:  Подключитесь к ORACLE, прежде чем обращаться к базе данных.

PLS-00352:  unable to access another database 'ИМЯ'
PLS-00352:  нет доступа к другой базе данных 'ИМЯ'

  Причина:  Вы пытаетесь обратиться к объекту не в текущей базе данных.

 Действие:  Исправьте ссылку на объект. Обеспечьте, чтобы объект
            находился в текущей базе данных.

PLS-00353:  'ИМЯ' must name a user in the database
PLS-00353:  'ИМЯ' должно быть именем пользователя в базе данных

  Причина:  Имя не является именем пользователя в базе данных.

 Действие:  Проверьте написание имени. Убедитесь, что пользователь с
            таким именем существует.

PLS-00354:  username must be a simple identifier
PLS-00354:  имя пользователя должно быть простым идентификатором

  Причина:  Квалифицированное имя, такое как scott.accts, недопустимо
            в этом контексте.

 Действие:  Специфицируйте простое имя, такое как scott.

PLS-00356:  'ИМЯ' must name a table to which the user has access
PLS-00356:  'ИМЯ' должно быть именем таблицы, к которой пользователь
            имеет доступ

  Причина:  Таблица недоступна пользователю.

 Действие:  Проверьте написание имени таблицы и имени пользователя.
            Убедитесь, что пользователь существует и имеет требуемые
            полномочия. Проверьте, чтобы имя таблицы не совпадало с
            именем локальной переменной или счетчика цикла.

                                             Сообщения об ошибках  10-21

PLS-00357:  table, view or sequence reference 'ИМЯ' not allowed in this
            context
PLS-00357:  ссылка на таблицу, обзор или последовательность 'ИМЯ'
            недопустима в этом контексте

  Причина:  Обращение к таблице в неподходящем контексте. Такие ссылки
            допускаются только в предложениях SQL, либо (исключая
            последовательности) в объявлениях с участием атрибутов %TYPE
            или %ROWTYPE. Некоторые примеры:

             SELECT ename, emp.deptno, dname INTO my_ename, my_deptno,
                 my_dept FROM emp, dept WHERE emp.deptno = dept.deptno;

             DECLARE
                 last_name  emp.ename%TYPE;
                 dept_rec   dept%ROWTYPE;

 Действие:  Удалите или переместите неверное обращение к таблице.

PLS-00358:  column 'ИМЯ' exists in more than one table; use qualifier
PLS-00358:  столбец 'ИМЯ' есть в нескольких таблицах; используйте
            квалификатор

  Причина:  Ваше предложение двусмысленно, так как в нем используются
            несколько таблиц с одноименными столбцами. Например,
            следующее предложение некорректно, потому что столбец
            deptno существует в обеих таблицах:

            SELECT deptno, loc INTO my_deptno, my_loc FROM emp, dept;

 Действие:  Квалифицируйте имя столбца именем таблицы (например, как
            emp.deptno).

PLS-00359:  assignment target in 'СТРОКА' must have components
PLS-00359:  цель присваивания в 'СТРОКА' должна иметь компоненты

  Причина:  Объект, являющийся целью присваивания, объявлен без
            необходимых компонент. Например, в следующей операции
            значения столбцов присваиваются переменной вместо записи:

            DECLARE
                dept_rec   dept%ROWTYPE;
                my_deptno  dept.deptno%TYPE;
                ...
            BEGIN
                SELECT deptno, dname, loc INTO my_deptno  -- незаконно
                    FROM dept WHERE ...
                ...

 Действие:  Проверьте написание имени цели присваивания и всех
            компонент этой цели. Убедитесь, что целевой объект объявлен
            со всеми требуемыми компонентами, и что это объявление
            находится на должном месте в структуре блока.

10-22  Руководство пользователя и справочник по PL/SQL

PLS-00360:  cursor declaration without body needs return type
PLS-00360:  объявление курсора без тела требует типа возврата

  Причина:  В объявлении курсора требуется либо тело (т.е. предложение
            SELECT), либо тип возврата (%ROWTYPE). Если вы хотите
            отделить спецификацию курсора от его тела, то вы должны
            предоставить тип возврата, например:

            CURSOR c1 RETURN emp%ROWTYPE;

 Действие:  Добавьте предложение SELECT или тип возврата в объявление
            курсора.

PLS-00363:  expression 'СТРОКА' cannot be used as an assignment target
PLS-00363:  выражение 'СТРОКА' не может использоваться как цель
            присваивания

  Причина:  Эта ошибка возникает, когда литерал, индекс цикла,
            константа, параметр IN или имя функции используется как цель
            присваивания. Например, следующее предложение незаконно:

            SELECT deptno INTO 30 FROM dept WHERE ...  -- незаконно

 Действие:  Исправьте ошибку.

PLS-00364:  loop index variable 'ИМЯ' is invalid
PLS-00364:  переменная индекса цикла 'ИМЯ' некорректна

  Причина:  Обращение к индексу цикла в неподходящем контексте.
            Например, следующее предложение незаконно, так как нельзя
            использовать индекс цикла как начальное или конечное
            значение в выражении его собственного интервала:

            FOR j IN 1 .. j LOOP ...  -- незаконно

 Действие:  Исправьте выражение интервала цикла, чтобы оно не ссылалось
            на индекс цикла. Если вы имели в виду ссылку к переменной,
            одноименной с индексом цикла, квалифицируйте эту ссылку или
            переименуйте переменную.

                                             Сообщения об ошибках  10-23

PLS-00365:  'ИМЯ' is an OUT parameter and cannot be read
PLS-00365:  'ИМЯ' - выходной параметр, и его нельзя прочитать

  Причина:  Вы пытаетесь присвоить значение параметра OUT другому
            параметру или переменной. Внутри процедуры параметр OUT
            выступает как неинициализированная переменная; поэтому
            к его значению нельзя обращаться. Например, следующие
            присваивания незаконны:

            PROCEDURE calc_wages (bonus OUT REAL, ...) IS
                rating  REAL;
                wages   REAL;
            BEGIN
                ...
                IF rating > 90 THEN
                    bonus := bonus * 2;  -- незаконно
                END IF;
                SELECT sal + bonus INTO wages FROM emp ...  -- незаконно
                ...
            END wages;

 Действие:  Используйте параметр IN OUT вместо параметра OUT. Внутри
            процедуры параметр IN OUT выступает как инициализированная
            переменная, так что к ее значению можно обращаться.

PLS-00366:  subtype of a NOT NULL type must also be NOT NULL
PLS-00366:  подтип типа NOT NULL также должен быть NOT NULL

   Версия:  Отсутствует в версии 2.0.

PLS-00367:  a RAISE statement with no exception name must be inside
            an exception handler
PLS-00367:  RAISE без имени исключения должно быть внутри обработчика
            исключений

  Причина:  Предложение RAISE без имени исключение встретилось вне
            обработчика исключений.

 Действие:  Удалите предложение RAISE, переместите его, или добавьте
            имя исключения.

PLS-00368:  in RAISE statement, 'ИМЯ' must be an exception name
PLS-00368:  в предложении RAISE, 'ИМЯ' должно быть именем исключения

  Причина:  Идентификатор в предложении RAISE не является правильным
            именем исключения.

 Действие:  Проверьте написание имени исключения и место его объявления
            в структуре блока.

10-24  Руководство пользователя и справочник по PL/SQL

PLS-00369:  no choices may appear with choice OTHERS in an exception
            handler
PLS-00369:  не должно быть никаких имен с именем OTHERS в обработчике
            исключений

  Причина:  Конструкт вида

            WHEN except1 OR OTHERS ...

            встретился  в  определении  обработчика  исключений.   Слово
            OTHERS не может использоваться с другими именами исключений.

 Действие:  Исправьте ошибку.

PLS-00370:  OTHERS handler must be last among the exception handlers
            of a block
PLS-00370:  обработчик OTHERS должен быть последним в блоке

  Причина:  Обработчик OTHERS не является последним обработчиком
            исключений в блоке.

 Действие:  Исправьте ошибку.

PLS-00371:  at most one declaration for 'ИМЯ' is permitted in the
            declaration section
PLS-00371:  не более одного объявления 'ИМЯ' должно быть в
            декларативной секции

  Причина:  Повторение имени объекта в декларативной секции блока.

 Действие:  Проверьте написание имени объекта.

PLS-00372:  in a procedure, RETURN cannot contain an expression
PLS-00372:  в процедуре предложение RETURN не может содержать выражение

  Причина:  В процедуре предложение RETURN не может содержать выражение.
            В функциях предложение RETURN ДОЛЖНО содержать выражение,
            потому что значение этого выражения присваивается
            идентификатору функции. Однако в процедуре предложение
            RETURN просто осуществляет возврат.

 Действие:  Удалите выражение из предложения RETURN, или пеоеопределите
            процедуру как функцию.

                                             Сообщения об ошибках  10-25

PLS-00373:  EXIT label 'ИМЯ' must label a LOOP statement
PLS-00373:  метка EXIT 'ИМЯ' должна быть меткой предложения LOOP

  Причина:  Указанная метка не является меткой цикла. Предложение EXIT
            не требует метки, но если она задана, она должна быть
            меткой предложения LOOP.

 Действие:  Исправьте ошибку.

PLS-00374:  illegal EXIT statement; it must appear inside the loop
            labeled 'ИМЯ'
PLS-00374:  незаконное предложение EXIT; должно стоять в цикле,
            помеченном 'ИМЯ'

  Причина:  Указанная метка не является меткой цикла. Предложение EXIT
            не требует метки, но если она задана, она должна быть
            меткой цикла, внутри которого стоит предложение EXIT.

 Действие:  Проверьте написание и местоположение метки.

PLS-00375:  illegal GOTO statement; this GOTO cannot branch to label
            'ИМЯ'
PLS-00375:  незаконное предложение GOTO; это GOTO не может перейти на
            'ИМЯ'

  Причина:  Встретилось предложение GOTO, которое пытается передать
            управление извне конструкта, содержащего последовательность
            предложений (например, цикла или обработчика исключений)
            на метку внутри этого конструкта. Это не допускается.

 Действие:  Исправьте ошибку.

PLS-00376:  illegal EXIT statement; it must appear inside a loop
PLS-00376:  незаконное предложение EXIT; должно стоять внутри цикла

  Причина:  Предложение EXIT встретилось вне цикла.

 Действие:  Исправьте ошибку.

PLS-00377:  internal type PLS_INTEGER is not included in this release
            of PL/SQL
PLS-00377:  внутренний тип PLS_INTEGER не включен в эту версию PL/SQL

  Причина:  Вы указали устаревший тип данных PLS_INTEGER, который
            в этой версии PL/SQL заменен типом данных BINARY_INTEGER.

 Действие:  Используйте тип данных BINARY_INTEGER.

10-26  Руководство пользователя и справочник по PL/SQL

PLS-00378:  invalid compilation unit for this release of PL/SQL
PLS-00378:  неверная единица компиляции для этой версии PL/SQL

  Причина:  Единица компиляции - это файл с исходным кодом PL/SQL,
            который передается компилятору. В текущей версии PL/SQL
            поддерживаются такие единицы компиляции, как блоки,
            объявления, предложения и подпрограммы. Эта ошибка возникает
            при попытке передать компилятору другой конструкт языка,
            отличный от названных.

 Действие:  Исправьте ошибку.

PLS-00379:  CASE statements are not included in this release of PL/SQL
PLS-00379:  предложение CASE не включено в эту версию PL/SQL

  Причина:  Компилируемая единица содержит предложение CASE.

 Действие:  Не используйте предложение CASE.

PLS-00381:  type mismatch found at 'ИМЯ' between column and variable
            in subquery or INSERT
PLS-00381:  несоответствие типов у 'ИМЯ' между столбцом и переменной
            в подзапросе или INSERT

  Причина:  Типы данных переменной и столбца не совпадают. Переменная
            встретилась в подзапросе или предложении INSERT.

 Действие:  Сделайте тип переменной совместимым с типом столбца.

PLS-00382:  expression is of wrong type
PLS-00382:  выражение неверного типа

  Причина:  Тип данных выражения неверен для данного контекста.

 Действие:  Измените тип данных выражения. Если необходимо, используйте
            явные функции преобразования типов данных.

PLS-00383:  type mismatch found at 'ИМЯ' inside an IN or NOT IN clause
PLS-00383:  несоответствие типов у 'ИМЯ' в фразе IN или NOT IN

  Причина:  В проверке на членство, такой как X NOT IN (SELECT Y ...),
            типы данных выражений X и Y не совпадают, и неясно, какое
            неявное преобразование требуется.

 Действие:  Измените типы данных выражений. Если необходимо,
            используйте явные функции преобразования типов данных.

                                             Сообщения об ошибках  10-27

PLS-00384:  type mismatch found at 'ИМЯ' in UPDATE's SET clause
PLS-00384:  несоответствие типов у 'ИМЯ' в фразе SET предложения UPDATE

  Причина:  Тип данных столбца, стоящего слева от знака равенства в
            фразе SET предложения UPDATE, не совпадает с типом данных
            столбца, выражения или подзапроса, стоящего справа от знака
            равенства, и неясно, какое неявное преобразование
            требуется.

 Действие:  Измените типы данных выражений. Если необходимо,
            используйте явные функции преобразования типов данных.

PLS-00385:  type mismatch found at 'ИМЯ' in SELECT...INTO statement
PLS-00385:  несоответствие типов у 'ИМЯ' в предложении SELECT...INTO

  Причина:  Типы данных выражений слева и справа от фразы INTO в
            предложении SELECT...INTO не совпадают, и неясно, какое
            неявное преобразование требуется.

 Действие:  Измените типы данных выражений. Если необходимо,
            используйте явные функции преобразования типов данных.

PLS-00386:  type mismatch found at 'ИМЯ' between FETCH cursor and
            INTO variables
PLS-00386:  несоответствие типов у 'ИМЯ' между FETCH курсор и
            INTO-переменными

  Причина:  Тип данных у цели присваивания в списке INTO предложения
            FETCH не совпадает с типом данных соответствующего столбца
            в списке select в объявлении курсора, и неясно, какое
            неявное преобразование требуется.

 Действие:  Измените объявление курсора или тип данных объекта,
            являющегося целью присваивания. Если необходимо,
            используйте явные функции преобразования типов данных.

PLS-00387:  INTO variable cannot be a database object
PLS-00387:  INTO-переменная не может быть объектом базы данных

  Причина:  Объект из списка INTO предложения FETCH или SELECT оказался
            определен в базе данных. Такой объект должен быть
            пользовательской переменной.

 Действие:  Проверьте написание имени объекта. Удалите этот объект из
            списка INTO, или используйте другое имя.

10-28  Руководство пользователя и справочник по PL/SQL

PLS-00388:  undefined column 'ИМЯ' in subquery
PLS-00388:  не определен столбец 'ИМЯ' в подзапросе

  Причина:  Подзапрос содержит имя столбца, который не определен в базе
            данных.

 Действие:  Проверьте написание имени столбца.

PLS-00389:  undefined column 'ИМЯ' in left-hand-side expression
PLS-00389:  не определен столбец 'ИМЯ' в выражении слева

  Причина:  Выражение слева в предложении SQL ссылается на столбец,
            который не определен в базе данных.

 Действие:  Проверьте написание имени столбца.

PLS-00390:  undefined column 'ИМЯ' in INSERT statement
PLS-00390:  не определен столбец 'ИМЯ' в предложении INSERT

  Причина:  Предложение INSERT ссылается на столбец, который не
            определен в соответствующей таблице в базе данных.

 Действие:  Проверьте написание имени столбца.

PLS-00391:  undefined column 'ИМЯ' in UPDATE statement
PLS-00391:  не определен столбец 'ИМЯ' в предложении UPDATE

  Причина:  Предложение UPDATE ссылается на столбец, который не
            определен в соответствующей таблице в базе данных.

 Действие:  Проверьте написание имени столбца.

PLS-00392:  type mismatch in arguments to BETWEEN
PLS-00392:  несоответствие типов в аргументах BETWEEN

  Причина:  В сравнении вида X BETWEEN Y AND Z выражения X, Y и Z имеют
            разные типы данных, и неясно, какое неявное преобразование
            требуется использовать.

 Действие:  Измените типы данных выражений. Если необходимо,
            используйте явные функции преобразования типов данных.

                                             Сообщения об ошибках  10-29

PLS-00393:  wrong number of columns in SELECT...INTO statement
PLS-00393:  неверное число столбцов в предложении SELECT...INTO

  Причина:  Число столбцов, выбираемых предложением SELECT..INTO, не
            совпадает с числом переменных в фразе INTO.

 Действие:  Исправьте ошибку.

PLS-00394:  wrong number of values in the INTO list of a FETCH
            statement
PLS-00394:  неверное число значений в списке INTO предложения FETCH

  Причина:  Число переменных в фразе INTO предложения FETCH не
            совпадает с числом столбцов в объявлении курсора.

 Действие:  Исправьте ошибку.

PLS-00395:  wrong number of values in VALUES clause of INSERT
            statement
PLS-00395:  неверное число значений в фразе VALUES предложения INSERT

  Причина:  Число столбцов в предложении INSERT не совпадает с числом
            значений в фразе VALUES. Например, следующее предложение
            некорректно, так как не указан столбец для значения 20:

            INSERT INTO emp (empno, ename) VALUES (7788, 'SCOTT', 20);

 Действие:  Исправьте ошибку.

PLS-00396:  INSERT statement's subquery yields wrong number of columns
PLS-00396:  подзапрос в предложении INSERT возвращает неверное число
            столбцов

  Причина:  Число столбцов в предложении INSERT не совпадает с числом
            столбцов в списке select подзапроса. Например, следующее
            предложение некорректно, так как не указан столбец,
            соответствующий col3:

            INSERT INTO emp(ename,empno) SELECT col1,col2,col3 FROM ...

 Действие:  Исправьте ошибку.

10-30  Руководство пользователя и справочник по PL/SQL

PLS-00397:  type mismatch in arguments to IN
PLS-00397:  несоответствие типов в аргументах IN

  Причина:  В проверке на членство, такой как X IN (Y, Z), типы данных
            выражений X и Y не совпадают, и неясно, какое неявное
            преобразование требуется.

 Действие:  Измените типы данных выражений. Если необходимо,
            используйте явные функции преобразования типов данных.

PLS-00398:  wrong number of columns in UNION, INTERSECT, or MINUS
            expression
PLS-00398:  неверное число столбцов в выражении UNION, INTERSECT или
            MINUS

  Причина:  Фразы SELECT слева и справа в выражении UNION, INTERSECT
            или MINUS выбирают неодинаковое число столбцов. Например,
            следующее предложение некорректно:

            CURSOR my_cur IS SELECT ename FROM emp
                INTERSECT SELECT ename, empno FROM emp;

 Действие:  Исправьте ошибку.

PLS-00399:  different types of columns in UNION, INTERSECT, or MINUS
            expression
PLS-00399:  различные типы столбцов в UNION, INTERSECT или MINUS

  Причина:  Фразы SELECT слева и справа в выражении UNION, INTERSECT
            или MINUS содержат пару несовместимых столбцов. Например,
            следующее предложение некорректно, потому что константа 3
            имеет тип NUMBER, а SYSDATE имеет тип DATE:

            CURSOR my_cur IS SELECT 3 FROM emp
                INTERSECT SELECT SYSDATE FROM emp;

 Действие:  Исправьте ошибку.

PLS-00400:  different number of columns between cursor SELECT
            statement and return value
PLS-00400:  несовпадение числа столбцов в курсорном предложении SELECT и
            возвращаемом значении

  Причина:  Курсор может быть объявлен с явным возвращаемым значением
            (например, RETURN emp%ROWTYPE). В этом случае число
            столбцов, специфицированных типом возврата, должно совпадать
            с числом столбцов, выбираемых списком select в объявлении
            курсора.

 Действие:  Исправьте ошибку.

                                             Сообщения об ошибках  10-31

PLS-00401:  different column types between cursor SELECT statement
            and return value found at 'ИМЯ'
PLS-00401:  различные типы столбцов у курсорного SELECT и
            возвращаемого значения у 'ИМЯ'

  Причина:  Курсор может быть объявлен с явным возвращаемым значением
            (например, RETURN emp%ROWTYPE). В этом случае типы данных
            столбцов, специфицированных типом возврата, должны совпадать
            с типами столбцов, выбираемых списком select в объявлении
            курсора.

 Действие:  Исправьте ошибку.

PLS-00402:  alias required in SELECT list of cursor to avoid
            duplicate column names
PLS-00402:  в списке SELECT курсора требуется алиас, чтобы избежать
            повторения имен

  Причина:  В списке SELECT курсора повторяются имена столбцов.

 Действие:  Замените повторяющееся имя столбца алиасом.

PLS-00403:  INTO list of FETCH statement contains illegal assignment
            target
PLS-00403:  список INTO предложения FETCH содержит незаконную цель
            присваивания

  Причина:  Предложение FETCH не может присвоить значение объекту в
            фразе INTO, потому что этот объект не является правильно
            объявленной переменной. Например, следующее предложение
            незаконно, так как нельзя присвоить значение литералу:

            FETCH my_cur INTO 'Jones';

 Действие:  Проверьте написание имен и исправьте ошибку.

10-32  Руководство пользователя и справочник по PL/SQL

PLS-00404:  cursor 'ИМЯ' must be declared with FOR UPDATE to use with
            CURRENT OF
PLS-00404:  курсор 'ИМЯ' должен быть объявлен как FOR UPDATE, чтобы
            использовать CURRENT OF

  Причина:  Фраза CURRENT OF ИМЯ законна лишь тогда, когда ИМЯ было
            объявлено с фразой FOR UPDATE.

 Действие:  Исправьте ошибку.

PLS-00405:  subquery not allowed in this context
PLS-00405:  подзапрос недопустим в этом контексте

  Причина:  Подзапрос встретился в незаконном контексте, как, например:

            IF (SELECT deptno FROM emp WHERE ...) = 20 THEN ...

            Подзапросы допустимы лишь в предложениях SQL.

 Действие:  Вы можете добиться того же результата, используя временную
            переменную, например:

            SELECT deptno INTO temp_var FROM emp WHERE ...;
            IF temp_var = 20 THEN ...

PLS-00406:  length of SELECT list in subquery must match number of
            assignment targets
PLS-00406:  размер списка SELECT в подзапросе должен совпадать с
            числом присваиваний

  Причина:  Список select в подзапросе и список переменных, которым
            должны быть присвоены выбираемые значения, содержат
            неодинаковое число элементов. Например, следующее
            предложение некорректно:

            UPDATE emp SET ename =
              (SELECT ename, empno FROM emp WHERE ename = 'SMITH') ...

 Действие:  Исправьте ошибку.

PLS-00407:  '*' not allowed here; a list of columns is required
PLS-00407:  '*' здесь не допускается; требуется список столбцов

  Причина:  Звездочка была использована как сокращенное обозначение
            списка столбцов. Однако в данном контексте требуется явный
            список имен столбцов.

 Действие:  Исправьте ошибку.

                                             Сообщения об ошибках  10-33

PLS-00408:  duplicate column 'ИМЯ' not permitted in INSERT or UPDATE
PLS-00408:  повторение столбца 'ИМЯ' не допускается в INSERT или UPDATE

  Причина:  Список столбцов в предложении INSERT или UPDATE содержит
            повторяющееся имя некоторого столбца.

 Действие:  Исправьте ошибку.

PLS-00409:  duplicate variable 'ИМЯ' in INTO list is not permitted
PLS-00409:  повторение переменной 'ИМЯ' в списке INTO не допускается

  Причина:  Список INTO в предложении SELECT или FETCH содержит
            повторяющееся имя некоторой переменной.

 Действие:  Исправьте ошибку.

PLS-00410:  duplicate fields in record or table are not permitted
PLS-00410:  повторение полей в записи или таблице не допускается

  Причина:  Компоненты записи, как столбцы в таблице, должны быть
            уникальны внутри записи или таблицы.

 Действие:  Проверьте написание имен компонент и исправьте ошибку.

PLS-00412:  list of values not allowed as argument to this function
            or procedure
PLS-00412:  список значений не допускается как аргумент этой функции
            или процедуры

  Причина:  Агрегат (т.е. список значений в скобках) был использован в
            неверном контексте. Например, следующая фраза незаконна:

            WHERE (col1, col2) > (SELECT col3, col4 FROM my_table) ...

            Однако в операции проверки на равенство использование
            слева и справа соответственно агрегата и подзапроса
            допускается, так что следующая фраза законна:

            WHERE (col1, col2) = (SELECT col3, col4 FROM my_table) ...

 Действие:  Перепишите ваше выражение. Например, вместо

            WHERE (col1, col2) > (SELECT col3, col4 FROM my_table) ...

            вы можете написать следующую корректную фразу:

            WHERE col1 > (SELECT col3 FROM my_table ...) AND
                col2 > (SELECT col4 FROM my_table ...)

10-34  Руководство пользователя и справочник по PL/SQL

PLS-00413:  identifier in CURRENT OF clause is not a cursor name
PLS-00413:  идентификатор в фразе CURRENT OF не есть имя курсора

  Причина:  Идентификатор в фразе CURRENT OF обозначает объект, который
            не был объявлен как курсор.

 Действие:  Проверьте написание идентификатора. Убедитесь, что это сам
            курсор, а не переменная курсорного цикла FOR.

PLS-00414:  no column 'ИМЯ' in table
PLS-00414:  в таблице нет столбца 'ИМЯ'

  Причина:  Имя таблицы или алиас квалифицирует ссылку на столбец,
            но в этой таблице нет такого столбца.

 Действие:  Проверьте написание имен таблицы и столбца.

PLS-00415:  'ИМЯ' is an OUT parameter and cannot appear in a function
PLS-00415:  'ИМЯ' - это параметр OUT и не может появляться в функции

  Причина:  При объявлении формальных параметров функции вы задали
            данный параметр как OUT или IN OUT. Процедуры могут
            принимать любые параметры, но функции могут принимать лишь
            параметры IN.

 Действие:  Удалите параметры OUT и IN OUT из списка формальных
            параметров, или переопределите функцию как процедуру.

PLS-00450:  a variable of this private type cannot be declared here
PLS-00450:  переменную этого личного типа нельзя объявлять здесь

   Версия:  Отсутствует в версии 2.0.

PLS-00483:  exception 'ИМЯ' may appear in at most one exception handler
            in this block
PLS-00483:  исключение 'ИМЯ' может появиться не более чем в одном
            обработчике в этом блоке

  Причина:  Одно и то же исключение встречено в двух фразах WHEN, т.е.
            в двух разных обработчиках исключений в секции EXCEPTION.

 Действие:  Удалите одно из повторений имени исключения.

                                             Сообщения об ошибках  10-35

PLS-00484:  exceptions 'ИМЯ' and 'ИМЯ' have same ORACLE error number
            and must appear in same exception hanlder
PLS-00484:  исключения 'ИМЯ' и 'ИМЯ', инициализированные одной и той же
            ошибкой ORACLE, должны появиться в одном обработчике

  Причина:  Два разных исключения связаны с одной и той же ошибкой
            ORACLE через PRAGMA EXCEPTION_INIT, и эти исключения
            встречены в двух разных фразах WHEN, т.е. в разных
            обработчиках исключений.

 Действие:  Удалите одно из исключений.

PLS-00485:  in exception handler, 'ИМЯ' must be an exception name
PLS-00485:  в обработчике исключений, 'ИМЯ' должно быть именем
            исключения

  Причина:  В фразе WHEN встретилось имя, не являющееся именем
            исключения.

 Действие:  Проверьте написание и объявление имени исключения.

PLS-00486:  SELECT list cannot be enclosed in parentheses
PLS-00486:  список SELECT не может быть заключен в скобки

  Причина:  В предложении SELECT список выбираемых значений оказался в
            скобках, как в следующем примере:

            SELECT (deptno, dname, loc) FROM dept INTO ...

            Это не соответствует синтаксису SQL. (Скобки здесь излишни,
            потому что список ограничен ключевыми словами SELECT и
            FROM.)

 Действие:  Удалите скобки.

10-36  Руководство пользователя и справочник по PL/SQL

PLS-00487:  invalid reference to variable 'ИМЯ'
PLS-00487:  неверное обращение к переменной 'ИМЯ'

  Причина:  Обращение к переменной не соответствует ее типу данных.
            Следующий пример показывает некорректное обращение к
            скалярной переменной my_sal как к записи:

            DECLARE
                CURSOR emp_cur IS SELECT empno, ename, sal FROM emp;
                emp_rec  emp_cur%ROWTYPE;
                my_sal   NUMBER(7,2);
            BEGIN
                ...
                total_sal := total_sal + my_sal.sal;  -- незаконно
                ...

 Действие:  Проверьте написание имени переменной и исправьте ошибку.

PLS-00488:  invalid variable declaration: object 'ИМЯ' must be a type
            or subtype
PLS-00488:  неверное объявление переменной: объект 'ИМЯ' должен быть
            типом или подтипом

  Причина:  Спецификатор типа данных в объявлении переменной задает
            незаконный тип. Например, вы могли забыть написать %TYPE
            в объявлении, как в следующем примере:

            DECLARE
                my_sal    emp.sal%TYPE;
                my_ename  emp.ename;  -- опущено %TYPE
                ...

            При объявлении константы или переменной, чтобы  предоставить
            тип  данных  автоматически,  вы  должны использовать атрибут
            %TYPE.    Аналогично,    При   объявлении    записи,   чтобы
            предоставить   тип    данных   автоматически,    вы   должны
            использовать атрибут %ROWTYPE.

 Действие:  Исправьте ошибку.

PLS-00489:  invalid variable reference: 'ИМЯ' must be a column in this
            expression
PLS-00489:  неверное обращение к переменной: 'ИМЯ' должен быть столбцом
            в этом выражении

  Причина:  В запросе, элемент списка select ссылается на таблицу в
            фразе FROM, а не на столбец базы данных.

 Действие:  Исправьте ошибку.

                                             Сообщения об ошибках  10-37

PLS-00503:  RETURN  statement required for this return from
            function
PLS-00503:  Предложение RETURN <значение> требуется для этого возврата
            из функции

  Причина:  В теле функции использовано предложение RETURN без
            выражения. В процедурах предложение RETURN не содержит
            выражения, потому что оно просто возвращает управление
            вызывающей программе. Однако в функциях предложение RETURN
            должно содержать выражение, так как значение этого выражения
            присваивается идентификатору функции.

 Действие:  Подставьте выражение в предложение RETURN.

PLS-00504:  type 'ИМЯ' may not be used outside of package STANDARD
PLS-00504:  тип 'ИМЯ' не может использоваться вне пакета STANDARD

  Причина:  В объявлении вы ошибочно использовали, например, тип данных
            NUMBER_BASE. Типы CHAR_BASE, DATE_BASE, MLSLABEL_BASE и
            NUMBER_BASE предназначены только для внутреннего
            использования.

 Действие:  Специфицируйте, например, тип NUMBER вместе NUMBER_BASE.

PLS-00505:  user-defined types may only be defined as PL/SQL tables or
            records
PLS-00505:  пользовательские типы можно определять только как таблицы
            PL/SQL или записи

  Причина:  Вы пытаетесь определить тип данных, выводимый из базового
            типа, отличного от RECORD или TABLE.

 Действие:  Исправьте ошибку.

PLS-00506:  user-defined constrained subtypes are disallowed
PLS-00506:  ограничиваемые пользовательские подтипы не допускаются

  Причина:  Вы пытаетесь определить подтип (подтип ассоциирует базовый
            тип с ограничением, и тем самым определяет подмножество
            значений). Пользовательские подтипы не поддерживаются в этой
            версии PL/SQL. Например, следующее определение типа
            незаконно:

            SUBTYPE Acronym IS VARCHAR2(5);  -- незаконно

            Однако будущие версии PL/SQL позволят определять подтипы.

 Действие:  Удалите некорректное определение типа.

10-38  Руководство пользователя и справочник по PL/SQL

PLS-00507:  PL/SQL tables may not be defined in terms of records or
            other tables
PLS-00507:  таблицы PL/SQL нельзя определять в терминах записей или
            других таблиц

  Причина:  В определении типа TABLE вы ошибочно специфицировали
            составной тип данных (RECORD или TABLE) для столбца.
            Единственный, непоименованный столбец должен иметь скалярный
            тип данных, такой как CHAR, DATE или NUMBER.

 Действие:  Исправьте ошибку.

PLS-00700:  PRAGMA EXCEPTION_INIT of 'ИМЯ' must follow declaration of
            its exception in same block
PLS-00700:  PRAGMA EXCEPTION_INIT 'ИМЯ' должна следовать за объявлением
            этого исключения в том же блоке

  Причина:  Прагма EXCEPTION_INIT не была объявлена в том же блоке, что
            и исключение, на которое она ссылается. Эта прагма должна
            следовать непосредственно за объявлением исключения.

 Действие:  Исправьте ошибку.

PLS-00701:  illegal ORACLE error number ЧИСЛО for PRAGMA EXCEPTION_INIT
PLS-00701:  незаконный код ошибки ORACLE ЧИСЛО для PRAGMA EXCEPTION_INIT

  Причина:  Номер ошибки ORACLE, указанный в прагме EXCEPTION_INIT,
            некорректен. Этот номер должен быть +100 или в интервале от
            -9999 до -1, исключая -100, для ошибок ORACLE, и в интервале
            -20000..-20999 для пользовательских ошибок.

 Действие:  Исправьте ошибку.

PLS-00702:  second argument to PRAGMA EXCEPTION_INIT must be a
            numeric literal
PLS-00702:  второй аргумент PRAGMA EXCEPTION_INIT должен быть
            числовым литералом

  Причина:  Второй аргумент прагмы EXCEPTION_INIT должен быть номером
            ошибки ORACLE, заданным как литерал. Этот номер должен быть
            +100 или в интервале от -9999 до -1, исключая -100.

 Действие:  Исправьте ошибку.

                                             Сообщения об ошибках  10-39

PLS-00703:  multiple instances of named argument in list
PLS-00703:  повторение поименованного аргумента в списке

  Причина:  Два фактических параметра в вызове подпрограммы ссылаются на
            один и тот же формальный параметр.

 Действие:  Исправьте ошибку.

PLS-00704:  'ИМЯ' must be declared as an exception
PLS-00704:  'ИМЯ' должно быть объявлено как исключение

  Причина:  Параметр ИМЯ_ИСКЛЮЧЕНИЯ в прагме EXCEPTION_INIT задан с
            ошибкой или не обозначает имя ранее объявленного
            исключения. Возможно, прагма размещена не в том месте; она
            должна следовать непосредственно за объявлением исключения
            в том же блоке.

 Действие:  Проверьте написание и объявление имени исключения.
            Убедитесь, что прагма следует за объявлением исключения.

PLS-00705:  exceptions not allowed in an expression
PLS-00705:  исключения в выражении не допускаются

  Причина:  Вы ошибочно ссылаетесь на исключение в выражении. Исключения
            имеют имена, но не имеют значений, и поэтому не могут
            использоваться в выражениях. Например, следующее предложение
            RETURN незаконно:

            FUNCTION credit_limit (cust_no INTEGER) RETURN NUMBER IS
                limit       NUMBER;
                over_limit  EXCEPTION;
                ...
            BEGIN
                ...
                RETURN over_limit;  -- незаконно
            END;

 Действие:  Проверьте и исправьте написание идентификаторов
            в вашем выражении.

PLS-00900:  can't find body of unit 'ИМЯ'
PLS-00900:  не могу найти тело единицы 'ИМЯ'

  Причина:  Во время выполнения не найдено тело программной единицы. Это
            может случиться, например, при обращении к процедуре, для
            которой существует спецификация, но не существует тела.
            (Ошибки времени компиляции не генерируются, поскольку
            спецификация существует.)

 Действие:  Определите тело для программной единицы.

10-40  Руководство пользователя и справочник по PL/SQL

PLS-00901:  the datatype of column 'ИМЯ' of table 'ИМЯ' is not
            supported
PLS-00901:  тип данных столбца 'ИМЯ' таблицы 'ИМЯ' не поддерживается

  Причина:  Столбец таблицы в базе данных имеет тип данных, который не
            поддерживается текущей версией PL/SQL.

 Действие:  Удалите этот столбец из таблицы, или скопируйте нужные вам
            столбцы в другую таблицу.

PLS-00902:  a read-only bind variable used in OUT or IN OUT context
PLS-00902:  только-читаемая связная переменная в контексте OUT или
            IN OUT

  Причина:  Хост-переменная, защищенная от обновления, используется в
            контексте, который позволяет ее обновление.

 Действие:  Проверьте контекст и измените характер использования
            хост-переменной, или присвойте значение хост-переменной
            локальной переменной PL/SQL и используйте эту локальную
            переменную вместо хост-переменной.

PLS-00904:  insufficient privilege to access object 'ИМЯ'
PLS-00904:  недостаточно привилегий для доступа к объекту 'ИМЯ'

  Причина:  Вы пытаетесь работать с объектом базы данных, не имея
            требуемых привилегий. Эта ошибка возникает, например, при
            попытке обновить таблицу, для которой вы имеете лишь
            привилегии SELECT.

 Действие:  Попросите вашего АБД выполнить нужную операцию, или получите
            у него необходимые привилегии.

PLS-00905:  object 'ИМЯ' is invalid
PLS-00905:  объект 'ИМЯ' недействителен

  Причина:  Вы обращаетесь к недействительной спецификации пакета или
            недействительной подпрограмме. Такой объект считается
            недействительным, если его исходный код или какой-либо из
            используемых им объектов базы данных был удален (DROP),
            заменен (REPLACE) или изменен (ALTER) после последней
            компиляции данного объекта.

 Действие:  Выясните причину, по которой объект был помечен как
            недействительный, устраните ее, а затем обеспечьте, чтобы
            ORACLE перекомпилировал этот объект без ошибок.

                                             Сообщения об ошибках  10-41

PLS-00995:  unhandled exception # ЧИСЛО
PLS-00995:  необрабатываемое исключение # ЧИСЛО

  Причина:  Возбуждено исключение, для которого не определен обработчик
            исключений. Если PL/SQL не может найти обработчика для
            возбужденного исключения, он возвращает необработанное
            исключение в хост-окружение. Номер, приведенный в сообщении,
            является кодом ошибки ORACLE из перечня, приведенного в
            документе ORACLE7 Server Messages and Codes Manual.

 Действие:  Фиксируйте условие, которое привело к исключению, и напишите
            для него обработчик, или используйте обработчик OTHER. Если
            в текущем блоке уже есть соответствующий обработчик, значит,
            исключение было возбуждено в объявлении или в самом
            обработчике исключений. (Исключение, возбужденное в
            объявлении или в обработчике исключений, немедленно
            продвигается в окружающий блок.) Вы можете избежать
            необрабатываемых исключений, если закодируете обработчик
            OTHERS на самом верхнем уровне каждого блока и подпрограммы
            PL/SQL.

PLS-00996:  out of memory
PLS-00996:  не хватает памяти

  Причина:  PL/SQL не смог получить запрошенную память у системы.

 Действие:  Убедитесь, что вы не обращаетесь к неверной строке в таблице
            PL/SQL, и что ваша рекурсивная программа не углубляется
            слишком глубоко.
