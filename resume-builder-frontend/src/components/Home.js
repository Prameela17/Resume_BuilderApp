import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Resume Builder</h1>
      <p className="text-lg text-gray-700 mb-8">
        Create your professional resume easily with our intuitive tool. Get started by logging in or registering an account.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/login">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300">
            Register
          </button>
        </Link>
      </div>
      <div className="mt-10">
        <img src="https://via.placeholder.com/600x400" alt="Resume Builder" className="mx-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Home;
