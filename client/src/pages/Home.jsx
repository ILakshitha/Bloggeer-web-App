import React, { useEffect, useState } from 'react';

// Assuming these components exist and work with the new design
import CallToAction from '../component/CallToAction';
import CallToAdd from '../component/CallToAdd';
import PostCard from '../component/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/post/getPosts?limit=3');
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-indigo-900 dark:to-purple-900">
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-24 md:py-28 lg:py-32">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Explore Ideas That <span className="text-yellow-300">Matter</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl">
              Discover insightful articles on web development, software engineering, and programming languages from experts in the field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="/search"
                className="bg-white text-indigo-700 hover:bg-gray-100 font-medium rounded-lg px-5 py-3 flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <span className="mr-1">🔍</span>
                Browse Articles
              </a>
              <a
                href="/subscribe"
                className="bg-indigo-900 text-white hover:bg-indigo-800 border border-indigo-500 font-medium rounded-lg px-5 py-3 flex items-center justify-center gap-2 transition-colors"
              >
                Get Updates
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-300 text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">In-Depth Articles</h3>
            <p className="text-gray-600 dark:text-gray-300">Comprehensive guides and tutorials on the latest technologies and best practices.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-green-600 dark:text-green-300 text-2xl">⏱️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Weekly Updates</h3>
            <p className="text-gray-600 dark:text-gray-300">Stay current with regular content on emerging trends and innovative solutions.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-purple-600 dark:text-purple-300 text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Trending Topics</h3>
            <p className="text-gray-600 dark:text-gray-300">Discover what's popular in the development community right now.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-slate-800 dark:to-slate-700 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <CallToAction />
          <CallToAdd />
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white">Recent Posts</h2>
            <a
              href="/search"
              className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium flex items-center gap-1"
            >
              View all
              <span className="ml-1">→</span>
            </a>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">No posts available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-indigo-50 dark:bg-gray-800 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Get the latest posts and updates delivered straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Your Blog Name. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/about" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">About</a>
            <a href="/contact" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Contact</a>
            <a href="/privacy" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}