import React from 'react';

const JobTable = ({jobs,index}) => {
    const {uname}= jobs
    return (
        
            <tr>
                <td>{index + 5}</td>
                <td>{uname}</td>
                <td><input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" /></td>
                <td><button className='btn btn-sm'>button</button></td>


            </tr>

        
    );
};

export default JobTable;