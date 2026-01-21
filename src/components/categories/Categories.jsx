import { Box, CircularProgress, Tab, Tabs, Typography } from "@mui/material";
import { useCategories } from "../../hooks/useCategories";
import { useState } from "react";

export default function Categories({ setValue, handleSubmit, applyFilters }) {
    const { isLoading, isError, error, data } = useCategories();
    const [category, setCategory] = useState();

    if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
        <CircularProgress />
    </Box>
    if (isError) return <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, color: 'red' }}>
        {error.message}
    </Typography>

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Tabs value={category} onChange={(e, newValue) => {
                setCategory(newValue)
                setValue("categoryId", newValue + 1)
                handleSubmit(applyFilters)()
            }}
                variant="scrollable" scrollButtons="auto" aria-label="categories tabs">
                {data.response.map((category, index) =>
                    <Tab key={category.id} label={category.name} value={index} />
                )}
            </Tabs>
        </Box>
    )
}