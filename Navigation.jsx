import {Link} from 'react-router-dom' 
import  './style.css' 
import {useState} from 'react' 
const Navigation = (a)=>{ 
    // console.log(a.prop) 
 
    let [val, setVal] = useState('') 
    let valData = (b)=>{  
        setVal(b.target.value) 
        a.prop.serc(b.target.value) 
    } 
 
    let displayData = (c)=>{ 
        // console.log(c.target.value) 
        a.prop.fun(c.target.value) 
    } 
 
    return( 
        <nav id='navigation'> 
            <Link to='/'>HOME</Link>   
            <input type="text" placeholder='Search here...' value={val} onChange={valData}/> 
            <select name="" id="" onChange={displayData}> 
                <option value="list">LIST</option> 
                <option value="grid">GRID</option> 
            </select> 
        </nav> 
    ) 
} 
export default Navigation