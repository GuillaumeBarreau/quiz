# React

**Q:** What is React?
  
**A:** React (aka React.js or ReactJS) is an open-source front-end JavaScript library that is used for building composable user interfaces, especially for single-page applications. It is used for handling the view layer for web and mobile apps based on components in a declarative approach.

**Q:** Your team needs to have a tool that provides a digital online assistant that can provide speech support. Which of the following services can be used for this purpose?

- [ ] Azure Machine Learning.
- [ ] Azure IoT Hub.
- [x] Azure AI bot.
- [ ] Azure Functions.

**Q:** What is the history behind React evolution?

**A:** The history of ReactJS started in 2010 with the creation of XHP. XHP is a PHP extension that improved the syntax of the language, making XML document fragments valid PHP expressions. Its primary purpose was to create custom and reusable HTML elements. However, there were some limitations with XHP, such as the inability to address the problem of too many roundtrips to the server in dynamic web applications. This led to the creation of the initial prototype of React with the name FaxJS by Jordan, inspired by XHP. Eventually, React was introduced as a new library in the JavaScript world. It's worth noting that JSX, a fundamental part of React, comes from the idea of XHP.

**Q:** What is the difference between state and props?

**A:** In React, both state and props are plain JavaScript objects and are used to manage the data of a component. However, they are used in different ways and have different characteristics. `State` is managed by the component itself and can be updated using the `setState()` function. Unlike `props`, `state` can be modified by the component and is used to manage the internal state of the component. Changes in the `state` trigger a re-render of the component and its children. On the other hand, `props` (short for "properties") are passed to a component by its parent component and are read-only, meaning that they cannot be modified by the component itself. `Props` can be used to configure the behavior of a component and to pass data between components.

**Q:** What is the use of refs?

**A:** Refs are used in React to return a reference to a DOM element or an instance of a component. They should be avoided in most cases, but they can be useful when you need direct access to the DOM element or an instance of a component.

**Q:** What is Virtual DOM?

**A:** The Virtual DOM (VDOM) is an in-memory representation of the real DOM. It is a key concept in React's performance optimization. When you update a component in React, it doesn't immediately update the actual DOM in the browser. Instead, it first updates the Virtual DOM, which is a lightweight copy of the real DOM. React then compares the new Virtual DOM with the previous one to determine the differences (diffing), and it calculates the most efficient way to update the real DOM based on these differences. This process, known as reconciliation, allows React to update the UI efficiently and minimize the number of direct manipulations to the actual DOM, resulting in better performance.

**Q:** What is the difference between Shadow DOM and Virtual DOM?

**A:** The Shadow DOM and the Virtual DOM are two different concepts used in web development, and they serve distinct purposes:

- **Shadow DOM**: The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. It encapsulates the DOM and styles of a component, preventing them from affecting or being affected by the outer DOM or other components. This helps in creating isolated and reusable components with their own encapsulated styles and functionality. Shadow DOM is typically associated with web components and allows for better encapsulation and modularity.

- **Virtual DOM**: The Virtual DOM, on the other hand, is not a browser technology but a concept implemented by libraries in JavaScript on top of browser APIs, with React being a prominent example. The Virtual DOM is an in-memory representation of the real DOM. It serves as an intermediary step between rendering changes in a component and updating the actual DOM. React uses the Virtual DOM to optimize updates by calculating the difference (diff) between the new Virtual DOM and the previous one. It then updates the real DOM based on this diff, which minimizes costly direct manipulations to the actual DOM and improves performance.

In summary, Shadow DOM is primarily about scoping and encapsulating DOM and styles within web components, while the Virtual DOM is about optimizing DOM updates in libraries like React.

**Q:** What is React Fiber?

**A:** Fiber is the new reconciliation engine or reimplementation of the core algorithm in React v16 and later versions. The goal of React Fiber is to improve its suitability for various areas like animation, layout, gestures, and the ability to pause, abort, or reuse work. It also introduces the concept of assigning priority to different types of updates and introduces new concurrency primitives.

**Q:** What is the main goal of React Fiber?

**A:** The main goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering, which means the ability to split rendering work into smaller chunks and spread it out over multiple frames. This allows React to be more responsive and to maintain a smooth user experience even when performing computationally intensive tasks. In addition to incremental rendering, React Fiber introduces features related to error boundaries, better support for asynchronous rendering, and improved scheduling of updates, all aimed at enhancing React's performance and capabilities.

**Q:** What is the difference between createElement and cloneElement?

**A:** In React, both `createElement` and `cloneElement` are methods used for creating and manipulating elements, but they serve different purposes:

