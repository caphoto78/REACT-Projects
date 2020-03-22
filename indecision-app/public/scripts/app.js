'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        ' ',
        app.subtitle,
        ' '
    ),
    app.options && app.options.length > 0 ? React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            ' Here are your options: '
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                ' Item ',
                app.options[0],
                ' '
            ),
            React.createElement(
                'li',
                null,
                ' Item ',
                app.options[1],
                ' '
            )
        )
    ) : React.createElement(
        'p',
        null,
        ' No options! '
    )
);
var user = {
    name: 'Constantin',
    age: 47,
    location: 'Bucharest'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

//Create a templateTWO var JSX expression
// div
// h1 -> Antochi Constantin
// p -> Age: 42
// p -> Location: Bucharest
// Render TemplateTwo instead of Template
