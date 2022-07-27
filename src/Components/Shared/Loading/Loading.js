import React from 'react';

const Loading = () => {
    return (
        <div>
            <div class="flex justify-center items-center bg-white-900 h-screen">
                <div class="bg-white flex space-x-2 p-5 justify-center items-center">
                    <div class="m-auto ml-10 h-20 w-20 bg-blue-900 p-2 animate-spin"></div>
                    <div class="m-auto ml-10 h-20 w-20 bg-purple-500 p-2 animate-ping"></div>
                    <div class="m-auto ml-10 h-20 w-20 bg-green-600 p-2  animate-bounce"></div>
                    <div class="m-auto ml-10 h-20 w-20 bg-blue-500 p-2 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;