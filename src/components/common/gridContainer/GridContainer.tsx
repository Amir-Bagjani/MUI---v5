import React from 'react'
import Grid, { GridProps } from "@mui/material/Grid"

interface IProps extends GridProps {}

export const GridContainer: React.FC<IProps> = (props) => {
    return (
        <Grid item p="3rem 1rem" sx={{ minHeight: "calc(100vh - 133px)"}} {...props}/>
    )
}
