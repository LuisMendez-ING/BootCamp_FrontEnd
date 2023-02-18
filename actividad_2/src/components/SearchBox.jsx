import React, { useState } from 'react'

export const SearchBox = ({onNewImage}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        if (inputValue.trim().length <= 1) return;
        onNewImage(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input type="text" placeholder='Empieza a buscar!' value={inputValue} onChange={(e) => onInputChange(e)} />
        </form>
    )
}
