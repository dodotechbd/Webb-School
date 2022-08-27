import React from 'react';
import { useQuery } from 'react-query';
import AdmissionTable from './AdmissionTable';


const Admission = () => {
    const { data: admission, refetch } = useQuery(["admissionCourses"], () =>
        fetch(`http://localhost:5000/admission`).then(
            (res) => res.json()
        )
    );

    return (
        <div>


            {
                admission.map((admissions, index) => <AdmissionTable
                    key={admissions._id}
                    admissions={admissions}
                    index={index}
                    refetch={refetch}
                ></AdmissionTable>)
            }

        </div>
    );
};

export default Admission;