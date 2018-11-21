import React from 'react'
import Logo from 'components/Logo';
import Newsletter from 'components/Newsletter';

export const Component = (props) => (
    <footer className="flex justify-around items-center main-footer flex-wrap">
        <div className="w-30-l w-90 pv4">
            <Logo fill={{icon: '#fff', text: '#fff'}} className="dib mb2" />
            <small className="db lh-copy mt3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem. <br/>
            </small>
            <small>
                <span>
                    <img src={require('assets/images/icon-phone.svg')} alt="phone icon" className="dib mr3 mt3" />
                    Phone: +1-543-123-4567
                </span>
                <br/>
                <span>
                    <img src={require('assets/images/icon-email.svg')} alt="phone icon" className="dib mr3 mt3" />
                    example@huddle.com
                </span>
            </small>
            
        </div>
        <div className="w-30-l w-90 pv4">
            <h4 className="mb2 f3-ns f4 mt0">Newsletter</h4>
            <small className="db lh-copy mb4">
            To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address
            </small>
            <Newsletter />
        </div>
    </footer>
)

export default Component