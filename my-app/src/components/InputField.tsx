import React from 'react'

export const InputField: React.FC<{}> = () => {
    return (
        <form className="input">
            <input className="input__box" type='input' placeholder='Enter a task!' />
            <button className="input__submit" type="submit">Go</button>
        </form>
    )
}
