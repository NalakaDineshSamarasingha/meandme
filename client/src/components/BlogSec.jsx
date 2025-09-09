import React, { useEffect, useState } from 'react'
import { 
  Globe, 
} from 'lucide-react';


function BlogSec() {


    
const blogs = [
    {
      id: 1,
      title: "How to Successfully Complete a Group Software Project in University",
      description: "Working on a group software project is one of the most rewarding (and sometimes stressful) parts of university life. ",
      image: "/assets/group.jpg",
      links: {
        live: "https://medium.com/@nalakadinesh97/how-to-successfully-complete-a-group-software-project-in-university-6c2b27c8bfba",
      }
    },

  ];

  const BlogCard = ({ blog }) => (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        


        {/* Overlay Links */}
        <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a href={blog.links.live} target='_blank' rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-sm font-medium transition-colors duration-200">
              <Globe className="w-4 h-4" />
              Read
            </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {blog.title}
          </h3>
          <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
            {blog.category}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {blog.description}
        </p>

      </div>
    </div>
  );



      const [isVisible, setIsVisible] = useState(false);

       useEffect(() => {
          setIsVisible(true);
        }, []);
      
    
  return (
    <div className="container mx-auto px-6 mb-11 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-red-500 rounded-full mr-4 animate-ping"></div>
            <span className="text-gray-400 uppercase text-sm tracking-[0.2em] font-medium">
              Featured Blog
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-purple-200 to-white bg-clip-text text-transparent">
              My Blogs
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Not a professional writer—just sharing my real experiences, tips, and lessons learned.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <div
                  key={blog.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
    </div>
  )
}

export default BlogSec