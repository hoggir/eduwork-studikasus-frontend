import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

export const sidebarData = [
  {
    title: "Profile",
    icon: <PersonIcon />,
    link: "me",
  },
  {
    title: "Pesanan",
    icon: <RestaurantIcon />,
    link: "order",
  },
  {
    title: "Alamat",
    icon: <DeliveryDiningIcon />,
    link: "delivery-addresses",
  },
  {
    title: "Logout",
    icon: <DeliveryDiningIcon />,
    link: "logout",
  },
];
