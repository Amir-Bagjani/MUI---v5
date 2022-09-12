export const navbarStyles = {
    drawer: {
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            backgroundColor: `var(--color-fiord-900)`,
            color: 'var(--color-gray-400)'
        },
        '& .Mui-selected': {
            backgroundColor: `var(--color-fiord-900)`,
        },
    },
    listItem: {
        '& .MuiButtonBase-root':{
            '&:hover': {
                backgroundColor: `var(--color-fiord-800)`,
            }
        }
    },
    text: {
        '& span': {
            fontWeight: 500,
            fontSize: 14,
        }
    },
    icon: {
        marginInlineEnd: '-1rem',
        color: 'var(--color-gray-400)'
    },
    divider: {
        backgroundColor: `var(--color-divider)`,
    },
}