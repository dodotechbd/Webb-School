import { useEffect, useState } from "react";

const useAudioDetail = audiobookId => { 
    const [details, setDetails] = useState({});
    useEffect(() => {
        const url = `audiobook.json/${audiobookId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [audiobookId]);
    return [details, ]
}

export default useAudioDetail;