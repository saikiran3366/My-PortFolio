import React,{useState} from 'react';
import '../styles/homeStyles.css';
import LinkedImg from '../assets/linkedImg.jpg';
import GitImg from '../assets/gitImgg.png'
import EmployImg from '../assets/employ.png';
import Img1 from '../assets/todo.png';
import Img2 from '../assets/registration.png';
import Img3 from '../assets/calculator.png';
import Img4 from '../assets/search.jpg';
import HireImg from '../assets/hireMe.jpg'
import {TextField,Button} from '@mui/material'
import { useHistory } from "react-router-dom";
import { FcApproval } from "react-icons/fc";
import {BsFillTelephoneFill } from "react-icons/bs";
import {MdEmail } from "react-icons/md";
import {faMicrochip} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'




const Home = () =>{
    const history = useHistory();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit=()=>{
        console.log(name,email,subject,message)
        setName ("")
        setEmail ("")
        setSubject ("")
        setMessage ("")
    }
    const sym = "</>"
    const and = "&"

    const data=[
        {   
            id:0,
            ProjectName:'Todo App',
            Description:'lorem epsum lorem epsum',
            Image:Img1
            
        },
        {   
            id:1,
            ProjectName:'Registration App',
            Description:'lorem epsum lorem epsum',
            Image:Img2
            
        },
        {   
            id:2,
            ProjectName:'Calculator App',
            Description:'lorem epsum lorem epsum',
            Image:Img3
            
        },
        {   
            id:3,
            ProjectName:'Searching App',
            Description:'lorem epsum lorem epsum',
            Image:Img4
            
        },
        {   
            id:4,
            ProjectName:'In Progress',
            Description:'lorem epsum lorem epsum',
        },
        {   
            id:5,
            ProjectName:'In Progress',
            Description:'lorem epsum lorem epsum',
        },
    ]

    // const handleLink=(item)=>{
    //     console.log(item)
    //     if(item.ProjectName === "Todo App"){
    //         history.push("/TodoApp");
    //     }else if(item.ProjectName === "Registration App"){
    //         history.push("/RegisterForm");
    //     }else if(item.ProjectName === "Calculator App"){
    //         history.push("/Calculator");
    //     }else if(item.ProjectName === "Searching App"){
    //         history.push("/Movies");
    //     }
        
    //  }
    const handleLink=(id)=>{
    switch(id){
        case 0 :
        history.push("/TodoApp");
        break;
        case 1 :
        history.push("/RegisterForm");
        break;
        case 2 :
        history.push("/Calculator");
        break;
        case 3 :
        history.push("/Movies");
        break;
    }
}
    return(
        <div className="mainDiv" >
            <div className="nav"> 
                <div className="rightNav">
                    <a href="#Home" style={{textDecoration:'none'}}>
                        <h3 className="navHeadings">
                            Home
                        </h3>
                    </a>
                    <a href="#myProjects" style={{textDecoration:'none'}}>
                        <h3 className="navHeadings">
                            Projects
                        </h3>
                    </a>
                    <a href="#mySkills" style={{textDecoration:'none'}}>
                        <h3 className="navHeadings">
                            Skills
                        </h3>
                    </a>
                    <a href="#hireMe" style={{textDecoration:'none'}}>
                        <h3 className="navHeadings">
                            Hire Me
                        </h3>
                    </a>
                </div>
            </div>
            <div className="nameSection" id="Home">
                <img src={EmployImg} width="300" height="300" style={{paddingRight:100}}></img>
                <div>
                <p className="welcomeText">WELCOME  TO  MY  WORLD</p>
                <div className="nameFont">
                    <h1 style={{margin:0}}> Hi, I'm Sai</h1>
                    <h1 style={{margin:0,color:'red'}}> Ui Developer</h1>
                </div>
                </div>
            </div>

            <div id="myProjects">
                <div className="myProjectSection" >
                    <h1 style={{margin:0}}className="projectText">
                        My Latest Projects
                    </h1>
                    <p style={{margin:10}}>
                        loremepsom loremepsom loremepsom loremepsom loremepsom loremepsom loremepsom loremepsom
                    </p>
                    <p style={{margin:5}}>
                        loremepsom loremepsom loremepsom loremepsom
                    </p>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'55%',marginTop:40,flexWrap:'wrap'}}>
                    {data.map((item)=>{
                    return(
                        <div onClick={()=>handleLink(item.id)} className="card" style={{marginTop:40,alignItems:'center',display:'flex',flexDirection:'column',cursor:'pointer'}}>
                            <h2>{item.ProjectName}</h2>
                            <p style={{margin:0}}>{item.Description}</p>
                            <p style={{margin:5}}>{item.Description}</p>
                            <img height={100} width={100} style={{marginTop:30}} src={item.Image}></img>
                        </div>
                    )
                    })}
                </div>
                </div>
            </div>

            <div id="mySkills"style={{height:750,backgroundColor:'black',display:'flex',flexDirection:'column',alignItems:'center'}}>
               <FontAwesomeIcon icon={faMicrochip} size='2x' style={{color:'white',marginTop:40}}></FontAwesomeIcon>
                   <h1 style={{color:'white'}}>
                       Skills {and} Technologies
                   </h1>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <p style={{margin:0,color:'white'}}>lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip</p>
                        <p style={{margin:0,color:'white'}}>lorem ipsum dolor lorem ipsum dolor sit am</p>
                    </div>
                    <div style={{height:300,width:'60%',backgroundColor:'black',marginTop:60,justifyContent: 'center',display:'flex',flexDirection:'column'}}>

                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                        <div style={{height:50,width:400,backgroundColor:'grey',display:'flex',alignItems:'center'}}>
                            <FcApproval size={25} style={{paddingLeft:20}} />
                            <h4 style={{color:'white',paddingLeft:5}}>React</h4>
                        </div>
                        <div style={{height:50,width:400,backgroundColor:'grey',display:'flex',alignItems:'center'}}>
                            <FcApproval size={25} style={{paddingLeft:20}} />
                            <h4 style={{color:'white',paddingLeft:5}}>JavaScript</h4>
                        </div>
                        </div>

                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingTop:30}}>
                        <div style={{height:50,width:400,backgroundColor:'grey',display:'flex',alignItems:'center'}}>
                            <FcApproval size={25}  style={{paddingLeft:20}}/>
                            <h4 style={{color:'white',paddingLeft:5}}>Bootstrap</h4>
                        </div>
                        <div style={{height:50,width:400,backgroundColor:'grey',display:'flex',alignItems:'center'}}>
                            <FcApproval size={25} style={{paddingLeft:20}} />
                            <h4 style={{color:'white',paddingLeft:5}}>Html</h4>
                        </div>
                        </div>

                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingTop:30}}>
                        <div style={{height:50,width:400,backgroundColor:'grey',display:'flex',alignItems:'center'}}>
                            <FcApproval size={25} style={{paddingLeft:20}} />
                            <h4 style={{color:'white',paddingLeft:5}}>Css</h4>
                        </div>
                        <div style={{height:50,width:400,backgroundColor:'grey',display:'flex',alignItems:'center'}}>
                            <FcApproval size={25}  style={{paddingLeft:20}} />
                            <h4 style={{color:'white',paddingLeft:5}}>GitHub</h4>
                        </div>
                        </div>
                    </div>
               </div>

                <div className='hireMe' id="hireMe">
                    <div className="hireMeSec">
                        <div>
                            <h1 className='hireText'>Hire Me.</h1>
                            <p className='descText'>I am Available for freelance work connect with me via phone: <br/><span style={{fontWeight:'bold',margin:0}}> 9032238487 </span> or email:<span style={{fontWeight:'bold',margin:0}}> saikiranmaredu@gmail.com</span>
                            </p>
                            <div className='textFields'>
                                <TextField 
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                className='field'
                                type="text"  
                                size="small" 
                                placeholder="Your Name*" 
                                />
                                <TextField 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                className='field'
                                type="text"  
                                size="small" 
                                placeholder="Your email*" 
                                />
                                <TextField 
                                value={subject}
                                onChange={(e)=>setSubject(e.target.value)}
                                className='field'
                                type="text"  
                                size="small" 
                                placeholder="write a subject*" 
                                />
                                <TextField 
                                value={message}
                                onChange={(e)=>setMessage(e.target.value)}
                                className='field'
                                type="text"  
                                size="small" 
                                multiline
                                rows={5}
                                placeholder="Your Message" 
                                />
                                {email==""||name=="" 
                                ? 
                                <Button variant="disabled" onClick={handleSubmit} style={{textDecoration: 'none',marginTop:30,width:100,background:'#e35d5b',margin:0}}>
                                    SUBMIT
                                </Button>
                                :
                                <Button variant="contained" onClick={handleSubmit} style={{textDecoration: 'none',marginTop:30,width:100,background:'#e35d5b',margin:0}}>
                                    SUBMIT
                                </Button>
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={HireImg} height='500' width='500' ></img>
                    </div>
                </div>
                <div className='bottomNav'>
                    <h2 style={{color:'grey'}}>
                        Sai Kiran
                    </h2>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <div className='linked'>
                            <a href="https://www.linkedin.com/"  target="_blank" style={{textDecoration: 'none',color:'white',fontWeight:'bold',fontSize:24}}>in</a>
                        </div>
                        <div className='linked'>
                            <a href="https://github.com/"  target="_blank" style={{textDecoration: 'none',color:'white',fontWeight:'bold',fontSize:24}}>git</a>
                        </div>
                    </div>
                    <div>
                        <h2 style={{color:'grey'}}>Have a Nice day...</h2>
                    </div>
                </div>
        </div>
    )
}
export default Home;