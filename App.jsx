import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from './Home' 
import Foot from './Foot' 
import Navigation from './Navigation' 
import Product from './Product' 
import ProductDetails from './ProductDetails' 
import {useState} from 'react'
import './style.css'
 
const App = ()=>{ 
 
    let [search, setSearch] = useState() 
    let [dis, setDis] = useState('list') 
 
    function serc(a){ 
        setSearch(a) 
    } 
 
    function fun(b){ 
        console.log('from fun', b) 
        setDis(b) 
    } 
 
    return( 
        <BrowserRouter> 
        <Navigation prop={{serc,fun}} />     
        <main id='Main'>
        <Routes> 
            <Route path='/' element={<Home/>}/> 
            <Route path='/products' element={<Product prop={{search, dis}} />} /> 
            <Route path='/details/:abc' element={<ProductDetails/>} /> 
        </Routes> 
        </main>
        <Foot/> 
        </BrowserRouter> 
    ) 
} 
export default App