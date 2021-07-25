import React, {FC} from 'react';
import Drawer from '@material-ui/core/Drawer';
import {makeStyles, createStyles} from '@material-ui/core/styles/';
import Footer from '../footer/footer';

const useStyles = makeStyles(
  createStyles({
    drawer: {
      width: '25%',
      overflow: 'hidden',
    },
    map: {
      width: '75%',
      height: '100%',
    },
    fab: {
      zIndex: 10,
      position: 'absolute',
      top: '1%',
      left: '1%',
    },
  })
);

interface AppLayoutProps {
  map: JSX.Element;
  drawer: JSX.Element;
}

const AppLayout: FC<AppLayoutProps> = ({map, drawer}) => {
  const {drawer: drawerStyles, map: mapStyles} = useStyles();

  return (
    <>
      <div className={mapStyles}>{map}</div>
      <Drawer
        className={`${drawerStyles} RTL`}
        anchor="right"
        variant="permanent"
        classes={{paper: drawerStyles}}>
        {drawer}
      </Drawer>
      <Footer/>
    </>
  );
};

export default AppLayout;
