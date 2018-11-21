import React from 'react'

export const Flow = () => (
    <article className="flow-task ph4 pv5">
        <div className="task-img">
            <img src={require('assets/images/illustration-flowing-conversation.svg')} alt="flowing conversation" />
        </div>
        <div className="task-text">
            <h1>
            Flowing Conversations
            </h1>
            <p className="pt2">
            You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.
            </p>
        </div>
    </article>
)

export default Flow