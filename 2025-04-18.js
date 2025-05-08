// 题目
/*

package.json中 peerDependencies 有没有用到过?作用是什么？

*/

/*
答案：

 peerDependencies：该配置项通常用于开发插件或者库的时候，表示需要与项目（这里的项目指的是使用我们插件或者库的项目）一起使用的依赖，确保这些依赖有一个合适的版本。

	- 假设现在在开发一个 react 插件，你在开发 react 的时候肯定会涉及到使用 react 的环境，如果此时你将 react 记入到 dependencies，那么则意味着别人项目在使用你的插件的时候，也会去下载 react。这里就会存在两个问题
		- 别人既然使用你这个插件，那么说明别人也是在做 react 的开发，别人的项目自然而然已经安装了react
		- 如果不记入到 dependencies 里面，那么又会存在因为版本不一致可能出现的兼容问题
	- peerDependencies 就是用来解决这个问题，例如我现在在开发一个 react 的插件，用到了 react 以及 react-dom

	```json
	{
		"name": "my-react-plugin",
		"version": "1.0.0",
		"peerDependencies": {
			"react": "^17.0.0",
			"react-dom": "^17.0.0"
		}
	}
	```

	回头别人在使用你这个插件的时候，它就必须确保安装符合版本要求的依赖。否则 npm 是会给出警告。
*/