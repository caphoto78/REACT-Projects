console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1> {app.title} </h1>
        {app.subtitle && <p> {app.subtitle} </p>}
        {(app.options && app.options.length > 0) ? 
        <div>
            <p> Here are your options: </p>
            <ol>
                <li> Item {app.options[0]} </li>
                <li> Item {app.options[1]} </li>
            </ol>
        </div> : <p> No options! </p>}
        
        
    </div>
);
var user = {
    name: 'Constantin',
    age: 47,
    location: 'Bucharest'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

//Create a templateTWO var JSX expression
// div
// h1 -> Antochi Constantin
// p -> Age: 42
// p -> Location: Bucharest
// Render TemplateTwo instead of Template