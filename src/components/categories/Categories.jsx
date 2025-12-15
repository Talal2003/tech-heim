import { Box, CircularProgress, Tab, Tabs, Typography } from "@mui/material";
import { useCategories } from "../../hooks/useCategories";
import { Google } from "@mui/icons-material";
import { useState } from "react";

export default function Categories() {
    const {isLoading, isError, data} = useCategories();
    const [value, setValue] = useState(0);
    if (isLoading) return <CircularProgress></CircularProgress>
    if (isError) return <Typography>Error</Typography>

    return (
        <Box p={3} sx={{display:'flex', justifyContent:'center'}}>
            <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}
            variant="scrollable" scrollButtons="auto" aria-label="categories tabs">
                {data.map((category, index)=>
                    <Tab key={category.id} label={category.name} value={index}  />
                )}
            </Tabs>
        </Box>
    )
}