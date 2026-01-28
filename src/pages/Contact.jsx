export default function Contact() {
return (
<section className="max-w-3xl mx-auto py-20 px-4">
<h2 className="text-3xl font-bold mb-6">Contact Me</h2>
<form className="space-y-4">
<input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
<input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
<textarea placeholder="Your Message" className="w-full p-3 border rounded"></textarea>
<button className="px-6 py-2 bg-blue-600 text-white rounded">Send</button>
</form>
</section>
);
}