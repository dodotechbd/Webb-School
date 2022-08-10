import { useEffect, useState } from "react"


const useBlogs = detailsId => {

    const [blogs, setBlogs] = useState([]);
    
    useEffect( () => {

        const url = `http://localhost:3000/blogs/${detailsId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setBlogs(data))


    } ,[detailsId])

    return [blogs,setBlogs];
}

export default useBlogs;