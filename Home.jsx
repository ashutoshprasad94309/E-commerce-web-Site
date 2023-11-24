import {useState} from 'react' 
import {useEffect} from 'react'  
import {useNavigate} from 'react-router-dom' 
 
 
const Home = ()=>{ 
    let [data,setData] = useState([1, 2, 3, 4]) 
 
    let navigate = useNavigate() 
 
    useEffect(()=>{ 
        let a = fetch('https://fakestoreapi.com/products')
        a.then((res)=>{
            let b = res.json()
            return b
        })   
        .then((res2)=>{ 
            setData(res2.slice(0,4))
        }) 
        .catch(()=>{ 
            console.log('Some Error in Home Page') 
        }) 
    },[])  
 
    let send = ()=>{ 
        navigate('/products') 
    } 
    return( 
        <div id='home'> 
            <h1>Some Products</h1> 
           <section onClick={send}> 
             
           {data.map((x)=>{ 
                return( 
                    <div > 
                        <img src={x.image} alt="" height={'200px'}/> 
                        <h3>{x.title}</h3> 
                    </div> 
                ) 
            })} 
           </section> 
        </div> 
    ) 
} 
export default Home