import React from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
        
    //     fetch('https://api.github.com/users/Kumardk8780')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })

    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers : {data.followers}
        <h1>{data.name}</h1>
        <img src={data.avatar_url} alt="" width={300} style={{borderRadius:'50%'}}/>
        <p>Bio: {data.bio}</p>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response =  await fetch('https://api.github.com/users/Kumardk8780')
    return response.json()
}