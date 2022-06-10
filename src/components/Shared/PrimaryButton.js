import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className='bg-primary w-44 h-14 font-bold text-2xl absolute bottom-6 left-4 hover:bottom-4 hover:left-2 transition hover:ease-out-in duration-300' type='submit'>{children}</button>
            <button className='bg-neutral w-44 h-14'></button>
        </div>
    );
};

export default PrimaryButton;
