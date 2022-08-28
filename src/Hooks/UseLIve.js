import React, { useEffect} from 'react';
import { useQuery } from 'react-query';


const useLives = () => {
    const [job, setJobs] = useState([]);

    useEffect(() => {
        const { data: job } = useQuery(["jobCourse"], () =>
        fetch(`http://localhost:5000/job`).then((res) =>
            res.json()
        )
    );
    }, [])

    return [Lives, setLives];
};

export default useLives;