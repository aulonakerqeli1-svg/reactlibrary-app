import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useApi(url) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {

        setLoading(true)

        axios.get(url)
            .then(res => {
             setData(res.data)
            console.log(res.data)
                

            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    }, [url])

    return { data, loading, error }
}