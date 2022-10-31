import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch} from "react-redux";
import {setSearchString} from "../features/products/productsSlice";

const Search = () => {
    const dispatch = useDispatch()
    const handleSearchString = (event) => {
        dispatch(setSearchString({searchString: event.target.value}));

    }
    return (
        <Paper
            elevation={0}
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 300,marginTop:1, border: "2px solid #cccccc"}}
        >
            <InputBase
                onChange={handleSearchString}
                sx={{ml: 1, flex: 1}}
                placeholder="Search"
                inputProps={{'aria-label': 'Search'}}
            />
            <IconButton type="button" sx={{p: '10px',backgroundColor:"#353535",borderRadius:0}} aria-label="search">
                <SearchIcon sx={{ color: "white" }}/>
            </IconButton>
        </Paper>
    )

}

export default Search