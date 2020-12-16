import styles from './unitD.module.css'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddIcon from '@material-ui/icons/Add';

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Address({current, changeCurrent}) {
  return (
    <Box>
      <FormControl className={styles.formControl} size='small' fullWidth variant='outlined'>
        <Typography className={styles.label} component='label' htmlFor='name' variant='body2'>Name</Typography>
        <OutlinedInput inputProps={{className: styles.input}} name='name' value={current.name} onChange={e => changeCurrent(e)} />
      </FormControl>
      <FormControl className={styles.formControl} size='small' fullWidth variant='outlined'>
        <Typography className={styles.label} component='label' htmlFor='address1' variant='body2'>Addres Line 1</Typography>
        <OutlinedInput inputProps={{className: styles.input}} name='address1' value={current.address1} onChange={e => changeCurrent(e)} />
      </FormControl>
      <FormControl className={styles.formControl} size='small' fullWidth variant='outlined'>
        <Typography className={styles.label} component='label' htmlFor='address2' variant='body2'>Addres Line 2</Typography>
        <OutlinedInput inputProps={{className: styles.input}} name='address2' value={current.address2} onChange={e => changeCurrent(e)} />
      </FormControl>
      <FormControl className={styles.formControl} size='small' fullWidth variant='outlined'>
        <Typography className={styles.label} component='label' htmlFor='city' variant='body2'>City</Typography>
        <OutlinedInput inputProps={{className: styles.input}} name='city' value={current.city} onChange={e => changeCurrent(e)} />
      </FormControl>
      <FormControl className={styles.formControl} size='small' fullWidth variant='outlined'>
        <Typography className={styles.label} component='label' htmlFor='pincode' variant='body2'>Pincode</Typography>
        <OutlinedInput inputProps={{className: styles.input}} name='pincode' value={current.pincode} onChange={e => changeCurrent(e)} />
      </FormControl>
      <FormControl className={styles.formControl} size='small' fullWidth>
        <Typography className={styles.label} component='label' htmlFor='state' variant='body2'>State</Typography>        
          <Select
            MenuProps={MenuProps}
            labelId="state"
            name='state'
            value={current.state || ''}
            onChange={e => changeCurrent(e)}
            variant='outlined'>
            <MenuItem value={''} disabled></MenuItem>
            <MenuItem value={'West Bengal'}>West Bengal</MenuItem>
            <MenuItem value={'Karnataka'}>Karnataka</MenuItem>
          </Select>
      </FormControl>
      <FormControl className={styles.formControl} size='small' fullWidth>
        <Typography className={styles.label} component='label' htmlFor='country' variant='body2'>Country</Typography>         
          <Select
            MenuProps={MenuProps}
            labelId="country"
            name='country'
            value={current.country || ''}
            onChange={e => changeCurrent(e)}
            variant='outlined'>
            <MenuItem value={''} disabled></MenuItem>
            <MenuItem value={'India'}>India</MenuItem>
            <MenuItem value={'South Africa'}>South Africa</MenuItem>
          </Select>
      </FormControl>
    </Box>
  );
}

function Map({current, changeCurrent}) {
  return (
    <Box>
      <FormControl className={styles.formControl} size='small' fullWidth variant='outlined'>
        <Typography className={styles.label} component='label' htmlFor='location' variant='body2'>Search a location</Typography>
        <OutlinedInput inputProps={{className: styles.input}} id='location' />
        <Paper className={styles.map} elevation={1}>
          insert map here
        </Paper>
        <Typography className={styles.subHeading} variant='body1'>
          Nearest / Preferred Port
        </Typography>
        <Grid container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl className={styles.formControl} size='small' fullWidth>
                <Typography className={styles.label} component='label' htmlFor='country' variant='body2'>Country</Typography>        
                  <Select
                    MenuProps={MenuProps}
                    labelId="portCountry"
                    name='portCountry'
                    value={current.portCountry || ''}
                    onChange={e => changeCurrent(e)}
                    variant='outlined'>
                    <MenuItem value={''} disabled></MenuItem>
                    <MenuItem value={'India'}>India</MenuItem>
                    <MenuItem value={'South Africa'}>South Africa</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={styles.formControl} size='small' fullWidth>
                <Typography className={styles.label} component='label' htmlFor='port' variant='body2'>Port</Typography>       
                 <Select
                    MenuProps={MenuProps}
                    labelId="port"
                    name='port'
                    value={current.port || ''}
                    onChange={e => changeCurrent(e)}
                    variant='outlined'>
                    <MenuItem value={''} disabled></MenuItem>
                    <MenuItem value={'Kolkata'}>Kolkata</MenuItem>
                    <MenuItem value={'Mundra'}>Mundra</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl className={styles.formControl} size='small' fullWidth variant='outlined'>
                <Typography className={styles.label} component='label' htmlFor='fob' variant='body2'>Approx. FOB Cost</Typography>
                <OutlinedInput startAdornment={<InputAdornment><AttachMoneyIcon /></InputAdornment>} inputProps={{className: styles.input}} name='fob' value={current.fob} onChange={e => changeCurrent(e)} />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={styles.formControl} size='small' fullWidth variant='outlined'>
                <Typography className={styles.label} component='label' htmlFor='capacity' variant='body2'>Production Capacity</Typography>
                <OutlinedInput endAdornment={<InputAdornment>tonnes</InputAdornment>} inputProps={{className: styles.input}} name='capacity' value={current.capacity} onChange={e => changeCurrent(e)} />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  )
}

function Images() {
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