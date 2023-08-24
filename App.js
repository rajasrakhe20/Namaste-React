const heading = React.createElement(
    
    "h1",
    {id:"heading"},          
    "Hello World using React JS"

); 

// Here heading is an object

const root= ReactDOM.createRoot(document.getElementById("root"));

// render method thake an heading object and convert it to html tag that browser undetstand and ddump it into the root.
root.render(heading);

