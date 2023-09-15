### What is the primary purpose of React (React.js or ReactJS)?

- [ ] To manage server-side logic in web applications.
- [ ] To handle database interactions in mobile apps.
- [x] To build composable user interfaces for web and mobile applications.
- [ ] To facilitate backend development for single-page applications.

### What is the history behind React's evolution?

- [ ] React was originally created in 2010 as a PHP extension called XHP for improving PHP syntax.
- [ ] XHP was primarily designed to create custom and reusable HTML elements.
- [ ] XHP successfully prevented cross-site scripting attacks but couldn't address the issue of multiple server roundtrips in dynamic web applications.
- [x] React was inspired by XHP and was initially developed as FaxJ by Jordan to address the limitations of XHP, introducing a new library to the JavaScript world.
- [ ] JSX is entirely unrelated to XHP.

### What is the difference between state and props in React?

- [ ] Both state and props are used to manage data in a React component.
- [ ] State is passed to a component by its parent component, while props are managed internally.
- [ ] State is read-only and can be modified using the setState() function.
- [x] State is managed by the component itself and can be updated, triggering re-renders, while props are passed to a component by its parent and are read-only.
- [ ] Props are used to manage the internal state of a component, while state configures component behavior.

### What is the use of refs in React?

- [ ] Refs are primarily used to pass data between parent and child components.
- [ ] Refs should be used in most cases for efficient rendering of React components.
- [ ] Refs are used to style components in React.
- [x] Refs are used to return a reference to the element or an instance of a component, allowing direct access to the DOM element or component instance when necessary.
- [ ] Refs are used to manage component state in React.

### What is the Virtual DOM (VDOM) in React?

- [ ] The VDOM is the actual DOM representation of a web page.
- [ ] VDOM is a feature used to create dynamic animations in React applications.
- [ ] The VDOM is a part of the browser's memory used to store JavaScript variables.
- [x] The Virtual DOM is an in-memory representation of the Real DOM, serving as an intermediary step between the render function and the rendering of elements on the screen in React. This process is known as reconciliation.
- [ ] The VDOM is a tool for managing server-side rendering in React applications.

### What is the primary difference between Shadow DOM and Virtual DOM?

- [ ] Shadow DOM is used for incremental rendering, while Virtual DOM is used for scoping variables and CSS.
- [ ] Shadow DOM is a JavaScript concept, while Virtual DOM is a browser technology.
- [x] Shadow DOM is designed for scoping variables and CSS in web components, while Virtual DOM is an intermediary concept used for optimizing updates in JavaScript libraries.
- [ ] Shadow DOM is a reimplementation of core algorithms in React, whereas Virtual DOM is used for animation and layout in web applications.

### What is React Fiber?

- [ ] React Fiber is a new rendering engine in React v16.
- [ ] React Fiber is a concept for managing server-side rendering in React applications.
- [ ] React Fiber is a browser technology designed for scoping variables in web components.
- [x] React Fiber is the new reconciliation engine or reimplementation of the core algorithm in React v16, aimed at improving animation, layout, and concurrency management in React.

### What is the main goal of React Fiber?

- [ ] React Fiber's main goal is to optimize server-side rendering in React.
- [ ] React Fiber aims to introduce new browser technologies for web components.
- [x] The primary goal of React Fiber is to enhance React's suitability for animation, layout, and gestures, with a focus on incremental rendering and concurrency management.
- [ ] React Fiber primarily focuses on scoping variables in React components.

### What is the difference between `createElement` and `cloneElement` in React?

- [ ] `createElement` is used to clone an element and pass it new props, while `cloneElement` is used to create new React elements.
- [ ] `createElement` is a React function, while `cloneElement` is a JavaScript function.
- [ ] `createElement` is used to transpile JSX elements, while `cloneElement` is used for rendering UI components.
- [x] `createElement` is used to create new React elements from JSX elements, while `cloneElement` is used to clone an existing React element and pass it new props.
- [ ] `createElement` and `cloneElement` are two names for the same function in React.

### What is the concept of "Lifting State Up" in React?

- [ ] "Lifting State Up" is a technique for managing component rendering order in React.
- [ ] It refers to the process of isolating each component's state from one another.
- [ ] "Lifting State Up" involves creating local state for each component to manage shared data.
- [x] "Lifting State Up" in React means moving shared state to the closest common ancestor of components that need access to the same changing data, rather than maintaining local state in multiple child components.
- [ ] "Lifting State Up" is a way to encapsulate all state logic within a single component in React applications.

