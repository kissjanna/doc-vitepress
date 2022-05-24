# 筛选结果

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

- ✅

  standard **不要使用 `eval()`**。

  eslint: [`no-eval`](http://eslint.org/docs/rules/no-eval)

  ```js
  eval( "var result = user." + propName ) // ✗ avoid
  var result = user[propName]             // ✓ ok
  ```

  Airbnb 同

  [6.4](https://airbnb.io/javascript/#strings--eval) Never use `eval()` on a string, it opens too many vulnerabilities. eslint: [`no-eval`](https://eslint.org/docs/rules/no-eval)

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

- 