import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';
import ReactPaginate from 'react-paginate';

const Work = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  // const [imagesPerPage, setImagesPerPage] = useState(10);
  const [pageCount, setpageCount] = useState(0);

  let limit = 5;

  useEffect(() => {
    const getImages = async () => {
      const res = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      setImages(data.hits);
      setIsLoading(false);
    };
    getImages();
  }, [limit, term]);

  const fetchImages = async (currentPage) => {
    const res = await fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchImages(currentPage);

    setImages(commentsFormServer);
  };

    return (
      <div className="container mx-auto mb-4">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(images => (
          <ImageCard key={images.id} image={images} />
        ))}
      </div>}

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />

      {/* <Pagination imagesPerPage={imagesPerPage} totalImages={images.length} /> */}
    </div>
    );

//   return (
//     <div name='work' className='w-full md:h-screen text-[#1d3557] bg-[#f1faee]'>
//       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//         <div className='pb-8'>
//           <p className='text-4xl font-bold inline border-b-4 text-[#1d3557] border-pink-600'>
//             Work
//           </p>
//           <p className='pt-6 pb-3'>Check out some of my recent work</p>
//         </div>

// {/* Container */}
//         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

//             {/* Grid Item */}
//           <div
//             style={{ backgroundImage: `url(${WorkImg})` }}
//             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
//           >
//           </div>
//           <div
//             style={{ backgroundImage: `url(${realEstate})` }}
//             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
//           >
//           </div>
//             {/* Grid Item */}
//           <div
//             style={{ backgroundImage: `url(${WorkImg})` }}
//             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
//           >
//           </div>
//           <div
//             style={{ backgroundImage: `url(${realEstate})` }}
//             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
//           >
//           </div>
//             {/* Grid Item */}
//           <div
//             style={{ backgroundImage: `url(${WorkImg})` }}
//             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
//           >
//           </div>
//           <div
//             style={{ backgroundImage: `url(${realEstate})` }}
//             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
//           >
//           </div>
//         </div>
//       </div>
//     </div>
//   );
};

export default Work;
