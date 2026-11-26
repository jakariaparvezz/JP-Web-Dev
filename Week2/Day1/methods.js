/*Objects can contain functions (Methods)
When a function is stored inside an object, we commonly call it a method.
*/

const user = {
  name: "Rahim",
  age: 25,

  introduce: function () {
    console.log("Hello, I am " + this.name);
  }
};

user.introduce();