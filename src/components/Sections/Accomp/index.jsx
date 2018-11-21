import React from 'react';

export const Accomp = () => (
    <article className="mw5 mw8-ns center ph5 pv3">
        <div className="screen-mockups center">
            <img src={require('assets/images/screen-mockups.svg')} alt="screen"/>
        </div>
        <div className="flex justify-between flex-wrap pv5">
            <div className="center mb0-ns mb5">
                <span className="mb2">
                    <img src={require('assets/images/icon-communities.svg')} className="grow" alt="communities" />
                </span>
                <h3 className="f-subheadline-ns f1 mv1 tc">1.4k+</h3>
                <p className="tc mt0">Communities Formed</p>
            </div>
            <div className="center">
                <span className="mb2">
                    <img src={require('assets/images/icon-messages.svg')} className="grow" alt="messages" />
                </span>
                <h3 className="f-subheadline-ns f1 mv1 tc">2.7m+</h3>
                <p className="tc mt0">Messages Sent</p>
            </div>
        </div>
    </article>
)

export default Accomp