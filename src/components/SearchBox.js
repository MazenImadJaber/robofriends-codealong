import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2" >
            <input
                className="pa3 b--green bg-light-blue"
                type="search"
                onChange={searchChange}
                placeholder="seaech robots" 
                
                />
               
                
        </div>

    );
}
export default SearchBox;
