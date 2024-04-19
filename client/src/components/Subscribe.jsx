import React from 'react';
import { Card } from 'flowbite-react'; // Import Card component from flowbite-react

const Subscribe = () => {
  return (
    <div>
    
      {/* Your subscription form or content */}
      <h1 className='text-3xl font-semibold text-center my-7'>Subscribe to Get the Maximum</h1>
      
      {/* Container for the cards */}
      <div className="flex justify-center space-x-4">
        {/* Card 1: Free Plan */}
        <Card className='max-w-sm'>
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Free Plan</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">0</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <span>Can only read 30 posts in a month</span>
            </li>
          </ul>
         
        </Card>

        {/* Card 2: Standard Plan */}
        <Card className='max-w-sm'>
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard Plan</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">10</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <span>Can only read 30 posts in a month</span>
            </li>
            <li className="flex space-x-3">
              <span>Can read infinite blog posts</span>
            </li>
          </ul>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
          >
            Choose Plan
          </button>{/* Customize content for Standard Plan */}
        </Card>

        {/* Card 3: Premium Plan */}
        <Card className='max-w-sm'>
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Premium Plan</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">15</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              <span>Can read infinite posts in a month</span>
            </li>
            <li className="flex space-x-3">
              <span>Can create ,connect ,read,infinte blog posts</span>
            </li>
          </ul>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
          >
            Choose Plan
          </button> {/* Customize content for Premium Plan */}
        </Card>
      </div>
    </div>
  );
};

export default Subscribe;
