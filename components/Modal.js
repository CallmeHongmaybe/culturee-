import { useState } from 'react';

export default function Modal({country, genre}) {
    const [name, setName] = useState('');
    const [opened, setOpened] = useState(false)

    const validate = () => {
        let err = "";
        if (!name) err = "Name is required"
        return err;
        // rules of validation: 
    // check if the field is empty <-- ez 
    // check if game already exists in the db <-- medium
    // check if the name exists IRL <-- Supadifficult
    }

    return (
        <div className="bg-white border-b">
            <div>Add a new item to {genre} list </div>
            <input type="text" placeholder="Name"/>
        </div>
    )
}