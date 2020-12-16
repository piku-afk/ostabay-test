import Navbar from "../Navbar/Navbar";
import styles from './firstP.module.css';
import MiddleSection from "./MiddleSection";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function FirstPage() {
  return (
    <Grid container justify='flex-start' alignContent='flex-start'>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid className={styles.container} container>
        <Grid className={styles.left} item xs={2}>
        <Typography variant='h5'>Left Sidebar</Typography>
        </Grid>
        <Grid item xs={7}>
          <MiddleSection />
        </Grid>
        <Grid className={styles.right} item xs={3}>
          <Typography variant='h5'>Right Sidebar</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}