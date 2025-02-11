import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertDescription } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        //Clear errros when user types
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            username: '',
            password: ''
        };

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        }
        else if (formData.password.length < 6){
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;    
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok){
                //Handles successful logins
                navigate('/dashboard');
            }
            else {
                setErrors({
                    username: data.message || 'Login failed',
                    password: ''
                });
            }
        }
        catch(error){
            setErrors({
                username: 'An error occurred. Please try again',
                password: ''
            });
        }   
    };

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col'>
            <main className='flex-grow flex items-center justify-center px-4 py-12'>
                <div className='max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow'>
                    <div>
                        <h1 className='text-3xl font-bold text-center text-gray-900'>
                            Login
                        </h1>
                    </div>

                    <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                        <div className='space-y-4'>
                            <div>
                                <label 
                                htmlFor='username'
                                className='block text-sm font-medium text-gray-700'
                                >
                                    Username
                                </label>
                                <input 
                                id='username'
                                name='username'
                                type='text'
                                value={formData.username}
                                onChange={handleChange}
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                                />
                                {errors.username && (
                                    <Alert variant='destructive' className='mt-2'>
                                        <AlertDescription>{errors.username}</AlertDescription>
                                    </Alert>
                                )}
                            </div>

                            <div>
                                <label 
                                htmlFor='password'
                                className='block text-sm font-medium text-gray-700'
                                >
                                    Password
                                </label>
                                <input 
                                id='password'
                                name='password'
                                type='password'
                                value={formData.password}
                                onChange={handleChange}
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                                />
                                {errors.password && (
                                    <Alert variant='destructive' className='mt-2'>
                                        <AlertDescription>{errors.password}</AlertDescription>
                                    </Alert>
                                )}
                            </div>
                        </div>

                        <button
                        type='submit'
                        className='w-full felx justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >
                            Log In
                        </button>
                    </form>

                    <div className='text-center mt-4'>
                        <p className='text-sm text-gray-600'>
                            Don't have an account?{' '}
                            <a
                            href='/signup'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                            >
                                Sign Up Here
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;