# React hooks

## Overview

- [Hook introduction](#what-is-hook)
- [Hook rules](#hook-rules)
- [Most useful hooks](#most-useful-hooks)
    - [useState()](#usestate)
    - [useEffect()](#useeffect)
    - [useContext()](#usecontext)
    - [useCallback()](#usecallback)
    - [Custom hook](#custom-hooks)
- [Useful links](#useful-links)

## What is hook?

**Hook** is just a function, that:
- Starts with *use*.
- Lives only inside functional components or other hook.

Hook extends functionality of functional components. Hooks allows you to have *state*, hook into lifecycle, share functionality.

**Pros:**
- Extends functional component functionality.
- Very nice way to share common logic.

**Cons:**
- Might become extremely messy.

⚠️ ***We can't use hooks in if statements and inside loops***

## Hook rules

1. Name hook with **use**:
    1. useState();
    2. useCallback();
    3. useCustomHook();
2. Use hook only inside functional component or other hook.
3. Don't use conditionally or in loops.

## Most useful hooks

### useState()

useState allows us to have smart functional components:

```tsx
const App = () => {
  const [state, setCounter] = useState(0);
  return (
    <button onClick={() => setCounter(state + 1)}>
      Increment: {state}
    </button>
  );
};
```
⚠️ **Dont mutate the state! Important for this hook!**

```tsx
const WrongApp = () => {
  const [state, setState] = useState({ isAdmin: false });
 
  const assignAdmin = () => {
    state.isAdmin = true; // WRONG
    setState(state);
  };
 
  return <button onClick={assignAdmin}>Assign admin</button>;
};
```

**So we need to create a new instance of object instead:**n

```tsx
const WrongApp = () => {
  const [state, setState] = useState({ isAdmin: false });
 
  const assignAdmin = () => {
    setState({ ...state, isAdmin: true }); // CORRECT
  };
 
  return <button onClick={assignAdmin}>Assign admin</button>;
};
```

### useEffect()

useEffect allows us to hook into component's lifecycle.

**Component did update:**

For *debugging*, *logging* or *measuring*:

```tsx
useEffect(() => console.log("component invoked"));
```

**Component did mount:**

*Calls to the server, initialization*:

```tsx
useEffect(()=> {console.log('one time action')}, []);
```

**Component did update and dependebcy changed:**

*Recall when the value changed*:

```tsx
useEffect(() => console.log("component invoked"), [dependency]);
```

**Component will unmount:**

*Cleanup the resources like timers or pending requests*:

```tsx
useEffect(() => {
    ... // logic
    return ()=> console.log('cleaning ...');
});
```

### useContext()

useContext allows us easily access the context.

**1. Create context first:**

```tsx
import { createContext } from "react";
 
const defaultValue = { name: "Yegor", isAdmin: true };
const UserCtx = createContext(defaultValue)
```

**2. Provide context into react application:**

```tsx
const App = () => {
  return (
    <UserCtx.Provider value={defaultValue}>
      <h1>This is my app</h1>
      <AboutUser />
    </UserCtx.Provider>
  );
};
```

**3. useContext from any functional component:**

```tsx
const AboutUser = () => {
  const { name, isAdmin } = useContext(UserCtx);
  return (
    <div>
      UserName: {name}, isAdmin: {isAdmin}
    </div>
  );
};
```

### useCallback()

useCallback returns the same function unless dependecies is changed.

**For example:**

```tsx
type WithCallback = { callback: () => void };
 
class ExpensiveComponent extends PureComponent<WithCallback> {
  render() { return <div>Expensive</div>; }
  componentDidUpdate() { console.log("updated"); }
}
```

**The issue:**

```tsx
const App = () => {
  const [state, setState] = useState(0);
  const callback = ()=> {};
  return (
    <>
      <ExpensiveComponent callback={callback} />
      <button onClick={() => setState(state + 1)}>
        Increment: {state}
      </button>
    </>
  );
};
```

**The solution:**

```tsx
const callback = useCallback(() => {}, []);
```

### Custom hooks

**Simplify interface and hide the logic inside a hook:**

```tsx
const useCounter = (defaultValue: number) => {
  const [state, setState] = useState(defaultValue);
  const increment = useCallback(
    () => setState(state + 1), 
    [state]);
  return { state, increment };
};
```

**Usage is the same but easier:**

```tsx
const App = () => {
  const { state, increment } = useCounter(0);
  return (
      <button onClick={increment}>Increment: {state}</button>
  );
};
```

## Useful links

- [Useful react hooks](https://www.smashingmagazine.com/2021/11/useful-react-hooks/)