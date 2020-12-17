import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';

import styles from './imageD.module.css'

export default function ImageDialog({image, open, handleCloseImage}) {
  return (
    <Dialog open={open} onClose={handleCloseImage}>
      <Card className={styles.container}>
        <CardMedia component='img' src={image} />
      </Card>
    </Dialog>
  );
}