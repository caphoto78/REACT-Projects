class VisibillityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return { visibility: !prevState.visibility };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibillityToggle />, document.getElementById("app"));

// let visibillity = false;

// const toggleVisibility = () => {
//     visibillity = !visibillity;
//     render();
// };

// const render = () => {
//     const jsx = (
        // <div>
        //     <h1>Visibillity Toggle</h1>
        //     <button onClick={toggleVisibillity}>{visibillity ? 'Hide Details' : "Show details"}</button>
        //     {visibillity && (
        //         <div>
        //             <p>Hey. These are some details you can now see!</p>
        //         </div>
        //     )}
        // </div>
//     );

//     ReactDOM.render(jsx, document.getElementById("app"));
// };
// render();