- `createElement`: `createElement` is a method used to create a new React element. It takes three arguments: the type of the element (usually a React component or a string for HTML elements), an optional object of properties (props) to set on the element, and the element's children. It returns a new React element that can be rendered to the DOM.

- `cloneElement`: `cloneElement` is a method used to clone a React element and provide new props for the cloned element. It takes an existing React element as its first argument and an object of new props as its second argument. It returns a new React element that is a clone of the original element with the specified props applied.

In summary, `createElement` is used for creating new elements, while `cloneElement` is used for creating clones of existing elements with modified props.

**Q:** What is Lifting State Up in React?

**A:** When several components need to share the same changing data, it is recommended to lift the shared state up to their closest common ancestor. This means that if two or more child components need access to the same piece of data, you should move that state up to a common parent component instead of maintaining local state in each of the child components. By doing so, you ensure that the data is synchronized and consistent across all components that rely on it, and you avoid prop-drilling (passing data through multiple levels of components). Lifting state up is a fundamental pattern in React that promotes the reusability and maintainability of components.

**Q:** What are the lifecycle methods of React?

**A:** Before React 16.3, React had several lifecycle methods that components could implement to hook into the component's lifecycle. These methods included:

1. `componentWillMount`: Executed before rendering and is used for app-level configuration in your root component.
2. `componentDidMount`: Executed after the first rendering, and here all AJAX requests, DOM or state updates, and setting up event listeners should occur.
3. `componentWillReceiveProps`: Executed when a particular prop updates to trigger state transitions.
4. `shouldComponentUpdate`: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false. It is a great place to improve performance, as it allows you to prevent a re-render if the component receives a new prop.
5. `componentWillUpdate`: Executed before re-rendering the component when there are props and state changes confirmed by `shouldComponentUpdate()`, which returns true.
6. `componentDidUpdate`: Mostly used to update the DOM in response to prop or state changes.
7. `componentWillUnmount`: Used to cancel any outgoing network requests or remove all event listeners associated with the component.

It's important to note that React 16.3 and later introduced a new set of lifecycle methods and some changes to the existing ones to make them more predictable and less error-prone.

**Q:** What is reconciliation?

**A:** Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React uses a diffing algorithm so that component updates are predictable and faster. When there's an update of components, React first calculates the difference between the real DOM and the copy of the DOM (Virtual DOM). React stores a copy of the Browser DOM, called the Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. This comparison is done by the Diffing Algorithm. Now React compares the Virtual DOM with the Real DOM, finding out the changed nodes and updating only the changed nodes in the Real DOM, leaving the rest of the nodes as they are. This process is called Reconciliation.

**Q:** Why are fragments better than container divs?

**A:** Fragments are often preferred over container divs in React for several reasons:

1. **Performance**: Fragments are a bit faster and use less memory because they don't create an extra DOM node. This performance benefit is most noticeable in applications with very large and deep component trees.

2. **Cleaner HTML**: Using fragments keeps your rendered HTML cleaner and free from unnecessary container divs. This can be especially important when working with CSS or when rendering lists, as it avoids introducing extra elements that can affect styling or layout.

3. **Avoiding CSS Issues**: Container divs can sometimes cause unintended CSS side effects or interfere with CSS frameworks. Fragments help you avoid these issues because they don't introduce additional elements into the rendered output.

4. **Improved Component Composition**: Fragments allow you to compose components more naturally without the need for wrapper divs. This can lead to cleaner and more maintainable component hierarchies.

5. **Less Nesting**: Using fragments reduces the nesting level of your components, making your component tree easier to understand and reducing the complexity of your JSX.

In summary, fragments provide a cleaner and more efficient way to group multiple elements in React without introducing unnecessary container divs.

**Q:** What are stateless components?

**A:** Stateless components, also known as functional components, are a type of React component that doesn't have an internal state. They are pure functions that take props as input and return JSX elements as output. Stateless components are primarily responsible for rendering UI elements based on the data provided through props. They are stateless because they don't manage their own state using `setState()`, making them simpler and easier to reason about.

Stateless components are a great choice for presentational components that focus on how things look and don't involve complex logic or state management. They are easy to test and promote the idea of separating the UI from the data and behavior. With the introduction of React hooks, stateless components can also handle certain types of local state and side effects, further enhancing their capabilities.

**Q:** How to apply validation on props in React?

**A:** When the application is running in development mode, React will automatically check all props that we set on components to make sure they have the correct type. If the type is incorrect, React will generate warning messages in the console. It's disabled in production mode due to the performance impact. The mandatory props are defined with `isRequired`.

The set of predefined prop types includes:

- `PropTypes.number`
- `PropTypes.string`
- `PropTypes.array`
- `PropTypes.object`
- `PropTypes.func`
- `PropTypes.node`
- `PropTypes.element`
- `PropTypes.bool`
- `PropTypes.symbol`
- `PropTypes.any`

