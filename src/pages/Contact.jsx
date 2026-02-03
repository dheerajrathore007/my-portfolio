import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = "916261672551";

        const text = `
Hi Dheeraj, I want to connect with you 👋
MY name is ${name} ,
my E-mail id is ${email}
Message:
${message}
    `;

        const encodedText = encodeURIComponent(text);

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <section className="max-w-4xl mx-auto py-20 px-4">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border rounded"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded"
                />

                <textarea
                    placeholder="Your Message"
                    rows="2"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 border rounded"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
                >
                    send
                </button>

            </form>
        </section>
    );
}
