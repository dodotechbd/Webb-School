import React from 'react';
import { useQuery } from 'react-query';
import Admission from './Admission';
import Job from './Job';
import LanguagesTable from './LanguagesTable';



const Live = () => {



    const { data: language,  refetch } = useQuery(["languageCourse"], () =>
        fetch(`http://localhost:5000/language`).then((res) =>
            res.json()
        )

    );
    



    return (
        <div className=''>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Name</th>           
                            <th>Action</th>           
                        </tr>
                    </thead>
            
                    <tbody>

                        {
                            language.map((languages, index) => <LanguagesTable
                                key={languages._id}
                                languages={languages}
                                index={index}
                                refetch={ refetch}
                            ></LanguagesTable>)
                        } 
                         
                    </tbody>
                    
                      
                    <tbody>
                     
                    </tbody>
                
                    
                   
                </table>

            </div>
        </div>
    );
};

export default Live;
