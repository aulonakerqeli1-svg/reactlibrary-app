import React, { useState } from 'react'
import axios from 'axios'

function Zhanret() {
    const [genre, setGenre] = useState("")
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
   

    const searchGenre = async () => {
        if (!genre.trim()) return

        try {
            setLoading(true)

            const res = await axios.get(
                `https://openlibrary.org/subjects/${genre.toLowerCase()}.json`
            )

            setBooks(res.data?.works || [])
        } catch (err) {
            console.log("API error:", err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='container mx-auto py-12'>

            <h1 className="text-3xl font-bold text-center mb-6">
                Kërko Zhanrin e Librave
            </h1>

            {/* SEARCH BAR */}
            <div className="flex justify-center mb-10 gap-2">
                <input
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    type="text"
                    placeholder="p.sh. fantasy, horror, romance..."
                    className="border px-4 py-2 rounded w-72"
                />

                <button
                    onClick={searchGenre}
                    className="bg-blue-500 text-white px-6 py-2 rounded"
                >
                    Kërko
                </button>
            </div>
            <div className="flex justify-center gap-3 mb-6">

    

</div>

            {/* LOADING */}
            {loading && <p className="text-center">Loading books...</p>}

            {/* RESULTS */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {books.map((book, index) => {

                    const coverUrl = book.cover_id
                        ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
                        : "https://placehold.co/300x400?text=No+Cover"

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
                                {book.authors?.[0]?.name || "Unknown author"}
                            </p>

                          


                        </div>
                        
                    )
                })}

            </div>

        </div>
    )
}

export default Zhanret