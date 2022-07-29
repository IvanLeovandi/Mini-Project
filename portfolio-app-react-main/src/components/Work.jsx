import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';

const Work = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const getImages = async () => {
      const res = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&page=${currentPage}`
      );
      const data = await res.json();
      setImages(data.hits);
      setIsLoading(false);
    };
    getImages();
  }, [currentPage, term]);

    const nextPage = () => 
      {
      if (currentPage < 5) {
        setCurrentPage(currentPage + 1)
      } else {
        setCurrentPage(5)
      }
    }

    const prevPage = () => 
      {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1)
      } else {
        setCurrentPage(1)
      }
    }

    const page1 = () => setCurrentPage(1)
    const page2 = () => setCurrentPage(2)
    const page3 = () => setCurrentPage(3)
    const page4 = () => setCurrentPage(4)
    const page5 = () => setCurrentPage(5)

    return (
      <div className="container mx-auto mb-4">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(images => (
          <ImageCard key={images.id} image={images} />
        ))}
      </div>}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <button onClick={prevPage} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Previous</button>
        <button onClick={page1} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">1</button>
        <button onClick={page2} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">2</button>
        <button onClick={page3} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">3</button>
        <button onClick={page4} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">4</button>
        <button onClick={page5} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">5</button>
        <button onClick={nextPage} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Next</button>
      </div>
      </div>

    );
}

export default Work;
