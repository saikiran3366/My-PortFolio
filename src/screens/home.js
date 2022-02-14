import React from 'react';
import '../styles/homeStyles.css'
import EmployImg from '../assets/employ.png'
import Img1 from '../assets/todo.png'
import Img2 from '../assets/registration.png'
import Img3 from '../assets/calculator.png'
import Img4 from '../assets/search.jpg'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";


const Home = () =>{

    const history = useHistory();

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
        <div className="mainDiv">
            <div className="nav"> 
                <div className="leftNav">
                </div>
                <div className="rightNav">
                <h2 className="navHeadings">Home</h2>
                <h2 className="navHeadings">Service</h2>
                <h2 className="navHeadings">About</h2>
                <h2 className="navHeadings">Contact</h2>
                </div>
            </div>
            <div className="nameSection">
                <img src={EmployImg} width="300" height="300" style={{paddingRight:100}}></img>
                <div>
                <p className="welcomeText">WELCOME  TO  MY  WORLD</p>
                <div className="nameFont">
                    <h1 style={{margin:0}}> Hi, I'm Sai</h1>
                    <h1 style={{margin:0,color:'red'}}> Ui Developer</h1>
                </div>
                </div>
            </div>

            <div>
                <div className="myProjectSection">
                <h1 style={{margin:0}}className="projectText">My Latest Projects</h1>
                <p style={{margin:10}}>loremepsom loremepsom loremepsom loremepsom loremepsom loremepsom loremepsom loremepsom</p>
                <p style={{margin:5}}>loremepsom loremepsom loremepsom loremepsom</p>
                
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
        </div>
    )

}
export default Home;