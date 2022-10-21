# React component

## What is component?
In general, **component** is an independent unit of code that encapsulate single, logical functionality.

But in *React*, component is a function or class that accepts *props* and returns *JSX*.

### But why we should use components?
1. **Reusing!** Components are very useful for re-using logic or styles. Create one component and use it across all over the application.

Reusing gives us:
- Less mistakes
- Speed up the coding
- Better maintainability

2. **Encapsulation.** Components hide complexity and the realization to make you deal with them as easy as possible.

Encapsulation gives us:
- Much more easier maintenance
- Better developer experience
3. **Tesing.** It's much more easier to test a single, small component which has one or few resposibilities that the
whole App Components are great for testing which increase maintability. Easier tests = less bugs and fragility.

## Component Types
1. Functional Components

```tsx
const App = () => (<h1>Hello, World!</h1>);
```

```tsx
function App() {
  return <h1>Hello world</h1>;
}
```
1. Class-based Components

```tsx
import { PureComponent } from 'React';
 
class App extends PureComponent {
  render() {
    return <h1>Hello world</h1>;
  }
}
```
If our component extends *PureComponent* it means that component will only be re-rendered if props change.

```tsx
import { Component } from 'React';
 
class App extends Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

### What's the difference between FC and Class-based component?
- **Nature:** function vs class.
- **The way we access state:** useState() vs this.setState()
- **LifeCycle hooks** - some of the are not accessible for the FC.

### "Dumb" and "Smart" components

```tsx
export const AppGreetings = () => (
  <h1 className="header header1">I am a nice header</h1>
);
```
**Dumb components:** no state inside, made only for being nice.

**Smart components** - contains the state, contains the logic.

## How to pass data into the component
- From *props* - should be preferred.
- From *context*.
- Directly from the code.

Using *props* - the most correct:
```tsx
import { FC } from "react";
 
interface H1Props { 
    userName: string; 
}
 
const AppH1: FC<H1Props> = (props) => (
  <h1>Hello {props.userName}</h1>
);
 
export default () => <AppH1 userName="Hello world" />
```
Same way it works with class-based component:
```tsx
import { PureComponent } from "react";
 
type Props = { text: string };
class AppH1 extends PureComponent<Props> {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
```

We can pass to props anything we want:
```typescript
interface Props {
    userName: string;             // string
    userAge: number;              //number
    isAdmin: boolean;             // boolean
    badges: string[];             // array
    contacts: { email: string };  // object
    callback: ()=> void           // function
    icon: JSX.Element;            // Even another element
}
```
There is a simplier way to pass single component:
```tsx
import { FC, PropsWithChildren } from "react";
 
type Props = PropsWithChildren<{}>;
 
export const AppH1: FC<Props> = (props) => {
  return <h1 className="header header1">{props.children}</h1>;
};
```

## How to get data from the component

Callback - the best option to get data from the component:
```tsx
import { FC } from "react";
 
type BtnProps = { 
  onClick: (val: string) => void 
};
 
const Btn: FC<BtnProps> = (props) => (
  <button onClick={() => props.onClick("hello!")} />
);
 
<Btn onClick={(v) => alert(v)} />
```

## Component Lifecycle

React calls our components starting with the root component and so on until it runs out of child components. It creates a tree of component nodes. After that, react displays this structure in html. So our components have a life cycle.

                                               Lifecycle Phases:
                    Class-based                                             Functional
                - Initialization                                        - _
            (when contructor function is called)
                - Render                                                - function()
            (when render function is called)
                - ComponentDidMount                                     - useEffect(, [])
            (when component is already displayed)
                - ShouldComponentUpdate                                 - _
            (checks if we should re-render our component)
                - Render                                                - function()
                - ComponentDidUpdate                                    - useEffect()
                - ComponentDidCatch                                     - _
            (when we caught an exception)
                - ComponentWillUnmount                                  - useEffect
            (when our component is going to be removed)
            
### Most useful are
- ComponentDidMount - for one time action like fetching the server.
- ComponentDidUpdate - for side effect.
- ComponentWillUnmount - for cleanup.

## Useful Links
- [Documentation Article](https://reactjs.org/docs/react-component.html)
- [Smart VS Dumb components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43)
- [Component LifeCycle](https://www.freecodecamp.org/news/how-to-understand-a-components-lifecycle-methods-in-reactjs-e1a609840630)
- [Component LifeCycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)