import React from 'react'
import "../styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export const InputField: React.FC<Props> = ({ todo, setTodo }) => {
    /*
    The onChange event handler is called whenever the value of the input field changes.
    The event handler is passed an event object that contains the new value of the input field.
    The onClose event handler is called when the user clicks the close button.
    The onKeyPress event handler is called when the user presses a key.
    
    */
    return (
        <form className="input">
            <input
                className="input__box"
                type='input'
                placeholder='Enter a task!'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="input_submit" type="submit">Go</button>
        </form>
    )
}
