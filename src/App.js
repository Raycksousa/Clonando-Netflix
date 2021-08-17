import React,{useEffect,useState} from 'react';
import './App.css';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
// eslint-disable-next-line 
export default() => {
    

    const [movielist, setMovieList] =useState([]);
    // eslint-disable-next-line
    const [featuredData, setFeatureData] = useState(null);


  
  useEffect(()=>{
     const loadAll=async()=>{
      let list=await tmdb.getHomelist();
      setMovieList(list);

    
    
    let originals= list.filter(i=>i.slug ==='originais');
    let randomchosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
    let chosen = originals[0].items.results[randomchosen];
    // eslint-disable-next-line
    let chosenInfo = await tmdb.getMovieInfo(chosen.id,'tv');
     setFeatureData(chosenInfo);
     
  }
     loadAll();

  },[]);   
  
  
  
  
  
  
  return (
       <div className="page">

      <Header/>  

      { featuredData  &&
         <FeaturedMovie item={featuredData} />
      
      }





         <section className="list">
           {movielist.map((item,key)=>(
             <MovieRow key={key} title={item.title} items={item.items}/>
                
                       
           ))}

         </section>

         <footer>
           Feito por Rayck com react.
           Direitos de imagem para Netflix.
           Dados pegos no site themovietmdb
         </footer>
         
       </div>
 
     );
}



