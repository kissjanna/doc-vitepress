# Standard 规范和 Airbnb 规范对比

standard 官方有中文，Airbnb 是第三方翻译的中文，所以本文档中 Airbnb 相关为英文版本

[standard](https://standardjs.com/rules-zhcn.html) - [airbnb](https://airbnb.io/javascript/)

中文 Airbnb：https://github.com/lin-123/javascript

## [细则](https://standardjs.com/rules-zhcn.html#细则)

- ✅

  standard **使用两个空格**进行缩进。

  eslint: [`indent`](http://eslint.org/docs/rules/indent)

  ```js
  function hello (name) {
    console.log('hi', name)
  }
  ```

  Airbnb 同

  [19.1](https://airbnb.io/javascript/#whitespace--spaces) Use soft tabs (space character) set to 2 spaces. eslint: [`indent`](https://eslint.org/docs/rules/indent.html) jscs: [`validateIndentation`](http://jscs.info/rule/validateIndentation)

  ```
  // bad
  function foo() {
  ∙∙∙∙let name;
  }
  
  // bad
  function bar() {
  ∙let name;
  }
  
  // good
  function baz() {
  ∙∙let name;
  }
  ```

- ✅

  standard 除需要转义的情况外，**字符串统一使用单引号**。

  eslint: [`quotes`](http://eslint.org/docs/rules/quotes)

  ```js
  console.log('hello there')
  $("<div class='box'>")
  ```

  Airbnb 同

  [6.1](https://airbnb.io/javascript/#strings--quotes) Use single quotes `''` for strings. eslint: [`quotes`](https://eslint.org/docs/rules/quotes.html) jscs: [`validateQuoteMarks`](http://jscs.info/rule/validateQuoteMarks)

  ```
  // bad
  const name = "Capt. Janeway";
  
  // bad - template literals should contain interpolation or newlines
  const name = `Capt. Janeway`;
  
  // good
  const name = 'Capt. Janeway';
  ```

- ⭕️

  standard **不要定义未使用的变量**。

  eslint: [`no-unused-varsd`](http://eslint.org/docs/rules/no-unused-vars)

  ```js
  function myFunction () {
    var result = something()   // ✗ avoid
  }
  ```

  Airbnb 无，原 13.8，但网页中此规则不见了

- ✅

  standard **关键字后面加空格**。

  eslint: [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing)

  ```js
  if (condition) { ... }   // ✓ ok
  if(condition) { ... }    // ✗ avoid
  ```

  Airbnb 同

  [19.3](https://airbnb.io/javascript/#whitespace--around-keywords) Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. eslint: [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing.html) jscs: [`requireSpaceAfterKeywords`](http://jscs.info/rule/requireSpaceAfterKeywords)

  ```
  // bad
  if(isJedi) {
    fight ();
  }
  
  // good
  if (isJedi) {
    fight();
  }
  
  // bad
  function fight () {
    console.log ('Swooosh!');
  }
  
  // good
  function fight() {
    console.log('Swooosh!');
  }
  ```

- ✅

  standard **函数声明时括号与函数名间加空格**。

  eslint: [`space-before-function-paren`](http://eslint.org/docs/rules/space-before-function-paren)

  ```js
  function name (arg) { ... }   // ✓ ok
  function name(arg) { ... }    // ✗ avoid
  
  run(function () { ... })      // ✓ ok
  run(function() { ... })       // ✗ avoid
  ```

  Airbnb 同

  [7.11](https://airbnb.io/javascript/#functions--signature-spacing) Spacing in a function signature. eslint: [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren) [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)

  > Why? Consistency is good, and you shouldn’t have to add or remove a space when adding or removing a name.

  ```
  // bad
  const f = function(){};
  const g = function (){};
  const h = function() {};
  
  // good
  const x = function () {};
  const y = function a() {};
  ```

- ✅
  
  standard **始终使用** `===` 替代 `==`。
    例外： `obj == null` 可以用来检查 `null || undefined`。
  
    eslint: [`eqeqeq`](http://eslint.org/docs/rules/eqeqeq)
  
    ```js
    if (name === 'John')   // ✓ ok
  if (name == 'John')    // ✗ avoid
    ```
  
    ```js
    if (name !== 'John')   // ✓ ok
    if (name != 'John')    // ✗ avoid
    ```
  
    Airbnb 同
  
    [15.1](https://airbnb.io/javascript/#comparison--eqeqeq) Use `===` and `!==` over `==` and `!=`. eslint: [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq.html)
  
- ✅

  standard **字符串拼接操作符 (Infix operators)** 之间要留空格。

  eslint: [`space-infix-ops`](http://eslint.org/docs/rules/space-infix-ops)

  ```js
  // ✓ ok
  var x = 2
  var message = 'hello, ' + name + '!'
  ```

  ```js
  // ✗ avoid
  var x=2
  var message = 'hello, '+name+'!'
  ```

  Airbnb 同

  [19.4](https://airbnb.io/javascript/#whitespace--infix-ops) Set off operators with spaces. eslint: [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops.html) jscs: [`requireSpaceBeforeBinaryOperators`](http://jscs.info/rule/requireSpaceBeforeBinaryOperators), [`requireSpaceAfterBinaryOperators`](http://jscs.info/rule/requireSpaceAfterBinaryOperators)

  ```
  // bad
  const x=y+5;
  
  // good
  const x = y + 5;
  ```

- ⭕️

  standard **逗号后面加空格**。

  eslint: [`comma-spacing`](http://eslint.org/docs/rules/comma-spacing)

  ```js
  // ✓ ok
  var list = [1, 2, 3, 4]
  function greet (name, options) { ... }
  ```

  ```js
  // ✗ avoid
  var list = [1,2,3,4]
  function greet (name,options) { ... }
  ```

  Airbnb 无，原 19.15

- ✅

  standard **else 关键字要与花括号**保持在同一行。

  eslint: [`brace-style`](http://eslint.org/docs/rules/brace-style)

  ```js
  // ✓ ok
  if (condition) {
    // ...
  } else {
    // ...
  }
  ```

  ```js
  // ✗ avoid
  if (condition)
  {
    // ...
  }
  else
  {
    // ...
  }
  ```

  Airbnb 同

  [16.2](https://airbnb.io/javascript/#blocks--cuddled-elses) If you’re using multi-line blocks with `if` and `else`, put `else` on the same line as your `if` block’s closing brace. eslint: [`brace-style`](https://eslint.org/docs/rules/brace-style.html) jscs: [`disallowNewlineBeforeBlockStatements`](http://jscs.info/rule/disallowNewlineBeforeBlockStatements)

  ```
  // bad
  if (test) {
    thing1();
    thing2();
  }
  else {
    thing3();
  }
  
  // good
  if (test) {
    thing1();
    thing2();
  } else {
    thing3();
  }
  ```

- ⭕️

  standard **多行 if 语句的**的括号不能省。

  eslint: [`curly`](http://eslint.org/docs/rules/curly)

  ```js
  // ✓ ok
  if (options.quiet !== true) console.log('done')
  ```

  ```js
  // ✓ ok
  if (options.quiet !== true) {
    console.log('done')
  }
  ```

  ```js
  // ✗ avoid
  if (options.quiet !== true)
    console.log('done')
  ```

  Airbnb 无

- ⭕️

  standard **不要丢掉**异常处理中`err`参数。

  eslint: [`handle-callback-err`](http://eslint.org/docs/rules/handle-callback-err)

  ```js
  // ✓ ok
  run(function (err) {
    if (err) throw err
    window.alert('done')
  })
  ```

  ```js
  // ✗ avoid
  run(function (err) {
    window.alert('done')
  })
  ```

  Airbnb 无

- ⭕️ ⭐️⭐️⭐️⭐️⭐️

  standard **使用浏览器全局变量时加上** `window.` 前缀。
    `document`、`console` 和 `navigator` 除外。

    eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef)

    ```js
  window.alert('hi')   // ✓ ok
    ```

    Airbnb 不能使用未声明变量

    [13.1](https://airbnb.io/javascript/#variables--const) Always use `const` or `let` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that. eslint: [`no-undef`](https://eslint.org/docs/rules/no-undef) [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

    ```
    // bad
    superPower = new SuperPower();
    
    // good
    const superPower = new SuperPower();
    ```

- ⭕️

  standard **不允许有连续多行空行**。

  eslint: [`no-multiple-empty-lines`](http://eslint.org/docs/rules/no-multiple-empty-lines)

  ```js
  // ✓ ok
  var value = 'hello world'
  console.log(value)
  ```

  ```js
  // ✗ avoid
  var value = 'hello world'
  
  
  console.log(value)
  ```

  Airbnb 无，原 19.9 和 19.20

- ⭕️

  standard **对于三元运算符** `?` 和 `:` 与他们所负责的代码处于同一行

  eslint: [`operator-linebreak`](http://eslint.org/docs/rules/operator-linebreak)

  ~~~scheme
  ```js
  // ✓ ok
  var location = env.development ? 'localhost' : 'www.api.com'
  
  // ✓ ok
  var location = env.development
    ? 'localhost'
    : 'www.api.com'
  
  // ✗ avoid
  var location = env.development ?
    'localhost' :
    'www.api.com'
  ~~~

  Airbnb 表述不同

  [13.7](https://airbnb.io/javascript/#variables--linebreak) Avoid linebreaks before or after `=` in an assignment. If your assignment violates [`max-len`](https://eslint.org/docs/rules/max-len.html), surround the value in parens. eslint [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak.html).

  > Why? Linebreaks surrounding `=` can obfuscate the value of an assignment.

  ```
  // bad
  const foo =
    superLongLongLongLongLongLongLongLongFunctionName();
  
  // bad
  const foo
    = 'superLongLongLongLongLongLongLongLongString';
  
  // good
  const foo = (
    superLongLongLongLongLongLongLongLongFunctionName()
  );
  
  // good
  const foo = 'superLongLongLongLongLongLongLongLongString';
  ```

- ✅

  standard **每个 var 关键字**单独声明一个变量。

  eslint: [`one-var`](http://eslint.org/docs/rules/one-var)

  ```js
  // ✓ ok
  var silent = true
  var verbose = true
  
  // ✗ avoid
  var silent = true, verbose = true
  
  // ✗ avoid
  var silent = true,
      verbose = true
  ```

  Airbnb 同

  [13.2](https://airbnb.io/javascript/#variables--one-const) Use one `const` or `let` declaration per variable. eslint: [`one-var`](https://eslint.org/docs/rules/one-var.html) jscs: [`disallowMultipleVarDecl`](http://jscs.info/rule/disallowMultipleVarDecl)

  > Why? It’s easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.

  ```
  // bad
  const items = getItems(),
      goSportsTeam = true,
      dragonball = 'z';
  
  // bad
  // (compare to above, and try to spot the mistake)
  const items = getItems(),
      goSportsTeam = true;
      dragonball = 'z';
  
  // good
  const items = getItems();
  const goSportsTeam = true;
  const dragonball = 'z';
  ```

- ⭕️

  standard **条件语句中赋值语句**使用括号包起来。这样使得代码更加清晰可读，而不会认为是将条件判断语句的全等号（`===`）错写成了等号（`=`）。

  eslint: [`no-cond-assign`](http://eslint.org/docs/rules/no-cond-assign)

  ```js
  // ✓ ok
  while ((m = text.match(expr))) {
    // ...
  }
  
  // ✗ avoid
  while (m = text.match(expr)) {
    // ...
  }
  ```

  Airbnb 无

- ⭕️

  standard **单行代码块两边加空格**。

  eslint: [`block-spacing`](http://eslint.org/docs/rules/block-spacing)

  ```js
    function foo () {return true}    // ✗ avoid
    function foo () { return true }  // ✓ ok
  ```

  Airbnb 无，原 19.14

- ✅ ➖

  standard **对于变量和函数名统一使用驼峰命名法**。

  eslint: [`camelcase`](http://eslint.org/docs/rules/camelcase)

  ```js
    function my_function () { }    // ✗ avoid
    function myFunction () { }     // ✓ ok
  
    var my_var = 'hello'           // ✗ avoid
    var myVar = 'hello'            // ✓ ok
  ```

  Airbnb 小驼峰

  [23.2](https://airbnb.io/javascript/#naming--camelCase) Use camelCase when naming objects, functions, and instances. eslint: [`camelcase`](https://eslint.org/docs/rules/camelcase.html) jscs: [`requireCamelCaseOrUpperCaseIdentifiers`](http://jscs.info/rule/requireCamelCaseOrUpperCaseIdentifiers)

  ```
  // bad
  const OBJEcttsssss = {};
  const this_is_my_object = {};
  function c() {}
  
  // good
  const thisIsMyObject = {};
  function thisIsMyFunction() {}
  ```

- ⭕️

  standard **不允许有多余的行末逗号**。

  eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle)

  ```js
    var obj = {
      message: 'hello',   // ✗ avoid
    }
  ```

  Airbnb 相反

  [20.2](https://airbnb.io/javascript/#commas--dangling) Additional trailing comma: **Yup.** eslint: [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle.html) jscs: [`requireTrailingComma`](http://jscs.info/rule/requireTrailingComma)

  > Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don’t have to worry about the [trailing comma problem](https://github.com/airbnb/javascript/blob/es5-deprecated/es5/README.md#commas) in legacy browsers.

  ```js
  // bad - git diff without trailing comma
  const hero = {
       firstName: 'Florence',
       // 自行脑补在 Git diff 时的颜色
  -    lastName: 'Nightingale' //red
  +    lastName: 'Nightingale', // green
  +    inventorOf: ['coxcomb chart', 'modern nursing'] // green
  };
  
  // good - git diff with trailing comma
  const hero = {
       firstName: 'Florence',
       lastName: 'Nightingale',
  +    inventorOf: ['coxcomb chart', 'modern nursing'], // green
  };
  // bad
  const hero = {
    firstName: 'Dana',
    lastName: 'Scully'
  };
  
  const heroes = [
    'Batman',
    'Superman'
  ];
  
  // good
  const hero = {
    firstName: 'Dana',
    lastName: 'Scully',
  };
  
  const heroes = [
    'Batman',
    'Superman',
  ];
  
  // bad
  function createHero(
    firstName,
    lastName,
    inventorOf
  ) {
    // does nothing
  }
  
  // good
  function createHero(
    firstName,
    lastName,
    inventorOf,
  ) {
    // does nothing
  }
  
  // good (note that a comma must not appear after a "rest" element)
  function createHero(
    firstName,
    lastName,
    inventorOf,
    ...heroArgs
  ) {
    // does nothing
  }
  
  // bad
  createHero(
    firstName,
    lastName,
    inventorOf
  );
  
  // good
  createHero(
    firstName,
    lastName,
    inventorOf,
  );
  
  // good (note that a comma must not appear after a "rest" element)
  createHero(
    firstName,
    lastName,
    inventorOf,
    ...heroArgs
  );
  ```

- ✅

  standard **始终将逗号置于行末**。

  eslint: [`comma-style`](http://eslint.org/docs/rules/comma-style)

  ```js
    var obj = {
      foo: 'foo'
      ,bar: 'bar'   // ✗ avoid
    }
  
    var obj = {
      foo: 'foo',
      bar: 'bar'   // ✓ ok
    }
  ```

  Airbnb 同

  [20.1](https://airbnb.io/javascript/#commas--leading-trailing) Leading commas: **Nope.** eslint: [`comma-style`](https://eslint.org/docs/rules/comma-style.html) jscs: [`requireCommaBeforeLineBreak`](http://jscs.info/rule/requireCommaBeforeLineBreak)

  ```
  // bad
  const story = [
      once
    , upon
    , aTime
  ];
  
  // good
  const story = [
    once,
    upon,
    aTime,
  ];
  
  // bad
  const hero = {
      firstName: 'Ada'
    , lastName: 'Lovelace'
    , birthYear: 1815
    , superPower: 'computers'
  };
  
  // good
  const hero = {
    firstName: 'Ada',
    lastName: 'Lovelace',
    birthYear: 1815,
    superPower: 'computers',
  };
  ```

- ⭕️

  standard **点号操作符须与属性需在同一行**。

  eslint: [`dot-location`](http://eslint.org/docs/rules/dot-location)

  ```js
    console.
      log('hello')  // ✗ avoid
  
    console
      .log('hello') // ✓ ok
  ```

  Airbnb 无

- ✅

  standard **文件末尾留一空行**。

  eslint: [`eol-last`](http://eslint.org/docs/rules/eol-last)

  Airbnb 同

  [19.5](https://airbnb.io/javascript/#whitespace--newline-at-end) End files with a single newline character. eslint: [`eol-last`](https://github.com/eslint/eslint/blob/master/docs/rules/eol-last.md)

  ```
  // bad
  import { es6 } from './AirbnbStyleGuide';
    // ...
  export default es6;
  // bad
  import { es6 } from './AirbnbStyleGuide';
    // ...
  export default es6;↵
  ↵
  // good
  import { es6 } from './AirbnbStyleGuide';
    // ...
  export default es6;↵
  ```

- ⭕️

  standard **函数调用时标识符与括号间不留间隔**。

  eslint: [`func-call-spacing`](http://eslint.org/docs/rules/func-call-spacing)

  ```js
  console.log ('hello') // ✗ avoid
  console.log('hello')  // ✓ ok
  ```

  Airbnb 无，原19.17

- ⭕️

  standard **键值对当中冒号与值之间要留空白**。

  eslint: [`key-spacing`](http://eslint.org/docs/rules/key-spacing)

  ```js
  var obj = { 'key' : 'value' }    // ✗ avoid
  var obj = { 'key' :'value' }     // ✗ avoid
  var obj = { 'key':'value' }      // ✗ avoid
  var obj = { 'key': 'value' }     // ✓ ok
  ```

  Airbnb 无，原 19.18

- ✅

  standard **构造函数要以大写字母开头**。

  eslint: [`new-cap`](http://eslint.org/docs/rules/new-cap)

  ```js
  function animal () {}
  var dog = new animal()    // ✗ avoid
  
  function Animal () {}
  var dog = new Animal()    // ✓ ok
  ```

  Airbnb 同

  [23.3](https://airbnb.io/javascript/#naming--PascalCase) Use PascalCase only when naming constructors or classes. eslint: [`new-cap`](https://eslint.org/docs/rules/new-cap.html) jscs: [`requireCapitalizedConstructors`](http://jscs.info/rule/requireCapitalizedConstructors)

  ```
  // bad
  function user(options) {
    this.name = options.name;
  }
  
  const bad = new user({
    name: 'nope',
  });
  
  // good
  class User {
    constructor(options) {
      this.name = options.name;
    }
  }
  
  const good = new User({
    name: 'yup',
  });
  ```

- ⭕️

  standard **无参的构造函数调用时要带上括号**。

  eslint: [`new-parens`](http://eslint.org/docs/rules/new-parens)

  ```js
  function Animal () {}
  var dog = new Animal    // ✗ avoid
  var dog = new Animal()  // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **对象中定义了存值器，一定要对应的定义取值器**。

  eslint: [`accessor-pairs`](http://eslint.org/docs/rules/accessor-pairs)

  ```js
  var person = {
    set name (value) {    // ✗ avoid
      this._name = value
    }
  }
  
  var person = {
    set name (value) {
      this._name = value
    },
    get name () {         // ✓ ok
      return this._name
    }
  }
  ```

  Airbnb 无

- ⭕️

  standard **子类的构造器中一定要调用 `super`**

  eslint: [`constructor-super`](http://eslint.org/docs/rules/constructor-super)

  ```js
  class Dog {
    constructor () {
      super()   // ✗ avoid
    }
  }
  
  class Dog extends Mammal {
    constructor () {
      super()   // ✓ ok
    }
  }
  ```

  Airbnb 无

- ✅

  standard **使用数组字面量而不是构造器**。

  eslint: [`no-array-constructor`](http://eslint.org/docs/rules/no-array-constructor)

  ```js
  var nums = new Array(1, 2, 3)   // ✗ avoid
  var nums = [1, 2, 3]            // ✓ ok
  ```

  Airbnb 同

  [4.1](https://airbnb.io/javascript/#arrays--literals) Use the literal syntax for array creation. eslint: [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor.html)

  ```
  // bad
  const items = new Array();
  
  // good
  const items = [];
  ```

- ⭕️

  standard **避免使用 `arguments.callee` 和 `arguments.caller`**。

  eslint: [`no-caller`](http://eslint.org/docs/rules/no-caller)

  ```js
  function foo (n) {
    if (n <= 0) return
  
    arguments.callee(n - standard 1)   // ✗ avoid
  }
  
  function foo (n) {
    if (n <= 0) return
  
    foo(n - standard 1)
  }
  ```

  Airbnb 无

- ⭕️

  standard **避免对类名重新赋值**。

  eslint: [`no-class-assign`](http://eslint.org/docs/rules/no-class-assign)

  ```js
  class Dog {}
  Dog = 'Fido'    // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **避免修改使用 `const` 声明的变量**。

  eslint: [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign)

  ```js
  const score = 100
  score = 125       // ✗ avoid
  ```

  Airbnb 表述不同

  [2.1](https://airbnb.io/javascript/#references--prefer-const) Use `const` for all of your references; avoid using `var`. eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign.html)

  > Why? This ensures that you can’t reassign your references, which can lead to bugs and difficult to comprehend code.

  ```
  // bad
  var a = 1;
  var b = 2;
  
  // good
  const a = 1;
  const b = 2;
  ```

- ⭕️

  standard **避免使用常量作为条件表达式的条件（循环语句除外）**。

  eslint: [`no-constant-condition`](http://eslint.org/docs/rules/no-constant-condition)

  ```js
  if (false) {    // ✗ avoid
    // ...
  }
  
  if (x === 0) {  // ✓ ok
    // ...
  }
  
  while (true) {  // ✓ ok
    // ...
  }
  ```

  Airbnb 无

- ⭕️

  standard **正则中不要使用控制符**。

  eslint: [`no-control-regex`](http://eslint.org/docs/rules/no-control-regex)

  ```js
  var pattern = /\x1f/    // ✗ avoid
  var pattern = /\x20/    // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **不要使用 `debugger`**。

  eslint: [`no-debugger`](http://eslint.org/docs/rules/no-debugger)

  ```js
  function sum (a, b) {
    debugger      // ✗ avoid
    return a + b
  }
  ```

  Airbnb 无

- ⭕️

  standard **不要对变量使用 `delete` 操作**。

  eslint: [`no-delete-var`](http://eslint.org/docs/rules/no-delete-var)

  ```js
  var name
  delete name     // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **不要定义冗余的函数参数**。

  eslint: [`no-dupe-args`](http://eslint.org/docs/rules/no-dupe-args)

  ```js
  function sum (a, b, a) {  // ✗ avoid
    // ...
  }
  
  function sum (a, b, c) {  // ✓ ok
    // ...
  }
  ```

  Airbnb 无

- ✅

  standard **类中不要定义冗余的属性**。

  eslint: [`no-dupe-class-members`](http://eslint.org/docs/rules/no-dupe-class-members)

  ```js
  class Dog {
    bark () {}
    bark () {}    // ✗ avoid
  }
  ```

  Airbnb 表述差不多

  [9.6](https://airbnb.io/javascript/#classes--no-duplicate-members) Avoid duplicate class members. eslint: [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)

  > Why? Duplicate class member declarations will silently prefer the last one - having duplicates is almost certainly a bug.

  ```
  // bad
  class Foo {
    bar() { return 1; }
    bar() { return 2; }
  }
  
  // good
  class Foo {
    bar() { return 1; }
  }
  
  // good
  class Foo {
    bar() { return 2; }
  }
  ```

- ⭕️

  standard **对象字面量中不要定义重复的属性**。

  eslint: [`no-dupe-keys`](http://eslint.org/docs/rules/no-dupe-keys)

  ```js
  var user = {
    name: 'Jane Doe',
    name: 'John Doe'    // ✗ avoid
  }
  ```

  Airbnb 无

- ⭕️

  standard **`switch` 语句中不要定义重复的 `case` 分支**。

  eslint: [`no-duplicate-case`](http://eslint.org/docs/rules/no-duplicate-case)

  ```js
  switch (id) {
    case 1:
      // ...
    case 1:     // ✗ avoid
  }
  ```

  Airbnb 无

- ✅

  standard **同一模块有多个导入时一次性写完**。

  eslint: [`no-duplicate-imports`](http://eslint.org/docs/rules/no-duplicate-imports)

  ```js
  import { myFunc1 } from 'module'
  import { myFunc2 } from 'module'          // ✗ avoid
  
  import { myFunc1, myFunc2 } from 'module' // ✓ ok
  ```

  Airbnb 同

  [10.4](https://airbnb.io/javascript/#modules--no-duplicate-imports) Only import from a path in one place. eslint: [`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)

  > Why? Having multiple lines that import from the same path can make code harder to maintain.

  ```
  // bad
  import foo from 'foo';
  // … some other imports … //
  import { named1, named2 } from 'foo';
  
  // good
  import foo, { named1, named2 } from 'foo';
  
  // good
  import foo, {
    named1,
    named2,
  } from 'foo';
  ```

- ⭕️

  standard **正则中不要使用空字符**。

  eslint: [`no-empty-character-class`](http://eslint.org/docs/rules/no-empty-character-class)

  ```js
  const myRegex = /^abc[]/      // ✗ avoid
  const myRegex = /^abc[a-z]/   // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **不要解构空值**。

  eslint: [`no-empty-pattern`](http://eslint.org/docs/rules/no-empty-pattern)

  ```js
  const { a: {} } = foo         // ✗ avoid
  const { a: { b } } = foo      // ✓ ok
  ```

  Airbnb 无

- ✅

  standard **不要使用 `eval()`**。

  eslint: [`no-eval`](http://eslint.org/docs/rules/no-eval)

  ```js
  eval( "var result = user." + propName ) // ✗ avoid
  var result = user[propName]             // ✓ ok
  ```

  Airbnb 同

  [6.4](https://airbnb.io/javascript/#strings--eval) Never use `eval()` on a string, it opens too many vulnerabilities. eslint: [`no-eval`](https://eslint.org/docs/rules/no-eval)

- ⭕️

  standard **`catch` 中不要对错误重新赋值**。

  eslint: [`no-ex-assign`](http://eslint.org/docs/rules/no-ex-assign)

  ```js
  try {
    // ...
  } catch (e) {
    e = 'new value'             // ✗ avoid
  }
  
  try {
    // ...
  } catch (e) {
    const newVal = 'new value'  // ✓ ok
  }
  ```

  Airbnb 无

- ⭕️

  standard **不要扩展原生对象**。

  eslint: [`no-extend-native`](http://eslint.org/docs/rules/no-extend-native)

  ```js
  Object.prototype.age = 21     // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **避免多余的函数上下文绑定**。

  eslint: [`no-extra-bind`](http://eslint.org/docs/rules/no-extra-bind)

  ```js
  const name = function () {
    getName()
  }.bind(user)    // ✗ avoid
  
  const name = function () {
    this.getName()
  }.bind(user)    // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **避免不必要的布尔转换**。

  eslint: [`no-extra-boolean-cast`](http://eslint.org/docs/rules/no-extra-boolean-cast)

  ```js
  const result = true
  if (!!result) {   // ✗ avoid
    // ...
  }
  
  const result = true
  if (result) {     // ✓ ok
    // ...
  }
  ```

  Airbnb 无

- ⭕️

  standard **不要使用多余的括号包裹函数**。

  eslint: [`no-extra-parens`](http://eslint.org/docs/rules/no-extra-parens)

  ```js
  const myFunc = (function () { })   // ✗ avoid
  const myFunc = function () { }     // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **`switch` 一定要使用 `break` 来将条件分支正常中断**。

  eslint: [`no-fallthrough`](http://eslint.org/docs/rules/no-fallthrough)

  ```js
  switch (filter) {
    case 1:
      doSomething()    // ✗ avoid
    case 2:
      doSomethingElse()
  }
  
  switch (filter) {
    case 1:
      doSomething()
      break           // ✓ ok
    case 2:
      doSomethingElse()
  }
  
  switch (filter) {
    case 1:
      doSomething()
      // fallthrough  // ✓ ok
    case 2:
      doSomethingElse()
  }
  ```

  Airbnb 无

- ⭕️

  standard **不要省去小数点前面的0**。

  eslint: [`no-floating-decimal`](http://eslint.org/docs/rules/no-floating-decimal)

  ```js
  const discount = .5      // ✗ avoid
  const discount = 0.5     // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **避免对声明过的函数重新赋值**。

  eslint: [`no-func-assign`](http://eslint.org/docs/rules/no-func-assign)

  ```js
  function myFunc () { }
  myFunc = myOtherFunc    // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **不要对全局只读对象重新赋值**。

  eslint: [`no-global-assign`](http://eslint.org/docs/rules/no-global-assign)

  ```js
  window = {}     // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **注意隐式的 `eval()`**。

  eslint: [`no-implied-eval`](http://eslint.org/docs/rules/no-implied-eval)

  ```js
  setTimeout("alert('Hello world')")                   // ✗ avoid
  setTimeout(function () { alert('Hello world') })     // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **嵌套的代码块中禁止再定义函数**。

  eslint: [`no-inner-declarations`](http://eslint.org/docs/rules/no-inner-declarations)

  ```js
  if (authenticated) {
    function setAuthUser () {}    // ✗ avoid
  }
  ```

  Airbnb 无

- ⭕️

  standard **不要向 `RegExp` 构造器传入非法的正则表达式**。

  eslint: [`no-invalid-regexp`](http://eslint.org/docs/rules/no-invalid-regexp)

  ```js
  RegExp('[a-z')    // ✗ avoid
  RegExp('[a-z]')   // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **不要使用非法的空白符**。

  eslint: [`no-irregular-whitespace`](http://eslint.org/docs/rules/no-irregular-whitespace)

  ```js
  function myFunc () /*<NBSP>*/{}   // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **禁止使用 `__iterator__`**。

  eslint: [`no-iterator`](http://eslint.org/docs/rules/no-iterator)

  ```js
  Foo.prototype.__iterator__ = function () {}   // ✗ avoid
  ```

  Airbnb 表述不同

  [11.1](https://airbnb.io/javascript/#iterators--nope) Don’t use iterators. Prefer JavaScript’s higher-order functions instead of loops like `for-in` or `for-of`. eslint: [`no-iterator`](https://eslint.org/docs/rules/no-iterator.html) [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)

  > Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.

  > Use `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / … to iterate over arrays, and `Object.keys()` / `Object.values()` / `Object.entries()` to produce arrays so you can iterate over objects.

  ```
  const numbers = [1, 2, 3, 4, 5];
  
  // bad
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  sum === 15;
  
  // good
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  sum === 15;
  
  // best (use the functional force)
  const sum = numbers.reduce((total, num) => total + num, 0);
  sum === 15;
  
  // bad
  const increasedByOne = [];
  for (let i = 0; i < numbers.length; i++) {
    increasedByOne.push(numbers[i] + 1);
  }
  
  // good
  const increasedByOne = [];
  numbers.forEach((num) => {
    increasedByOne.push(num + 1);
  });
  
  // best (keeping it functional)
  const increasedByOne = numbers.map(num => num + 1);
  ```

- ⭕️

  standard **外部变量不要与对象属性重名**。

  eslint: [`no-label-var`](http://eslint.org/docs/rules/no-label-var)

  ```js
  var score = 100
  function game () {
    score: while (true) {      // ✗ avoid
      score -= 10
      if (score > 0) continue score
      break
    }
  }
  ```

  Airbnb 无

- ⭕️

  standard **不要使用标签语句**。

  eslint: [`no-labels`](http://eslint.org/docs/rules/no-labels)

  ```js
  label:
    while (true) {
      break label     // ✗ avoid
    }
  ```

  Airbnb 无

- ⭕️

  standard **不要书写不必要的嵌套代码块**。

  eslint: [`no-lone-blocks`](http://eslint.org/docs/rules/no-lone-blocks)

  ```js
  function myFunc () {
    {                   // ✗ avoid
      myOtherFunc()
    }
  }
  
  function myFunc () {
    myOtherFunc()       // ✓ ok
  }
  ```

  Airbnb 无

- ⭕️

  standard **不要混合使用空格与制表符作为缩进**。

  eslint: [`no-mixed-spaces-and-tabs`](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

  Airbnb 无

- ⭕️

  standard **除了缩进，不要使用多个空格**。

  eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces)

  ```js
  const id =    1234    // ✗ avoid
  const id = 1234       // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **不要使用多行字符串**。

  eslint: [`no-multi-str`](http://eslint.org/docs/rules/no-multi-str)

  ```js
  const message = 'Hello \
                   world'     // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **`new` 创建对象实例后需要赋值给变量**。

  eslint: [`no-new`](http://eslint.org/docs/rules/no-new)

  ```js
  new Character()                     // ✗ avoid
  const character = new Character()   // ✓ ok
  ```

  Airbnb 无

- ✅

  standard **禁止使用 `Function` 构造器**。

  eslint: [`no-new-func`](http://eslint.org/docs/rules/no-new-func)

  ```js
  var sum = new Function('a', 'b', 'return a + b')    // ✗ avoid
  ```

  Airbnb 

  [7.10](https://airbnb.io/javascript/#functions--constructor) Never use the Function constructor to create a new function. eslint: [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

  > Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities.

  ```
  // bad
  var add = new Function('a', 'b', 'return a + b');
  
  // still bad
  var subtract = Function('a', 'b', 'return a - b');
  ```

- ✅

  standard **禁止使用 `Object` 构造器**。

  eslint: [`no-new-object`](http://eslint.org/docs/rules/no-new-object)

  ```js
  let config = new Object()   // ✗ avoid
  ```

  Airbnb 同

  [3.1](https://airbnb.io/javascript/#objects--no-new) Use the literal syntax for object creation. eslint: [`no-new-object`](https://eslint.org/docs/rules/no-new-object.html)

  ```
  // bad
  const item = new Object();
  
  // good
  const item = {};
  ```

- ⭕️

  standard **禁止使用 `new require`**。

  eslint: [`no-new-require`](http://eslint.org/docs/rules/no-new-require)

  ```js
  const myModule = new require('my-module')    // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **禁止使用 `Symbol` 构造器**。

  eslint: [`no-new-symbol`](http://eslint.org/docs/rules/no-new-symbol)

  ```js
  const foo = new Symbol('foo')   // ✗ avoid
  ```

  Airbnb 无

- ✅

  standard **禁止使用原始包装器**。

  eslint: [`no-new-wrappers`](http://eslint.org/docs/rules/no-new-wrappers)

  ```js
  const message = new String('hello')   // ✗ avoid
  ```

  Airbnb 表述不同

  [22.2](https://airbnb.io/javascript/#coercion--strings) Strings: eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

  ```
  // => this.reviewScore = 9;
  
  // bad
  const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"
  
  // bad
  const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()
  
  // bad
  const totalScore = this.reviewScore.toString(); // isn’t guaranteed to return a string
  
  // good
  const totalScore = String(this.reviewScore);
  ```

  [22.3](https://airbnb.io/javascript/#coercion--numbers) Numbers: Use `Number` for type casting and `parseInt` always with a radix for parsing strings. eslint: [`radix`](https://eslint.org/docs/rules/radix) [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

  ```
  const inputValue = '4';
  
  // bad
  const val = new Number(inputValue);
  
  // bad
  const val = +inputValue;
  
  // bad
  const val = inputValue >> 0;
  
  // bad
  const val = parseInt(inputValue);
  
  // good
  const val = Number(inputValue);
  
  // good
  const val = parseInt(inputValue, 10);
  ```

  [22.6](https://airbnb.io/javascript/#coercion--booleans) Booleans: eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

  ```
  const age = 0;
  
  // bad
  const hasAge = new Boolean(age);
  
  // good
  const hasAge = Boolean(age);
  
  // best
  const hasAge = !!age;
  ```

- ⭕️

  standard **不要将全局对象的属性作为函数调用**。

  eslint: [`no-obj-calls`](http://eslint.org/docs/rules/no-obj-calls)

  ```js
  const math = Math()   // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **不要使用八进制字面量**。

  eslint: [`no-octal`](http://eslint.org/docs/rules/no-octal)

  ```js
  const octal = 042         // ✗ avoid
  const decimal = 34        // ✓ ok
  const octalString = '042' // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **字符串字面量中也不要使用八进制转义字符**。

  eslint: [`no-octal-escape`](http://eslint.org/docs/rules/no-octal-escape)

  ```js
  const copyright = 'Copyright \251'  // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **使用 `__dirname` 和 `__filename` 时尽量避免使用字符串拼接**。

  eslint: [`no-path-concat`](http://eslint.org/docs/rules/no-path-concat)

  ```js
  const pathToFile = __dirname + '/app.js'            // ✗ avoid
  const pathToFile = path.join(__dirname, 'app.js')   // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard 使用 `getPrototypeOf` 来替代 **`__proto__`**。

  eslint: [`no-proto`](http://eslint.org/docs/rules/no-proto)

  ```js
  const foo = obj.__proto__               // ✗ avoid
  const foo = Object.getPrototypeOf(obj)  // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **不要重复声明变量**。

  eslint: [`no-redeclare`](http://eslint.org/docs/rules/no-redeclare)

  ```js
  let name = 'John'
  let name = 'Jane'     // ✗ avoid
  
  let name = 'John'
  name = 'Jane'         // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **正则中避免使用多个空格**。

  eslint: [`no-regex-spaces`](http://eslint.org/docs/rules/no-regex-spaces)

  ```js
  const regexp = /test   value/   // ✗ avoid
  
  const regexp = /test {3}value/  // ✓ ok
  const regexp = /test value/     // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **return 语句中的赋值必需有括号包裹**。

  eslint: [`no-return-assign`](http://eslint.org/docs/rules/no-return-assign)

  ```js
  function sum (a, b) {
    return result = a + b     // ✗ avoid
  }
  
  function sum (a, b) {
    return (result = a + b)   // ✓ ok
  }
  ```

  Airbnb 无

- ⭕️

  standard **避免将变量赋值给自己**。

  eslint: [`no-self-assign`](http://eslint.org/docs/rules/no-self-assign)

  ```js
  name = name   // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **避免将变量与自己进行比较操作**。

  esint: [`no-self-compare`](http://eslint.org/docs/rules/no-self-compare)

  ```js
  if (score === score) {}   // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **避免使用逗号操作符**。

  eslint: [`no-sequences`](http://eslint.org/docs/rules/no-sequences)

  ```js
  if (doSomething(), !!test) {}   // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **不要随意更改关键字的值**。

  eslint: [`no-shadow-restricted-names`](http://eslint.org/docs/rules/no-shadow-restricted-names)

  ```js
  let undefined = 'value'     // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **禁止使用稀疏数组（Sparse arrays）**。

  eslint: [`no-sparse-arrays`](http://eslint.org/docs/rules/no-sparse-arrays)

  ```js
  let fruits = ['apple',, 'orange']       // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **不要使用制表符**。

  eslint: [`no-tabs`](http://eslint.org/docs/rules/no-tabs)

  Airbnb 无

- ⭕️

  standard **正确使用 ES6 中的字符串模板**。

  eslint: [`no-template-curly-in-string`](http://eslint.org/docs/rules/no-template-curly-in-string)

  ```js
  const message = 'Hello ${name}'   // ✗ avoid
  const message = `Hello ${name}`   // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **使用 `this` 前请确保 `super()` 已调用**。

  eslint: [`no-this-before-super`](http://eslint.org/docs/rules/no-this-before-super)

  ```js
  class Dog extends Animal {
    constructor () {
      this.legs = 4     // ✗ avoid
      super()
    }
  }
  ```

  Airbnb 无

- ⭕️

  standard **用 `throw` 抛错时，抛出 `Error` 对象而不是字符串**。

  eslint: [`no-throw-literal`](http://eslint.org/docs/rules/no-throw-literal)

  ```js
  throw 'error'               // ✗ avoid
  throw new Error('error')    // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **行末不留空格**。

  eslint: [`no-trailing-spaces`](http://eslint.org/docs/rules/no-trailing-spaces)

  Airbnb 无

- ⭕️

  standard **不要使用 `undefined` 来初始化变量**。

  eslint: [`no-undef-init`](http://eslint.org/docs/rules/no-undef-init)

  ```js
  let name = undefined    // ✗ avoid
  
  let name
  name = 'value'          // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **循环语句中注意更新循环变量**。

  eslint: [`no-unmodified-loop-condition`](http://eslint.org/docs/rules/no-unmodified-loop-condition)

  ```js
  for (let i = 0; i < items.length; j++) {...}    // ✗ avoid
  for (let i = 0; i < items.length; i++) {...}    // ✓ ok
  ```

  Airbnb 无

- ✅

  standard **如果有更好的实现，尽量不要使用三元表达式**。

  eslint: [`no-unneeded-ternary`](http://eslint.org/docs/rules/no-unneeded-ternary)

  ```js
  let score = val ? val : 0     // ✗ avoid
  let score = val || 0          // ✓ ok
  ```

  Airbnb 同

  [15.7](https://airbnb.io/javascript/#comparison--unneeded-ternary) Avoid unneeded ternary statements. eslint: [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary.html)

  ```
  // bad
  const foo = a ? a : b;
  const bar = c ? true : false;
  const baz = c ? false : true;
  
  // good
  const foo = a || b;
  const bar = !!c;
  const baz = !c;
  ```

- ⭕️

  standard **`return`，`throw`，`continue` 和 `break` 后不要再跟代码**。

  eslint: [`no-unreachable`](http://eslint.org/docs/rules/no-unreachable)

  ```js
  function doSomething () {
    return true
    console.log('never called')     // ✗ avoid
  }
  ```

  Airbnb 无

- ⭕️

  standard **`finally` 代码块中不要再改变程序执行流程**。

  eslint: [`no-unsafe-finally`](http://eslint.org/docs/rules/no-unsafe-finally)

  ```js
  try {
    // ...
  } catch (e) {
    // ...
  } finally {
    return 42     // ✗ avoid
  }
  ```

  Airbnb 无

- ⭕️

  standard **关系运算符的左值不要做取反操作**。

  eslint: [`no-unsafe-negation`](http://eslint.org/docs/rules/no-unsafe-negation)

  ```js
  if (!key in obj) {}       // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **避免不必要的 `.call()` 和 `.apply()`**。

  eslint: [`no-useless-call`](http://eslint.org/docs/rules/no-useless-call)

  ```js
  sum.call(null, 1, 2, 3)   // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **避免使用不必要的计算值作对象属性**。

  eslint: [`no-useless-computed-key`](http://eslint.org/docs/rules/no-useless-computed-key)

  ```js
  const user = { ['name']: 'John Doe' }   // ✗ avoid
  const user = { name: 'John Doe' }       // ✓ ok
  ```

  Airbnb 无

- ✅

  standard **禁止多余的构造器**。

  eslint: [`no-useless-constructor`](http://eslint.org/docs/rules/no-useless-constructor)

  ```js
  class Car {
    constructor () {      // ✗ avoid
    }
  }
  ```

  Airbnb 表述更全

  [9.5](https://airbnb.io/javascript/#constructors--no-useless) Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary. eslint: [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)

  ```
  // bad
  class Jedi {
    constructor() {}
  
    getName() {
      return this.name;
    }
  }
  
  // bad
  class Rey extends Jedi {
    constructor(...args) {
      super(...args);
    }
  }
  
  // good
  class Rey extends Jedi {
    constructor(...args) {
      super(...args);
      this.name = 'Rey';
    }
  }
  ```

- ✅

  standard **禁止不必要的转义**。

  eslint: [`no-useless-escape`](http://eslint.org/docs/rules/no-useless-escape)

  ```js
  let message = 'Hell\o'  // ✗ avoid
  ```

  Airbnb 同

  [6.5](https://airbnb.io/javascript/#strings--escaping) Do not unnecessarily escape characters in strings. eslint: [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

  > Why? Backslashes harm readability, thus they should only be present when necessary.

  ```
  // bad
  const foo = '\'this\' \i\s \"quoted\"';
  
  // good
  const foo = '\'this\' is "quoted"';
  const foo = `my name is '${name}'`;
  ```

- ⭕️

  standard **import, export 和解构操作中，禁止赋值到同名变量**。

  eslint: [`no-useless-rename`](http://eslint.org/docs/rules/no-useless-rename)

  ```js
  import { config as config } from './config'     // ✗ avoid
  import { config } from './config'               // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **属性前面不要加空格**。

  eslint: [`no-whitespace-before-property`](http://eslint.org/docs/rules/no-whitespace-before-property)

  ```js
  user .name      // ✗ avoid
  user.name       // ✓ ok
  ```

  Airbnb 表述不同

  [19.6](https://airbnb.io/javascript/#whitespace--chains) Use indentation when making long method chains (more than 2 method chains). Use a leading dot, which emphasizes that the line is a method call, not a new statement. eslint: [`newline-per-chained-call`](https://eslint.org/docs/rules/newline-per-chained-call) [`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property)

  ```
  // bad
  $('#items').find('.selected').highlight().end().find('.open').updateCount();
  
  // bad
  $('#items').
    find('.selected').
      highlight().
      end().
    find('.open').
      updateCount();
  
  // good
  $('#items')
    .find('.selected')
      .highlight()
      .end()
    .find('.open')
      .updateCount();
  
  // bad
  const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').classed('led', true)
      .attr('width', (radius + margin) * 2).append('svg:g')
      .attr('transform', `translate(${radius + margin},${radius + margin})`)
      .call(tron.led);
  
  // good
  const leds = stage.selectAll('.led')
      .data(data)
    .enter().append('svg:svg')
      .classed('led', true)
      .attr('width', (radius + margin) * 2)
    .append('svg:g')
      .attr('transform', `translate(${radius + margin},${radius + margin})`)
      .call(tron.led);
  
  // good
  const leds = stage.selectAll('.led').data(data);
  ```

- ⭕️

  standard **禁止使用 `with`**。

  eslint: [`no-with`](http://eslint.org/docs/rules/no-with)

  ```js
  with (val) {...}    // ✗ avoid
  ```

  Airbnb 无

- ⭕️

  standard **对象属性换行时注意统一代码风格**。

  eslint: [`object-property-newline`](http://eslint.org/docs/rules/object-property-newline)

  ```js
  const user = {
    name: 'Jane Doe', age: 30,
    username: 'jdoe86'            // ✗ avoid
  }
  
  const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' }    // ✓ ok
  
  const user = {
    name: 'Jane Doe',
    age: 30,
    username: 'jdoe86'
  }                                                                 // ✓ ok
  ```

  Airbnb 无

- ✅

  standard **代码块中避免多余留白**。

  eslint: [`padded-blocks`](http://eslint.org/docs/rules/padded-blocks)

  ```js
  if (user) {
                              // ✗ avoid
    const name = getName()
  
  }
  
  if (user) {
    const name = getName()    // ✓ ok
  }
  ```

  Airbnb 同

  [19.8](https://airbnb.io/javascript/#whitespace--padded-blocks) Do not pad your blocks with blank lines. eslint: [`padded-blocks`](https://eslint.org/docs/rules/padded-blocks.html) jscs: [`disallowPaddingNewlinesInBlocks`](http://jscs.info/rule/disallowPaddingNewlinesInBlocks)

  ```
  // bad
  function bar() {
  
    console.log(foo);
  
  }
  
  // bad
  if (baz) {
  
    console.log(qux);
  } else {
    console.log(foo);
  
  }
  
  // bad
  class Foo {
  
    constructor(bar) {
      this.bar = bar;
    }
  }
  
  // good
  function bar() {
    console.log(foo);
  }
  
  // good
  if (baz) {
    console.log(qux);
  } else {
    console.log(foo);
  }
  ```

- ⭕️

  standard **展开运算符与它的表达式间不要留空白**。

  eslint: [`rest-spread-spacing`](http://eslint.org/docs/rules/rest-spread-spacing)

  ```js
  fn(... args)    // ✗ avoid
  fn(...args)     // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **遇到分号时空格要后留前不留**。

  eslint: [`semi-spacing`](http://eslint.org/docs/rules/semi-spacing)

  ```js
  for (let i = 0 ;i < items.length ;i++) {...}    // ✗ avoid
  for (let i = 0; i < items.length; i++) {...}    // ✓ ok
  ```

  Airbnb 无

- ✅

  standard **代码块首留空格**。

  eslint: [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks)

  ```js
  if (admin){...}     // ✗ avoid
  if (admin) {...}    // ✓ ok
  ```

  Airbnb 更全一些

  [7.11](https://airbnb.io/javascript/#functions--signature-spacing) Spacing in a function signature. eslint: [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren) [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)

  > Why? Consistency is good, and you shouldn’t have to add or remove a space when adding or removing a name.

  ```
  // bad
  const f = function(){};
  const g = function (){};
  const h = function() {};
  
  // good
  const x = function () {};
  const y = function a() {};
  ```

  [19.2](https://airbnb.io/javascript/#whitespace--before-blocks) Place 1 space before the leading brace. eslint: [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks.html) jscs: [`requireSpaceBeforeBlockStatements`](http://jscs.info/rule/requireSpaceBeforeBlockStatements)

  ```
  // bad
  function test(){
    console.log('test');
  }
  
  // good
  function test() {
    console.log('test');
  }
  
  // bad
  dog.set('attr',{
    age: '1 year',
    breed: 'Bernese Mountain Dog',
  });
  
  // good
  dog.set('attr', {
    age: '1 year',
    breed: 'Bernese Mountain Dog',
  });
  ```

- ✅

  standard **圆括号间不留空格**。

  eslint: [`space-in-parens`](http://eslint.org/docs/rules/space-in-parens)

  ```js
  getName( name )     // ✗ avoid
  getName(name)       // ✓ ok
  ```

  Airbnb 同

  [19.9](https://airbnb.io/javascript/#whitespace--in-parens) Do not add spaces inside parentheses. eslint: [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens.html) jscs: [`disallowSpacesInsideParentheses`](http://jscs.info/rule/disallowSpacesInsideParentheses)

  ```
  // bad
  function bar( foo ) {
    return foo;
  }
  
  // good
  function bar(foo) {
    return foo;
  }
  
  // bad
  if ( foo ) {
    console.log(foo);
  }
  
  // good
  if (foo) {
    console.log(foo);
  }
  ```

- ⭕️

  standard **一元运算符后面跟一个空格**。

  eslint: [`space-unary-ops`](http://eslint.org/docs/rules/space-unary-ops)

  ```js
  typeof!admin        // ✗ avoid
  typeof !admin        // ✓ ok
  ```

  Airbnb 无

- ✅

  standard **注释首尾留空格**。

  eslint: [`spaced-comment`](http://eslint.org/docs/rules/spaced-comment)

  ```js
  //comment           // ✗ avoid
  // comment          // ✓ ok
  
  /*comment*/         // ✗ avoid
  /* comment */       // ✓ ok
  ```

  Airbnb 表述不同，无 `/* comment */` 格式说明

  [18.3](https://airbnb.io/javascript/#comments--spaces) Start all comments with a space to make it easier to read. eslint: [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)

  ```
  // bad
  //is current tab
  const active = true;
  
  // good
  // is current tab
  const active = true;
  
  // bad
  /**
   *make() returns a new element
   *based on the passed-in tag name
   */
  function make(tag) {
  
    // ...
  
    return element;
  }
  
  // good
  /**
   * make() returns a new element
   * based on the passed-in tag name
   */
  function make(tag) {
  
    // ...
  
    return element;
  }
  ```

- ⭕️

  standard **模板字符串中变量前后不加空格**。

  eslint: [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing)

  ```js
  const message = `Hello, ${ name }`    // ✗ avoid
  const message = `Hello, ${name}`      // ✓ ok
  ```

  Airbnb 表述不同

  [6.3](https://airbnb.io/javascript/#es6-template-literals) When programmatically building up strings, use template strings instead of concatenation. eslint: [`prefer-template`](https://eslint.org/docs/rules/prefer-template.html) [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing) jscs: [`requireTemplateStrings`](http://jscs.info/rule/requireTemplateStrings)

  > Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

  ```
  // bad
  function sayHi(name) {
    return 'How are you, ' + name + '?';
  }
  
  // bad
  function sayHi(name) {
    return ['How are you, ', name, '?'].join();
  }
  
  // bad
  function sayHi(name) {
    return `How are you, ${ name }?`;
  }
  
  // good
  function sayHi(name) {
    return `How are you, ${name}?`;
  }
  ```

- ⭕️

  standard **检查 `NaN` 的正确姿势是使用 `isNaN()`**。

  eslint: [`use-isnan`](http://eslint.org/docs/rules/use-isnan)

  ```js
  if (price === NaN) { }      // ✗ avoid
  if (isNaN(price)) { }       // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **用合法的字符串跟 `typeof` 进行比较操作**。

  eslint: [`valid-typeof`](http://eslint.org/docs/rules/valid-typeof)

  ```js
  typeof name === 'undefimed'     // ✗ avoid
  typeof name === 'undefined'     // ✓ ok
  ```

  Airbnb 无

- ✅

  standard **自调用匿名函数 (IIFEs) 使用括号包裹**。

  eslint: [`wrap-iife`](http://eslint.org/docs/rules/wrap-iife)

  ```js
  const getName = function () { }()     // ✗ avoid
  
  const getName = (function () { }())   // ✓ ok
  const getName = (function () { })()   // ✓ ok
  ```

  Airbnb 同

  [7.2](https://airbnb.io/javascript/#functions--iife) Wrap immediately invoked function expressions in parentheses. eslint: [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife.html) jscs: [`requireParenthesesAroundIIFE`](http://jscs.info/rule/requireParenthesesAroundIIFE)

  > Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, you almost never need an IIFE.

  ```
  // immediately-invoked function expression (IIFE)
  (function () {
    console.log('Welcome to the Internet. Please follow me.');
  }());
  ```

- ⭕️

  standard **`yield \*` 中的 `\*` 前后都要有空格**。

  eslint: [`yield-star-spacing`](http://eslint.org/docs/rules/yield-star-spacing)

  ```js
  yield* increment()    // ✗ avoid
  yield * increment()   // ✓ ok
  ```

  Airbnb 无

- ⭕️

  standard **请书写优雅的条件语句（avoid Yoda conditions）**。

  eslint: [`yoda`](http://eslint.org/docs/rules/yoda)

  ```js
  if (42 === age) { }    // ✗ avoid
  if (age === 42) { }    // ✓ ok
  ```

  Airbnb 无

## [关于分号](https://standardjs.com/rules-zhcn.html#关于分号)

- ⭕️

  standard 不要使用分号。 (参见：[1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)，[2](http://inimino.org/~inimino/blog/javascript_semicolons)，[3](https://www.youtube.com/watch?v=gsfbh17Ax9I))

  eslint: [`semi`](http://eslint.org/docs/rules/semi)

  ```js
  window.alert('hi')   // ✓ ok
  window.alert('hi');  // ✗ avoid
  ```

  Airbnb 相反

  [21.1](https://airbnb.io/javascript/#semicolons--required) **Yup.** eslint: [`semi`](https://eslint.org/docs/rules/semi.html) jscs: [`requireSemicolons`](http://jscs.info/rule/requireSemicolons)

  > Why? When JavaScript encounters a line break without a semicolon, it uses a set of rules called [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion) to determine whether or not it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains a few eccentric behaviors, though, and your code will break if JavaScript misinterprets your line break. These rules will become more complicated as new features become a part of JavaScript. Explicitly terminating your statements and configuring your linter to catch missing semicolons will help prevent you from encountering issues.

  ```
  // bad - raises exception
  const luke = {}
  const leia = {}
  [luke, leia].forEach(jedi => jedi.father = 'vader')
  
  // bad - raises exception
  const reaction = "No! That's impossible!"
  (async function meanwhileOnTheFalcon() {
    // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
    // ...
  }())
  
  // bad - returns `undefined` instead of the value on the next line - always happens when `return` is on a line by itself because of ASI!
  function foo() {
    return
      'search your feelings, you know it to be foo'
  }
  
  // good
  const luke = {};
  const leia = {};
  [luke, leia].forEach((jedi) => {
    jedi.father = 'vader';
  });
  
  // good
  const reaction = "No! That's impossible!";
  (async function meanwhileOnTheFalcon() {
    // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
    // ...
  }());
  
  // good
  function foo() {
    return 'search your feelings, you know it to be foo';
  }
  ```

- ⭕️

  standard 不要使用 `(`, `[`, or ``` 等作为一行的开始。在没有分号的情况下代码压缩后会导致报错，而坚持这一规范则可避免出错。

  eslint: [`no-unexpected-multiline`](http://eslint.org/docs/rules/no-unexpected-multiline)
  
  ```js
  // ✓ ok
  ;(function () {
    window.alert('ok')
  }())
  
  // ✗ avoid
  (function () {
    window.alert('ok')
}())
  ```

  ```js
  // ✓ ok
  ;[1, 2, 3].forEach(bar)
  
  // ✗ avoid
  [1, 2, 3].forEach(bar)
  ```

  ```js
// ✓ ok
  ;`hello`.indexOf('o')
  
  // ✗ avoid
  `hello`.indexOf('o')
  ```
  
  备注：上面的写法只能说聪明过头了。

  相比更加可读易懂的代码，那些看似投巧的写法是不可取的。

  譬如：

  ```js
;[1, 2, 3].forEach(bar)
  ```

  建议的写法是：
  
  ```js
var nums = [1, 2, 3]
  nums.forEach(bar)
  ```
  
  Airbnb 无
```
## [拓展阅读](https://standardjs.com/rules-zhcn.html#拓展阅读)

- standard [An Open Letter to JavaScript Leaders Regarding Semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)
- standard [JavaScript Semicolon Insertion – Everything you need to know](http://inimino.org/~inimino/blog/javascript_semicolons)

##### [一个值得观看的视频：](https://standardjs.com/rules-zhcn.html#一个值得观看的视频：)

- standard [JavaScript 中的分号多余吗？- standard YouTube](https://www.youtube.com/watch?v=gsfbh17Ax9I)

当前主流的代码压缩方案都是基于词法（AST-based）进行的，所以在处理无分号的代码时完全没有压力（何况 JavaScript 中分号本来就不是强制的）。

##### [一段摘抄自 ](https://standardjs.com/rules-zhcn.html#一段摘抄自-an-open-letter-to-javascript-leaders-regarding-semicolons-这篇文章的内容：)*["An Open Letter to JavaScript Leaders Regarding Semicolons"](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)* 这篇文章的内容：

> [自动化插入分号的做法]是安全可依赖的，而且其产出的代码能够在所有浏览器里很好地运行。 Closure compiler, yuicompressor, packer 还有 jsmin 都能正确地对这样的代码进行压缩处理。并没有任何性能相关的问题。
>
> 不得不说，Javascript 社区里的大牛们一直是错误的，并不能教给你最佳实践。真是让人忧伤啊。 我建议先弄清楚 JS 是怎样断句的（还有就是哪些地方看起来断了其实并没有），明白了这个后就可以随心写出漂亮的代码了。
>
> 一般来说， `\n` 表示语句结束，除非： 1. 该语句有未闭合的括号， 数组字面量， 对象字面量 或者其他不能正常结束一条语句的情况（譬如，以 `.` 或 `,` 结尾） 2. 该语句是 `--` 或者 `++` （它会将后面的内容进行自增或减） 3. 该语句是 `for()`，`while()`，`do`，`if()` 或者 `else` 并且没有 `{` 4. 下一行以 `[`，`(`，`+`，`*`，`/`，`-`，`,`，`.` 或者其他只会单独出现在两块内容间的二元操作符。
>
> 第一条很容易理解。即使在 JSLint 中，也允许 JSON，构造器的括号中，以及使用 `var` 配合 `,` 结尾来声明多个变量等这些情中包含 `\n`。
>
> 第二条有点奇葩。 我还想不出谁会（除了这里用作讨论外）写出 `i\n++\nj` 这样的代码来，不过，顺便说一下，这种写法最后解析的结果是 `i; ++j`，而不是 `i++; j`。
>
> 第三条也容易理解。 `if (x)\ny()` 等价于 `if (x) { y() }`。解释器会向下寻找到代码块或一条语句为止。
>
> `;` 是条合法的 JavaScript 语句。所以 `if(x);` 等价于 `if(x){}`，表示 “如果 x 为真，什么也不做。” 这种写法在循环里面可以看到，就是当条件判断与条件更新是同一个方法的时候。 不常见，但也不至于没听说过吧。
>
> 第四条就是常见的 “看，说过要加分号！” 的情形。但这些情况可以通过在语句前面加上分号来解决，如果你确定该语句跟前面的没关系的话。举个例子，假如你想这样：
>
> ```js
> foo();
> [1,2,3].forEach(bar);
> ```

>
> 那么完全可以这样来写：
>
> ```js
> foo()
> ;[1,2,3].forEach(bar)
> ```

>
> 后者的好处是分号比较瞩目，一旦习惯后便再也不会看到以 `(` 和 `[` 开头又不带分号的语句了。
```





