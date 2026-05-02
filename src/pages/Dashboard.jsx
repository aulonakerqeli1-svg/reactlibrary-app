import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    // 👤 user state (localStorage hook)
    const [user, setUser] = useState(null);

    // 📦 orders state
    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();

    // 🔁 load user + orders
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        setUser(savedUser);

        const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(savedOrders);
    }, []);

    // 🚪 logout
    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        localStorage.removeItem("user");

        navigate("/login");
    };

    // ❌ remove order
    const removeOrder = (id) => {
        const updated = orders.filter((book) => book.id !== id);
        localStorage.setItem("orders", JSON.stringify(updated));
        setOrders(updated);
    };

    return (
        <div className="container mx-auto py-12">

            {/* USER SECTION */}
            <div className="mb-10 p-6 bg-gray-100 rounded">
                <h1 className="text-3xl font-bold">📊 Dashboard</h1>

                <p className="mt-2 text-lg">
                    👤 Welcome:{" "}
                    <span className="font-semibold">
                        {user?.name || user || "Guest"}
                    </span>
                </p>

                <button
                    onClick={handleLogout}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    🚪 Logout
                </button>
            </div>

            {/* ORDERS SECTION */}
            <h2 className="text-2xl font-bold mb-4">
                📦 My Ordered Books
            </h2>

            {orders.length === 0 ? (
                <p className="text-gray-500">
                    No books ordered yet 📚
                </p>
            ) : (
                <div className="grid md:grid-cols-3 gap-6">

                    {orders.map((book, index) => {

                        const cover = book.cover
                            ? `https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`
                            : "https://placehold.co/300x400?text=No+Cover";

                        return (
                            <div key={index} className="shadow p-4 rounded">

                                <img
                                    src={cover}
                                    alt={book.title}
                                    className="w-full h-72 object-cover rounded"
                                />

                                <h3 className="mt-2 font-bold">
                                    {book.title}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {book.author || "Unknown author"}
                                </p>

                                <button
                                    onClick={() => removeOrder(book.id)}
                                    className="mt-3 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                                >
                                    ❌ Remove
                                </button>

                            </div>
                        );
                    })}

                </div>
            )}
        </div>
    );
}

export default Dashboard;