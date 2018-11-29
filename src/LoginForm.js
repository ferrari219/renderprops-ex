import React from 'react';

const LoginForm = ({ form, onChange, onSubmit }) => {
    const { id, pw } = form;
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="id" onChange={onChange} value={id} />
            <input type="password" name="pw" onChange={onChange} value={pw} />
            <button>Login</button>
        </form>
    );
};

export default LoginForm;