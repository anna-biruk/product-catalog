import {Button, Rating, Stack, styled, Typography} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import truncate from "lodash/truncate"


const Img = styled('img')({})

const ProductCard = ({item, sx = {}}) => {

    return (
        <Stack sx={[sx, {position: "relative"}]}>
            <Img sx={{height: 280, objectFit: "cover"}} src={item.image}/>
            <Button sx={{position: "absolute", backgroundColor: "#353535", left: 250, bottom: 120}}>
                <AddShoppingCartIcon sx={{color: "white"}}/>
            </Button>
            <Stack mt={2} direction="row" justifyContent="space-between">
                <Typography sx={{fontFamily: "Oswald", fontWeight: 500}}>
                    {
                        truncate(item.title, {
                            'length': 30,
                        })
                    }
                </Typography>
                <Typography sx={{fontFamily: "Oswald", fontWeight: 500}}>${item.price}</Typography>
            </Stack>
            <Stack mt={1} direction="row" justifyContent="space-between">
                <Rating name="read-only" value={item.rating.rate} readOnly sx={{color: "#353535"}} size="small"/>
                <Typography sx={{fontFamily: "Oswald", fontWeight: 500, color: "#b2b2b2"}}>{item.category}</Typography>
            </Stack>

        </Stack>
    )
}

export default ProductCard