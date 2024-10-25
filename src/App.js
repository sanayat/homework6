import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

const App = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);

    const addUser = (data) => {
        setUsers([...users, data]);
        reset(); // очищает поля ввода после добавления
    };

    const deleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    };

    const clearTable = () => {
        setUsers([]);
    };

    return (
        <div className="app">
            <form onSubmit={handleSubmit(addUser)} className="form-container">
                <input {...register('name', { required: 'Имя обязательно' })} placeholder="Имя" />
                {errors.name && <span>{errors.name.message}</span>}

                <input {...register('username', { required: 'Имя пользователя обязательно' })} placeholder="Имя пользователя" />
                {errors.username && <span>{errors.username.message}</span>}

                <input {...register('email', { required: 'Email обязателен' })} placeholder="Email" />
                {errors.email && <span>{errors.email.message}</span>}

                <input {...register('phone', { required: 'Телефон обязателен' })} placeholder="Телефон" />
                {errors.phone && <span>{errors.phone.message}</span>}

                <input {...register('website')} placeholder="Сайт (необязательно)" />

                <button type="submit">Создать</button>
                <button type="button" onClick={clearTable}>Очистить таблицу</button>
            </form>

            {users.length === 0 ? (
                <p>Таблица пуста</p>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Имя пользователя</th>
                        <th>Email</th>
                        <th>Телефон</th>
                        <th>Сайт</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <button onClick={() => deleteUser(index)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default App;


