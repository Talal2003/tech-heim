import { Accordion, AccordionSummary, Box, Button, Slider, TextField, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

export default function Filters({ register, setValue, handleSubmit, applyFilters, setSortBy, setAscending }) {

    const { t } = useTranslation();

    const clearAll = () => {
        setValue("search", '')
        setValue("categoryId", '')
        setValue("minPrice", '')
        setValue("maxPrice", '')
        setValue("sortBy", '')
        setValue("ascending", '')
        setSortBy('')
        setAscending('true')
        handleSubmit(applyFilters)()
    }

    return (
        <Box sx={{ display: "flex", gap: 1, flexDirection: "column", p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="subtitle1" fontWeight="bold">{t("Filters")}</Typography>
                <Button onClick={clearAll} size="small" sx={{ px: 6.5, textTransform: 'none' }}>{t("Clear all")}</Button>
            </Box>

            <Accordion sx={{ boxShadow: "none" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0 }} >
                    <Typography variant="subtitle2">{t("Price")}</Typography>
                </AccordionSummary>
                <Box sx={{ px: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1, px: 3, }}>
                        <TextField label={t("min.")} type="number" size="small"
                            {...register("minPrice")}
                        />
                        <TextField label={t("max.")} type="number" size="small"
                            {...register("maxPrice")}
                        />
                    </Box>
                    <Slider valueLabelDisplay="auto" />
                </Box>
            </Accordion>
        </Box>
    )
}
