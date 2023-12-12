import React from 'react'

class AddContact extends React.Component {
  render(){
    return(
        <div className='ui main'>
            <h2>Add Contact</h2>
            <from className="ui form">
                <div className='field'>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Name'/>
                </div>
                <div className='contact'>
                    <label>Contact</label>
                    <input type='number' name='contact' placeholder='Contact'/>
                </div>
                <div className='email'>
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Email'/>
                </div>
                <button className='ui button blue'>Add</button>
            </from>
        </div>
    )
  }
}

export default AddContact