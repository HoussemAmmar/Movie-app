import React from 'react'


function Search(props) {

   return(
      < input className="search" 
      type='text' 
      onChange={props.handleSearch} 
      value={props.search}
      name='search' 
      placeholder = 'search'
      />
   )

}

export default Search