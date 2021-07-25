import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import {useState} from "react";


const AccountProfile = (props) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.result.profilePhoto}
            sx={{
              height: 100,
              width: 100
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.result.firstName}  &nbsp;{user.result.lastName}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {user.result.email}
          </Typography>
        </Box>
      </CardContent>
      <Divider/>
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  )
};

export default AccountProfile;
