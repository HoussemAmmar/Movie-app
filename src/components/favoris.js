import React,{Component} from 'react';
import CardMovie from './movies_liste/card_movie'
//import Description from './description'




class Favory extends Component {
    constructor(props) {
      super(props)
    
    }
    render() {
      
        
        return (

            <div className="jaja">
                {this.props.favoriteList.map( el => (<CardMovie el={el} />))}
            </div>     
                          
            
            
            ) ;
            
    }
}
  


export default Favory