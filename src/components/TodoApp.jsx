import React, { useState } from 'react'
import Button from './Button'
import { message } from 'antd'
 
const TodoApp = () => {
    const [input, setInput] = useState("")
    const [notes, setNotes] = useState([])


    const submitHandler = (e) => {
        e.preventDefault()
        if (!input.trim()) {
            message.error("Write something")
            return
        }
        // console.log(input)
        // console.log(notes)
        // notes.push(input)
        // setNotes([...notes])
        // setInput("")
            notes.push(input)
        setNotes([...notes])
        setInput("")
    }

    const allDeleteHandler = () => {
        setNotes([])
    }


    const DeleteHandler = (i) => {
        notes.splice(i, 1)
        setNotes([...notes])
        console.log("delete working")
    }


    const [editIndexNumber, setEditIndexNumber] = useState("")
    const [editInput, setEditInput] = useState("")

    const editHandler = (i) => {
        const value = notes[i]
        console.log(value, i)
        setEditInput(value)
        setEditIndexNumber(i)
    }

    const saveHandler = () => {
        notes[editIndexNumber] = editInput
        setEditIndexNumber('')

        setNotes([...notes])
    }
    return (
        <div >
            <h1>Notes</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" placeholder='Enter Your Notes'
                        onChange={(e) => setInput(e.target.value)}
                    />

                    {/* <button>add</button> */}
                    <Button text='Add'
                        type="submit"
                    />

                    <Button type="button" text='Delete All'
                        onClick={() => allDeleteHandler()}
                    />
                    {/* <button type='button'>Delet All</button> */}
                </div>
            </form>

            <div>
                {
                    notes && notes.map((todo, i) => {
                        return (
                            i === editIndexNumber ?
                                <div key={i}>
                                    <input type="text" placeholder='Edit Input'
                                        value={editInput}
                                        onChange={(e) => setEditInput(e.target.value)}
                                    />
                                    <Button text='Save'
                                        onClick={saveHandler}
                                    />
                                    <Button text='Cancel'
                                        onClick={() => setEditIndexNumber('')}
                                    />
                                </div>

                                :
                                <div key={i}>
                                    <h1>{todo}</h1>
                                    {/* <button onClick={() => editHandler(i)}>Edit</button> */}
                                    <Button
                                        text='Edit'
                                        onClick={() => editHandler(i)}
                                    />

                                    {/* <button onClick={() => DeleteHandler(i)}>Delete</button> */}
                                    <Button
                                        text='Delete'
                                        onClick={() => DeleteHandler(i)}
                                    />
                                </div>
                        )
                    })


                }

            </div>


        </div>
    )
}

export default TodoApp