
import { useSelector } from 'react-redux';
import Table from '../Table/Table';
import { getTableData } from '../../../redux/tableRedux';
import {ListGroup} from 'react-bootstrap';
import shortid from 'shortid';
import {
  Button,
  Spinner,
} from 'react-bootstrap';


const TablesList = () => {

  const a = useSelector(getTableData);
  const sortedTables = a.sort((a, b) => {
    return parseInt(a.id) - parseInt(b.id);
  })

  if (a.length === 0)
    return (
      <div className='text-center my-5'>
        <Button variant='primary' disabled>
          <Spinner
            as='span'
            animation='grow'
            size='sm'
            role='status'
            aria-hidden='true'
          />
          Loading...
        </Button>
      </div>
    );

  return(

    <ListGroup variant="flush">
          {sortedTables.map(x =>
             <ListGroup.Item key={shortid()}>
              <Table key={shortid()} id={x.id} status={x.status} />
             </ListGroup.Item>)}
    </ListGroup>
  )
}


export default TablesList;