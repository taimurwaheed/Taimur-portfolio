import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("taimurwaheed2003@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section
      id="contact"
      className="bg-gray-900 min-h-screen flex items-center justify-center py-10"
    >
      <div className="container px-5 py-10 mx-auto flex flex-wrap items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-4 font-medium title-font text-center">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-6 text-center text-gray-400">
            Passionate about creating innovative applications? With a proven
            track record in developing utility and game applications, I am
            dedicated to building high-quality, user-friendly software. Let's
            collaborate to turn your ideas into reality. Contact me to discuss
            how we can work together!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-auto block"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
