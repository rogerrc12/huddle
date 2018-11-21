import React from 'react'

export const Input = () => (
    <form onSubmit={e => e.preventDefault()}>
        <input type="text" className="input-reset bg-white br2 mr3" />
        <input type="submit" className="btn dib pointer" value="Suscribe" />
    </form>
)

export default Input