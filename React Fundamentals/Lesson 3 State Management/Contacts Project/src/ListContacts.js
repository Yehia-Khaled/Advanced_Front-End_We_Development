import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
  }
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  //
  clearQuery = () => {
    this.setState({ query: '' })
  }
  //
  render() {
    // console.log('Props',this.props)
    const { contacts, onDelete  } = this.props
    const { query } = this.state
    //
    // let showingContacts
    // if (query) {
    //   const match = new RegExp(escapeRegExp(query), 'i')
    //   showingContacts = contacts.filter((contact) => match.test(contact.name))
    // } else {
    //   showingContacts = contacts
    // }
    //
    // showingContacts.sort(sortBy('name'))
    const showingContacts=query===''?
      contacts:
      contacts.filter((object)=>(
        object.name.toLowerCase().includes(query.toLowerCase())
      ))

    return (
      <div className='list-contacts'>
          {/*{JSON.stringify(this.state)}*/}
          <div className='list-contacts-top'>
         <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={ query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <Link
            to='/create'
            className='add-contact'
          >Add Contact</Link>
        </div>

        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length} total</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

        {/*<ol className='contact-list'>*/}
        {/*  {showingContacts.map((contact) => (*/}
        {/*    <li key={contact.id} className='contact-list-item'>*/}
        {/*      <div className='contact-avatar' style={{*/}
        {/*        backgroundImage: `url(${contact.avatarURL})`*/}
        {/*      }}/>*/}
        {/*      <div className='contact-details'>*/}
        {/*        <p>{contact.name}</p>*/}
        {/*        <p>{contact.email}</p>*/}
        {/*      </div>*/}
        {/*      <button onClick={() => onDeleteContact(contact)} className='contact-remove'>*/}
        {/*        Remove*/}
        {/*      </button>*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ol>*/}
        <ol className='contact-list'>
          { showingContacts.map((contact) =>(
            <li key={contact.id} className={'contact-list-item'}>
              <div
                className={'contact-avatar'}
                  style={{
                    backgroundImage:`url(${contact.avatarURL}) `
                }
                }
                  > </div>
              <div className='contact-details'>
                <p> {contact.name}</p>
                <p> {contact.handle}</p>
              </div>
              <button
                onClick={()=> onDelete(contact)}
                className='contact-remove'>
                Remove
              </button>

            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts
