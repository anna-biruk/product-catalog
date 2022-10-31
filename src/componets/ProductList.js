import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllProducts, selectAllProducts} from "../features/products/productsSlice";
import ProductCard from "./ProductCard";
import {Box, Stack, Typography} from "@mui/material";
import Search from "./Search";


const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)


    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])
    return (
        <Box sx={{maxWidth: 1000, margin: "0 auto"}}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography
                    sx={{fontFamily: "Oswald", fontSize: 32, fontWeight: 500,}}>
                    {products.length} PRODUCTS</Typography>
                <Search/>
            </Stack>

            <Stack mt={3} direction="row" justifyContent="space-between" gap={4} flexWrap="wrap">
                {products.map((item) => {
                    return <ProductCard sx={{width: '30%'}} key={item.id} item={item}/>
                })}
            </Stack>
        </Box>

    )

}

export default ProductList