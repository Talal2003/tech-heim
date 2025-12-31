import { Box, CircularProgress, Tab, Tabs, Typography } from "@mui/material";
import { useCategories } from "../../hooks/useCategories";
import { useState } from "react";

export default function Categories() {
    const { isLoading, isError, error, data } = useCategories();
    const [value, setValue] = useState(0);

    if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
        <CircularProgress />
    </Box>
    if (isError) return <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, color: 'red' }}>
        {error.message}
    </Typography>

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}
                variant="scrollable" scrollButtons="auto" aria-label="categories tabs">
                {data.map((category, index) =>
                    <Tab key={category.id} label={category.name} value={index} />
                )}
            </Tabs>
        </Box>
    )
}