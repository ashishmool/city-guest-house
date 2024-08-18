import React from 'react';

const PageNotFound = () => {
  return (
      <div className='flex flex-col min-h-screen'>
        <main className='flex-grow flex items-center justify-center bg-gray-100'>
          <div className='text-center p-6'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>
            <p className='text-xl text-gray-700'>Page Not Found</p>
          </div>
        </main>
      </div>
  );
}

export default PageNotFound;
