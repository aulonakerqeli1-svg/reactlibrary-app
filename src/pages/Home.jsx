import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Hero from '../componets/Hero'

function Home() {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const hasFetched = useRef(false)

    useEffect(() => {
        if (hasFetched.current) return
        hasFetched.current = true

        axios.get('https://openlibrary.org/search.json?q=harry+potter')
            .then(response => {
                setBooks(response.data?.docs || [])
            })
            .catch(error => {
                console.log("API error:", error)
            })
            .finally(() => setLoading(false))

    }, [])
    
 

  

 
    return (
        <>


        
            <Hero />

            <div className='container mx-auto py-12'>

                <h1 className="text-3xl font-bold text-center mb-8">
                    Librat më të njohur
                </h1>

                {loading ? (
                    <p className="text-center">Loading books...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {books.map((book, index) => {

                            const coverUrl = book.cover_i
                                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                                : "https://via.placeholder.com/300x400?text=No+Cover"

                            return (
                                <div key={index} className="shadow p-4">

                                    <img
                                        src={coverUrl}
                                        alt={book.title}
                                        className="w-full h-72 object-cover rounded"
                                    />

                                    <h3 className="mt-2 font-bold">
                                        {book.title}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {book.author_name?.[0] || "Unknown author"}
                                    </p>

                 

                                  
                                
                                </div>

                                
                            )
                        })}

                    </div>
                )}

            </div>
        </>
    )
}

export default Home