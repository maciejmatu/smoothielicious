---
templateKey: blog-post
title: Style Components Nitty-Gritty
date: 2018-04-10T21:58:34.941Z
description: Learn alternative way to style React applications in JS.
tags:
  - styled-components
  - react
---
![Styled-components — an alternative way to style React applications in JS.](https://cdn-images-1.medium.com/max/2800/1*6E-EG6HczqSSsEQFgFlG-A.png)*Styled-components — an alternative way to style React applications in JS.*

**UPDATED (20.03.2018)**

Recently, I was starting a new project and the time came, when I had to decide on my approach to styling. Of course, I could go with traditional BEM, but I was leaning towards CSS modules, since they go well with React. I was just about to start, when my co-worker asked me if I had considered using [**styled-components](https://www.styled-components.com/).**

At first, I was sceptical of this idea. In general, I am not comfortable with writing styles in JavaScript. But hey, when is the right time to try out new things?

Styled-components are quite [popular on github](https://github.com/styled-components/styled-components) (10.8k, at the time of writing) and have already been [used in production](https://github.com/styled-components/awesome-styled-components#real-apps). Without any further consideration, I decided to give it a try.

## What are Styled-Components?

Let’s assume you are a CSS beginner and you heard about this new, popular library called “styled-components”. After a quick research, you will find out that they are yet another approach to writing styles with CSS, in JavaScript. Let’s start off by saying that this library was created with **React** in mind, but the idea is quite reusable and was already implemented for [**vue.js](https://github.com/styled-components/vue-styled-components)**, [**React Native](https://www.styled-components.com/docs/basics#react-native),** and even for [**traditional DOM](https://github.com/styled-components/styled-elements)**. These are not as popular as the initial implementation for React. Having that out of the way, we can look at the gist of what styled-components are and the three biggest problems, that they try to solve.

## Creating the First Component

Since styled-components are generated on runtime, we don’t have to modify our bundler config. Wohoo! All you need to do to start using them in your project is running npm install styled-components. Then, import them into your component. Let’s take a look at a real-life example:

<iframe src="https://medium.com/media/3a50dd20f7a5de6c62595402c1a5bde1" frameborder=0></iframe>

Here, we created a component that renders HeaderText, which is a styled h1 element. If we pass large prop, the button will be rendered with bigger font-size. Normally, let’s say in BEM, we would have to create two classes and apply them conditionally.

Let’s take a look at the same thing, but using traditional approach:

<iframe src="https://medium.com/media/c3b765c9deae9a9fdc95160f8ca294f0" frameborder=0></iframe>

<iframe src="https://medium.com/media/7d648cfc8f70f01b8fed1358d3e47066" frameborder=0></iframe>

The second example is, obviously, more complex. We have to remember about passing className from props, as well as all the other props, like onClick or other events.

The whole functionality of styled-components is backed on, rather unpopular and little known, ES6 feature, called Tagged Template Literals. To show how they work, we are going to create a simple function log. It will log all passed arguments to the console and use them in two different scenarios.

<iframe src="https://medium.com/media/8bad38f360e25afd0abfc2f442c2014b" frameborder=0></iframe>

If we invoke it as a standard function, it will simply put out all the arguments passed into it, one by one. Although, if we invoke this function using tagged template literals, we are going to get an array of all strings from template literal as the first argument; followed by variables or functions that were passed between interpolation brackets.

If you want to learn more about Tagged Template Literals, check out [MDN documentation](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/template_strings#Tagged_template_strings) or [this article about the magic behind styled-components](http://mxstbr.blog/2016/11/styled-components-magic-explained/), that was written by one of the creators of this library, [*Max Stoiber](undefined)*.

## What Problems do Styled-Components Solve?

### Styles Encapsulation

In the past (which is not that long ago, but come on, this is JS…) you had to use one of these more popular methodologies to keep your styles clean and reusable. BEM was really popular, but we also had OOCSS, SMACSS, or even Atomic CSS. They actually still are relevant and extremely useful, but there are new kids on the block that solve the issue of scoping styles in another manner.

CSS modules allow us to import our CSS or SCSS files into JavaScript, and refer to our class names as keys in an imported object. It may sound complicated, but behind the scenes it all boils down to concatenating our simple class names, like .button, with some random strings, like .button_sRgs42. Thanks to that we can benefit from local scoping. Styled-components also generate random strings for class names. What’s powerful is that they do it behind the scenes, without any need for importing stylesheets and such. It leads us to the second problem.

### Connecting Styles with Components

With styled-components, when you want to style an element, you create a new one first and then apply styles to it. The library automatically creates a random string and applies the generated class name to our React , vue.js, DOM, or other component.

### Dynamic Style Changes

Because we are writing our styles in JavaScript, we can dynamically change them. So instead of creating two different classes for our .default and .disabled button, we can simply use a ternary operator in our styles, which will look something like: color: ${disabled ? 'grey' : 'black'};. Where ${} is yet another ES6 feature, called “string interpolation”. If it’s new to you, you can read more about it on [MDN](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/template_strings).

## **Behind the Scenes**

Let’s look into some inner workings of styled-components, to better understand what are we actually using. Let’s do a step-by-step walkthrough of what happens when you create a styled component.

<iframe src="https://medium.com/media/f160edc45c0a312eec3a427d8becbfe3" frameborder=0></iframe>

First, we specify that we want to create a component from a button element. Styled-components create a new React Component. When componentWillMount function is invoked, it checks if component will change dynamically based on props. If not, the engine doesn’t try to re-generate those styles. Similar thing happens in componentWillReceiveProps. If it’s dynamic, the engine re-calculates styles by invoking setState function, in which the needed calculations are made. When componentWillUnmount is invoked, the engine simply removes any listeners for changes, so that it doesn’t re-calculate any unused styles.

When we render the component, the engine takes the array of strings and all the arguments returned from tagged template literal. Based on button component from the above example, arguments look like this:

<iframe src="https://medium.com/media/e76422f320fcaab7e292c86ca7ce1544" frameborder=0></iframe>

As we saw earlier, the first argument is an array of all strings between curly interpolation brackets and the following arguments (in above example there is only one) are variables/functions passed in between interpolation brackets.

Then the component checks if any of the arguments is a function. If so, it applies this function to a string from the array with correct id (first function is applied to string with index 0). Next, it passes the component props into this function as arguments. It appends the result of the function onto a chosen string. At the end, it joins all the strings and injects them into our page head tag.

<iframe src="https://medium.com/media/ba79113d589e12efa0dd45ccc8c4f4b2" frameborder=0></iframe>

This description is really simplified, but it shows the main mechanism that stands behind styled-components. It allows to write actual CSS and supports 100% of its features, which hadn’t been done before (or just wasn’t as popular).

Below, I prepared a small demo that aims to mimic the behaviour of styled-components (without actually injecting the styles; I only generate CSS string).

<iframe src="https://medium.com/media/639923ea057f110fb06816ba0fe837d9" frameborder=0></iframe>

## Style Injection

From version 3.1.0, released at the end of January 2018, styled-components have started using lesser known [insertRule](https://developer.mozilla.org/pl/docs/Web/API/Stylesheet/insertRule) API in production. This small change allows to shave off hundreds of milliseconds from [Time-To-First-Interactive](https://github.com/WPO-Foundation/webpagetest/blob/master/docs/Metrics/TimeToInteractive.md#time-to-first-interactive-calculation) in most applications, and in library stress-tests (not a ‘real world’ implementation) it resulted in 10x-20x speed increase. Removal of that bottle-neck makes styled-components more appealing to use also in larger applications, not only in side-projects.

## Tooling

There are a few tools that were designed to help you while using styled-components. The most useful by far is the [**babel plugin](https://github.com/styled-components/babel-plugin-styled-components). **It allows to specify some configuration, that really helps with development, such as [server side rendering](https://www.styled-components.com/docs/advanced#server-side-rendering) and using pretty class names (really helps with debugging). Thanks to that we can also specify preprocessing and minification options.

## **Problems**

Styled-components are not perfect (yet). I encountered many problems, some small, some larger. Some of them probably will be solved soon, since this project is being actively developed by many contributors. These are the things, that you should know, before starting a project that is using styled-components.

* There are some [performance problems](https://github.com/styled-components/styled-components/issues/583). Lack of understanding of how they work can lead to unnecessary re-rendering of components and poor animation performance. This was partially solved by recent introduction of insertRule API.

* If anything goes wrong with styled-components, the whole app crashes.

* They cannot be extracted into a static CSS file.

* Linting is buggy, e.g. it has problems with linting whitespace, if there are any rules that specify the amout of it, when using conditional blocks of styles.

* Tight coupling with react. It’s hard to migrate from s currently used framework or reuse an existing component in another project.

* It’s still a new technology with not so many well-defined methodologies and approaches.

## Personal Opinion

After using styled-components for about a month, I can say that I’m not yet convinced about their superiority over creating actual stylesheets. However, I can definitely see a huge potential here. Even if using them on the web still feels a bit experimental, I had the greatest experience, while working with them in a React Native project. They work way better than writing CSS as JavaScript objects.

Despite any flaws, I think styled-components are an amazing piece of work and another great step in the evolution of modern CSS. Hat’s off to [*Glen Maddern](undefined) and [Max Stoiber](undefined), *who are the creators of this library.

## **Want to Know More?**

Below I attach a few articles and resources that were a huge help to me, when I was writing this article. I strongly recommend checking them out. If after reading this article you still have some question, they will probably come with the answers. Otherwise, I encourage you ask them in the comments section.

[**v3.1.0: A massive performance boost and streaming server-side rendering support**
*A new CSS injection mechanism means faster client-side rendering in production 🔥 and streaming server-side rendering…*medium.com](https://medium.com/styled-components/v3-1-0-such-perf-wow-many-streams-c45c434dbd03)

[**styled-components: Documentation**
*Learn how to use styled-components and to style your apps without stress*www.styled-components.com](https://www.styled-components.com/docs)

[**Why I don't use Styled Components · Issue #637 · styled-components/styled-components**
github.com](https://github.com/styled-components/styled-components/issues/637)

[**With styled-components into the future**
*Preprocessing is dead, long live preprocessing!*medium.com](https://medium.com/styled-components/with-styled-components-into-the-future-d1d917e7c22c)

[**Stop using CSS in JavaScript for web development**
*9 fairy tales*medium.com](https://medium.com/@gajus/stop-using-css-in-javascript-for-web-development-fa32fb873dcc)
[**The magic behind 💅 styled-components**
mxstbr.blog](http://mxstbr.blog/2016/11/styled-components-magic-explained/)

[**💅 styled components 💅 — Production Patterns**
*styled-components is a library for React and React Native that allows you to use component-level styles in your…*medium.com](https://medium.com/@jamiedixon/styled-components-production-patterns-c22e24b1d896)

**About the Author 
**Maciej is Frontend Developer at EL Passion. You can find him on [GitHub](https://github.com/maciejmatu) or [LinkedIn](https://www.linkedin.com/in/maciej-matuszewski-5087a975/).

Find [EL Passion](https://elpassion.workable.com) on [Facebook](https://www.facebook.com/elpassion/), [Twitter](https://twitter.com/elpassion) and [Instagram](https://www.instagram.com/elpassion/).
