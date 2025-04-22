Point to be remember while working with react
React renders the component tree in a single pass, so if you have multiple state updates in a single event handler, React will batch them together and only re-render the component once at the end of the event handler. This is called "batching" and is an optimization that React uses to improve performance.
This means that if you have multiple state updates in a single event handler, you can be sure that the component will only re-render once, even if you call setState multiple times. This is important to keep in mind when working with React, as it can help you avoid unnecessary re-renders and improve performance.

react re render the component when the state is change 
and the component is mounted. This means that if you have a component that is not mounted, it will not re-render when the state changes. This is important to keep in mind when working with React, as it can help you avoid unnecessary re-renders and improve performance.