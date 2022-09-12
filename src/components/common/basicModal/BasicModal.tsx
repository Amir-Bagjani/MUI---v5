import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface IProps {
   open: boolean;
   onClose: () => void;
   title: React.ReactNode;
   subTitle: React.ReactNode;
   content: React.ReactNode;
}

const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 350,
   bgcolor: 'background.paper',
   borderRadius: "0.5rem",
   boxShadow: 2,
   p: 4,
};

export const BasicModal: React.FC<IProps> = ({ open, onClose, title, subTitle, content }) => {
   return (
      <Modal
         open={open}
         onClose={onClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
               {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               {subTitle}
            </Typography>
            {content}
         </Box>
      </Modal>
   )
}
