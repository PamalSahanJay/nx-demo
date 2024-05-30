import C_Logo from "../atoms/Logo";
import C_Navigation from "../molecules/Navigation";
import C_SearchBar from "../molecules/SearchBar";

export function C_Header() {
    return (
        <header>
            <C_Logo/>
            <C_SearchBar onSearch={() => {console.log("first")}}/>
            <C_Navigation/>
        </header>
    )
}

export default C_Header;