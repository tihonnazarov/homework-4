import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("ФИО:", formData.fullName);
        console.log("Телефон:", formData.phoneNumber);
        console.log("Email:", formData.email);
        alert("Данные успешно отправлены!");
    };

    return (
        <form onSubmit={handleSubmit} style={{border: "2px solid pink", padding: "20px", backgroundColor: "black", boxShadow: "0px 14px 28px black"}}>
            <h1>Регистрация</h1>
            <div>
                <label>
                    <h3>ФИО:</h3>
                    <input
                        style={{border: "solid 1px pink"}}
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    <h3>Номер телефона:</h3>
                    <input
                        style={{border: "solid 1px pink"}}
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    <h3>Email адрес:</h3>
                    <input
                        style={{border: "solid 1px pink"}}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>

            <button type="submit" style={{marginTop: "20px", border: "solid 1px pink"}}>Отправить</button>
        </form>
    );
};

export default RegistrationForm;