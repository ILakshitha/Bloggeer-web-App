import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-[400px] sm:w-[340px] w-full border-b-4 border-transparent hover:border-indigo-600 dark:hover:border-indigo-500">
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Image Container */}
      <Link to={`/post/${post.slug}`} className="block overflow-hidden">
        <div className="h-[200px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <Link to={`/post/${post.slug}`}>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {post.title}
          </h3>
        </Link>

        {/* Optional: Show excerpt if available */}
        {post.excerpt && (
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
            {post.excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mt-auto">
          {post.user?.profilePicture && (
            <img
              src={post.user.profilePicture}
              alt={post.user?.username || 'Author'}
              className="w-6 h-6 rounded-full mr-2"
            />
          )}
          <span>{post.user?.username || 'Unknown'}</span>
          <span className="mx-2">•</span>
          <span>
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })}
          </span>
        </div>

        {/* Read More Button */}
        <Link
          to={`/post/${post.slug}`}
          className="mt-3 flex items-center justify-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm hover:from-indigo-700 hover:to-purple-700 transition-all transform group-hover:translate-y-0 translate-y-1"
        >
          Read Article 
          <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}