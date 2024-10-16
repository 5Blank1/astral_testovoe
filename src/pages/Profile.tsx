import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EditView from '../components/EditView';
import '../styles/Footer.css';
import {initialFields} from "../utils/initialFields";


const Profile: React.FC = () => {
    const [fields, setFields] = useState(initialFields);


    const handleChange = (id: number, value: string) => {
        setFields((prev) =>
            prev.map((field) => (field.id === id ? { ...field, value } : field))
        );
    };

    return (
        <div>
            <Header profile={{ username: 'admin' }} />
            <main>
                <h2>Редактирование профиля</h2>
                <EditView fields={fields} onChange={handleChange} />
            </main>
            <Footer contacts={{ email: 'contact@example.com', phone: '123-456-7890' }} />
        </div>
    );
};

export default Profile;
