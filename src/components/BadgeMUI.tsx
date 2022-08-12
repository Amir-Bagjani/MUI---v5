import { Mail } from "@mui/icons-material"
import { Stack, Badge } from "@mui/material"
const unreadMail = [`a`, `b` ,`c`]
const BadgeMUI = () => {
  return (
    <Stack spacing={2} direction="row">
        <Badge badgeContent={7}>
            <Mail />
        </Badge>
        <Badge badgeContent={7} color="secondary">
            <Mail />
        </Badge>
        <Badge badgeContent={0} color="primary">
            <Mail />
        </Badge>
        <Badge badgeContent={0} color="primary" showZero>
            <Mail />
        </Badge>
        <Badge badgeContent={0} color="primary" showZero>
            <Mail color="info" />
        </Badge>
        <Badge badgeContent={0} color="primary" showZero>
            <Mail color="action" />
        </Badge>
        <Badge badgeContent={0} color="primary" showZero>
            <Mail color="warning" />
        </Badge>
        <Badge badgeContent={0} color="primary" showZero anchorOrigin={{
            vertical: "top",
            horizontal: "left",
        }}>
            <Mail color="warning" />
        </Badge>
        <Badge badgeContent={0} color="primary" showZero anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}>
            <Mail color="warning" />
        </Badge>
        <Badge badgeContent={120} color="primary" showZero>
            <Mail color="warning" />
        </Badge>
        <Badge badgeContent={200} color="primary" showZero max={500}>
            <Mail color="warning" />
        </Badge>
        <Badge variant="dot" badgeContent={200} color="primary" showZero max={500}>
            <Mail color="warning" />
        </Badge>
        <Badge variant="dot" invisible badgeContent={200} color="primary" showZero max={500}>
            <Mail color="warning" />
        </Badge>
        <Badge variant="dot" invisible={!unreadMail.length} badgeContent={unreadMail.length} color="primary" showZero max={500}>
            <Mail color="warning" />
        </Badge>
    </Stack>
  )
}

export default BadgeMUI