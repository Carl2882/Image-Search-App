import React, {useEffect, useState} from 'react';
import './input.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images,setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [term, setTerm] = useState('');


  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=35774945-d3adb8480a29091e6c491628b&q=yellow+flowers&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  });


  return (
   <div className='container mx-auto'> 
   <ImageSearch />
      {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1> : <div className='grid grid-cols-3 gap-4'>
        {images.map(image=>(
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
   </div>
  );
}

export default App;
