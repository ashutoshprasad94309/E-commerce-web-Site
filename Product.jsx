import {useState} from 'react' 
import {useEffect} from 'react' 
import  './style.css' 
import {useNavigate} from 'react-router-dom' 

 
const Product = (ab)=>{ 
    console.log('show', ab.prop) 
    let [prod, setProd] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) 
     
 
    let navigate = useNavigate() 
 
 
    let goto = (a)=>{ 
        navigate(`/details/${a}`) 
    } 
 
    useEffect(()=>{ 
        let a = fetch('https://fakestoreapi.com/products')
        a.then((res1)=>{
            let b = res1.json()
            return b
        })
        .then((res2)=>{ 
            if(ab.prop.search){ 
            let filteredData = res2.filter((one)=>{ 
                let searchData = ab.prop.search.toLowerCase() 
                return one.category.toLowerCase().includes(searchData) || one.title.toLowerCase().includes(searchData) 
            }) 
            setProd(filteredData) 
            console.log(filteredData) 
        } 
        else{ 
            setProd(res2) 
        } 
            console.log('Got the Data Successfully') 
        }) 
        .catch(()=>{ 
            console.log('Some ERROR in Fetching Products') 
        }) 
    },[ab.prop.search]) 
 
     
    return( 
        <div id={`${ab.prop.dis}`}> 
            {prod.map((x)=>{ 
                return( 
                    <div id='item'> 
                      <section onClick={()=>{goto(x.id)}}  style={{backgroundImage:`url(${x.image})`}}> 

                      </section> 
                      <article> 
                        <h3>{x.title}</h3> 
                        <br /> 
                        {/* <span>{x.rating.rate}</span>  */}
                        <br /> 
                        <h3>Price: {x.price} $</h3> 
                         
                      </article> 
                    </div> 
                ) 
            })} 
        </div> 
    ) 
} 
export default Product