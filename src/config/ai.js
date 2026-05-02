try {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    const response = await axios.post(
        "https://api.openai.com/v1/responses",
        {
            model: "gpt-4.1-mini",
            input: prompt
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`
            }
        }
    );

    const text =
        response.data.output?.[0]?.content?.[0]?.text ||
        "No response from AI";

    setResult(text);

} catch (error) {
    console.log("FULL ERROR:", error.response?.data || error.message);
    setResult("Error: check console");
}