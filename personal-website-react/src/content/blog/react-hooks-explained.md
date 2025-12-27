# React Hooks Explained

React Hooks revolutionized how we write React components. Let's explore the most commonly used hooks and understand their power.

## What Are Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8.

## useState

The most basic hook for managing state in functional components:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useEffect

Handle side effects like data fetching, subscriptions, or DOM manipulations:

```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(data => setUser(data));
  }, [userId]); // Re-run when userId changes

  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}
```

## Custom Hooks

Create your own hooks to reuse stateful logic:

```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

## Best Practices

1. **Only call hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Only call hooks from React functions** - Call them from functional components or custom hooks
3. **Use the ESLint plugin** - Install `eslint-plugin-react-hooks` to catch mistakes

## Conclusion

Hooks make functional components more powerful and easier to understand. They eliminate the need for class components in most cases and provide a more intuitive API for managing state and side effects.
