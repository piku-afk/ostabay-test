import styles from './unitD.module.css';
import Address from './Address';
import Map from './Map';
import Images from './Images';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function UnitDialog({selectedUnit, setSelectedUnit, open, handleSave, handleClose, isNew, handleNewSave}) {
  function changeCurrent(e) {
    setSelectedUnit(prev => {
      return {...prev, [e.target.name]: e.target.value}
    });
  }
  function handleClick(e) {
    if(isNew) {
      console.log('new');
      const newUnit = selectedUnit;
      handleNewSave(e, newUnit);
    } else {
      console.log('old')
      handleSave(e)
    }
  }

  // console.log(selectedUnit);
  // console.log(current);
  return(
    <Dialog fullWidth maxWidth='lg' open={open} onClose={handleClose}>
      <Container className={styles.container}>
        <form>
          <Typography component='p' className={styles.subHeading} variant='h6'>
            Factory / Wharehouse
          </Typography>
          <Grid container justify='space-between'>
            <Grid item xs={4}>
              <Address current={selectedUnit} changeCurrent={changeCurrent} />
            </Grid>
            <Grid item xs={5}>
              <Map current={selectedUnit} changeCurrent={changeCurrent} />
            </Grid>
            <Grid item xs={2}>
              <Images />
            </Grid>
          </Grid>
          <DialogActions className={styles.dialogActions}>
            <Button type='submit' className={styles.button} onClick={e => handleClick(e)} variant='contained'>Save</Button>
            <Button className={styles.button} onClick={handleClose} variant='contained'>Cancel</Button>
          </DialogActions>
        </form>
      </Container>
    </Dialog>
  );
}