import styles from './unitD.module.css'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';


export default function Images() {
  return (
    <Box>
      <Typography className={styles.imagesLabel} component='label' htmlFor='name' variant='body2'>Images</Typography>
      <IconButton className={styles.imagesButton} size='small'>
        <AddIcon />
      </IconButton>
      {[1].map(item => (
        <Box key={item}>
          <Paper key={item} className={styles.images}></Paper>
          <Button size='small' className={styles.imagesRemove}>Remove</Button>
        </Box>
      ))}
    </Box>
  )
}