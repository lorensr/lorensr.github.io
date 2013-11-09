---
layout: post
---

Currying, or partial function application, is explained [here](http://ejohn.org/blog/partial-functions-in-javascript/) by Resig. He gives the following implementation:

```
Function.prototype.partial = function(){
    var fn = this, args = Array.prototype.slice.call(arguments);
    return function(){
      var arg = 0;
      for ( var i = 0; i < args.length && arg < arguments.length; i++ )
        if ( args[i] === undefined )
          args[i] = arguments[arg++];
      return fn.apply(this, args);
    };
  };
```

This method saves all arguments, including the final arguments, which is usually not the desired behavior. Consider:

```
add = (a,b) ->
  a + b
addOne = add.partial 1, undefined

> addOne(2)
3
> addOne(10)
3
```

The 2 is saved as the second argument, so the 10 is ignored in the second invocation of `addOne`. The solution is to use a copy of `args` in the inner function (`slice()` makes a copy of an array):

```
Function.prototype.partial = ->
  fn = @
  args_original = Array.prototype.slice.call arguments
  ->
    args = args_original.slice()
    arg = 0
    i = 0
    while i < args.length && arg < arguments.length
      if args[i] is undefined
        args[i] = arguments[arg++]
      i++
    fn.apply @, args
```

Now the second call to `addOne` will return 11 as intended. 