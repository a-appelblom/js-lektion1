"use strict";
var hello = "hello tier 0";
var hello = "test";
{
  var hello = "hello tier 1";
  {
    var hello = "hello tier 2";
    {
      var hello = "hello tier 3";
      {
        var hello = "hello tier 4";
        {
          var hello = "hello tier 5";
        }
      }
    }
  }
  //   hello;
  console.log(hello);
}

doStuff({ bool: true, num: 2 });
