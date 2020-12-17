import { useState } from "react";
import styles from './firstP.module.css';
import UnitDialog from '../UnitDialog/UnitDialog';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';
import ImageDialog from "../ImageDialog.js/ImageDialog";

const data = [
  {
    id: 1,
    name: 'Unit 1',
    phone: '+91 8220070309',
    address1: '#2, 601/B, 5th Floor Sriven Rag',
    address2: 'Landmark, Wilson Garden, Hosur Road',
    city: 'Kolkata', 
    pincode: '560027',
    state: 'West Bengal',
    country: 'India',
    port: 'Kolkata',
    portCountry: 'India',
    fob: '3000000',
    capacity: 1080
  },
  {
    id: 2,
    name: 'Unit 2',
    phone: '+91 8220070309',
    address1: '#2, 601/B, 5th Floor Sriven Rag',
    address2: 'Landmark, Wilson Garden, Hosur Road',
    city: 'Bengaluru', 
    pincode: '560027',
    state: 'Karnataka',
    country: 'India',
    port: 'Mundra',
    portCountry: 'India',
    fob: '3000000',
    capacity: 1080
  }
];

// add empty data
const emptyData = {
  name: '',
  phone: '',
  address1: '',
  address2: '',
  city: '', 
  pincode: '',
  state: '',
  country: '',
  port: '',
  portCountry: '',
  fob: '',
  capacity: ''
}

export default function MiddleSection() {
  const [units, setUnits] = useState(data);
  const [open, setOpen] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState();
  const [selectedImage, setSelectedImage] = useState();

  function handleOpen(unit) {
    setSelectedUnit(unit);
    setOpen(true);
  }
  function handleOpenNew() {
    setSelectedUnit(emptyData);
    setIsNew(true);
    setOpen(true);
  }
  function handleOpenImage(img) {
    setSelectedImage(img);
    setOpenImage(true);
  }
  function handleCloseImage() {
    setOpenImage(false);
    setSelectedImage('');
  }
  function handleClose() {
    setOpen(false);
    setIsNew(false);
  }
  function handleSave(e) {
    e.preventDefault();
    setOpen(false);

    setUnits(prev => prev.map(item => {
      if(item.id === selectedUnit.id) {
        return selectedUnit;
      }
      return item;
    }))
  }
  function handleNewSave(e, unit) {
    // console.log(selectedUnit);
    e.preventDefault();
    const temp = Math.floor(Math.random() * 1000);
    unit.id = temp;
    // console.log('hello world');
    setUnits(prev => [...prev, selectedUnit]);
    // console.log(units);
    setOpen(false);
  }
  function handleDelete(unit) {
    setUnits(prev => prev.filter(item => item.id !== unit.id));
  }

  return (
    <Container>
      <Grid className={styles.breadcrumbsSection} item xs={12}>
        <Typography className={styles.breadcrumbs} component='p' variant='h5'>Factory / Wharehouse details</Typography>
        <Button className={styles.addButton} variant='outlined' onClick={handleOpenNew} startIcon={<AddIcon />}>Add Unit</Button>
      </Grid>
      <Grid container>
        {units.map(unit => <UnitCard key={unit.id} unit={unit} handleOpen={handleOpen} handleDelete={handleDelete} handleOpenImage={handleOpenImage} />)}
      </Grid>
      <UnitDialog selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} open={open} handleClose={handleClose} handleSave={handleSave} isNew={isNew} handleNewSave={handleNewSave} handleOpenImage={handleOpenImage} />
      <ImageDialog image={selectedImage} open={openImage} handleCloseImage={handleCloseImage} />
    </Container>
  )
}

function UnitCard({unit, handleOpen, handleDelete, handleOpenImage}) {

  function selectUnit() {
    handleOpen(unit);
  }
  function handleClick() {
    handleOpenImage('https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?crop=entropy&cs=srgb&dl=pexels-zaksheuskaya-1561020.jpg&fit=crop&fm=jpg&h=640&w=640');
  }

  return (
    <Grid item xs={5}>
      <Card className={styles.card}>
        <CardContent>
          <Grid className={styles.imageContainer} container justify='space-between'>
            {[1,2,3,4].map(item => {     
              return (
                <Card key={item} className={styles.unitImage}>
                  <CardMedia className='onClick' onClick={handleClick} component='img' src='https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?crop=entropy&cs=srgb&dl=pexels-zaksheuskaya-1561020.jpg&fit=crop&fm=jpg&h=640&w=640' />
                </Card>
              )
            })}
          </Grid>
          <Typography className={styles.unitName} component='p' variant='h6'>{unit.name}</Typography> • {' '}
          <Typography className={styles.unitPhone} component='p' variant='subtitle1'>{unit.phone} </Typography>

          <Typography component='p' variant='subtitle2'>{unit.address1}</Typography>
          <Typography component='p' variant='subtitle2'>{unit.address2}</Typography>
          <Typography component='p' variant='subtitle2'>{unit.city} - {unit.pincode}</Typography>
          
          <Grid className={styles.listSection} container justify='space-between'>
            <Table size='small'>
              <TableBody>
                <TableRow>
                  <TableCell className={styles.tableCell}>Nearest Port</TableCell>
                  <TableCell className={styles.tableCell}>{unit.port}, {unit.portCountry}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={styles.tableCell}>Approx. FOB Cost</TableCell>
                  <TableCell className={styles.tableCell}>{convertNumber(unit.fob)} USD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={styles.tableCell}>Production Capacity</TableCell>
                  <TableCell className={styles.tableCell}>{unit.capacity}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </CardContent>
        <CardActions>
          <Button className={styles.cardButton} size='small' onClick={selectUnit}>Edit</Button>
          <Button className={styles.cardButton} size='small' onClick={() => handleDelete(unit)}>Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

function convertNumber(labelValue) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9
  ? Math.abs(Number(labelValue)) / 1.0e+9 + " Billion"

  // Six Zeroes for Millions 
  : Math.abs(Number(labelValue)) >= 1.0e+6
  ? Math.abs(Number(labelValue)) / 1.0e+6 + " Million"

  // Three Zeroes for Thousands
  : Math.abs(Number(labelValue)) >= 1.0e+3
  ? Math.abs(Number(labelValue)) / 1.0e+3 + " Thounsand"
  : Math.abs(Number(labelValue));
}