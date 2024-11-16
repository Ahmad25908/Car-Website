// "use client"
// import { useState } from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Font Awesome Icons

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   // Update handleChange to account for different input types
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const response = await fetch("/api/contact", {
//       method: "POST",
//       body: JSON.stringify(formData),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       alert("Your message has been sent successfully!");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });
//     } else {
//       alert("There was an error sending your message. Please try again.");
//     }
//   };

//   return (
//     <section className="bg-gray-100 py-16 px-4">
//       <div className="container mx-auto max-w-6xl">
//         {/* Hero Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch with Us</h2>
//           <p className="text-lg text-gray-600">
//             Have questions, need assistance, or ready to schedule a test drive? Let’s connect.
//           </p>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white p-8 rounded-lg shadow-lg">
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
//                   placeholder="e.g., John Doe"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="mt-6">
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>

//             <div className="mt-6">
//               <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//                 Subject
//               </label>
//               <select
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
//               >
//                 <option value="Sales Inquiry">Sales Inquiry</option>
//                 <option value="Test Drive">Test Drive</option>
//                 <option value="Support">Support</option>
//               </select>
//             </div>

//             <div className="mt-6">
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
//                 rows={5}
//                 placeholder="How can we help you?"
//                 required
//               />
//             </div>

//             <div className="mt-8 text-center">
//               <button
//                 type="submit"
//                 className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Contact Details Section */}
//         <div className="mt-12 flex flex-wrap justify-around text-center">
//           <div className="flex items-center mb-6">
//             <FaPhoneAlt className="text-3xl text-yellow-400 mr-4" />
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
//               <p className="text-gray-600">+1 (800) 123-4567</p>
//             </div>
//           </div>
//           <div className="flex items-center mb-6">
//             <FaEnvelope className="text-3xl text-yellow-400 mr-4" />
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
//               <p className="text-gray-600">support@carwebsite.com</p>
//             </div>
//           </div>
//           <div className="flex items-center mb-6">
//             <FaMapMarkerAlt className="text-3xl text-yellow-400 mr-4" />
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800">Visit Us</h3>
//               <p className="text-gray-600">123 Car Showroom, City, Country</p>
//             </div>
//           </div>
//         </div>

//         {/* Social Media Section */}
//         <div className="mt-12 text-center">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
//           <div className="flex justify-center space-x-6">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-400">
//               <i className="fab fa-facebook-f text-2xl"></i>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-400">
//               <i className="fab fa-instagram text-2xl"></i>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-400">
//               <i className="fab fa-twitter text-2xl"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;
"use client";
import { useState } from "react";
// import dynamic from "next/dynamic"; // Import dynamic from Next.js to disable SSR
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Font Awesome Icons

// Dynamically import useRouter to disable SSR
// const useRouter = dynamic(() => import("next/router").then(mod => mod.useRouter), { ssr: false });

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // const router = useRouter(); // Initialize useRouter

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // router.push("/thank-you"); // Navigate to the Thank You page
    } else {
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <section className="bg-gray-100 py-20 px-4 md:pt-24">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch with Us</h2>
          <p className="text-lg text-gray-600">
            Have questions, need assistance, or ready to schedule a test drive? Let’s connect.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                  placeholder="e.g., John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
              >
                <option value="Sales Inquiry">Sales Inquiry</option>
                <option value="Test Drive">Test Drive</option>
                <option value="Support">Support</option>
              </select>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 mt-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                rows={5}
                placeholder="How can we help you?"
                required
              />
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="mt-12 flex flex-wrap justify-center md:justify-around text-center">
          <div className="flex items-center mb-6 mx-4 md:mx-0">
            <FaPhoneAlt className="text-3xl text-yellow-400 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+1 (800) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center mb-6 mx-4 md:mx-0">
            <FaEnvelope className="text-3xl text-yellow-400 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">support@carwebsite.com</p>
            </div>
          </div>
          <div className="flex items-center mb-6 mx-4 md:mx-0">
            <FaMapMarkerAlt className="text-3xl text-yellow-400 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Visit Us</h3>
              <p className="text-gray-600">123 Car Showroom, City, Country</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-400">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-400">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-400">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
