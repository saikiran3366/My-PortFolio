import React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import MoviesData from '../components/searchData';
import gameOfThrones from '../assets/gameOfThrones.jpg';
import TextField from '@mui/material/TextField';
import MoviesModal from '../components/searchModal';


const Movies = () =>{
    const [search,setSearch] = useState("");
    const [searchData,setSearchData] = useState([])
    const [showModal,setShowModal] = useState(false)
    const [itemData,setItemDate] = useState({})
 
    const handleSubmit = () =>{
        setSearchData(MoviesData.filter((e) =>e.Title.toLowerCase().indexOf(search)!== -1));
        console.log(search)
        setSearch ("")

    }
    console.log(searchData.length,"searched data");
    useEffect (() => {
        setSearchData(MoviesData)
    }, [])


    
    const show = (item) =>{
        setShowModal(true)
        setItemDate(item)
    }

    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h1>
                    Search Your Favourite Dessert
                </h1>
               <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
               <TextField style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}
                    value = {search}
                    onChange={(e)=>setSearch(e.target.value)}
                    type="text" 
                    style={{height:30,width:250}}
                />
                    <Button  
                        onClick={handleSubmit}
                        variant="contained"
                        style={{textDecoration: 'none',marginTop:30}}>
                        Submit
                    </Button>
               </div>

               

                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'80%',flexWrap:'wrap'}}>
                    {searchData.length == 0 
                    ?
                    <h1>No data for your search</h1>
                    : 
                    <> 
                    {searchData.map((item)=>{
                        return(
                            <div style={{display:'flex',flexDirection:'column'}}>
                            <img onClick ={()=>show(item)} style={{height:200,width:350,marginTop:40,cursor:'pointer'}}src={item.Poster}></img>
                            <h4 style={{margin:0}}>{item.Title}</h4>
                            <h5 style={{margin:0}}>{item.Price}</h5>
                        </div>
                        )
                    })}
                    </>
                    }
                </div>
                {showModal && <MoviesModal showModal={showModal} itemData={itemData} closeModal={()=>setShowModal(false)}/>}
        </div>
    )
}
export default Movies;