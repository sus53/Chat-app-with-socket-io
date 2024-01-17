import React from 'react'
import { Link } from 'react-router-dom';
import './createUser.scss';

function CreateUser({ setUsername }) {

    return (
        <div className='createUser'>
            <h1>Create User</h1>
            <div>
                <label>Username</label>
                <input type={"text"} onChange={(e) => { setUsername(e.target.value); window.sessionStorage.setItem('user', e.target.value); }} />
            </div>
            <div>
                <Link to="/dashboard" className='link'><button>Create</button></Link>
            </div>
        </div >
    )
}

export default CreateUser