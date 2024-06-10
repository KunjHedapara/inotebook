import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "665e85eaffd53e8b5286bb95a",
            "user": "665be03973a3c2c83eab5e56",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2024-06-04T03:11:38.008Z",
            "__v": 0
        },
        {
            "_id": "665e85eaf3fd3e8b5286bb95c",
            "user": "665be03973a3c2c83eab5e56",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2024-06-04T03:11:38.729Z",
            "__v": 0
        },
        {
            "_id": "665e85ebffd3e8b56286bb95e",
            "user": "665be03973a3c2c83eab5e56",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2024-06-04T03:11:39.226Z",
            "__v": 0
        },
        {
            "_id": "665e85ebffd3e8b52886bb95e",
            "user": "665be03973a3c2c83eab5e56",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2024-06-04T03:11:39.226Z",
            "__v": 0
        },
        {
            "_id": "6657e85ebffd3e8b5286bb95e",
            "user": "665be03973a3c2c83eab5e56",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2024-06-04T03:11:39.226Z",
            "__v": 0
        },
        {
            "_id": "665e85ebffd3e8b5286bb95e",
            "user": "665be03973a3c2c83eab5e56",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2024-06-04T03:11:39.226Z",
            "__v": 0
        },
        {
            "_id": "665e85ebffd3e8b5286bb95e",
            "user": "665be03973a3c2c83eab5e56",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2024-06-04T03:11:39.226Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;