import React from 'react'

export const Grow = () => (
    <article className="grow-task ph4 pv5 w-100">
        <div className="task-text">
            <h1>
            Grow Together
            </h1>
            <p className="pt2">
            Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.
            </p>
        </div>
        <div className="task-img">
            <img src={require('assets/images/illustration-grow-together.svg')} alt=""/>
        </div>
    </article>
)

export default Grow