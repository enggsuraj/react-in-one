## About

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

![contextAPI](https://user-images.githubusercontent.com/6918020/103394169-e0708400-4b4c-11eb-8927-9a1595c2c541.jpeg)

## Components and props

1. Components are like JavaScript functions that can accept any number of arguments.
2. Ideally, a function’s arguments are used for its operation.
3. With components, these arguments are called props. Props (short for properties) are object arguments.

## Prop drilling

React is all about updating the DOM of your application whenever it is absolutely necessary. To do this effectively, React uses a virtual DOM (VDOM) to update the actual DOM through a process known as reconciliation.

Passing props down in this way isn’t technically wrong and is, in fact, the default way to do it. This pattern is known as Prop-drilling.

In simple words when you’re passing data thru props from top to bottom of the component tree, you probably experienced this frustration where you want to pass data from the top level component to a 3rd or 4th level level component but you end up passing these data to components on each level of the tree.
This is what we call Prop-drilling!

## Solution #1 — Context API

### createContext

```
const MyContext = createContext(defaultValue);
```

Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

### Context.Provider

```
<MyContext.Provider value={/* some value */}>
```

Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

### Context.Consumer

```
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

A React component that subscribes to context changes. This lets you subscribe to a context within a function component.
