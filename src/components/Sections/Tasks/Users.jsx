import React from 'react'

export const Users = () => (
    <article className="users-task pa4">
        <div className="task-text">
            <h1>
            Your Users
            </h1>
            <p className="pt2">
            It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.
            </p>
        </div>
        <div className="task-img">
            <img src={require('assets/images/illustration-your-users.svg')} alt=""/>
        </div>
    </article>
)

export default Users