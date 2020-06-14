#  React & Java Script Notes - Gowdilya Jeyakumar



### Code-Splitting

[Documentation](https://reactjs.org/docs/code-splitting.html)

Code-Splitting is a feature supported by bundlers (example: Webpack), which create multiple bundles that can dynamically be loaded at runtime(["lazy loading"](#lazy-loading))




### Lazy Loading

Lazy loading (also known as asynchronous loading) is a design pattern commonly used to defer initialization of resources until it is needed. 


# JavaScript
## Array
### Join

Common Problem: If you want to take an array of strings and turn them into a single comma seperated string. This would be the ideal way.

    const elements = ['Fire', 'Air', 'Water'];
    console.log(elements.join());
    // expected output: "Fire,Air,Water"       


