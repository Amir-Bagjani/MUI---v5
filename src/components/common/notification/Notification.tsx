import React, { useCallback, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Badge, { BadgeProps } from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { CommonMenu } from '../basicMenu';
import { NotificationType } from '../types';

interface IProps {
    iconColor?: IconButtonProps["color"];
    style: React.CSSProperties;
}

const notificationWithContent = (badgeContent: number) => `You have ${badgeContent} new notification`
const noNotification = 'No notification';
const notifications: NotificationType[] = [
    { id: 1, label: 'First notification' },
    { id: 2, label: 'Second notification' },
]

export const Notification: React.FC<IProps> = React.memo(({ iconColor, style }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const handleClose = useCallback(() => setAnchorEl(null), []);
    const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget), []);

    return (
        <>
            <Tooltip title={notifications.length ? notificationWithContent(notifications.length) : noNotification}>
                <IconButton
                    color={iconColor}
                    onClick={notifications.length ? handleClick : undefined}
                    style={style}
                >
                    <Badge color='error' badgeContent={notifications?.length}>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>

            <CommonMenu
                anchorEl={anchorEl}
                open={!!anchorEl}
                handleClose={handleClose}
                menuItem={notifications}
            />
        </>
    )
})
