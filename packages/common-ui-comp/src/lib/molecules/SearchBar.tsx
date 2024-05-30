import C_Button from "../atoms/Button";
import C_Input from "../atoms/Input";

interface SearchBarProps {
    onSearch: () => void;
  }


export function C_SearchBar({onSearch}: SearchBarProps) {
    return(
        <div>
            <C_Input type="text" placeholder="Search..."/>
            <C_Button onClick={onSearch} children="Search"></C_Button>
        </div>
    )
}

export default C_SearchBar;