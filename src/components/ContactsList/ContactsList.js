import React from "react";
const ContactsList = ({ contacts, onDelContact }) => {
    return (
        <>
            {contacts.map( ({ number,name,id }) => (
                <li key={id}>
                    <p>{`${name}: ${number}`}</p>
                    <button
                        onClick={() => {
                            onDelContact(id);
                        }}
                    >delete</button>
                </li>
            ))}
        </>
    )
}

export default ContactsList;