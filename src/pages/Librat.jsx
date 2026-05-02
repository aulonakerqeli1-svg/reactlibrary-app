import React from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';

const Books = () => {

    const { data, loading, error } = useApi(
        `https://openlibrary.org/search.json?q=harry+potter`
    );

    const handleOrder = (book) => {
        const existing = JSON.parse(localStorage.getItem("orders")) || [];

        const newOrder = {
            id: book.key,
            title: book.title,
            author: book.author_name?.[0],
            cover: book.cover_i
        };

        localStorage.setItem("orders", JSON.stringify([...existing, newOrder]));

        alert("📚 Book ordered!");
    };

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center">Error loading books</p>;

    return (
        <>
            <main className="bg-linear-to-r from-blue-600 to-cyan-500 py-10">
                <div className="container mx-auto">
                    <h1 className="text-5xl font-bold text-white">
                        Librat
                    </h1>
                </div>
            </main>

            <div className='container mx-auto py-12'>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {data?.docs?.map((book, index) => {
                        const id = book.key?.split("/").pop();

                        const cover = book.cover_i
                            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                            : "https://placehold.co/300x400?text=No+Cover";

                        return (
                            <div key={index} className="shadow p-4 rounded">

                                <Link to={`/book/${id}`}>
                                    <img
                                        src={cover}
                                        alt={book.title}
                                        className="w-full h-72 object-cover rounded"
                                    />

                                    <h3 className="mt-2 font-bold">
                                        {book.title}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {book.author_name?.[0] || "Unknown author"}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {book.first_publish_year || "Unknown year"}
                                    </p>
                                </Link>

                                <button
                                    onClick={() => handleOrder(book)}
                                    className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                                >
                                    🛒 Order Book
                                </button>

                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    );
};

export default Books;