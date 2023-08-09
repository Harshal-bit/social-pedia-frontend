import React, { useState } from 'react'
import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutined,
    WorkOutlineOutlined,
} from "@mui/icons-material";

import {Box,Typography,Divider,useTheme} from "@mui/material";
import UserImage from 'components/UserImage';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const UserWidget = ({userId,picturePath}) => {

    const [user,setUser] = useState(null);
    

  
    return (
    <div>UserWidget</div>
  
    )
  
}

export default UserWidget