import styles from './navbar.module.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export default function Navbar() {
  return (
    <AppBar className={styles.appbar}>
      <Toolbar>
        <IconButton size='small' className={styles.iconbutton} disableRipple >
          <KeyboardBackspaceIcon />
        </IconButton>
        <Typography className={styles.heading} variant='h6'>
          Cumulations Technologies
        </Typography>
        <Button className={styles.button} variant='contained'>
          Save
        </Button>
        <IconButton className={styles.iconbutton} size='small' disableRipple >
          <MoreHorizIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}