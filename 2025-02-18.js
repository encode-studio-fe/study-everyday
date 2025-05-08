
// 题目
// 讲一讲继承的所有方式都有什么？手写一个寄生组合式继承
/*

原型链继承
重点：让新实例的原型等于父类的实例。
特点：实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）
缺点：
1、新实例无法向父类构造函数传参。
2、继承单一。
3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）
借用构造函数继承
重点：用 call( ) 和 apply( ) 将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））
特点：
1、只继承了父类构造函数的属性，没有继承父类原型的属性。
2、解决了原型链继承缺点1、2、3。
3、可以继承多个构造函数属性（call多个）。
4、在子实例中可向父实例传参。
缺点：
1、只能继承父类构造函数的属性。
2、无法实现构造函数的复用。（每次用每次都要重新调用）
3、每个新实例都有父类构造函数的副本，臃肿。
组合模式
重点：结合了两种模式的优点，传参和复用
特点：
1、可以继承父类原型上的属性，可以传参，可复用。
2、每个新实例引入的构造函数属性是私有的。
缺点：调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数。
寄生组合式继承
重点：修复了组合继承的问题

function Parent(name) {
	this.name = name;
	this.num = [0, 1, 2];
}

Parent.prototype.sayName = function() {
	return this.name;
};

function Child(name, age) {
	Parent.call(this, name);
	this.age = age;
}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.constructor = Child;

// The first instance
const boy = new Child('Jothan', 22);

boy.num.push(3);
console.log(boy.num);
// [0, 1, 2, 3]

boy.sayName();
// 'Jothan'

// The second instance
const girl = new Child('Kat', 18);

console.log(girl.num);
// [0, 1, 2]

girl.sayName();
// 'Kat'



*/