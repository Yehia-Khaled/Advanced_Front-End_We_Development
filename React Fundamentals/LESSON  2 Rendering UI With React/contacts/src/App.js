import './App.css';
import React, {Component} from 'react';

class ContactList extends React.Component {
    render() {
        const people = [
            {
                name: 'Yehia'
            }, {
                name: 'Mona'
            }, {
                name: 'Merna'
            }
        ]
        return <ol>

            {people.map((person) => (
             < li key={person.name}>{person.name} </li>
                )
        )}
        </ol>

    }

}

class App extends Component {
    render() {




        return (
            <div className="App">
                <h1> Hello World </h1></div>
        )
    }
}
    /*
    function App() {
        return (
            <div className="App">
                <ContactList/>
            </div>
        )

    }*/

export default App;


