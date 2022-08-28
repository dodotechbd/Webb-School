import { useEffect, useState } from "react";

const useAudioDetail = bookId => { 
    const [details, setDetails] = useState({});
    useEffect(() => {
        const url = `audiobook.json/${bookId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [bookId]);
    return [details, ]
}

export default useAudioDetail;