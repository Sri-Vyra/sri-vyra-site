function Contact() {
  return (
    <section className="bg-blue-50 py-20 px-4 md:px-16" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Get in Touch
      </h2>

      <form
        data-aos="fade-up"
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6"
      >
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Message</label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Tell us how we can help you..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