### When does the `componentDidMount` lifecycle method in React (pre-16.3) get executed?

- [ ] Before rendering.
- [x] After the first rendering of the component.
- [ ] When particular props update.
- [ ] When the component determines it should not update.
- [ ] Before re-rendering the component.

### What is the purpose of the `componentWillMount` lifecycle method in React (pre-16.3)?

- [ ] It is used for making AJAX requests.
- [ ] It is executed after rendering.
- [ ] It determines whether a component should update or not.
- [x] It is executed before rendering and is often used for App-level configuration in the root component.
- [ ] It is used to update the DOM in response to prop or state changes.

### What are the main differences between `componentWillUpdate` and `componentDidUpdate` in React (pre-16.3)?

- [ ] `componentWillUpdate` is executed before rendering, while `componentDidUpdate` is executed after the first rendering.
- [ ] `componentWillUpdate` is used for making AJAX requests, while `componentDidUpdate` is used for event handling.
- [ ] `componentWillUpdate` determines whether a component should update, while `componentDidUpdate` updates the DOM in response to state changes.
- [ ] `componentWillUpdate` is used for App-level configuration, while `componentDidUpdate` is used for prop updates.
- [x] `componentWillUpdate` is executed before re-rendering when there are confirmed prop and state changes, while `componentDidUpdate` is executed after rendering in response to prop or state changes.

### What is the primary use of the `componentWillUnmount` lifecycle method in React (pre-16.3)?

- [ ] It is used for making AJAX requests.
- [ ] It is executed before rendering.
- [ ] It determines whether a component should update or not.
- [ ] It is used for DOM updates in response to prop changes.
- [x] It is used to cancel any outgoing network requests or remove event listeners associated with the component before it unmounts.

### What is reconciliation in React?

- [ ] Reconciliation is a process to create a copy of the Browser DOM.
- [ ] Reconciliation is a term used to describe the creation of the Virtual DOM in React.
- [ ] Reconciliation is a technique for optimizing AJAX requests in React applications.
- [x] Reconciliation is the process through which React updates the Browser DOM efficiently by using a diffing algorithm to identify and update only the changed nodes in the Real DOM after comparing it with the Virtual DOM.
- [ ] Reconciliation is the process of optimizing component rendering in React applications.

### Why are fragments preferred over container `<div>` elements in React?

- [x] Fragments are preferred because they are faster and use less memory by avoiding the creation of an extra DOM node, which is especially beneficial for large and deep component trees.
- [ ] Container `<div>` elements are faster and use less memory than fragments.
- [ ] Fragments are used to improve CSS layout mechanisms like Flexbox and CSS Grid.
- [ ] Container `<div>` elements make the DOM Inspector less cluttered.
- [ ] Fragments are mainly used for creating special parent-child relationships in React components.

### What are stateless components in React?

- [ ] Stateless components are components that rely heavily on maintaining their internal state.
- [ ] Stateless components are components that exclusively use class syntax.
- [x] Stateless components are components whose behavior is independent of their state, and they can be implemented using either function components or class components (if necessary).
- [ ] Stateless components are components that have complex lifecycle hooks.
- [ ] Stateless components are components that are primarily used for optimizing performance.

### How can you apply validation on props in React?

- [ ] React automatically validates props in both development and production modes.
- [ ] Prop validation in React is achieved by setting the "validate" attribute on component elements.
- [ ] Prop validation is not supported in React.
- [x] In React's development mode, automatic prop validation checks are performed to ensure that props have the correct types, generating warning messages in the console if types are incorrect. This validation is disabled in production mode.
- [ ] Prop validation is only possible for mandatory props.

### What are some of the advantages of using React?

- [x] React increases application performance with its Virtual DOM.
- [ ] React uses XML syntax for writing code, making it difficult to read and write.
- [x] React supports server-side rendering (SSR) in addition to client-side rendering.
- [ ] React is tightly coupled with specific frameworks like Angular and Backbone.
- [x] React is easy to integrate with other frameworks since it is primarily a view library.
- [x] React makes it easy to write unit and integration tests using tools like Jest.

### What are some of the limitations of React?

- [ ] React is a full framework with built-in support for server-side rendering.
- [x] React is primarily a view library and does not provide a full-fledged framework structure.
- [x] Beginners new to web development may face a learning curve when getting started with React.
- [ ] Integrating React into traditional MVC frameworks requires no additional configuration.
- [x] The use of inline templating and JSX in React can increase code complexity.
- [x] Having too many smaller components in a React application can lead to over-engineering and boilerplate code.

