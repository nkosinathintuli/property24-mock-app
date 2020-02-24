import React from 'react'
//import { Link } from 'react-router-dom'



const SearchBar = () => {
  
  return (
    <div className="section searchbar">
        <div className="container">
            <div className="input-field">
                <form action="">
                    <div className="row">
                        <div className="col s8 input-field">
                            <div className="row">
                                <h3 className="white-text">Find your dream home</h3>
                                <div className="col s10">
                                    <input id="search" type="search" placeholder="City, Suburb or Street..." className="grey-text white text-darken-3"/>
                                </div>
                                <div className="col s2">
                                    <button id="search_btn" className="btn red ">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col s4 input-field" >
                            <img className="right" width="240" height="209" src={require('../../images/map_dummy.png')}/>
                        </div>
                        
                    </div>   
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default SearchBar