**Q:** What are the advantages of React?

**A:** Below are the main advantages of React:

- Increases the application's performance with Virtual DOM.
- JSX makes code easy to read and write.
- It renders both on the client and server side (SSR).
- Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.
- Easy to write unit and integration tests with tools such as Jest.

**Q:** What are the limitations of React?

**A:** Apart from the advantages, there are a few limitations of React too:

- React is just a view library, not a full framework.
- There is a learning curve for beginners who are new to web development.
- Integrating React into a traditional MVC framework requires some additional configuration.
- The code complexity increases with inline templating and JSX.
- Too many smaller components can lead to overengineering or boilerplate.

**Q:** How are error boundaries handled in React v15?

**A:** React v15 provided very basic support for error boundaries using the `unstable_handleError` method. It has been renamed to `componentDidCatch` in React v16 and later versions. Error boundaries are components that catch JavaScript errors anywhere in their child component tree and display a fallback UI instead of crashing the whole application.

**Q:** What are the recommended ways for static type checking?

**A:** Normally, we use the PropTypes library for type checking in React applications. For larger codebases, it is recommended to use static type checkers such as Flow or TypeScript. These tools perform type checking at compile time and provide auto-completion features, helping catch type-related errors early in the development process.

**Q:** What is the use of the react-dom package?

**A:** The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:

- `render()`
- `hydrate()`
- `unmountComponentAtNode()`
- `findDOMNode()`
- `createPortal()`

**Q:** What will happen if you use setState() in the constructor?

**A:** When you use `setState()` in the constructor, it assigns to the object's

 state, but React will also re-render the component and all its children. This is because React assumes that the initial state set in the constructor reflects the initial render state, and any changes made to it should trigger a re-render. This can lead to performance issues, as the component might re-render unnecessarily. To avoid this, it's recommended to set the initial state directly by assigning an object to `this.state` in the constructor without using `setState()`. This way, the initial state is set without triggering a re-render.

**Q:** How to enable production mode in React?

**A:** You should use Webpack's DefinePlugin method to set `NODE_ENV` to production, which will strip out things like PropTypes validation and extra warnings. This is typically done in your Webpack configuration file. Here's an example of how you can do it:

```javascript
const webpack = require('webpack');

module.exports = {
  // ...other webpack configuration...
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
```

By setting `NODE_ENV` to 'production', you signal to React that it should optimize the build for production, which includes stripping out development-specific code and checks.

**Q:** What is the difference between React and ReactDOM?

**A:** The react package contains core functionality related to React elements, components, and the React reconciliation algorithm. It's the package that you import when you write React components using JSX and when you work with React elements. However, it doesn't provide any specific DOM-related functionality.

On the other hand, the ReactDOM package provides the specific DOM-related methods that are required for rendering React components into the DOM. It includes methods like `ReactDOM.render()` and `ReactDOM.unmountComponentAtNode()`.

In summary, while React (the react package) provides the core functionality of React, ReactDOM (the react-dom package) is responsible for interacting with the DOM and rendering React components into it.

**Q:** What is Jest?

**A:** Jest is a JavaScript unit testing framework created by Facebook based on Jasmine. It provides automated mock creation and a jsdom environment for running tests. Jest is often used for testing React components and applications.

Bien sûr, voici la suite des questions que vous avez posées :

**Question sur React Router :**

**Q:** What is React Router?

**A:** React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.

**Q:** What is React Intl?

**A:** The React Intl library makes internationalization in React straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, and numbers, to pluralization. React Intl is part of FormatJS, which provides bindings to React via its components and API.

**Q:** What is the purpose of ReactTestUtils package?

**A:** ReactTestUtils are provided in the with-addons package and allow you to perform actions against a simulated DOM for the purpose of unit testing.

**Q:** What is Redux?

**A:** Redux is a predictable state container for JavaScript apps based on the Flux design pattern. Redux can be used together with React or with any other view library. It is tiny (about 2kB) and has no dependencies.

**Q:** Can I dispatch an action in reducer?

**A:** Dispatching an action within a reducer is an anti-pattern. Your reducer should be without side effects, simply digesting the action payload and returning a new state object. Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects.

**Q:** What are the drawbacks of MVW pattern?

**A:** The MVW (Model-View-Whatever) pattern, similar to the MVC pattern, has some drawbacks, including:

1. DOM manipulation is very expensive, which causes applications to behave slowly and inefficiently.
2. Due to circular dependencies, a complicated model was created around models and views.
3. Many data changes occur in collaborative applications (like Google Docs).
4. There is no straightforward way to implement undo (travel back in time) without adding a significant amount of extra code.
