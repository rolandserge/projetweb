import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "../../Styles/User/Slider.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import tableau from '../../Images/tableau.jpg'
import toile from "../../Images/toile.jpg"
import fleur from "../../Images/fleurs.jpg"
import fleurs from "../../Images/fleurs.jpg"
import { Link } from 'react-router-dom';


const Promotion = () => {
     return (
          <>
                <Swiper
               spaceBetween={20}
               slidesPerView={5}
               navigation
               modules={[Navigation, Pagination, Scrollbar, A11y]}
               pagination={{ clikable : true }}
               // scrollbar={{ draggable : true }}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}

               className="containerblue"
          >
               
          <SwiperSlide className='slidercard'>
               <div className='slide'>
                    <img src={fleur} alt="tableau 1" />
                    <div className="infos">
                         <Link to="" className='nom'><p>Nom du tableau a afficher et la categorie</p></Link>
                         <Link to="" className='prix'>1 000 000 FCFA</Link>
                    </div>
               </div>
          </SwiperSlide>
               <SwiperSlide>
                    <div className='slide'>
                         <img src={fleurs} alt="tableau 2" />
                         <div className="infos">
                              <Link to="" className='nom'><p>Nom du tableau a afficher et la categorie</p></Link>
                              <Link to="" className='prix'>1 000 000 FCFA</Link>
                         </div>
                    </div>
               </SwiperSlide>
               <SwiperSlide>
                    <div className='slide'>
                         <img src={toile} alt="tableau 3" />
                         <div className="infos">
                              <Link to="" className='nom'><p>Nom du tableau a afficher et la categorie</p></Link>
                              <Link to="" className='prix'>1 000 000 FCFA</Link>
                         </div>
                    </div>
               </SwiperSlide>
               <SwiperSlide>
                    <div className='slide'>
                    <img src={tableau} alt="tableau 4" />
                    <div className="infos">
                              <Link to="" className='nom'><p>Nom du tableau a afficher et la categorie</p></Link>
                              <Link to="" className='prix'>1 000 000 FCFA</Link>
                         </div>
                    </div>
               </SwiperSlide>
               <SwiperSlide>
                    <div className='slide'>
                         <img src={fleur} alt="tableau 1" />
                         <div className="infos">
                              <Link to="" className='nom'><p>Nom du tableau a afficher et la categorie</p></Link>
                              <Link to="" className='prix'>1 000 000 FCFA</Link>
                         </div>
                    </div>
               </SwiperSlide>
               <SwiperSlide>
                    <div className='slide'>     
                    <img src={fleurs} alt="tableau 2" />
                    <div className="infos">
                              <Link to="" className='nom'><p>Nom du tableau a afficher et la categorie</p></Link>
                              <Link to="" className='prix'>1 000 000 FCFA</Link>
                         </div>
                    </div>
               </SwiperSlide>
               <SwiperSlide>
                    <div className='slide'>
                         <img src={toile} alt="tableau 3" />
                         <div className="infos">
                              <Link to="" className='nom'><p>Nom du tableau a afficher et la categorie</p></Link>
                              <Link to="" className='prix'>1 000 000 FCFA</Link>
                         </div>
                    </div>
               </SwiperSlide>
              <SwiperSlide>
                    <div className='slide'>
                         <img src={tableau} alt="tableau 4" />
                         <div className="infos">
                              <Link to="" className='nom'><p>Nom du tableau a afficher et la categorie</p></Link>
                              <Link to="" className='prix'>1 000 000 FCFA</Link>
                         </div>
                    </div>
              </SwiperSlide>
             <SwiperSlide>
                    <div className='slide'>
                         <img src={fleur} alt="tableau 1" />
                         <div className="infos">
                              <Link to="" className='nom'><p>Nom du tableau a afficher et la categorie</p></Link>
                              <Link to="" className='prix'>1 000 000 FCFA</Link>
                         </div>
                    </div>
             </SwiperSlide>
              <SwiperSlide>
                    <div className='slide'>
                         <img src={fleurs} alt="tableau 2" />
                         <div className="infos">
                              <Link to="" className='nom'><p>Nom du tableau a afficher et la categorie</p></Link>
                              <Link to="" className='prix'>1 000 000 FCFA</Link>
                         </div>
                    </div>
              </SwiperSlide>
               <SwiperSlide>
                    <div className='slide'>
                         <img src={toile} alt="tableau 3" />
                         <div className="infos">
                              <Link to="" className='nom'><p>Nom du tableau a afficher et la categorie</p></Link>
                              <Link to="" className='prix'>1 000 000 FCFA</Link>
                         </div>
                    </div>
               </SwiperSlide>
               <SwiperSlide>
                    <div className='slide'> 
                    <img src={tableau} alt="tableau 4" />
                    <div className="infos">
                              <Link to="" className='nom'><p>Nom du tableau a afficher et la categorie</p></Link>
                              <Link to="" className='prix'>1 000 000 FCFA</Link>
                         </div>
                    </div>
               </SwiperSlide>
               {/* </div> */}
          </Swiper>
          </>
     );
};

export default Promotion;