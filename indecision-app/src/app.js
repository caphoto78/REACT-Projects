console.log('App.js is running');
// JSX - JavaScript XML

// if statements
// ternary operators
// logical && operator (true && 'Some text' = 'Some Text; false && 'Some Text = false)


const app = {
    title: 'Some title',
    subtitle: 'Put your life in the hands of your computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: 'Constantin',
    age: 19,
    location: "Bucharest"
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