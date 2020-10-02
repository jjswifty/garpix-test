import React from 'react'
import { useState } from 'react'
import search_icon from './../../../assets/img/search_icon.svg'

export const Search = props => {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div>
            <img src={search_icon} alt="Search icon"></img>
        </div>
    )
}