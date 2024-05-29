'use client';
import { useState } from 'react';
import Login from './login';
import OtherWayLogin from './over-way-login';
import Register from './register';
import { motion } from 'framer-motion';

function LoginCreateAcount() {
    const [form, setForm] = useState<'login' | 'register' | undefined>();
    const [x, setX] = useState<number>(0);
    return (
        <div className="border-4 bg-[rgb(var(--background-start-rgb))]  rounded-md p-6 flex">
            <div className="max-w-[330px] overflow-hidden ">
                <motion.div className="box flex" animate={{ x }} transition={{ type: 'linear' }}>
                    <Login />
                    <Register setX={setX} />
                </motion.div>
            </div>
            <OtherWayLogin setX={setX} x={x} />
        </div>
    );
}

export default LoginCreateAcount;
