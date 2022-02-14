import React,{useState} from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import moment from 'moment';
import CenterModal from '../components/centerModal';
import reg from '../assets/reg.jpg'


const RegisterForm =() =>{

    const [fname,setFname] =useState("");
    const [lname,setLname] =useState("");
    const [uname,setUname] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [shortBio,setShortBio] =useState("");
    const [showModal,setShowModal] =useState(false);


    const [date,setDate] =useState(moment(new Date()).format("YYYY-MM-DD"));

    const handleSubmit = () =>{
        setShowModal(true)
        console.log(fname,lname,uname,email,password,shortBio,date)
        // setFname ("")
        // setLname ("")
        // setUname ("")
        // setEmail ("")
        // setPassword ("")
        // setShortBio ("")
    }

    const callBack = () => {
        setFname ("")
        setLname ("")
        setUname ("")
        setEmail ("")
        setPassword ("")
        setDate((moment(new Date()).format("YYYY-MM-DD")))
        setShortBio ("")
    }


    return(
        <div style={{height:900,backgroundColor:'white',display:'flex'}}>
           <div style={{height:900,width:'80%',backgroundColor:'white',width:'50%',justifyContent: 'center',alignItems:'center',alignItems:'center',display:'flex'}}>
               

               <div style={{backgroundColor:'white',justifyContent: 'center',alignItems:'center'}}> 
               <h1 style={{fontWeight:'bold',fontFamily:'pacifico',color:'purple'}}>Registration Form</h1>
                   <h4  style={{marginBottom:5}}>Name*</h4>
                   <div style={{display:'flex', flexDirection:'row'}}>
                        <TextField  
                            value={fname}
                            onChange={(e)=>setFname(e.target.value)}
                            id="outlined-basic" 
                            type="text"  
                            size="small" 
                            placeholder="FirstName"  
                            style={{width:200,margin:0}} 
                        />
                        <TextField  
                            value={lname}
                            onChange={(e)=>setLname(e.target.value)}
                            id="outlined-basic" 
                            type="text"  
                            size="small" 
                            placeholder="LastName" 
                            style={{width:200,margin:0,marginLeft:20}} 
                        />
                   </div>

                   <div>
                        <h4 style={{marginBottom:5}}>UserName*</h4>
                            <TextField 
                                value={uname} 
                                onChange={(e)=>setUname(e.target.value)}
                                id="outlined-basic" 
                                type="text"  
                                size="small" 
                                placeholder="UserName"
                                style={{width:420,margin:0}} 
                            />

                        <h4 style={{marginBottom:5}}>E-mail*</h4>
                            <TextField  
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                id="outlined-basic" 
                                type="text"  
                                size="small" 
                                placeholder="Email"
                                style={{width:420,margin:0}} 
                            />

                        <h4 style={{marginBottom:5}}>Password*</h4>
                            <TextField 
                                value={password} 
                                onChange={(e)=>setPassword(e.target.value)} 
                                id="outlined-basic" 
                                type="text"  
                                size="small" 
                                placeholder="Password"
                                style={{width:420,margin:0}} 
                            />

                        <h4 style={{marginBottom:5}}>Short Bio*</h4>
                            <TextField 
                                value={shortBio}
                                onChange={(e)=>setShortBio(e.target.value)} 
                                id="outlined-basic" 
                                placeholder="Enter your Bio"
                                type="text"   
                                style={{width:420,margin:0}} 
                            />
                        <p  style={{margin:0}}>Share a little information about yourself</p>

                        <h4 style={{marginBottom:5}}>Date of Birth</h4>
                        <TextField  
                        value={date} 
                        onChange={(e)=>setDate(e.target.value)}
                        type="date"/>
                   </div>

                   <div>
                       {email == "" || password == "" 
                       ? 
                       <Button
                       disabled  
                        variant="contained" 
                        style={{textDecoration: 'none',marginTop:30}}>
                        Submit
                        </Button>
                        :
                        <Button  
                            onClick={handleSubmit}
                            variant="contained" 
                            style={{textDecoration: 'none',marginTop:30}}>
                            Submit
                        </Button>
                     }
                    
                   </div>

               </div>
               {showModal && <CenterModal  fname={fname} lname ={lname}uname={uname}email ={email}password ={password}shortBio={shortBio}date ={date} callBack={callBack} showModal={showModal} closeModal={()=>setShowModal(false)} />}
           </div>
           <div style={{background:`url(${reg})`,width:'50%',backgroundSize:900,backgroundRepeat:'no-repeat'}}>
               
           </div>
        </div>
        )
}




export default RegisterForm;

