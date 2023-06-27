import React, {useState, useEffect} from 'react'
import { databases, DATABASE_ID, COLLECTION_ID_MESSAGES } from '../appwriteConfig'

const Room = () => {

    useEffect(() =>{
        getMessages()
    }, [])

    const getMessages = async () => {
        const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID_MESSAGES)
        console.log('RESPONSE:', response)
        // setMessages(response.documents)
    }
    return (
        <div>
            ROOM
        </div>
    )
}

export default Room