### How were error boundaries handled in React v15?

- [ ] React v15 did not support error boundaries.
- [x] React v15 provided basic support for error boundaries using the `unstable_handleError` method.
- [ ] React v15 introduced the `componentDidCatch` method for handling errors.
- [ ] Error boundaries in React v15 were managed through a global error handling mechanism.
- [ ] React v15 used a separate library for error boundary handling.

### What are the recommended ways for static type checking in React applications?

- [x] PropTypes library (React.PropTypes moved to a prop-types package since React v15.5) is recommended for type checking in React applications.
- [ ] For large code bases, it is recommended to use dynamic type checkers like Flow or TypeScript.
- [ ] React does not support static type checking.
- [ ] Static type checking is primarily performed at runtime.
- [ ] Auto-completion features are not available in static type checkers.

### What is the primary use of the `react-dom` package in React?

- [ ] The `react-dom` package is used for server-side rendering.
- [ ] `react-dom` is a utility package for handling component styling in React.
- [ ] It provides methods for creating React components.
- [x] The `react-dom` package provides DOM-specific methods that can be used at the top level of your app, such as rendering, hydrating, unmounting components, finding DOM nodes, and creating portals.
- [ ] `react-dom` is primarily used for managing component state in React applications.

### What happens if you use `setState()` in the constructor of a React component?

- [ ] Using `setState()` in the constructor is the recommended way to initialize component state.
- [ ] `setState()` in the constructor initializes state without triggering a re-render of the component.
- [x] When you use `setState()` in the constructor, React assigns the state but also attempts to re-render the component and its children, potentially leading to errors like "Can only update a mounted or mounting component."
- [ ] Using `setState()` in the constructor has no impact on the component's rendering process.
- [ ] `setState()` in the constructor is the only way to safely update component state during initialization.

### How can you enable production mode in React?

- [ ] React automatically switches to production mode when you deploy your application.
- [ ] Production mode in React is enabled by setting an environment variable in your operating system.
- [x] To enable production mode in React, you should use Webpack's `DefinePlugin` method to set `NODE_ENV` to "production." This helps strip out development-specific features like PropTypes validation and extra warnings.
- [ ] React doesn't support a production mode; it always runs in development mode.
- [ ] Production mode in React is enabled by default and cannot be modified.

### What is the difference between React and ReactDOM in React ecosystem?

