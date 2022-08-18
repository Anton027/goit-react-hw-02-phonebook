import React from "react";
const Filter = ({ value, onChange }) => {
    return (
        <>
            <p>Find Contacts by name</p>
            <input
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </>
    )
};

export default Filter;