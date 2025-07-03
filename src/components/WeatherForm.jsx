import React from "react";
import { useState } from "react";

export default function WeatherForm({ onSearch }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input.trim());
            setInput("");
        }
    };

    return (
        <div className="w-full max-w-sm mb-6">
            <form className="flex gap-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="flex-1 px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-700"
                    placeholder="Enter city name"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer"
                >
                    Search
                </button>
            </form>
        </div>
    );
}