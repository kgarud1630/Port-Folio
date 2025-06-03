import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ success: true, message: data.message });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ success: false, message: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Network error' });
    }
  };

  return (
    <section id="contact" className="my-20">
      <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          value={form.email}
          onChange={handleChange}
          required
