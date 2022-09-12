import React from 'react'
import Card, {CardProps} from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface IProps extends CardProps{
   cardHeader?: React.ReactNode;
   cardContent?: React.ReactNode;
}

export const BasicCard: React.FC<IProps> = ({ cardHeader, cardContent }) => {
   return (
      <Card
         sx={{borderRadius: "0.5rem"}}
      >
         {cardHeader}
         <CardContent>{cardContent}</CardContent>
      </Card>
   )
}
