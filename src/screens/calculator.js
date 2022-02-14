import React,{useState} from 'react';
import Button from '@mui/material/Button';
import CalculatorModal from '../components/calculatorModal'
import Math from '../assets/math.jpg'


const Calculator = () =>{
    const [showModal,setShowModal] = useState(false)
    const show = () =>{
        setShowModal(true)
    }

    return(
       <div style={{height:750}}>
           <div style={{height:'50%',width:'100%',backgroundColor:'pink',background:`url(${Math})`,backgroundPosition:'center'}} >

           </div>
           <div style={{height:200,width:'100%',backgroundColor:'white',display:'flex',justifyContent: 'center',alignItems: 'center'}}>
           <Button  
                onClick={show}
                variant="contained" 
                style={{textDecoration: 'none',marginTop:30,backgroundColor:'green'}}>
                Show Calculator
            </Button>
            {showModal && <CalculatorModal showModal={showModal} closeModal={()=>setShowModal(false)}/>}
           </div>
       </div>
    )
}
export default Calculator;