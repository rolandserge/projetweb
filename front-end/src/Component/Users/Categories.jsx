import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Categories = () => {
 
     const [categories, setCategories] = useState([])
     const [produits, setProduits] = useState([])
     const [filters, setFilter] = useState([])
     const [value, setValue] = useState()
     const [loadings, setLoadings] = useState(true)
     const [active, setActive] = useState(true)

     const [search, setSearch] = useState("")

     var keys = ['Name_Tableau','categorie.Namecategory', 'Prix_Tableau']
     
     const recherche = (prod) => {
          return prod.filter((produit) => keys.some((key) => String(produit[key]).toLowerCase().includes(search.toLowerCase())))
          // return prod.filter( produit => Object.keys(produit).some( keys => String(produit[keys]).toLowerCase().includes(search.toLowerCase())))
     }

     useEffect(() => {

          const Categories = async() => {

               try {
                   const response = await axios.get("/api/user/get-product");
                 
                    if(response.data.status === 200) {

                         setProduits(response.data.tableaux)
                         setFilter(response.data.tableaux)
                         setCategories(response.data.categories)
                         setLoadings(false)
                    }
               } catch (error) {

                   console.log(error);
               }
          }
               
        Categories()
     }, [])
      
     const changetat = (index) => {

          if(index ==  value) {
               return "button active"
          }    
          else {
               return "button"
          }
     }
     const filterdata = (index) => {
          setValue(index)
          setActive(false)
          if(index == -1) {
               const filter = produits.filter((x) => x.id != index)
               setFilter(filter)
          } else {
               const filter = produits.filter((x) => x.categorie_id === index)
               setFilter(filter)
          }
     }
     function Loading () {
          return <h1>Loading ...</h1>
     }
     return (
          <>
               <div className='searchbar'>
                    <div className='search'>
                         <input type="search" onChange={(event) => setSearch(event.target.value)} placeholder='Rechercher des tableaux par leur noms' name="search" />
                    </div>
               </div>
          {
               loadings ? <Loading /> : 
               <>
                    <div className="listes_categories">
                    <>
                         {/* <Link to="/" className={ location.pathname === `/` ? 'button active' : "button"}>Tout</Link> */}
                         <button onClick={() => filterdata(-1)}  className={active ? "button active" : changetat(-1)}>Tout</button>

                    </>
                         {
                              categories.map((categorie, index) => {
                                   return (
                                        // <Link key={index}  className={ location.pathname === `/categories/${categorie.Name_category}` ? 'button active' : "button"} to={`/categories/${categorie.Name_category}`}>{categorie.Name_category}</Link>
                                        <button key={index} onClick={() => filterdata(categorie.id)}  className={changetat(categorie.id)}>{categorie.Name_category}</button>
                                   )
                              })
                         }
                         
                    </div>
                    <>   
                         {
                              search ? 
                              <Card produits={recherche(produits)} /> :
                              <Card produits={filters} />
                         }
                    </>
               </>
          }
          </>
     );
};

export default Categories;