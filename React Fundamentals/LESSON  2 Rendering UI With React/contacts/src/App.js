import './App.css';
import React, {Component} from 'react';

class ContactList extends React.Component {
    render() {
        const people = this.props.contacts

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
                <h1> Hello World </h1>
                <ContactList contacts={[            {
                    name: 'Yehia'
                }, {
                    name: 'Mona'
                }, {
                    name: 'Merna'
                }]}/>
                <ContactList contacts={[            {
                    name: 'Ahmed'
                }, {
                    name: 'Amona'
                }, {
                    name: 'Amany'
                }]}/>
                <ContactList contacts={[            {
                    name: 'Abdulrahman'
                }, {
                    name: 'Aya'
                }, {
                    name: 'Mena'
                }]}/>

            </div>
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