- [ ] React and ReactDOM are two separate libraries with entirely different use cases.
- [ ] React is used for server-side rendering, while ReactDOM is used for client-side rendering.
- [ ] React and ReactDOM are interchangeable and can be used interchangeably in any React application.
- [x] The `react` package contains elements and component class helpers, such as `React.createElement()`, `React.Component`, and `React.Children`, while the `react-dom` package contains rendering methods like `ReactDOM.render()`. Additionally, `react-dom/server` provides server-side rendering support with methods like `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.
- [ ] React is used for creating components, while ReactDOM is used for styling and layout in React applications.

### Why is ReactDOM separated from React?

- [ ] ReactDOM is a completely separate library from React and was developed by a different team.
- [ ] The separation of ReactDOM was done to improve performance in React applications.
- [ ] React Native required a separate library for rendering components on mobile devices.
- [x] The React team decided to extract all DOM-related features into a separate library called ReactDOM. This separation was introduced in React v0.14 to make React more versatile and enable the sharing of components between the web version of React and React Native.
- [ ] ReactDOM was separated from React to reduce the size of the React library.

### What is the difference between the `setState()` and `replaceState()` methods in React?

- [ ] Both `setState()` and `replaceState()` perform the same operation, so they are interchangeable.
- [ ] `setState()` throws out the current state and replaces it with the new state, while `replaceState()` merges the current and new states.
- [ ] `setState()` is used for removing all previous keys in the state, while `replaceState()` is used for preserving the current state.
- [x] When you use `setState()`, the current and previous states are merged, while `replaceState()` discards the current state and replaces it with only the new state provided.
- [ ] `setState()` and `replaceState()` are used interchangeably to set the state to false or null in React.

### Why is a component constructor called only once in React?

- [ ] React calls the constructor of a component multiple times to ensure that the component is properly initialized.
- [ ] The constructor of a component is called only once in React because it is an optimization to improve performance.
- [x] React's reconciliation algorithm assumes that if a custom component appears in the same place on subsequent renders, it's the same component as before, and reuses the previous instance rather than creating a new one.
- [ ] The constructor of a component is called multiple times to reset its internal state on each render.
- [ ] React calls the constructor of a component multiple times to ensure that it can handle different types of props.

### What are some popular animation packages in the React ecosystem?

- [ ] React Motion and React Transitions are the two most widely used animation packages in React.
- [ ] There are no popular animation packages available for React.
- [ ] React Animator and React Effects are the most commonly used animation libraries in React.
- [x] React Transition Group and React Motion are popular animation packages in the React ecosystem.
- [ ] React Animations and React TweenMax are the recommended animation libraries for React applications.

### What are some popular React-specific linters used for code quality in React applications?

- [x] ESLint is a popular JavaScript linter used for React applications.
- [x] eslint-plugin-react is a popular ESLint plugin for React that checks best practices and prop types.
- [x] eslint-plugin-jsx-a11y is commonly used to address accessibility issues specific to JSX in React applications.
- [ ] Prettier is the primary linter used for React to ensure code formatting consistency.
- [ ] ESLint-plugin-React is a standalone linter used for React applications.

### What is React Router?

- [x] React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application quickly while keeping the URL in sync with what's being displayed on the page.
- [ ] React Router is a standalone JavaScript library for creating user interfaces in React applications.
- [ ] React Router is used to manage state in React applications.
- [ ] React Router is a database for storing and retrieving data in React applications.
- [ ] React Router is a styling framework for React components.

### What is React Router?

- [x] React Router is a routing library for React that keeps the URL in sync with the displayed content.
- [ ] React Router is a standalone JavaScript library.
- [ ] React Router is a state management tool in React applications.
- [ ] React Router is a database for storing and retrieving data in React applications.
- [x] React Router helps manage navigation and screen transitions in React applications.

### How is React Router different from the history library?

- [x] React Router is a wrapper around the history library, providing various routing mechanisms, including browser, hash, and memory histories.
- [ ] React Router and the history library are entirely separate libraries.
- [ ] React Router is primarily used for handling global state, while the history library focuses on routing.
- [ ] React Router and the history library provide the same functionality and are interchangeable in React applications.
- [x] React Router is a routing solution, while the history library is primarily concerned with handling browser history interactions.

### What is React Intl?

- [x] React Intl simplifies internationalization (i18n) in React, providing pre-built components and an API for formatting strings, dates, numbers, and pluralization.
- [ ] React Intl is a separate JavaScript library for managing state in React applications.
- [ ] React Intl is primarily used for styling React components.
- [ ] React Intl is a routing library for React applications.
- [x] React Intl is part of FormatJS, offering React bindings via components and API.

### What is the purpose of the `ReactTestUtils` package in React?

- [ ] `ReactTestUtils` is used for styling React components.
- [ ] `ReactTestUtils` is primarily used for routing in React applications.
- [ ] `ReactTestUtils` is used for managing global state in React applications.
- [x] `ReactTestUtils` are provided in the with-addons package and allow you to perform actions against a simulated DOM for the purpose of unit testing.
- [ ] `ReactTestUtils` is used for internationalization (i18n) in React applications.

### What is Jest?

- [x] Jest is a JavaScript unit testing framework created by Facebook, often used for testing components.
- [ ] Jest is a comprehensive testing solution for React applications.
- [x] Jest is based on Jasmine and provides automated mock creation and a jsdom environment.
- [ ] Jest is a database management system for React applications.
- [ ] Jest is a routing library for React applications.

### What is Redux?

- [x] Redux is a predictable state container for JavaScript apps.
- [ ] Redux is a comprehensive state management system for React applications.
- [x] Redux can be used with various view libraries.
- [ ] Redux is a database management system for React applications.
- [ ] Redux is a routing library for React applications.

### Can you dispatch an action within a Redux reducer?

- [x] No, dispatching actions within a reducer is considered an anti-pattern in Redux.
- [ ] Yes, it is a common practice to dispatch actions within a reducer.
- [ ] It depends on the specific use case and project requirements.
- [ ] Dispatching actions within a reducer is recommended for managing complex state transitions.
- [ ] Reducers should dispatch actions to initiate state changes.

### What are some drawbacks of the MVW (Model-View-Whatever) pattern?

- [ ] DOM manipulation is very efficient in MVW, leading to fast and responsive applications.
- [ ] MVW pattern eliminates circular dependencies and simplifies the model and view interaction.
- [x] MVW can lead to slow and inefficient application behavior due to costly DOM manipulation.
- [x] MVW can become complicated, especially when dealing with circular dependencies between models and views.
- [x] MVW may face challenges when handling frequent data changes in collaborative applications.
- [x] Implementing undo functionality in MVW can be complex and require additional code.


