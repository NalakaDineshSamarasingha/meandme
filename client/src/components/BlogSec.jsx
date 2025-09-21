import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

function BlogSec() {
  // Blog data (extendable)
  const blogs = [
    {
      id: 1,
      title: 'How to Successfully Complete a Group Software Project in University',
      description: 'Working on a group software project is one of the most rewarding (and sometimes stressful) parts of university life.',
      image: '/assets/group.jpg',
      category: 'Guide',
      tags: ['Collaboration', 'Teamwork'],
      links: {
        live: 'https://medium.com/@nalakadinesh97/how-to-successfully-complete-a-group-software-project-in-university-6c2b27c8bfba'
      }
    }
  ];

  // Individual blog card styled like project cards
  const BlogCard = ({ blog }) => (
    <div className="group bg-[#111111] border border-gray-800 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-gray-700">
      <div className="relative h-44 bg-gray-800 overflow-hidden">
        <img
          src={blog.image}
            alt={blog.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        {blog.category && (
          <span className="absolute top-3 left-3 bg-indigo-600/20 text-indigo-300 backdrop-blur px-3 py-1 rounded-full text-[10px] tracking-wider font-semibold border border-indigo-500/30">
            {blog.category.toUpperCase()}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-white font-semibold text-lg tracking-tight">{blog.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{blog.description}</p>
        {blog.tags && (
          <div className="flex flex-wrap gap-2">
            {blog.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wide bg-gray-800/70 border border-gray-700 text-gray-300 px-2 py-1 rounded-md">{tag}</span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between pt-1">
          <a
            href={blog.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium px-3 py-2 rounded-md border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 transition-colors flex items-center gap-1"
          >
            <Globe className="w-3 h-3" /> Read ↗
          </a>
        </div>
      </div>
    </div>
  );

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section className="bg-[#111111] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-4">BLOG</h2>
          <p className="text-gray-400 text-lg max-w-2xl">Not a professional writer—just sharing experiences, tips, and lessons learned.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={blog.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 120}ms` }}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSec;