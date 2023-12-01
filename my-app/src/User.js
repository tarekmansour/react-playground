import React, { useState } from "react";

export default function User() {
    const [user, setUser] = useState({ firstName: '', lastName: '', age: 1 });

    const handleInputChange = (e) => {
        // Updating state with the spread operator to merge existing state
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    function incrementAge() {
        setUser(prevUser => {
            return { ...prevUser, age: prevUser.age + 1 }
        });
    }

    return (
        <div>
            <h1>User:</h1>
            FirstName:
            <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleInputChange}
            />
            <br />
            LastName:
            <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
            />
            <br />
            <button onClick={incrementAge}>Increment age</button>
            <br />
            <p>First Name value: {user.firstName}</p>
            <p>Last Name value: {user.lastName}</p>
            <p>Age value: {user.age}</p>
        </div>
    );
}