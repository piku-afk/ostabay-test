import styles from './unitD.module.css'

import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

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

export default function Address({current, changeCurrent}) {
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