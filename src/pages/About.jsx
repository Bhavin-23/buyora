import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl shadow-lg shadow-yellow-600/20 p-10 space-y-8">
        <h1 className="text-4xl font-bold text-center text-yellow-500 tracking-wide">
          About Buyora
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-yellow-400">Buyora</span>, your
          one-stop destination for the latest and greatest in electronics. From
          cutting-edge gadgets to must-have accessories, we’re here to power up
          your tech life with premium products and unbeatable service.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-yellow-400">
            Our Mission
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            At Buyora, our mission is to make innovative technology accessible
            to everyone. We’re passionate about connecting people with the tools
            and tech they need to thrive in a digital world — all at competitive
            prices and delivered with speed and care.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-yellow-400">
            Why Choose Buyora?
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-yellow-400">Our Vision</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            We envision a future where technology elevates everyday life. At
            Jalvix, we’re committed to staying ahead of the curve, offering
            cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            Join the Buyora Family
          </h3>
          <p className="text-gray-400 mb-4">
            Whether you’re a tech enthusiast, a professional, or just looking
            for something cool and functional — Buyora has something for
            everyone.
          </p>
          <Link to={"/products"}>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-yellow-500/30 transition duration-300">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
