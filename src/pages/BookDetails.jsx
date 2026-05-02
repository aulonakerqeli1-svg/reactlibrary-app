import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BookDetails() {
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `https://openlibrary.org/works/${id}.json`
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch book");
                }

                const json = await res.json();
                console.log("BOOK DATA:", json);

                setData(json);

            } catch (err) {
                console.log(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    if (loading)
        return <p className="text-center py-10">Loading...</p>;

    if (error)
        return <p className="text-center text-red-500">
            Error: {error}
        </p>;

    if (!data)
        return <p className="text-center">No book found</p>;

    const cover = data?.covers?.[0]
        ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
        : "https://via.placeholder.com/300x400";

    const description =
        typeof data?.description === "string"
            ? data.description
            : data?.description?.value
            ? data.description.value
            : "No description available";

    return (
        <div className="container mx-auto py-12">

            <Link to="/librat" className="text-blue-500">
                ← Back
            </Link>

            <div className="grid md:grid-cols-2 gap-10 mt-6">

                <img
                    src={cover}
                    alt={data?.title}
                    className="w-full h-125 object-cover rounded"
                />

                <div>
                    <h1 className="text-3xl font-bold">
                        {data?.title}
                    </h1>

                    <p className="mt-4 text-gray-600">
                        {description}
                    </p>
                </div>

            </div>

        </div>
    );
}

export default BookDetails;