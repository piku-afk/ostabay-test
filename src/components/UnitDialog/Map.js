import styles from './unitD.module.css';

import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

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

export default function Map({current, changeCurrent}) {
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