# State in React

## Overview

- [useState() difficulties](#problem-of-using-usestate)
- [React Context](#react-context)
    - [Context usage](#context-usage)
    - [Typical Mistakes](#typical-mistakes)
    - [Problems with Context](#problems-with-context)
- [Redux](#redux)
- [MobX](#mobx)
    -[MobX Usage](#mobx-usage)
- [What to use?](#what-to-use)
- [Useful links](#useful-links)

## Problem of using useState()

```tsx
// Component to show user details
const L3: FC<UserInputProps> = ({ nationality }) => (
  <strong>{nationality}</strong>
);

// Some component #2
const L2: FC<UserInputProps> = ({ nationality }) => (
  <L3 nationality={nationality} />
);

// Some component #1
const L1: FC<UserInputProps> = ({ nationality }) => (
  <L2 nationality={nationality} />
);
```

**Imagine if we need to change something:**

- A lot of useless work - need to update each component in hierarchy.
- Risk of mistake - one typo and everything failed.
- Performance reasons - all consumers will be re-rendered.

## React Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### Context usage

- Create context with default value:

```tsx
import { createContext } from "react";
const Context = createContext({
    nationality: "unknown",
    setNationality: (_: string) => {},
});
```

- Create state with similar properties:

```tsx
class App extends Component {
state = {
    nationality: "Unknown",
    setNationality: (v: string) =>
    this.setState({ ...this.state, nationality: v }),
    };
}
```

- Pass context to the render tree:

```tsx
render() {
    return (
        <Context.Provider value={this.state}>
            <h1>My App</h1>
            <L1 />
            <SomeContainer />
        </Context.Provider>
    );
}
```

- Use context from anywhere:

```tsx
import { useContext } from "react";
const L3: FC = () => {
    const { nationality } = useContext(Context);
    return <strong>{nationality}</strong>;
};
```

### Typical mistakes

- ⚠️ Using instead of local state: use context only for commonly used data only.
- ⚠️ Mutating context directly: 

```tsx
const SomeContainer: FC<SomeContainerProps> = () => {
    const ctx = useContext(context);
    const btnHandler = () => {
        const { nationality } = fetchUser();
        ctx.nationality = nationality;
    };
    return <MyBtn text="Fetch user" onClick={btnHandler} />;
};
```

### Problems with context

- It's not state management tool: Context was designed for sharing, not for updating.
- Performance issues: Changing context forces to rerender all context consumers. If your application is big and highly depends on the context - this might heart the performance.
- Developer experience issues: Context doesn't have it's own update mechanism. It's relies on the component state to track changes. You will need to create special components which will handle state just to avoid a mess.

**Solution - use state management tool!**

## Redux

**[Redux](https://github.com/reduxjs/redux)** - the most popular management tool.

**The idea of redux is really simple:**

Any event -> [Actions](https://www.tutorialspoint.com/redux/redux_actions.htm) -> [Reducer](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers) -> Store -> UI

In practice redux is not that simple:

- High learning curve
- Lot's of boilerplate
- Needs extra tools to be good

***Dan Abramov, Father of the redux*: *"I would like to amend this: don't use Redux until you have problems with vanilla React."***

## MobX

[MobX](https://github.com/mobxjs/mobx) - another state management tool.

**The idea of the MobX is not that simple**

MobX based on observables and patching your components.

A lot of people dislike MobX because it works like a "magic".

MobX has several advantages: 

- It's much easy to use
- It's has performance improvements out of the box
- It's not connected to the React at all

### MobX usage

- Install MobX and dependencies:

```bash
npm install mobx mobx-react
```

- Create a simple class:

```tsx
class UserDetailsStore {
    nationality = "unknown";
    constructor() {
        makeAutoObservable(this); // !important
    }
 
    setNationality(v: string) {
        this.nationality = v;
    }
}
```

- Create an instance of the class:

```tsx
const userDetailsStore = new UserDetailsStore();
```

- Mark component as an observer and use it:

```tsx
const L3: FC = observer(() => {
    const nationality = userDetailsStore.nationality;
    return <strong>{nationality}</strong>;
});
```

- Update is also simple: 

```tsx
type SomeContainerProps = {};
const SomeContainer: FC<SomeContainerProps> = () => {
        const btnHandler = () => {
        const { nationality } = fetchUser();
        userDetailsStore.setNationality(nationality);
    };
    return <MyBtn text="Fetch user" onClick={btnHandler} />;
};
```

- MobX has auto linting: 

```tsx
import { configure } from "mobx";
 
configure({
    enforceActions: "always",
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true
});
```

**Better use MobX + Context**

## What to use?

- Context - may be for the tiny projects 🤔
- MobX - default ⭐⭐
- Redux + Redux Toolkit - in case your team already knows it ⭐

## Useful links

- [Context](https://reactjs.org/docs/context.html)
- [Redux](https://redux.js.org/)
- [You might not need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
- [Redux Toolkit](https://js.org/?reduxtoolkit)
- [MobX](https://mobx.js.org/react-integration.html)