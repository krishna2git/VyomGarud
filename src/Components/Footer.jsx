function Footer() {
  return (
    <footer id="contact" className="py-8 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-accent outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-accent outline-none"
          />
          <textarea
            rows="4"
            placeholder="Message...."
            className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700 focus:border-accent outline-none"
          />
          <button className="w-full bg-accent text-black font-semibold py-3 rounded hover:bg-orange-500 transition">
            Send Message
          </button>
        </form>
        </div>

       <div className="w-full border-t border-gray-700 mt-10 pt-6">
      <p className="text-gray-500 text-sm text-center ">
        © {new Date().getFullYear()} VyomGarud. All Rights Reserved.
      </p>
    </div>

    </footer>
  );
}


export default Footer;
