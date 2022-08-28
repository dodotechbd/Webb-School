import React, { useEffect} from 'react';
import { useQuery } from 'react-query';


const useLives = () => {
    const [job, setJobs] = useState([]);

    useEffect(() => {
        const { data: job } = useQuery(["jobCourse"], () =>
        fetch(`https://rocky-escarpment-87440.herokuapp.com/job`).then((res) =>
            res.json()
        )
    );
    }, [])

    return [Lives, setLives];
};

export default useLives;