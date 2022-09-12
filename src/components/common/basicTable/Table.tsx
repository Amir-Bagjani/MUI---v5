import React from 'react'
import { DataGrid } from '@mui/x-data-grid';


export const BasicTable = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof DataGrid>>((props, ref) => {
    return (
        <DataGrid {...props} ref={ref}/>
    )
})

