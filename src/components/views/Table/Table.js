import { Button } from "react-bootstrap"
import styles from './Table.module.scss';
import { Link } from 'react-router-dom';


const Table = props => {

 

  return(
  <div className={styles.wrapper}>
    <div className={styles.info}>
      <div className={styles.title}>
        <h3>Table {props.id}</h3>
      </div>
      <div className={styles.status}>
        <span>Status:</span><p>{props.status}</p>
      </div>
    </div>
    <div className={styles.buttonWrapper}>
    <Button
      className='mx-2'
      as={Link}
      to={`/table/${props.id}`}
      variant='primary'
      >
      Show more
      </Button>
    </div>
  </div>
  )
}

export default Table;