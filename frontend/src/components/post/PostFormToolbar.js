import React, {useState} from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import {Search as SearchIcon} from 'react-feather';
import {useDispatch} from "react-redux";
import {getPostsBySearch} from "../../store/actions/posts";

const PostFormToolbar = (props) => {
  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={props.onSubmit}
        >
          Save Post
        </Button>
      </Box>
      <Box sx={{mt: 3}}>
        <Card>
        </Card>
      </Box>
    </Box>
  )
};

export default PostFormToolbar;
