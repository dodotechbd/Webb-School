import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import AdmissionTable from './AdmissionTable';


const Admission = () => {
    const { data: admission, refetch, isLoading } = useQuery(["admissionCourses"], () =>
        fetch(`http://localhost:5000/admission`).then(
            (res) => res.json()
        )
    );
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <tbody>


            {
                admission.map((admissions, index) => <AdmissionTable
                    key={admissions._id}
                    admissions={admissions}
                    index={index}
                    refetch={refetch}
                ></AdmissionTable>)
            }
        </tbody>
    );
};

export default Admission;