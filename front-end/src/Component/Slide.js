import React, { useEffect, useState } from 'react';
import "../Styles/User/Slider.css"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import tableau from '../Images/tableau.jpg'
import toile from "../Images/toile.jpg"
import fleur from "../Images/fleurs.jpg"
import fleurs from "../Images/fleurs.jpg"
import { Link } from 'react-router-dom';
import Card from './Users/Card';
import axios from 'axios';

const Slide = () => {

     const [tableaux, setTableaux] = useState([])
     useEffect(() => {
          (async function () {
               try {
                   const response = await axios.get("/api/user/get-product");
                 
                    if(response.data.status === 200) {

                         setTableaux(response.data.tableaux)
                    }
               } catch (error) {
                   console.log(error);
               }
           })();
     }, [])
     return (
        
          <>
               {/* <ul className="contenaire"> */}
                    {/* <div>
                         Les nouveaux tableaux disponibles
                    </div> */}
          <Swiper
               spaceBetween={20}
               slidesPerView={4}
               navigation
               modules={[Navigation, Pagination, Scrollbar, A11y]}
               pagination={{ clikable : true }}
               // scrollbar={{ draggable : true }}
          >   
               {/* <div className='cards' > */}
                    {
                         tableaux.map((table) => {
                              return (
                              
                                   <SwiperSlide>
                                        <div className="card_swipper" key={table.id}>
                                             <div className="image">
                                                  <img src={`http://127.0.0.1:8000/${table.Image_Tableau}`} alt={table.Name_Tableau} />
                                             </div>
                                             <div className="infos">
                                                  <Link to={`/detail-tableau/${table.categorie.Name_category}/${table.id}`} className='nom'><p>{table.Name_Tableau}</p></Link>
                                                  <Link to={`/detail-tableau/${table.categorie.Name_category}/${table.id}`} className='prix'>{table.Prix_Tableau} FCFA</Link>
                                             </div>
                                        </div>
                                   </SwiperSlide>
                              )
                         })
                    }
                    {/* </div> */}
         
               
          </Swiper>
          {/* </ul> */}
   
          </>
     
     );
};

export default Slide;