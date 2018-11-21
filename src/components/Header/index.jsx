import React from 'react'
import Logo from 'components/Logo';

export const Header = () => (
    <header className="fixed w-100 ph3 pv3 ph5-l main-header">
        <div className="flex justify-between items-center">
            <nav className="f5 tracked fl w-50">
                <Logo fill={{icon: '#FF52C1', 'text': '#00252E'}} />
            </nav>
            <nav className="f6 tracked tr fl w-50">
                <a
                className="dib btn pv2 ph3"
                href="#features"
                >
                Try it free
                </a>
            </nav>
        </div>
    </header>
)

export default Header