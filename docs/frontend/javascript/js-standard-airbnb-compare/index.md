## Table of Contents

1. [Types](https://airbnb.io/javascript/#types)
2. [References](https://airbnb.io/javascript/#references)
3. [Objects](https://airbnb.io/javascript/#objects)
4. [Arrays](https://airbnb.io/javascript/#arrays)
5. [Destructuring](https://airbnb.io/javascript/#destructuring)
6. [Strings](https://airbnb.io/javascript/#strings)
7. [Functions](https://airbnb.io/javascript/#functions)
8. [Arrow Functions](https://airbnb.io/javascript/#arrow-functions)
9. [Classes & Constructors](https://airbnb.io/javascript/#classes--constructors)
10. [Modules](https://airbnb.io/javascript/#modules)
11. [Iterators and Generators](https://airbnb.io/javascript/#iterators-and-generators)
12. [Properties](https://airbnb.io/javascript/#properties)
13. [Variables](https://airbnb.io/javascript/#variables)
14. [Hoisting](https://airbnb.io/javascript/#hoisting)
15. [Comparison Operators & Equality](https://airbnb.io/javascript/#comparison-operators--equality)
16. [Blocks](https://airbnb.io/javascript/#blocks)
17. [Control Statements](https://airbnb.io/javascript/#control-statements)
18. [Comments](https://airbnb.io/javascript/#comments)
19. [Whitespace](https://airbnb.io/javascript/#whitespace)
20. [Commas](https://airbnb.io/javascript/#commas)
21. [Semicolons](https://airbnb.io/javascript/#semicolons)
22. [Type Casting & Coercion](https://airbnb.io/javascript/#type-casting--coercion)
23. [Naming Conventions](https://airbnb.io/javascript/#naming-conventions)
24. [Accessors](https://airbnb.io/javascript/#accessors)
25. [Events](https://airbnb.io/javascript/#events)
26. [jQuery](https://airbnb.io/javascript/#jquery)
27. [ECMAScript 5 Compatibility](https://airbnb.io/javascript/#ecmascript-5-compatibility)
28. [ECMAScript 6+ (ES 2015+) Styles](https://airbnb.io/javascript/#ecmascript-6-es-2015-styles)
29. [Standard Library](https://airbnb.io/javascript/#standard-library)
30. [Testing](https://airbnb.io/javascript/#testing)
31. [Performance](https://airbnb.io/javascript/#performance)
32. [Resources](https://airbnb.io/javascript/#resources)
33. [In the Wild](https://airbnb.io/javascript/#in-the-wild)
34. [Translation](https://airbnb.io/javascript/#translation)
35. [The JavaScript Style Guide Guide](https://airbnb.io/javascript/#the-javascript-style-guide-guide)
36. [Chat With Us About JavaScript](https://airbnb.io/javascript/#chat-with-us-about-javascript)
37. [Contributors](https://airbnb.io/javascript/#contributors)
38. [License](https://airbnb.io/javascript/#license)
39. [Amendments](https://airbnb.io/javascript/#amendments)

## Types



- [1.1](https://airbnb.io/javascript/#types--primitives) **Primitives**: When you access a primitive type you work directly on its value.

  - `string`
  - `number`
  - `boolean`
  - `null`
  - `undefined`
  - `symbol`

  ```
  const foo = 1;
  let bar = foo;
  
  bar = 9;
  
  console.log(foo, bar); // => 1, 9
  ```

  - Symbols cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that don’t support them natively.

## References



- [2.1](https://airbnb.io/javascript/#references--prefer-const) Use `const` for all of your references; avoid using `var`. eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign.html)

  ⭕️

  > Why? This ensures that you can’t reassign your references, which can lead to bugs and difficult to comprehend code.

  ```
  // bad
  var a = 1;
  var b = 2;
  
  // good
  const a = 1;
  const b = 2;
  ```
  



- [2.2](https://airbnb.io/javascript/#references--disallow-var) If you must reassign references, use `let` instead of `var`. eslint: [`no-var`](https://eslint.org/docs/rules/no-var.html) jscs: [`disallowVar`](http://jscs.info/rule/disallowVar)

  > Why? `let` is block-scoped rather than function-scoped like `var`.

  ```
  // bad
  var count = 1;
  if (true) {
    count += 1;
  }
  
  // good, use the let.
  let count = 1;
  if (true) {
    count += 1;
  }
  ```



- [2.3](https://airbnb.io/javascript/#references--block-scope) Note that both `let` and `const` are block-scoped.

  ```
  // const and let only exist in the blocks they are defined in.
  {
    let a = 1;
    const b = 1;
  }
  console.log(a); // ReferenceError
  console.log(b); // ReferenceError
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Objects



- [3.1](https://airbnb.io/javascript/#objects--no-new) Use the literal syntax for object creation. eslint: [`no-new-object`](https://eslint.org/docs/rules/no-new-object.html)

  ✅
  
  ```
  // bad
  const item = new Object();
  
  // good
  const item = {};
  ```



- [3.2](https://airbnb.io/javascript/#es6-computed-properties) Use computed property names when creating objects with dynamic property names.

  > Why? They allow you to define all the properties of an object in one place.

  ```
  function getKey(k) {
    return `a key named ${k}`;
  }
  
  // bad
  const obj = {
    id: 5,
    name: 'San Francisco',
  };
  obj[getKey('enabled')] = true;
  
  // good
  const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
  };
  ```



- [3.3](https://airbnb.io/javascript/#es6-object-shorthand) Use object method shorthand. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html) jscs: [`requireEnhancedObjectLiterals`](http://jscs.info/rule/requireEnhancedObjectLiterals)

  ```
  // bad
  const atom = {
    value: 1,
  
    addValue: function (value) {
      return atom.value + value;
    },
  };
  
  // good
  const atom = {
    value: 1,
  
    addValue(value) {
      return atom.value + value;
    },
  };
  ```



- [3.4](https://airbnb.io/javascript/#es6-object-concise) Use property value shorthand. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html) jscs: [`requireEnhancedObjectLiterals`](http://jscs.info/rule/requireEnhancedObjectLiterals)

  > Why? It is shorter to write and descriptive.

  ```
  const lukeSkywalker = 'Luke Skywalker';
  
  // bad
  const obj = {
    lukeSkywalker: lukeSkywalker,
  };
  
  // good
  const obj = {
    lukeSkywalker,
  };
  ```



- [3.5](https://airbnb.io/javascript/#objects--grouped-shorthand) Group your shorthand properties at the beginning of your object declaration.

  > Why? It’s easier to tell which properties are using the shorthand.

  ```
  const anakinSkywalker = 'Anakin Skywalker';
  const lukeSkywalker = 'Luke Skywalker';
  
  // bad
  const obj = {
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
  };
  
  // good
  const obj = {
    lukeSkywalker,
    anakinSkywalker,
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    episodeThree: 3,
    mayTheFourth: 4,
  };
  ```



- [3.6](https://airbnb.io/javascript/#objects--quoted-props) Only quote properties that are invalid identifiers. eslint: [`quote-props`](https://eslint.org/docs/rules/quote-props.html) jscs: [`disallowQuotedKeysInObjects`](http://jscs.info/rule/disallowQuotedKeysInObjects)

  > Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

  ```
  // bad
  const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
  };
  
  // good
  const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
  };
  ```



- [3.7](https://airbnb.io/javascript/#objects--prototype-builtins) Do not call `Object.prototype` methods directly, such as `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf`.

  > Why? These methods may be shadowed by properties on the object in question - consider `{ hasOwnProperty: false }` - or, the object may be a null object (`Object.create(null)`).

  ```
  // bad
  console.log(object.hasOwnProperty(key));
  
  // good
  console.log(Object.prototype.hasOwnProperty.call(object, key));
  
  // best
  const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
  /* or */
  import has from 'has'; // https://www.npmjs.com/package/has
  // ...
  console.log(has.call(object, key));
  ```



- [3.8](https://airbnb.io/javascript/#objects--rest-spread) Prefer the object spread operator over [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.

  ```
  // very bad
  const original = { a: 1, b: 2 };
  const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
  delete copy.a; // so does this
  
  // bad
  const original = { a: 1, b: 2 };
  const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }
  
  // good
  const original = { a: 1, b: 2 };
  const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }
  
  const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Arrays



- [4.1](https://airbnb.io/javascript/#arrays--literals) Use the literal syntax for array creation. eslint: [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor.html)

  ✅

  ```
  // bad
  const items = new Array();
  
  // good
  const items = [];
  ```



- [4.2](https://airbnb.io/javascript/#arrays--push) Use [Array#push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) instead of direct assignment to add items to an array.

  ```
  const someStack = [];
  
  // bad
  someStack[someStack.length] = 'abracadabra';
  
  // good
  someStack.push('abracadabra');
  ```



- [4.3](https://airbnb.io/javascript/#es6-array-spreads) Use array spreads `...` to copy arrays.

  ```
  // bad
  const len = items.length;
  const itemsCopy = [];
  let i;
  
  for (i = 0; i < len; i += 1) {
    itemsCopy[i] = items[i];
  }
  
  // good
  const itemsCopy = [...items];
  ```



- [4.4](https://airbnb.io/javascript/#arrays--from) To convert an array-like object to an array, use spreads `...` instead of [Array.from](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

  ```
  const foo = document.querySelectorAll('.foo');
  
  // good
  const nodes = Array.from(foo);
  
  // best
  const nodes = [...foo];
  ```



- [4.5](https://airbnb.io/javascript/#arrays--mapping) Use [Array.from](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) instead of spread `...` for mapping over iterables, because it avoids creating an intermediate array.

  ```
  // bad
  const baz = [...foo].map(bar);
  
  // good
  const baz = Array.from(foo, bar);
  ```



- [4.6](https://airbnb.io/javascript/#arrays--callback-return) Use return statements in array method callbacks. It’s ok to omit the return if the function body consists of a single statement returning an expression without side effects, following [8.2](https://airbnb.io/javascript/#arrows--implicit-return). eslint: [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

  ```
  // good
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });
  
  // good
  [1, 2, 3].map(x => x + 1);
  
  // bad - no returned value means `acc` becomes undefined after the first iteration
  [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    acc[index] = flatten;
  });
  
  // good
  [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    acc[index] = flatten;
    return flatten;
  });
  
  // bad
  inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    } else {
      return false;
    }
  });
  
  // good
  inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    }
  
    return false;
  });
  ```



- [4.7](https://airbnb.io/javascript/#arrays--bracket-newline) Use line breaks after open and before close array brackets if an array has multiple lines

  ```
  // bad
  const arr = [
    [0, 1], [2, 3], [4, 5],
  ];
  
  const objectInArray = [{
    id: 1,
  }, {
    id: 2,
  }];
  
  const numberInArray = [
    1, 2,
  ];
  
  // good
  const arr = [[0, 1], [2, 3], [4, 5]];
  
  const objectInArray = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  
  const numberInArray = [
    1,
    2,
  ];
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Destructuring



- [5.1](https://airbnb.io/javascript/#destructuring--object) Use object destructuring when accessing and using multiple properties of an object. eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring) jscs: [`requireObjectDestructuring`](http://jscs.info/rule/requireObjectDestructuring)

  > Why? Destructuring saves you from creating temporary references for those properties.

  ```
  // bad
  function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
  
    return `${firstName} ${lastName}`;
  }
  
  // good
  function getFullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
  }
  
  // best
  function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }
  ```



- [5.2](https://airbnb.io/javascript/#destructuring--array) Use array destructuring. eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring) jscs: [`requireArrayDestructuring`](http://jscs.info/rule/requireArrayDestructuring)

  ```
  const arr = [1, 2, 3, 4];
  
  // bad
  const first = arr[0];
  const second = arr[1];
  
  // good
  const [first, second] = arr;
  ```



- [5.3](https://airbnb.io/javascript/#destructuring--object-over-array) Use object destructuring for multiple return values, not array destructuring. jscs: [`disallowArrayDestructuringReturn`](http://jscs.info/rule/disallowArrayDestructuringReturn)

  > Why? You can add new properties over time or change the order of things without breaking call sites.

  ```
  // bad
  function processInput(input) {
    // then a miracle occurs
    return [left, right, top, bottom];
  }
  
  // the caller needs to think about the order of return data
  const [left, __, top] = processInput(input);
  
  // good
  function processInput(input) {
    // then a miracle occurs
    return { left, right, top, bottom };
  }
  
  // the caller selects only the data they need
  const { left, top } = processInput(input);
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Strings



- [6.1](https://airbnb.io/javascript/#strings--quotes) Use single quotes `''` for strings. eslint: [`quotes`](https://eslint.org/docs/rules/quotes.html) jscs: [`validateQuoteMarks`](http://jscs.info/rule/validateQuoteMarks)

  ✅

  ```
  // bad
  const name = "Capt. Janeway";
  
  // bad - template literals should contain interpolation or newlines
  const name = `Capt. Janeway`;
  
  // good
  const name = 'Capt. Janeway';
  ```



- [6.2](https://airbnb.io/javascript/#strings--line-length) Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.

  > Why? Broken strings are painful to work with and make code less searchable.

  ```
  // bad
  const errorMessage = 'This is a super long error that was thrown because \
  of Batman. When you stop to think about how Batman had anything to do \
  with this, you would get nowhere \
  fast.';
  
  // bad
  const errorMessage = 'This is a super long error that was thrown because ' +
    'of Batman. When you stop to think about how Batman had anything to do ' +
    'with this, you would get nowhere fast.';
  
  // good
  const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
  ```



- [6.3](https://airbnb.io/javascript/#es6-template-literals) When programmatically building up strings, use template strings instead of concatenation. eslint: [`prefer-template`](https://eslint.org/docs/rules/prefer-template.html) [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing) jscs: [`requireTemplateStrings`](http://jscs.info/rule/requireTemplateStrings)

  ⭕️

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
  
  standard **模板字符串中变量前后不加空格**。
  
  eslint: [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing)
  
  ```js
  const message = `Hello, ${ name }`    // ✗ avoid
  const message = `Hello, ${name}`      // ✓ ok
  ```
  
  Airbnb



- [6.4](https://airbnb.io/javascript/#strings--eval) Never use `eval()` on a string, it opens too many vulnerabilities. eslint: [`no-eval`](https://eslint.org/docs/rules/no-eval)

  ✅



- [6.5](https://airbnb.io/javascript/#strings--escaping) Do not unnecessarily escape characters in strings. eslint: [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

  ✅

  > Why? Backslashes harm readability, thus they should only be present when necessary.
  
  ```
  // bad
  const foo = '\'this\' \i\s \"quoted\"';
  
  // good
  const foo = '\'this\' is "quoted"';
  const foo = `my name is '${name}'`;
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Functions



- [7.1](https://airbnb.io/javascript/#functions--declarations) Use named function expressions instead of function declarations. eslint: [`func-style`](https://eslint.org/docs/rules/func-style) jscs: [`disallowFunctionDeclarations`](http://jscs.info/rule/disallowFunctionDeclarations)

  > Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! Don’t forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable (which is often the case in modern browsers or when using compilers such as Babel). This eliminates any assumptions made about the Error’s call stack. ([Discussion](https://github.com/airbnb/javascript/issues/794))

  ```
  // bad
  function foo() {
    // ...
  }
  
  // bad
  const foo = function () {
    // ...
  };
  
  // good
  // lexical name distinguished from the variable-referenced invocation(s)
  const short = function longUniqueMoreDescriptiveLexicalFoo() {
    // ...
  };
  ```



- [7.2](https://airbnb.io/javascript/#functions--iife) Wrap immediately invoked function expressions in parentheses. eslint: [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife.html) jscs: [`requireParenthesesAroundIIFE`](http://jscs.info/rule/requireParenthesesAroundIIFE)

  ✅

  > Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, you almost never need an IIFE.
  
  ```
  // immediately-invoked function expression (IIFE)
  (function () {
    console.log('Welcome to the Internet. Please follow me.');
  }());
  ```



- [7.3](https://airbnb.io/javascript/#functions--in-blocks) Never declare a function in a non-function block (`if`, `while`, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears. eslint: [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func.html)



- [7.4](https://airbnb.io/javascript/#functions--note-on-blocks) **Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement.

  ```
  // bad
  if (currentUser) {
    function test() {
      console.log('Nope.');
    }
  }
  
  // good
  let test;
  if (currentUser) {
    test = () => {
      console.log('Yup.');
    };
  }
  ```



- [7.5](https://airbnb.io/javascript/#functions--arguments-shadow) Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.

  ```
  // bad
  function foo(name, options, arguments) {
    // ...
  }
  
  // good
  function foo(name, options, args) {
    // ...
  }
  ```



- [7.6](https://airbnb.io/javascript/#es6-rest) Never use `arguments`, opt to use rest syntax `...` instead. eslint: [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)

  > Why? `...` is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like `arguments`.

  ```
  // bad
  function concatenateAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
  }
  
  // good
  function concatenateAll(...args) {
    return args.join('');
  }
  ```



- [7.7](https://airbnb.io/javascript/#es6-default-parameters) Use default parameter syntax rather than mutating function arguments.

  ```
  // really bad
  function handleThings(opts) {
    // No! We shouldn’t mutate function arguments.
    // Double bad: if opts is falsy it'll be set to an object which may
    // be what you want but it can introduce subtle bugs.
    opts = opts || {};
    // ...
  }
  
  // still bad
  function handleThings(opts) {
    if (opts === void 0) {
      opts = {};
    }
    // ...
  }
  
  // good
  function handleThings(opts = {}) {
    // ...
  }
  ```



- [7.8](https://airbnb.io/javascript/#functions--default-side-effects) Avoid side effects with default parameters.

  > Why? They are confusing to reason about.

  ```
  var b = 1;
  // bad
  function count(a = b++) {
    console.log(a);
  }
  count();  // 1
  count();  // 2
  count(3); // 3
  count();  // 3
  ```



- [7.9](https://airbnb.io/javascript/#functions--defaults-last) Always put default parameters last.

  ```
  // bad
  function handleThings(opts = {}, name) {
    // ...
  }
  
  // good
  function handleThings(name, opts = {}) {
    // ...
  }
  ```



- [7.10](https://airbnb.io/javascript/#functions--constructor) Never use the Function constructor to create a new function. eslint: [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

  ✅

  > Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities.
  
  ```
  // bad
  var add = new Function('a', 'b', 'return a + b');
  
  // still bad
  var subtract = Function('a', 'b', 'return a - b');
  ```



- [7.11](https://airbnb.io/javascript/#functions--signature-spacing) Spacing in a function signature. eslint: [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren) [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)

  ✅

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



- [7.12](https://airbnb.io/javascript/#functions--mutate-params) Never mutate parameters. eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

  > Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

  ```
  // bad
  function f1(obj) {
    obj.key = 1;
  }
  
  // good
  function f2(obj) {
    const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
  }
  ```



- [7.13](https://airbnb.io/javascript/#functions--reassign-params) Never reassign parameters. eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

  > Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in V8.

  ```
  // bad
  function f1(a) {
    a = 1;
    // ...
  }
  
  function f2(a) {
    if (!a) { a = 1; }
    // ...
  }
  
  // good
  function f3(a) {
    const b = a || 1;
    // ...
  }
  
  function f4(a = 1) {
    // ...
  }
  ```



- [7.14](https://airbnb.io/javascript/#functions--spread-vs-apply) Prefer the use of the spread operator `...` to call variadic functions. eslint: [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)

  > Why? It’s cleaner, you don’t need to supply a context, and you can not easily compose `new` with `apply`.

  ```
  // bad
  const x = [1, 2, 3, 4, 5];
  console.log.apply(console, x);
  
  // good
  const x = [1, 2, 3, 4, 5];
  console.log(...x);
  
  // bad
  new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));
  
  // good
  new Date(...[2016, 8, 5]);
  ```



- [7.15](https://airbnb.io/javascript/#functions--signature-invocation-indentation) Functions with multiline signatures, or invocations, should be indented just like every other multiline list in this guide: with each item on a line by itself, with a trailing comma on the last item. eslint: [`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)

  ```
  // bad
  function foo(bar,
               baz,
               quux) {
    // ...
  }
  
  // good
  function foo(
    bar,
    baz,
    quux,
  ) {
    // ...
  }
  
  // bad
  console.log(foo,
    bar,
    baz);
  
  // good
  console.log(
    foo,
    bar,
    baz,
  );
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Arrow Functions



- [8.1](https://airbnb.io/javascript/#arrows--use-them) When you must use an anonymous function (as when passing an inline callback), use arrow function notation. eslint: [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback.html), [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing.html) jscs: [`requireArrowFunctions`](http://jscs.info/rule/requireArrowFunctions)

  > Why? It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax.

  > Why not? If you have a fairly complicated function, you might move that logic out into its own named function expression.

  ```
  // bad
  [1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
  });
  
  // good
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });
  ```



- [8.2](https://airbnb.io/javascript/#arrows--implicit-return) If the function body consists of a single statement returning an [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) without side effects, omit the braces and use the implicit return. Otherwise, keep the braces and use a `return` statement. eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html), [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style.html) jscs: [`disallowParenthesesAroundArrowParam`](http://jscs.info/rule/disallowParenthesesAroundArrowParam), [`requireShorthandArrowFunctions`](http://jscs.info/rule/requireShorthandArrowFunctions)

  > Why? Syntactic sugar. It reads well when multiple functions are chained together.

  ```
  // bad
  [1, 2, 3].map(number => {
    const nextNumber = number + 1;
    `A string containing the ${nextNumber}.`;
  });
  
  // good
  [1, 2, 3].map(number => `A string containing the ${number}.`);
  
  // good
  [1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
  });
  
  // good
  [1, 2, 3].map((number, index) => ({
    [index]: number,
  }));
  
  // No implicit return with side effects
  function foo(callback) {
    const val = callback();
    if (val === true) {
      // Do something if callback returns true
    }
  }
  
  let bool = false;
  
  // bad
  foo(() => bool = true);
  
  // good
  foo(() => {
    bool = true;
  });
  ```



- [8.3](https://airbnb.io/javascript/#arrows--paren-wrap) In case the expression spans over multiple lines, wrap it in parentheses for better readability.

  > Why? It shows clearly where the function starts and ends.

  ```
  // bad
  ['get', 'post', 'put'].map(httpMethod => Object.prototype.hasOwnProperty.call(
      httpMagicObjectWithAVeryLongName,
      httpMethod,
    )
  );
  
  // good
  ['get', 'post', 'put'].map(httpMethod => (
    Object.prototype.hasOwnProperty.call(
      httpMagicObjectWithAVeryLongName,
      httpMethod,
    )
  ));
  ```



- [8.4](https://airbnb.io/javascript/#arrows--one-arg-parens) If your function takes a single argument and doesn’t use braces, omit the parentheses. Otherwise, always include parentheses around arguments for clarity and consistency. Note: it is also acceptable to always use parentheses, in which case use the [“always” option](https://eslint.org/docs/rules/arrow-parens#always) for eslint or do not include [`disallowParenthesesAroundArrowParam`](http://jscs.info/rule/disallowParenthesesAroundArrowParam) for jscs. eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html) jscs: [`disallowParenthesesAroundArrowParam`](http://jscs.info/rule/disallowParenthesesAroundArrowParam)

  > Why? Less visual clutter.

  ```
  // bad
  [1, 2, 3].map((x) => x * x);
  
  // good
  [1, 2, 3].map(x => x * x);
  
  // good
  [1, 2, 3].map(number => (
    `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
  ));
  
  // bad
  [1, 2, 3].map(x => {
    const y = x + 1;
    return x * y;
  });
  
  // good
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });
  ```



- [8.5](https://airbnb.io/javascript/#arrows--confusing) Avoid confusing arrow function syntax (`=>`) with comparison operators (`<=`, `>=`). eslint: [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)

  ```
  // bad
  const itemHeight = item => item.height > 256 ? item.largeSize : item.smallSize;
  
  // bad
  const itemHeight = (item) => item.height > 256 ? item.largeSize : item.smallSize;
  
  // good
  const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);
  
  // good
  const itemHeight = (item) => {
    const { height, largeSize, smallSize } = item;
    return height > 256 ? largeSize : smallSize;
  };
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Classes & Constructors



- [9.1](https://airbnb.io/javascript/#constructors--use-class) Always use `class`. Avoid manipulating `prototype` directly.

  > Why? `class` syntax is more concise and easier to reason about.

  ```
  // bad
  function Queue(contents = []) {
    this.queue = [...contents];
  }
  Queue.prototype.pop = function () {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  };
  
  // good
  class Queue {
    constructor(contents = []) {
      this.queue = [...contents];
    }
    pop() {
      const value = this.queue[0];
      this.queue.splice(0, 1);
      return value;
    }
  }
  ```



- [9.2](https://airbnb.io/javascript/#constructors--extends) Use `extends` for inheritance.

  > Why? It is a built-in way to inherit prototype functionality without breaking `instanceof`.

  ```
  // bad
  const inherits = require('inherits');
  function PeekableQueue(contents) {
    Queue.apply(this, contents);
  }
  inherits(PeekableQueue, Queue);
  PeekableQueue.prototype.peek = function () {
    return this.queue[0];
  };
  
  // good
  class PeekableQueue extends Queue {
    peek() {
      return this.queue[0];
    }
  }
  ```



- [9.3](https://airbnb.io/javascript/#constructors--chaining) Methods can return `this` to help with method chaining.

  ```
  // bad
  Jedi.prototype.jump = function () {
    this.jumping = true;
    return true;
  };
  
  Jedi.prototype.setHeight = function (height) {
    this.height = height;
  };
  
  const luke = new Jedi();
  luke.jump(); // => true
  luke.setHeight(20); // => undefined
  
  // good
  class Jedi {
    jump() {
      this.jumping = true;
      return this;
    }
  
    setHeight(height) {
      this.height = height;
      return this;
    }
  }
  
  const luke = new Jedi();
  
  luke.jump()
    .setHeight(20);
  ```



- [9.4](https://airbnb.io/javascript/#constructors--tostring) It’s okay to write a custom toString() method, just make sure it works successfully and causes no side effects.

  ```
  class Jedi {
    constructor(options = {}) {
      this.name = options.name || 'no name';
    }
  
    getName() {
      return this.name;
    }
  
    toString() {
      return `Jedi - ${this.getName()}`;
    }
  }
  ```



- [9.5](https://airbnb.io/javascript/#constructors--no-useless) Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary. eslint: [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)

  ✅
  
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



- [9.6](https://airbnb.io/javascript/#classes--no-duplicate-members) Avoid duplicate class members. eslint: [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)

  ✅

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

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Modules



- [10.1](https://airbnb.io/javascript/#modules--use-them) Always use modules (`import`/`export`) over a non-standard module system. You can always transpile to your preferred module system.

  > Why? Modules are the future, let’s start using the future now.

  ```
  // bad
  const AirbnbStyleGuide = require('./AirbnbStyleGuide');
  module.exports = AirbnbStyleGuide.es6;
  
  // ok
  import AirbnbStyleGuide from './AirbnbStyleGuide';
  export default AirbnbStyleGuide.es6;
  
  // best
  import { es6 } from './AirbnbStyleGuide';
  export default es6;
  ```



- [10.2](https://airbnb.io/javascript/#modules--no-wildcard) Do not use wildcard imports.

  > Why? This makes sure you have a single default export.

  ```
  // bad
  import * as AirbnbStyleGuide from './AirbnbStyleGuide';
  
  // good
  import AirbnbStyleGuide from './AirbnbStyleGuide';
  ```



- [10.3](https://airbnb.io/javascript/#modules--no-export-from-import) And do not export directly from an import.

  > Why? Although the one-liner is concise, having one clear way to import and one clear way to export makes things consistent.

  ```
  // bad
  // filename es6.js
  export { es6 as default } from './AirbnbStyleGuide';
  
  // good
  // filename es6.js
  import { es6 } from './AirbnbStyleGuide';
  export default es6;
  ```



- 10.4

  Only import from a path in one place. eslint:

  `no-duplicate-imports`

  ✅

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



- 10.5

   

  Do not export mutable bindings. eslint:

   

  `import/no-mutable-exports`

  > Why? Mutation should be avoided in general, but in particular when exporting mutable bindings. While this technique may be needed for some special cases, in general, only constant references should be exported.

  ```
  // bad
  let foo = 3;
  export { foo };
  
  // good
  const foo = 3;
  export { foo };
  ```



- 10.6

   

  In modules with a single export, prefer default export over named export. eslint:

   

  `import/prefer-default-export`

  > Why? To encourage more files that only ever export one thing, which is better for readability and maintainability.

  ```
  // bad
  export function foo() {}
  
  // good
  export default function foo() {}
  ```



- 10.7

   

  Put all

   

  ```
  import
  ```

  s above non-import statements. eslint:

   

  `import/first`

  > Why? Since `import`s are hoisted, keeping them all at the top prevents surprising behavior.

  ```
  // bad
  import foo from 'foo';
  foo.init();
  
  import bar from 'bar';
  
  // good
  import foo from 'foo';
  import bar from 'bar';
  
  foo.init();
  ```



- [10.8](https://airbnb.io/javascript/#modules--multiline-imports-over-newlines) Multiline imports should be indented just like multiline array and object literals.

  > Why? The curly braces follow the same indentation rules as every other curly brace block in the style guide, as do the trailing commas.

  ```
  // bad
  import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';
  
  // good
  import {
    longNameA,
    longNameB,
    longNameC,
    longNameD,
    longNameE,
  } from 'path';
  ```



- 10.9

   

  Disallow Webpack loader syntax in module import statements. eslint:

   

  `import/no-webpack-loader-syntax`

  > Why? Since using Webpack syntax in the imports couples the code to a module bundler. Prefer using the loader syntax in `webpack.config.js`.

  ```
  // bad
  import fooSass from 'css!sass!foo.scss';
  import barCss from 'style!css!bar.css';
  
  // good
  import fooSass from 'foo.scss';
  import barCss from 'bar.css';
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Iterators and Generators



- [11.1](https://airbnb.io/javascript/#iterators--nope) Don’t use iterators. Prefer JavaScript’s higher-order functions instead of loops like `for-in` or `for-of`. eslint: [`no-iterator`](https://eslint.org/docs/rules/no-iterator.html) [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)

  ⭕️

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
  
  standard **禁止使用 `__iterator__`**。
  
  eslint: [`no-iterator`](http://eslint.org/docs/rules/no-iterator)
  
  ```js
  Foo.prototype.__iterator__ = function () {}   // ✗ avoid
  ```
  
  Airbnb



- [11.2](https://airbnb.io/javascript/#generators--nope) Don’t use generators for now.

  > Why? They don’t transpile well to ES5.



- [11.3](https://airbnb.io/javascript/#generators--spacing) If you must use generators, or if you disregard [our advice](https://airbnb.io/javascript/#generators--nope), make sure their function signature is spaced properly. eslint: [`generator-star-spacing`](https://eslint.org/docs/rules/generator-star-spacing)

  > Why? `function` and `*` are part of the same conceptual keyword - `*` is not a modifier for `function`, `function*` is a unique construct, different from `function`.

  ```
  // bad
  function * foo() {
    // ...
  }
  
  // bad
  const bar = function * () {
    // ...
  };
  
  // bad
  const baz = function *() {
    // ...
  };
  
  // bad
  const quux = function*() {
    // ...
  };
  
  // bad
  function*foo() {
    // ...
  }
  
  // bad
  function *foo() {
    // ...
  }
  
  // very bad
  function
  *
  foo() {
    // ...
  }
  
  // very bad
  const wat = function
  *
  () {
    // ...
  };
  
  // good
  function* foo() {
    // ...
  }
  
  // good
  const foo = function* () {
    // ...
  };
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Properties



- [12.1](https://airbnb.io/javascript/#properties--dot) Use dot notation when accessing properties. eslint: [`dot-notation`](https://eslint.org/docs/rules/dot-notation.html) jscs: [`requireDotNotation`](http://jscs.info/rule/requireDotNotation)

  ```
  const luke = {
    jedi: true,
    age: 28,
  };
  
  // bad
  const isJedi = luke['jedi'];
  
  // good
  const isJedi = luke.jedi;
  ```



- [12.2](https://airbnb.io/javascript/#properties--bracket) Use bracket notation `[]` when accessing properties with a variable.

  ```
  const luke = {
    jedi: true,
    age: 28,
  };
  
  function getProp(prop) {
    return luke[prop];
  }
  
  const isJedi = getProp('jedi');
  ```

  

- [12.3](https://airbnb.io/javascript/#es2016-properties--exponentiation-operator) Use exponentiation operator `**` when calculating exponentiations. eslint: [`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties).

  ```
  // bad
  const binary = Math.pow(2, 10);
  
  // good
  const binary = 2 ** 10;
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Variables



- [13.1](https://airbnb.io/javascript/#variables--const) Always use `const` or `let` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that. eslint: [`no-undef`](https://eslint.org/docs/rules/no-undef) [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

  ⭕️

  ```
  // bad
  superPower = new SuperPower();
  
  // good
  const superPower = new SuperPower();
  ```
  
  standard **使用浏览器全局变量时加上** `window.` 前缀。
    `document`、`console` 和 `navigator` 除外。
  
    eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef)
  
    ```js
  window.alert('hi')   // ✓ ok
    ```
  
  Airbnb
  
  ⚠️ standard 规则在日常开发中尝试此点有出入



- [13.2](https://airbnb.io/javascript/#variables--one-const) Use one `const` or `let` declaration per variable. eslint: [`one-var`](https://eslint.org/docs/rules/one-var.html) jscs: [`disallowMultipleVarDecl`](http://jscs.info/rule/disallowMultipleVarDecl)

  ✅

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



- [13.3](https://airbnb.io/javascript/#variables--const-let-group) Group all your `const`s and then group all your `let`s.

  > Why? This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

  ```
  // bad
  let i, len, dragonball,
      items = getItems(),
      goSportsTeam = true;
  
  // bad
  let i;
  const items = getItems();
  let dragonball;
  const goSportsTeam = true;
  let len;
  
  // good
  const goSportsTeam = true;
  const items = getItems();
  let dragonball;
  let i;
  let length;
  ```



- [13.4](https://airbnb.io/javascript/#variables--define-where-used) Assign variables where you need them, but place them in a reasonable place.

  > Why? `let` and `const` are block scoped and not function scoped.

  ```
  // bad - unnecessary function call
  function checkName(hasName) {
    const name = getName();
  
    if (hasName === 'test') {
      return false;
    }
  
    if (name === 'test') {
      this.setName('');
      return false;
    }
  
    return name;
  }
  
  // good
  function checkName(hasName) {
    if (hasName === 'test') {
      return false;
    }
  
    const name = getName();
  
    if (name === 'test') {
      this.setName('');
      return false;
    }
  
    return name;
  }
  ```

  

- [13.5](https://airbnb.io/javascript/#variables--no-chain-assignment) Don’t chain variable assignments. eslint: [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)

  > Why? Chaining variable assignments creates implicit global variables.

  ```
  // bad
  (function example() {
    // JavaScript interprets this as
    // let a = ( b = ( c = 1 ) );
    // The let keyword only applies to variable a; variables b and c become
    // global variables.
    let a = b = c = 1;
  }());
  
  console.log(a); // throws ReferenceError
  console.log(b); // 1
  console.log(c); // 1
  
  // good
  (function example() {
    let a = 1;
    let b = a;
    let c = a;
  }());
  
  console.log(a); // throws ReferenceError
  console.log(b); // throws ReferenceError
  console.log(c); // throws ReferenceError
  
  // the same applies for `const`
  ```



- [13.6](https://airbnb.io/javascript/#variables--unary-increment-decrement) Avoid using unary increments and decrements (++, –). eslint [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)

  > Why? Per the eslint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application. It is also more expressive to mutate your values with statements like `num += 1` instead of `num++` or `num ++`. Disallowing unary increment and decrement statements also prevents you from pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior in your programs.

  ```
  // bad
  
  const array = [1, 2, 3];
  let num = 1;
  num++;
  --num;
  
  let sum = 0;
  let truthyCount = 0;
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    sum += value;
    if (value) {
      truthyCount++;
    }
  }
  
  // good
  
  const array = [1, 2, 3];
  let num = 1;
  num += 1;
  num -= 1;
  
  const sum = array.reduce((a, b) => a + b, 0);
  const truthyCount = array.filter(Boolean).length;
  ```



- [13.7](https://airbnb.io/javascript/#variables--linebreak) Avoid linebreaks before or after `=` in an assignment. If your assignment violates [`max-len`](https://eslint.org/docs/rules/max-len.html), surround the value in parens. eslint [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak.html).

  ⭕️

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

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Hoisting



- [14.1](https://airbnb.io/javascript/#hoisting--about) `var` declarations get hoisted to the top of their closest enclosing function scope, their assignment does not. `const` and `let` declarations are blessed with a new concept called [Temporal Dead Zones (TDZ)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_Dead_Zone_and_errors_with_let). It’s important to know why [typeof is no longer safe](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15).

  ```
  // we know this wouldn’t work (assuming there
  // is no notDefined global variable)
  function example() {
    console.log(notDefined); // => throws a ReferenceError
  }
  
  // creating a variable declaration after you
  // reference the variable will work due to
  // variable hoisting. Note: the assignment
  // value of `true` is not hoisted.
  function example() {
    console.log(declaredButNotAssigned); // => undefined
    var declaredButNotAssigned = true;
  }
  
  // the interpreter is hoisting the variable
  // declaration to the top of the scope,
  // which means our example could be rewritten as:
  function example() {
    let declaredButNotAssigned;
    console.log(declaredButNotAssigned); // => undefined
    declaredButNotAssigned = true;
  }
  
  // using const and let
  function example() {
    console.log(declaredButNotAssigned); // => throws a ReferenceError
    console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
    const declaredButNotAssigned = true;
  }
  ```



- [14.2](https://airbnb.io/javascript/#hoisting--anon-expressions) Anonymous function expressions hoist their variable name, but not the function assignment.

  ```
  function example() {
    console.log(anonymous); // => undefined
  
    anonymous(); // => TypeError anonymous is not a function
  
    var anonymous = function () {
      console.log('anonymous function expression');
    };
  }
  ```



- [14.3](https://airbnb.io/javascript/#hoisting--named-expressions) Named function expressions hoist the variable name, not the function name or the function body.

  ```
  function example() {
    console.log(named); // => undefined
  
    named(); // => TypeError named is not a function
  
    superPower(); // => ReferenceError superPower is not defined
  
    var named = function superPower() {
      console.log('Flying');
    };
  }
  
  // the same is true when the function name
  // is the same as the variable name.
  function example() {
    console.log(named); // => undefined
  
    named(); // => TypeError named is not a function
  
    var named = function named() {
      console.log('named');
    };
  }
  ```



- [14.4](https://airbnb.io/javascript/#hoisting--declarations) Function declarations hoist their name and the function body.

  ```
  function example() {
    superPower(); // => Flying
  
    function superPower() {
      console.log('Flying');
    }
  }
  ```

- For more information refer to [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting/) by [Ben Cherry](http://www.adequatelygood.com/).

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Comparison Operators & Equality



- [15.1](https://airbnb.io/javascript/#comparison--eqeqeq) Use `===` and `!==` over `==` and `!=`. eslint: [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq.html)

  ✅



- [15.2](https://airbnb.io/javascript/#comparison--if) Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:

  - **Objects** evaluate to **true**
  - **Undefined** evaluates to **false**
  - **Null** evaluates to **false**
  - **Booleans** evaluate to **the value of the boolean**
  - **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
  - **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

  ```
  if ([0] && []) {
    // true
    // an array (even an empty one) is an object, objects will evaluate to true
  }
  ```



- [15.3](https://airbnb.io/javascript/#comparison--shortcuts) Use shortcuts for booleans, but explicit comparisons for strings and numbers.

  ```
  // bad
  if (isValid === true) {
    // ...
  }
  
  // good
  if (isValid) {
    // ...
  }
  
  // bad
  if (name) {
    // ...
  }
  
  // good
  if (name !== '') {
    // ...
  }
  
  // bad
  if (collection.length) {
    // ...
  }
  
  // good
  if (collection.length > 0) {
    // ...
  }
  ```



- [15.4](https://airbnb.io/javascript/#comparison--moreinfo) For more information see [Truth Equality and JavaScript](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll.



- [15.5](https://airbnb.io/javascript/#comparison--switch-blocks) Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`). eslint: [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations.html)

  > Why? Lexical declarations are visible in the entire `switch` block but only get initialized when assigned, which only happens when its `case` is reached. This causes problems when multiple `case` clauses attempt to define the same thing.

  ```
  // bad
  switch (foo) {
    case 1:
      let x = 1;
      break;
    case 2:
      const y = 2;
      break;
    case 3:
      function f() {
        // ...
      }
      break;
    default:
      class C {}
  }
  
  // good
  switch (foo) {
    case 1: {
      let x = 1;
      break;
    }
    case 2: {
      const y = 2;
      break;
    }
    case 3: {
      function f() {
        // ...
      }
      break;
    }
    case 4:
      bar();
      break;
    default: {
      class C {}
    }
  }
  ```



- [15.6](https://airbnb.io/javascript/#comparison--nested-ternaries) Ternaries should not be nested and generally be single line expressions. eslint: [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary.html)

  ```
  // bad
  const foo = maybe1 > maybe2
    ? "bar"
    : value1 > value2 ? "baz" : null;
  
  // split into 2 separated ternary expressions
  const maybeNull = value1 > value2 ? 'baz' : null;
  
  // better
  const foo = maybe1 > maybe2
    ? 'bar'
    : maybeNull;
  
  // best
  const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
  ```



- [15.7](https://airbnb.io/javascript/#comparison--unneeded-ternary) Avoid unneeded ternary statements. eslint: [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary.html)

  ✅
  
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



- [15.8](https://airbnb.io/javascript/#comparison--no-mixed-operators) When mixing operators, enclose them in parentheses. The only exception is the standard arithmetic operators (`+`, `-`, `*`, & `/`) since their precedence is broadly understood. eslint: [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators.html)

  > Why? This improves readability and clarifies the developer’s intention.

  ```
  // bad
  const foo = a && b < 0 || c > 0 || d + 1 === 0;
  
  // bad
  const bar = a ** b - 5 % d;
  
  // bad
  // one may be confused into thinking (a || b) && c
  if (a || b && c) {
    return d;
  }
  
  // good
  const foo = (a && b < 0) || c > 0 || (d + 1 === 0);
  
  // good
  const bar = (a ** b) - (5 % d);
  
  // good
  if (a || (b && c)) {
    return d;
  }
  
  // good
  const bar = a + b / c * d;
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Blocks



- [16.1](https://airbnb.io/javascript/#blocks--braces) Use braces with all multi-line blocks. eslint: [`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)

  ```
  // bad
  if (test)
    return false;
  
  // good
  if (test) return false;
  
  // good
  if (test) {
    return false;
  }
  
  // bad
  function foo() { return false; }
  
  // good
  function bar() {
    return false;
  }
  ```



- [16.2](https://airbnb.io/javascript/#blocks--cuddled-elses) If you’re using multi-line blocks with `if` and `else`, put `else` on the same line as your `if` block’s closing brace. eslint: [`brace-style`](https://eslint.org/docs/rules/brace-style.html) jscs: [`disallowNewlineBeforeBlockStatements`](http://jscs.info/rule/disallowNewlineBeforeBlockStatements)

  ✅

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



- [16.3](https://airbnb.io/javascript/#blocks--no-else-return) If an `if` block always executes a `return` statement, the subsequent `else` block is unnecessary. A `return` in an `else if` block following an `if` block that contains a `return` can be separated into multiple `if` blocks. eslint: [`no-else-return`](https://eslint.org/docs/rules/no-else-return)

  ```
  // bad
  function foo() {
    if (x) {
      return x;
    } else {
      return y;
    }
  }
  
  // bad
  function cats() {
    if (x) {
      return x;
    } else if (y) {
      return y;
    }
  }
  
  // bad
  function dogs() {
    if (x) {
      return x;
    } else {
      if (y) {
        return y;
      }
    }
  }
  
  // good
  function foo() {
    if (x) {
      return x;
    }
  
    return y;
  }
  
  // good
  function cats() {
    if (x) {
      return x;
    }
  
    if (y) {
      return y;
    }
  }
  
  //good
  function dogs(x) {
    if (x) {
      if (z) {
        return y;
      }
    } else {
      return z;
    }
  }
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Control Statements



- [17.1](https://airbnb.io/javascript/#control-statements) In case your control statement (`if`, `while` etc.) gets too long or exceeds the maximum line length, each (grouped) condition could be put into a new line. The logical operator should begin the line.

  > Why? Requiring operators at the beginning of the line keeps the operators aligned and follows a pattern similar to method chaining. This also improves readability by making it easier to visually follow complex logic.

  ```
  // bad
  if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
    thing1();
  }
  
  // bad
  if (foo === 123 &&
    bar === 'abc') {
    thing1();
  }
  
  // bad
  if (foo === 123
    && bar === 'abc') {
    thing1();
  }
  
  // bad
  if (
    foo === 123 &&
    bar === 'abc'
  ) {
    thing1();
  }
  
  // good
  if (
    foo === 123
    && bar === 'abc'
  ) {
    thing1();
  }
  
  // good
  if (
    (foo === 123 || bar === 'abc')
    && doesItLookGoodWhenItBecomesThatLong()
    && isThisReallyHappening()
  ) {
    thing1();
  }
  
  // good
  if (foo === 123 && bar === 'abc') {
    thing1();
  }
  ```



- [17.2](https://airbnb.io/javascript/#control-statements--value-selection) Don’t use selection operators in place of control statements.

  ```
  // bad
  !isRunning && startRunning();
  
  // good
  if (!isRunning) {
    startRunning();
  }
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Comments



- [18.1](https://airbnb.io/javascript/#comments--multiline) Use `/** ... */` for multi-line comments.

  ```
  // bad
  // make() returns a new element
  // based on the passed in tag name
  //
  // @param {String} tag
  // @return {Element} element
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



- [18.2](https://airbnb.io/javascript/#comments--singleline) Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block.

  ```
  // bad
  const active = true;  // is current tab
  
  // good
  // is current tab
  const active = true;
  
  // bad
  function getType() {
    console.log('fetching type...');
    // set the default type to 'no type'
    const type = this.type || 'no type';
  
    return type;
  }
  
  // good
  function getType() {
    console.log('fetching type...');
  
    // set the default type to 'no type'
    const type = this.type || 'no type';
  
    return type;
  }
  
  // also good
  function getType() {
    // set the default type to 'no type'
    const type = this.type || 'no type';
  
    return type;
  }
  ```



- [18.3](https://airbnb.io/javascript/#comments--spaces) Start all comments with a space to make it easier to read. eslint: [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)

  ✅
  
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



- [18.4](https://airbnb.io/javascript/#comments--actionitems) Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand if you’re pointing out a problem that needs to be revisited, or if you’re suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME: -- need to figure this out` or `TODO: -- need to implement`.



- [18.5](https://airbnb.io/javascript/#comments--fixme) Use `// FIXME:` to annotate problems.

  ```
  class Calculator extends Abacus {
    constructor() {
      super();
  
      // FIXME: shouldn’t use a global here
      total = 0;
    }
  }
  ```



- [18.6](https://airbnb.io/javascript/#comments--todo) Use `// TODO:` to annotate solutions to problems.

  ```
  class Calculator extends Abacus {
    constructor() {
      super();
  
      // TODO: total should be configurable by an options param
      this.total = 0;
    }
  }
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Whitespace



- [19.1](https://airbnb.io/javascript/#whitespace--spaces) Use soft tabs (space character) set to 2 spaces. eslint: [`indent`](https://eslint.org/docs/rules/indent.html) jscs: [`validateIndentation`](http://jscs.info/rule/validateIndentation)

  ✅

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



- [19.2](https://airbnb.io/javascript/#whitespace--before-blocks) Place 1 space before the leading brace. eslint: [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks.html) jscs: [`requireSpaceBeforeBlockStatements`](http://jscs.info/rule/requireSpaceBeforeBlockStatements)

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



- [19.3](https://airbnb.io/javascript/#whitespace--around-keywords) Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. eslint: [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing.html) jscs: [`requireSpaceAfterKeywords`](http://jscs.info/rule/requireSpaceAfterKeywords)

  ✅

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



- [19.4](https://airbnb.io/javascript/#whitespace--infix-ops) Set off operators with spaces. eslint: [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops.html) jscs: [`requireSpaceBeforeBinaryOperators`](http://jscs.info/rule/requireSpaceBeforeBinaryOperators), [`requireSpaceAfterBinaryOperators`](http://jscs.info/rule/requireSpaceAfterBinaryOperators)

  ✅

  ```
  // bad
  const x=y+5;
  
  // good
  const x = y + 5;
  ```



- [19.5](https://airbnb.io/javascript/#whitespace--newline-at-end) End files with a single newline character. eslint: [`eol-last`](https://github.com/eslint/eslint/blob/master/docs/rules/eol-last.md)

  ✅

  ```
  // bad
  import { es6 } from './AirbnbStyleGuide';
    // ...
  export default es6;
  ```

  ```
  // bad
  import { es6 } from './AirbnbStyleGuide';
    // ...
  export default es6;↵
  ↵
  ```

  ```
  // good
  import { es6 } from './AirbnbStyleGuide';
    // ...
  export default es6;↵
  ```



- [19.6](https://airbnb.io/javascript/#whitespace--chains) Use indentation when making long method chains (more than 2 method chains). Use a leading dot, which emphasizes that the line is a method call, not a new statement. eslint: [`newline-per-chained-call`](https://eslint.org/docs/rules/newline-per-chained-call) [`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property)

  ⭕️
  
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
  
  standard **属性前面不要加空格**。
  
  eslint: [`no-whitespace-before-property`](http://eslint.org/docs/rules/no-whitespace-before-property)
  
  ```js
  user .name      // ✗ avoid
  user.name       // ✓ ok
  ```
  
  Airbnb
  
  ⚠️ 两者表述不同



- [19.7](https://airbnb.io/javascript/#whitespace--after-blocks) Leave a blank line after blocks and before the next statement. jscs: [`requirePaddingNewLinesAfterBlocks`](http://jscs.info/rule/requirePaddingNewLinesAfterBlocks)

  ```
  // bad
  if (foo) {
    return bar;
  }
  return baz;
  
  // good
  if (foo) {
    return bar;
  }
  
  return baz;
  
  // bad
  const obj = {
    foo() {
    },
    bar() {
    },
  };
  return obj;
  
  // good
  const obj = {
    foo() {
    },
  
    bar() {
    },
  };
  
  return obj;
  
  // bad
  const arr = [
    function foo() {
    },
    function bar() {
    },
  ];
  return arr;
  
  // good
  const arr = [
    function foo() {
    },
  
    function bar() {
    },
  ];
  
  return arr;
  ```



- [19.8](https://airbnb.io/javascript/#whitespace--padded-blocks) Do not pad your blocks with blank lines. eslint: [`padded-blocks`](https://eslint.org/docs/rules/padded-blocks.html) jscs: [`disallowPaddingNewlinesInBlocks`](http://jscs.info/rule/disallowPaddingNewlinesInBlocks)

  ✅
  
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



- [19.9](https://airbnb.io/javascript/#whitespace--in-parens) Do not add spaces inside parentheses. eslint: [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens.html) jscs: [`disallowSpacesInsideParentheses`](http://jscs.info/rule/disallowSpacesInsideParentheses)

  ✅
  
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



- [19.10](https://airbnb.io/javascript/#whitespace--in-brackets) Do not add spaces inside brackets. eslint: [`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing.html) jscs: [`disallowSpacesInsideArrayBrackets`](http://jscs.info/rule/disallowSpacesInsideArrayBrackets)

  ```
  // bad
  const foo = [ 1, 2, 3 ];
  console.log(foo[ 0 ]);
  
  // good
  const foo = [1, 2, 3];
  console.log(foo[0]);
  ```



- [19.11](https://airbnb.io/javascript/#whitespace--in-braces) Add spaces inside curly braces. eslint: [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing.html) jscs: [`requireSpacesInsideObjectBrackets`](http://jscs.info/rule/requireSpacesInsideObjectBrackets)

  ```
  // bad
  const foo = {clark: 'kent'};
  
  // good
  const foo = { clark: 'kent' };
  ```



- [19.12](https://airbnb.io/javascript/#whitespace--max-len) Avoid having lines of code that are longer than 100 characters (including whitespace). Note: per [above](https://airbnb.io/javascript/#strings--line-length), long strings are exempt from this rule, and should not be broken up. eslint: [`max-len`](https://eslint.org/docs/rules/max-len.html) jscs: [`maximumLineLength`](http://jscs.info/rule/maximumLineLength)

  > Why? This ensures readability and maintainability.

  ```
  // bad
  const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;
  
  // bad
  $.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));
  
  // good
  const foo = jsonData
    && jsonData.foo
    && jsonData.foo.bar
    && jsonData.foo.bar.baz
    && jsonData.foo.bar.baz.quux
    && jsonData.foo.bar.baz.quux.xyzzy;
  
  // good
  $.ajax({
    method: 'POST',
    url: 'https://airbnb.com/',
    data: { name: 'John' },
  })
    .done(() => console.log('Congratulations!'))
    .fail(() => console.log('You have failed this city.'));
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Commas



- [20.1](https://airbnb.io/javascript/#commas--leading-trailing) Leading commas: **Nope.** eslint: [`comma-style`](https://eslint.org/docs/rules/comma-style.html) jscs: [`requireCommaBeforeLineBreak`](http://jscs.info/rule/requireCommaBeforeLineBreak)

  ✅

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



- [20.2](https://airbnb.io/javascript/#commas--dangling) Additional trailing comma: **Yup.** eslint: [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle.html) jscs: [`requireTrailingComma`](http://jscs.info/rule/requireTrailingComma)

  ⭕️

  > Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don’t have to worry about the [trailing comma problem](https://github.com/airbnb/javascript/blob/es5-deprecated/es5/README.md#commas) in legacy browsers.

  ```
  // bad - git diff without trailing comma
  const hero = {
       firstName: 'Florence',
  -    lastName: 'Nightingale'
  +    lastName: 'Nightingale',
  +    inventorOf: ['coxcomb chart', 'modern nursing']
  };
  
  // good - git diff with trailing comma
  const hero = {
       firstName: 'Florence',
       lastName: 'Nightingale',
  +    inventorOf: ['coxcomb chart', 'modern nursing'],
  };
  ```

  ```
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
  
  standard **不允许有多余的行末逗号**。
  
  eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle)
  
  ```js
    var obj = {
      message: 'hello',   // ✗ avoid
    }
  ```
  
  standard？？
  
  ❓ ⚠️ standard 看上去更舒服，但是 Airbnb 写起来更简单，增删更方便，尤其当需要频繁注释最后一行进行调试时很方便，在代码增减时也更加清晰。

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Semicolons



- [21.1](https://airbnb.io/javascript/#semicolons--required) **Yup.** eslint: [`semi`](https://eslint.org/docs/rules/semi.html) jscs: [`requireSemicolons`](http://jscs.info/rule/requireSemicolons)

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

  [Read more](https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214#7365214).

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Type Casting & Coercion



- [22.1](https://airbnb.io/javascript/#coercion--explicit) Perform type coercion at the beginning of the statement.



- [22.2](https://airbnb.io/javascript/#coercion--strings) Strings: eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

  ✅
  
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



- [22.3](https://airbnb.io/javascript/#coercion--numbers) Numbers: Use `Number` for type casting and `parseInt` always with a radix for parsing strings. eslint: [`radix`](https://eslint.org/docs/rules/radix) [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

  ✅
  
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



- [22.4](https://airbnb.io/javascript/#coercion--comment-deviations) If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](https://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you’re doing.

  ```
  // good
  /**
   * parseInt was the reason my code was slow.
   * Bitshifting the String to coerce it to a
   * Number made it a lot faster.
   */
  const val = inputValue >> 0;
  ```



- [22.5](https://airbnb.io/javascript/#coercion--bitwise) **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](https://es5.github.io/#x4.3.19), but bitshift operations always return a 32-bit integer ([source](https://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109). Largest signed 32-bit Int is 2,147,483,647:

  ```
  2147483647 >> 0; // => 2147483647
  2147483648 >> 0; // => -2147483648
  2147483649 >> 0; // => -2147483647
  ```



- [22.6](https://airbnb.io/javascript/#coercion--booleans) Booleans: eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

  ✅
  
  ```
  const age = 0;
  
  // bad
  const hasAge = new Boolean(age);
  
  // good
  const hasAge = Boolean(age);
  
  // best
  const hasAge = !!age;
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Naming Conventions



- [23.1](https://airbnb.io/javascript/#naming--descriptive) Avoid single letter names. Be descriptive with your naming. eslint: [`id-length`](https://eslint.org/docs/rules/id-length)

  ```
  // bad
  function q() {
    // ...
  }
  
  // good
  function query() {
    // ...
  }
  ```



- [23.2](https://airbnb.io/javascript/#naming--camelCase) Use camelCase when naming objects, functions, and instances. eslint: [`camelcase`](https://eslint.org/docs/rules/camelcase.html) jscs: [`requireCamelCaseOrUpperCaseIdentifiers`](http://jscs.info/rule/requireCamelCaseOrUpperCaseIdentifiers)

  ✅

  ```
  // bad
  const OBJEcttsssss = {};
  const this_is_my_object = {};
  function c() {}
  
  // good
  const thisIsMyObject = {};
  function thisIsMyFunction() {}
  ```



- [23.3](https://airbnb.io/javascript/#naming--PascalCase) Use PascalCase only when naming constructors or classes. eslint: [`new-cap`](https://eslint.org/docs/rules/new-cap.html) jscs: [`requireCapitalizedConstructors`](http://jscs.info/rule/requireCapitalizedConstructors)

  ✅

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



- [23.4](https://airbnb.io/javascript/#naming--leading-underscore) Do not use trailing or leading underscores. eslint: [`no-underscore-dangle`](https://eslint.org/docs/rules/no-underscore-dangle.html) jscs: [`disallowDanglingUnderscores`](http://jscs.info/rule/disallowDanglingUnderscores)

  > Why? JavaScript does not have the concept of privacy in terms of properties or methods. Although a leading underscore is a common convention to mean “private”, in fact, these properties are fully public, and as such, are part of your public API contract. This convention might lead developers to wrongly think that a change won’t count as breaking, or that tests aren’t needed. tl;dr: if you want something to be “private”, it must not be observably present.

  ```
  // bad
  this.__firstName__ = 'Panda';
  this.firstName_ = 'Panda';
  this._firstName = 'Panda';
  
  // good
  this.firstName = 'Panda';
  
  // good, in environments where WeakMaps are available
  // see https://kangax.github.io/compat-table/es6/#test-WeakMap
  const firstNames = new WeakMap();
  firstNames.set(this, 'Panda');
  ```



- [23.5](https://airbnb.io/javascript/#naming--self-this) Don’t save references to `this`. Use arrow functions or [Function#bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind). jscs: [`disallowNodeTypes`](http://jscs.info/rule/disallowNodeTypes)

  ```
  // bad
  function foo() {
    const self = this;
    return function () {
      console.log(self);
    };
  }
  
  // bad
  function foo() {
    const that = this;
    return function () {
      console.log(that);
    };
  }
  
  // good
  function foo() {
    return () => {
      console.log(this);
    };
  }
  ```



- [23.6](https://airbnb.io/javascript/#naming--filename-matches-export) A base filename should exactly match the name of its default export.

  ```
  // file 1 contents
  class CheckBox {
    // ...
  }
  export default CheckBox;
  
  // file 2 contents
  export default function fortyTwo() { return 42; }
  
  // file 3 contents
  export default function insideDirectory() {}
  
  // in some other file
  // bad
  import CheckBox from './checkBox'; // PascalCase import/export, camelCase filename
  import FortyTwo from './FortyTwo'; // PascalCase import/filename, camelCase export
  import InsideDirectory from './InsideDirectory'; // PascalCase import/filename, camelCase export
  
  // bad
  import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
  import forty_two from './forty_two'; // snake_case import/filename, camelCase export
  import inside_directory from './inside_directory'; // snake_case import, camelCase export
  import index from './inside_directory/index'; // requiring the index file explicitly
  import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly
  
  // good
  import CheckBox from './CheckBox'; // PascalCase export/import/filename
  import fortyTwo from './fortyTwo'; // camelCase export/import/filename
  import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
  // ^ supports both insideDirectory.js and insideDirectory/index.js
  ```



- [23.7](https://airbnb.io/javascript/#naming--camelCase-default-export) Use camelCase when you export-default a function. Your filename should be identical to your function’s name.

  ```
  function makeStyleGuide() {
    // ...
  }
  
  export default makeStyleGuide;
  ```



- [23.8](https://airbnb.io/javascript/#naming--PascalCase-singleton) Use PascalCase when you export a constructor / class / singleton / function library / bare object.

  ```
  const AirbnbStyleGuide = {
    es6: {
    },
  };
  
  export default AirbnbStyleGuide;
  ```



- [23.9](https://airbnb.io/javascript/#naming--Acronyms-and-Initialisms) Acronyms and initialisms should always be all capitalized, or all lowercased.

  > Why? Names are for readability, not to appease a computer algorithm.

  ```
  // bad
  import SmsContainer from './containers/SmsContainer';
  
  // bad
  const HttpRequests = [
    // ...
  ];
  
  // good
  import SMSContainer from './containers/SMSContainer';
  
  // good
  const HTTPRequests = [
    // ...
  ];
  
  // also good
  const httpRequests = [
    // ...
  ];
  
  // best
  import TextMessageContainer from './containers/TextMessageContainer';
  
  // best
  const requests = [
    // ...
  ];
  ```



- [23.10](https://airbnb.io/javascript/#naming--uppercase) You may optionally uppercase a constant only if it (1) is exported, (2) is a `const` (it can not be reassigned), and (3) the programmer can trust it (and its nested properties) to never change.

  > Why? This is an additional tool to assist in situations where the programmer would be unsure if a variable might ever change. UPPERCASE_VARIABLES are letting the programmer know that they can trust the variable (and its properties) not to change.
  >
  > - What about all `const` variables? - This is unnecessary, so uppercasing should not be used for constants within a file. It should be used for exported constants however.
  > - What about exported objects? - Uppercase at the top level of export (e.g. `EXPORTED_OBJECT.key`) and maintain that all nested properties do not change.

  ```
  // bad
  const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file';
  
  // bad
  export const THING_TO_BE_CHANGED = 'should obviously not be uppercased';
  
  // bad
  export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';
  
  // ---
  
  // allowed but does not supply semantic value
  export const apiKey = 'SOMEKEY';
  
  // better in most cases
  export const API_KEY = 'SOMEKEY';
  
  // ---
  
  // bad - unnecessarily uppercases key while adding no semantic value
  export const MAPPING = {
    KEY: 'value'
  };
  
  // good
  export const MAPPING = {
    key: 'value'
  };
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Accessors



- [24.1](https://airbnb.io/javascript/#accessors--not-required) Accessor functions for properties are not required.



- [24.2](https://airbnb.io/javascript/#accessors--no-getters-setters) Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test, maintain, and reason about. Instead, if you do make accessor functions, use getVal() and setVal(‘hello’).

  ```
  // bad
  class Dragon {
    get age() {
      // ...
    }
  
    set age(value) {
      // ...
    }
  }
  
  // good
  class Dragon {
    getAge() {
      // ...
    }
  
    setAge(value) {
      // ...
    }
  }
  ```



- [24.3](https://airbnb.io/javascript/#accessors--boolean-prefix) If the property/method is a `boolean`, use `isVal()` or `hasVal()`.

  ```
  // bad
  if (!dragon.age()) {
    return false;
  }
  
  // good
  if (!dragon.hasAge()) {
    return false;
  }
  ```



- [24.4](https://airbnb.io/javascript/#accessors--consistent) It’s okay to create get() and set() functions, but be consistent.

  ```
  class Jedi {
    constructor(options = {}) {
      const lightsaber = options.lightsaber || 'blue';
      this.set('lightsaber', lightsaber);
    }
  
    set(key, val) {
      this[key] = val;
    }
  
    get(key) {
      return this[key];
    }
  }
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Events



- [25.1](https://airbnb.io/javascript/#events--hash) When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass an object literal (also known as a “hash”) instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

  ```
  // bad
  $(this).trigger('listingUpdated', listing.id);
  
  // ...
  
  $(this).on('listingUpdated', (e, listingID) => {
    // do something with listingID
  });
  ```

  prefer:

  ```
  // good
  $(this).trigger('listingUpdated', { listingID: listing.id });
  
  // ...
  
  $(this).on('listingUpdated', (e, data) => {
    // do something with data.listingID
  });
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## jQuery



- [26.1](https://airbnb.io/javascript/#jquery--dollar-prefix) Prefix jQuery object variables with a `$`. jscs: [`requireDollarBeforejQueryAssignment`](http://jscs.info/rule/requireDollarBeforejQueryAssignment)

  ```
  // bad
  const sidebar = $('.sidebar');
  
  // good
  const $sidebar = $('.sidebar');
  
  // good
  const $sidebarBtn = $('.sidebar-btn');
  ```



- [26.2](https://airbnb.io/javascript/#jquery--cache) Cache jQuery lookups.

  ```
  // bad
  function setSidebar() {
    $('.sidebar').hide();
  
    // ...
  
    $('.sidebar').css({
      'background-color': 'pink',
    });
  }
  
  // good
  function setSidebar() {
    const $sidebar = $('.sidebar');
    $sidebar.hide();
  
    // ...
  
    $sidebar.css({
      'background-color': 'pink',
    });
  }
  ```



- [26.3](https://airbnb.io/javascript/#jquery--queries) For DOM queries use Cascading `$('.sidebar ul')` or parent > child `$('.sidebar > ul')`. [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)



- [26.4](https://airbnb.io/javascript/#jquery--find) Use `find` with scoped jQuery object queries.

  ```
  // bad
  $('ul', '.sidebar').hide();
  
  // bad
  $('.sidebar').find('ul').hide();
  
  // good
  $('.sidebar ul').hide();
  
  // good
  $('.sidebar > ul').hide();
  
  // good
  $sidebar.find('ul').hide();
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## ECMAScript 5 Compatibility



- [27.1](https://airbnb.io/javascript/#es5-compat--kangax) Refer to [Kangax](https://twitter.com/kangax/)’s ES5 [compatibility table](https://kangax.github.io/es5-compat-table/).

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**



## ECMAScript 6+ (ES 2015+) Styles



- [28.1](https://airbnb.io/javascript/#es6-styles) This is a collection of links to the various ES6+ features.

1. [Arrow Functions](https://airbnb.io/javascript/#arrow-functions)
2. [Classes](https://airbnb.io/javascript/#classes--constructors)
3. [Object Shorthand](https://airbnb.io/javascript/#es6-object-shorthand)
4. [Object Concise](https://airbnb.io/javascript/#es6-object-concise)
5. [Object Computed Properties](https://airbnb.io/javascript/#es6-computed-properties)
6. [Template Strings](https://airbnb.io/javascript/#es6-template-literals)
7. [Destructuring](https://airbnb.io/javascript/#destructuring)
8. [Default Parameters](https://airbnb.io/javascript/#es6-default-parameters)
9. [Rest](https://airbnb.io/javascript/#es6-rest)
10. [Array Spreads](https://airbnb.io/javascript/#es6-array-spreads)
11. [Let and Const](https://airbnb.io/javascript/#references)
12. [Exponentiation Operator](https://airbnb.io/javascript/#es2016-properties--exponentiation-operator)
13. [Iterators and Generators](https://airbnb.io/javascript/#iterators-and-generators)
14. [Modules](https://airbnb.io/javascript/#modules)



- [28.2](https://airbnb.io/javascript/#tc39-proposals) Do not use [TC39 proposals](https://github.com/tc39/proposals) that have not reached stage 3.

  > Why? [They are not finalized](https://tc39.github.io/process-document/), and they are subject to change or to be withdrawn entirely. We want to use JavaScript, and proposals are not JavaScript yet.

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

## Standard Library

The [Standard Library](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects) contains utilities that are functionally broken but remain for legacy reasons.



- [29.1](https://airbnb.io/javascript/#standard-library--isnan) Use `Number.isNaN` instead of global `isNaN`. eslint: [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

  > Why? The global `isNaN` coerces non-numbers to numbers, returning true for anything that coerces to NaN. If this behavior is desired, make it explicit.

  ```
  // bad
  isNaN('1.2'); // false
  isNaN('1.2.3'); // true
  
  // good
  Number.isNaN('1.2.3'); // false
  Number.isNaN(Number('1.2.3')); // true
  ```



- [29.2](https://airbnb.io/javascript/#standard-library--isfinite) Use `Number.isFinite` instead of global `isFinite`. eslint: [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

  > Why? The global `isFinite` coerces non-numbers to numbers, returning true for anything that coerces to a finite number. If this behavior is desired, make it explicit.

  ```
  // bad
  isFinite('2e3'); // true
  
  // good
  Number.isFinite('2e3'); // false
  Number.isFinite(parseInt('2e3', 10)); // true
  ```

**[⬆ back to top](https://airbnb.io/javascript/#table-of-contents)**

- ⭕️

  standard **不要定义未使用的变量**。

  eslint: [`no-unused-varsd`](http://eslint.org/docs/rules/no-unused-vars)

  ```js
  function myFunction () {
    var result = something()   // ✗ avoid
  }
  ```

  Airbnb 无，原 13.8，但网页中此规则不见了

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

- ⭕️ 留下

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

- ⭕️ 留下

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

- ⭕️ 留下

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

- ⭕️ 留下

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

- ⭕️ 留下

  standard **避免对类名重新赋值**。

  eslint: [`no-class-assign`](http://eslint.org/docs/rules/no-class-assign)

  ```js
  class Dog {}
  Dog = 'Fido'    // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️ 留下

  standard **正则中不要使用控制符**。

  eslint: [`no-control-regex`](http://eslint.org/docs/rules/no-control-regex)

  ```js
  var pattern = /\x1f/    // ✗ avoid
  var pattern = /\x20/    // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

  standard **不要使用 `debugger`**。

  eslint: [`no-debugger`](http://eslint.org/docs/rules/no-debugger)

  ```js
  function sum (a, b) {
    debugger      // ✗ avoid
    return a + b
  }
  ```

  Airbnb 无

- ⭕️ 留下

  standard **不要对变量使用 `delete` 操作**。

  eslint: [`no-delete-var`](http://eslint.org/docs/rules/no-delete-var)

  ```js
  var name
  delete name     // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️ 留下

  standard **对象字面量中不要定义重复的属性**。

  eslint: [`no-dupe-keys`](http://eslint.org/docs/rules/no-dupe-keys)

  ```js
  var user = {
    name: 'Jane Doe',
    name: 'John Doe'    // ✗ avoid
  }
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️ 留下

  standard **正则中不要使用空字符**。

  eslint: [`no-empty-character-class`](http://eslint.org/docs/rules/no-empty-character-class)

  ```js
  const myRegex = /^abc[]/      // ✗ avoid
  const myRegex = /^abc[a-z]/   // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

  standard **不要解构空值**。

  eslint: [`no-empty-pattern`](http://eslint.org/docs/rules/no-empty-pattern)

  ```js
  const { a: {} } = foo         // ✗ avoid
  const { a: { b } } = foo      // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️ 留下

  standard **不要扩展原生对象**。

  eslint: [`no-extend-native`](http://eslint.org/docs/rules/no-extend-native)

  ```js
  Object.prototype.age = 21     // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️ 留下

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

- ⭕️ 留下

  standard **不要使用多余的括号包裹函数**。

  eslint: [`no-extra-parens`](http://eslint.org/docs/rules/no-extra-parens)

  ```js
  const myFunc = (function () { })   // ✗ avoid
  const myFunc = function () { }     // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️ 留下 - 找超哥确认

  standard **不要省去小数点前面的0**。

  eslint: [`no-floating-decimal`](http://eslint.org/docs/rules/no-floating-decimal)

  ```js
  const discount = .5      // ✗ avoid
  const discount = 0.5     // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

  standard **避免对声明过的函数重新赋值**。

  eslint: [`no-func-assign`](http://eslint.org/docs/rules/no-func-assign)

  ```js
  function myFunc () { }
  myFunc = myOtherFunc    // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

  standard **不要对全局只读对象重新赋值**。

  eslint: [`no-global-assign`](http://eslint.org/docs/rules/no-global-assign)

  ```js
  window = {}     // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

  standard **注意隐式的 `eval()`**。

  eslint: [`no-implied-eval`](http://eslint.org/docs/rules/no-implied-eval)

  ```js
  setTimeout("alert('Hello world')")                   // ✗ avoid
  setTimeout(function () { alert('Hello world') })     // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下 - 找超哥确认

  standard **嵌套的代码块中禁止再定义函数**。

  eslint: [`no-inner-declarations`](http://eslint.org/docs/rules/no-inner-declarations)

  ```js
  if (authenticated) {
    function setAuthUser () {}    // ✗ avoid
  }
  ```

  Airbnb 无

- ⭕️ 留下

  standard **不要向 `RegExp` 构造器传入非法的正则表达式**。

  eslint: [`no-invalid-regexp`](http://eslint.org/docs/rules/no-invalid-regexp)

  ```js
  RegExp('[a-z')    // ✗ avoid
  RegExp('[a-z]')   // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

  standard **不要使用非法的空白符**。

  eslint: [`no-irregular-whitespace`](http://eslint.org/docs/rules/no-irregular-whitespace)

  ```js
  function myFunc () /*<NBSP>*/{}   // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️ 留下

  standard **不要使用标签语句**。

  eslint: [`no-labels`](http://eslint.org/docs/rules/no-labels)

  ```js
  label:
    while (true) {
      break label     // ✗ avoid
    }
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️ 留下

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

- ⭕️ 留下

  standard **`new` 创建对象实例后需要赋值给变量**。

  eslint: [`no-new`](http://eslint.org/docs/rules/no-new)

  ```js
  new Character()                     // ✗ avoid
  const character = new Character()   // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

  standard **禁止使用 `new require`**。

  eslint: [`no-new-require`](http://eslint.org/docs/rules/no-new-require)

  ```js
  const myModule = new require('my-module')    // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

  standard **禁止使用 `Symbol` 构造器**。

  eslint: [`no-new-symbol`](http://eslint.org/docs/rules/no-new-symbol)

  ```js
  const foo = new Symbol('foo')   // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

  standard **不要将全局对象的属性作为函数调用**。

  eslint: [`no-obj-calls`](http://eslint.org/docs/rules/no-obj-calls)

  ```js
  const math = Math()   // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

  standard **不要使用八进制字面量**。

  eslint: [`no-octal`](http://eslint.org/docs/rules/no-octal)

  ```js
  const octal = 042         // ✗ avoid
  const decimal = 34        // ✓ ok
  const octalString = '042' // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

  standard **字符串字面量中也不要使用八进制转义字符**。

  eslint: [`no-octal-escape`](http://eslint.org/docs/rules/no-octal-escape)

  ```js
  const copyright = 'Copyright \251'  // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

  standard **使用 `__dirname` 和 `__filename` 时尽量避免使用字符串拼接**。

  eslint: [`no-path-concat`](http://eslint.org/docs/rules/no-path-concat)

  ```js
  const pathToFile = __dirname + '/app.js'            // ✗ avoid
  const pathToFile = path.join(__dirname, 'app.js')   // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️ 留下 - 找超哥确认

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

- ⭕️ 留下

  standard **避免将变量赋值给自己**。

  eslint: [`no-self-assign`](http://eslint.org/docs/rules/no-self-assign)

  ```js
  name = name   // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

  standard **避免将变量与自己进行比较操作**。

  esint: [`no-self-compare`](http://eslint.org/docs/rules/no-self-compare)

  ```js
  if (score === score) {}   // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

  standard **避免使用逗号操作符**。

  eslint: [`no-sequences`](http://eslint.org/docs/rules/no-sequences)

  ```js
  if (doSomething(), !!test) {}   // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

  standard **不要随意更改关键字的值**。

  eslint: [`no-shadow-restricted-names`](http://eslint.org/docs/rules/no-shadow-restricted-names)

  ```js
  let undefined = 'value'     // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

  standard **禁止使用稀疏数组（Sparse arrays）**。

  eslint: [`no-sparse-arrays`](http://eslint.org/docs/rules/no-sparse-arrays)

  ```js
  let fruits = ['apple',, 'orange']       // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️ 留下 - ⚠️

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

- ⭕️ 留下

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

- ⭕️ 留下

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

- ⭕️ 留下

  standard **`return`，`throw`，`continue` 和 `break` 后不要再跟代码**。

  eslint: [`no-unreachable`](http://eslint.org/docs/rules/no-unreachable)

  ```js
  function doSomething () {
    return true
    console.log('never called')     // ✗ avoid
  }
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️ 留下

  standard **关系运算符的左值不要做取反操作**。

  eslint: [`no-unsafe-negation`](http://eslint.org/docs/rules/no-unsafe-negation)

  ```js
  if (!key in obj) {}       // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

  standard **避免不必要的 `.call()` 和 `.apply()`**。

  eslint: [`no-useless-call`](http://eslint.org/docs/rules/no-useless-call)

  ```js
  sum.call(null, 1, 2, 3)   // ✗ avoid
  ```

  Airbnb 无

- ⭕️ 留下

  standard **避免使用不必要的计算值作对象属性**。

  eslint: [`no-useless-computed-key`](http://eslint.org/docs/rules/no-useless-computed-key)

  ```js
  const user = { ['name']: 'John Doe' }   // ✗ avoid
  const user = { name: 'John Doe' }       // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

  standard **import, export 和解构操作中，禁止赋值到同名变量**。

  eslint: [`no-useless-rename`](http://eslint.org/docs/rules/no-useless-rename)

  ```js
  import { config as config } from './config'     // ✗ avoid
  import { config } from './config'               // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️

  standard **一元运算符后面跟一个空格**。

  eslint: [`space-unary-ops`](http://eslint.org/docs/rules/space-unary-ops)

  ```js
  typeof!admin        // ✗ avoid
  typeof !admin        // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

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

- ⭕️

  standard **`yield \*` 中的 `\*` 前后都要有空格**。

  eslint: [`yield-star-spacing`](http://eslint.org/docs/rules/yield-star-spacing)

  ```js
  yield* increment()    // ✗ avoid
  yield * increment()   // ✓ ok
  ```

  Airbnb 无

- ⭕️ 留下

  standard **请书写优雅的条件语句（avoid Yoda conditions）**。

  eslint: [`yoda`](http://eslint.org/docs/rules/yoda)

  ```js
  if (42 === age) { }    // ✗ avoid
  if (age === 42) { }    // ✓ ok
  ```

  Airbnb 无

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