import React from 'react'
import Footer from '../components/Footer'
import './Admin.css';
import { Link } from 'react-router-dom';
import Update from './Update';
import Upload from './Upload';

const Admin = () => {
  return (
    <>
    <table>
      <div className='admin1 '>
    
  
    <li className="admin ms-3"  type="button">Dashboard</li>
    <li className ="admin ms-4 "  type='button' ><Link to="/home">Home</Link></li>
    <li className="admin ms-4" type='button'><Link to="/perisp">PERI PERIS</Link></li>
    <li className="admin ms-4"type="button"><Link to='/valuesnacks'>SNACKS</Link></li>
    <li className='admin ms-3'type='button'><Link to='/burgers'>BURGERS</Link></li>
    <li className='admin ms-4'type='button'><Link to='/chickenwings'>CHICKEN ROLLS</Link></li>
  </div>
  
  </table>
  
  <Update/>
  <Upload/>

{/* <div class="card admin1">
         <div class="card-body upload5">
     <form >
            <h2>UPLOAD</h2>
            <div class="admin2">
                <label value="title"><b>TITLE</b></label>
                <input type="text" name="title" className='ms-3'/>
            </div>
            <div class="admin3">
                <label value="img"><b>IMAGE</b></label>
                <input type='img' name="img" className='ms-3'/>
                </div>
                <div class="admin4">
                <label value="food"><b>FOOD</b></label>
                <input type='text' name="food" className='ms-3'/>
                </div>
                <div class="admin5">
                <label value="des"><b>DES</b></label>
                <input type='text' name='des' className='ms-3'/>
                </div>
                <div class="admin6">
                <label value="price"><b>PRICE</b></label>
                <input type='numbers' name='price' className='ms-3'/>
            </div>
            <div class="admin7">
                <button type="submit" class="btn btn-primary">upload</button>
                
            </div>
        </form>
        </div>
        
        </div>
        </section>
         */}

</>
  )
}

export default Admin