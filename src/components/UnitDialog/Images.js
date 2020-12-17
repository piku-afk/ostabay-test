import { useState } from 'react';
import styles from './unitD.module.css'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';

export default function Images({handleOpenImage}) {

  const [imageList, setImageList] = useState([]);

  function handleChange(e) {
    const fileList = Array.from(e.target.files);
    if(fileList.length === 0) {
      return;
    }
    if(imageList.length >= 1) {
      setImageList(prev => [...prev, ...fileList]);
      return;
    }
    setImageList(fileList);
  }
  function handleRemove(image) {
    setImageList(imageList.filter(item => item.lastModified !== image.lastModified))
  }
  // console.log(imageList);

  return (
    <Box>
      <Typography className={styles.imagesLabel} component='label' htmlFor='name' variant='body2'>Images</Typography>
      <input multiple accept="image/*" className={styles.upload} id="images" type="file" onChange={handleChange} />
      <label htmlFor="images">
        <IconButton className={styles.imagesButton} size='small' component="span">
          <AddIcon />
        </IconButton>
      </label>
      <Container className={styles.imagesContainer} disableGutters>
        {imageList.map(item => (
          <PreviewImage key={item.lastModified} image={item} handleRemove={handleRemove} handleOpenImage={handleOpenImage} />
        ))}
      </Container>
    </Box>
  )
}

function PreviewImage({image, handleRemove, handleOpenImage}) {
  const [link, setLink] = useState('');
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onloadend = (e) => {
    setLink(e.target.result);
  }

  function handleClick() {
    handleOpenImage(link);
  }

  return (
    <Card className={styles.images}>
      <CardMedia className='onClick' onClick={handleClick} component='img' src={link} />
      <CardActions>
        <Button size='small' className={styles.imagesRemove}onClick={() => handleRemove(image)} >Remove</Button>
      </CardActions>
    </Card>
  )
}