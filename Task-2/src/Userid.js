import React from 'react'

const Users = ({ loading, users }) => {
    return loading ? (
        <div id="main">
            <img src="https://vsolarindia.com/assets/images/loading.gif" alt="Loading.." className="loadinggif" />
        </div>
    ) :
        (
            <div id="main">

                {users.map(user =>
                    <div className="card">
                        <div className="users">
                            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                            <h1 className="name">{user.first_name} {user.last_name}</h1>
                            <p className="email">{user.email}</p>
                            <p>ID: {user.id}</p>
                        </div>
                    </div>
                )
                }
            </div>
        )
}

export default Users;