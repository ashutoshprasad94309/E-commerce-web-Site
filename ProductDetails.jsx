import {useParams} from 'react-router-dom' 
import './style.css' 
import {useState} from 'react' 
import {useEffect} from 'react' 
 
const ProductDetails = ()=>{ 
    let [prod, setProd] = useState([]) 
    let {abc} = useParams() 
 
    useEffect(()=>{ 
        let a = fetch(`https://fakestoreapi.com/products/${abc}`)
        a.then((res1)=>{
            let b = res1.json()
            return b
        })
        .then((res2)=>{ 
            setProd(res2) 
            console.log(res2) 
        }) 
        .catch(()=>{ 
            console.log('Some Error in fetchign single page') 
        }) 
    },[abc]) 
 
    return( 
        <div id='details'> 
             <section style={{backgroundImage:`url(${prod.image})`}}> 
             </section> 
             <article> 
                <h1>{prod.title}</h1> 
                {/* <span>{prod.rating.rate} &#11088;</span> */} 
                <h2>Price: {prod.price} $</h2> 
                <p>{prod.description}</p> 
                {/* <h3><span style={{color:"red"}}>Only {prod.rating.count} left</span></h3> */} 
             </article> 
        </div> 
    ) 
} 
export default ProductDetails