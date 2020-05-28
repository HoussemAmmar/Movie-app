import React , {Component} from 'react';
import {Navbar ,Button} from 'react-bootstrap'
import {Cube} from 'styled-loaders-react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import SignUp from './components/sign up/Signup'
//import LogIn from './components/sign up/login'
import Movies from './components/MoviesData'
import Search from './components/search'
import AddMovie from './components/addMovie'
import MoviesListe from './components/movies_liste/moviesListe'
import Favory from './components/favoris'



class App extends Component {

  // lifting the state up from Modale 
  constructor(props) {
    super(props)
    this.state={ show:false, 
      star: '' , name:'', year:'', duration:'', img:'', description : '', 
      movies : Movies,
      starRate: null, starClicked:"☆",
      search : '',
      totStars:[1,2,3,4,5],
       f : [],
       loading : true
      }
      
  }
      
  componentDidMount() {
     setTimeout (()=> {
       this.setState({loading : false})} ,3000) 
  }

   
      
  
 
    handleClose=()=> {
         this.setState({
         show:false

         
     })
     }
     
 
     handleShow=()=>{
         this.setState({
             show:true
         })
     }
 
     handleChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
       
     }
 
      handleAdd=()=>{
          let obj = {
           star: this.state.star, 
           img: this.state.img, 
           name: this.state.name, 
           duration: this.state.duration, 
           year: this.state.year,
           description : this.state.description
          }
          this.state.movies.unshift(obj)
      this.setState({
             show : false
         }) 
         console.log(this.state.movies)
               
      }
 


      // search 
      handleSearch=(e) => {
          this.setState({[e.target.name]:e.target.value.toUpperCase()})
          var regex = new RegExp(e.target.value.toUpperCase(), "g");
          this.setState({movies:this.state.movies.filter(el => regex.test(el.name))})
      }

      //rating
      getRate = (el) => {
        this.setState(
          {starRate: parseInt(el)}
        )
        this.setState(
          {starClicked:"🌟" }
        )
      }
      resetRate = () => {
        this.setState(
          {starRate: null}
        )
        this.setState(
          {starClicked: "☆"}
        )
    
      }

      // favoris 

      addToFavorite = (el) => {
         this.state.f.unshift(el)
         console.log(this.state.f)
         
        
      }

      
      
  
  render(){
    if (this.state.loading){
      return <Cube/>
    }
    else {
      return (
        <div className = "MovieApp">
          <Navbar className="nav">
            <img src={require('./Movie.png')} height="100px"/>
            
             <Search handleSearch ={this.handleSearch} search = {this.state.search}/>
             <div className="starRating">
             <div >
                    {this.state.totStars.map(el => 
                    <button onClick={()=>this.getRate(el)}>{this.state.starClicked}
                      </button>)}
                 </div>
                 <div className="resetRate">
                   <button onClick={()=> this.resetRate()}> 
                   <img src="https://img.favpng.com/19/16/1/computer-icons-reboot-reset-png-favpng-mGHHcjcZHFyMyHxQrmbfkzBaR.jpg" width="35px"/> </button>
                 </div>
             </div>
  
             <div>
             <Button variant="outline-danger">Sign Up</Button>
             <Button variant="outline-primary">Login</Button>
             </div>
  
          </Navbar>
          
  
  
          <AddMovie  show={this.state.show} handleClose ={this.handleClose} handleShow={this.handleShow} handleChange={this.handleChange} handleAdd = {this.handleAdd} />
          <MoviesListe movies ={this.state.movies} starRate={this.state.starRate}  addToFavorite={this.addToFavorite} />
          
          <Favory favoriteList={this.state.f} />
         
          
        
        </div>
      );

    }
   
  }
 
}

export default App;

