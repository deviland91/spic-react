import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import { Container, Link } from '@material-ui/core';


export default function Sidebar() {

  return (
    <Container maxWidth="sm">
        <Link>
        <DashboardIcon /> Campanhas
        </Link>
    </Container>

  );
}
