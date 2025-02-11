import React, { useState } from "react";
import Login from "../components/Login";
import { Card } from '@/components/ui/card';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign In To Your Account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <Card className="p-8">
                    <Login />
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
