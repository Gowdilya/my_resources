# React

### [Webpack vs react-scripts build](https://stackoverflow.com/questions/52177318/webpack-build-vs-react-scripts-build)

facebook created cra which internally uses webpack, pre-configured to include all the nice tools to take care of these basics(hot-module-reloading and code-splitting support) and help you focus on the React part of your code. It hides webpack from you as much as possible, otherwise the build process may break if the configuration is changed by the user.

Need to customize or use webpack when the default under the hood webpack of create-react-app doesn't support what you need.

Example: if you want to write a component library to reuse in other apps... will need to switch to webpack and learn.

# Hooks

## useState

   
```
const [count, setCount] = useState(0); 
```

## useEffect: Hooks Equivalent to Life Cycle Methods

One Benefit of useEffect over Life Cycle Methods is Seperation of concerns.
You can have multiple useEffects, therefore seperating logic.
While a component only has one of each Life Cycle Methods (Example: only one compondentDidMount per component).


#### Component Did Mount

        componentDidMount(){
            // component mounted

        }

        =>

        useEffect(() =>{
            //called only once
        }, [])

---

#### Component Will Unmount

        componentWilUnmount(){
            // component unmounted
        }

        =>

        useEffect(() =>{

            return()=>{
                //called before unmounting
            }

        }, [])

---
#### Component  Did Update

    componentDidUpdate(){
        //updated values
    }

    =>

    useEffect(()=>{
        //called everytime
    })

### Skipping Effects to ***Optimize Performance***

    useEffect(() => {
    document.title = `You clicked ${count} times`;
    }, [count]); // Only re-run the effect if count changes

   
**Note**

If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect. Otherwise, your code will reference stale values from previous renders. 

https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies






If you want to run an effect and clean it up `only once` (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. This isn’t handled as a special case — it follows directly from how the dependencies array always works.

https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often

    function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
        setCount(count + 1); // This effect depends on the `count` state
        }, 1000);
        return () => clearInterval(id);
    }, []); // 🔴 Bug: `count` is not specified as a dependency

    return <h1>{count}</h1>;
    }
We created a `closure` with value of count set to 0, so inside the setInterval `callback` the value of count does not change.

Specifying [count] as a list of dependencies would fix the bug, but would cause the interval to be reset on every change. Effectively, each setInterval would get one chance to execute before being cleared (similar to a setTimeout.) 

To fix this, we can use the functional update form of setState.
It lets us specify how the state needs to change without referencing the current state:

    function Counter() {
  const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
        setCount(c => c + 1); // ✅ This doesn't depend on `count` variable outside
        }, 1000);
        return () => clearInterval(id);
    }, []); // ✅ Our effect doesn't use any variables in the component scope

    return <h1>{count}</h1>;
    }

 ## UseRef
