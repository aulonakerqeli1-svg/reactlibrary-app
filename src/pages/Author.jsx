import { useState } from "react";
import axios from "axios";

function Author() {
    const [author, setAuthor] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const sendRequest = async () => {
        if (loading || !author.trim()) return;

        setLoading(true);
        setResult("");

        try {
            const response = await axios.post(
                "http://localhost:3000/api/author",
                { author }
            );

            const text =
                response.data.output?.[0]?.content?.[0]?.text ||
                "No response";

            setResult(text);

        } catch (error) {
            console.log("Error:", error);
            setResult("Something went wrong. Try again later.");
        }

        setLoading(false);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>📚 Library Author AI</h2>

            <input
                type="text"
                placeholder="Enter author name (e.g. Shakespeare)"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                style={{
                    padding: "10px",
                    width: "300px",
                    marginRight: "10px"
                }}
            />

            <button
                onClick={sendRequest}
                disabled={loading || !author.trim()}
                style={{
                    padding: "10px 15px",
                    cursor: loading ? "not-allowed" : "pointer"
                }}
            >
                {loading ? "Generating..." : "Generate"}
            </button>

            <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
                {result && <p>{result}</p>}
            </div>
        </div>
    );
}

export default Author;