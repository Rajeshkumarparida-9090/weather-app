import React from "react";
import SearchBar from "./weather/SearchBar";

const Header = () => {
    return(
        <div className="header_comp">
            <h1>Weather In Your City</h1>
            <SearchBar />
        </div>
    )
}
export default Header;
