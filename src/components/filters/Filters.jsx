import { Accordion, AccordionSummary, Box, Button, Slider, TextField, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Filters() {
    return (
        <Box sx={{ display: "flex", gap: 1, flexDirection: "column", p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="subtitle1" fontWeight="bold">Filters</Typography>
                <Button size="small" sx={{ px: 6.5, textTransform: 'none' }}>Clear all</Button>
            </Box>

            <Accordion sx={{ boxShadow: "none" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0 }} >
                    <Typography variant="subtitle2">Price</Typography>
                </AccordionSummary>
                <Box sx={{ px: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1, px: 3, }}>
                        <TextField label="min." type="number" size="small" />
                        <TextField label="max." type="number" size="small" />
                    </Box>
                    <Slider valueLabelDisplay="auto" />
                </Box>
            </Accordion>
        </Box>
    )
}
