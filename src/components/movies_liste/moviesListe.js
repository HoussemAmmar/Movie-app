import React   from 'react';
import CardMovie from './card_movie'


class  MoviesListe extends React.Component {
     

    render(){
        return (
    <div>
                
        <div className="movie-list">
        {this.props.movies.filter(
        el => {
          if(this.props.starRate == null)
          return el
          else if(el.star >= this.props.starRate)
          return el

        })
        
                   
       .map((el) =>  (
          
              <div>
                <CardMovie el={el}  /> 
                {/*<button  onClick={() => this.props.addToFavorite(el)}> fovorite  </button>*/} 
             </div>)
    )}
        </div>
    
    </div>
        
        ) 


     }
    }
        
   
   
    
    export default MoviesListe
 
 
 