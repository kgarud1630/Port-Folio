import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is a description of project one.',
    link: '#'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is a description of project two.',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h3 className="text-3xl font-semibold mb-6">Projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(({ id, title, description, link }) => (
          <div key={id} className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">{title}</h4>
            <p className="mb-4">{description}</p>
            <a href={link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
