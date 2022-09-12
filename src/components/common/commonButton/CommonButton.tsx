import Button, { ButtonProps } from "@mui/material/Button"
import { styled } from "@mui/material/styles"


export const CommonButton = styled(Button)<ButtonProps>(({theme}) => ({
    borderRadius: "2.5rem",
    textTransform: "capitalize",
    fontSize: "0.875rem",
    fontWeight: 600,
    padding: theme.spacing(1, 2)
}))