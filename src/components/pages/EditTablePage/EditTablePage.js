import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTableById } from '../../../redux/tableRedux';
import TableForm from '../../features/TableForm';

const EditTablePage = () => { 
  
  const tableId = useParams();
  const tableData = useSelector(state => getTableById(state, tableId.id))

  if(tableData !== undefined){
    return (
      <TableForm  /> 
    );
  }
  
};

export default EditTablePage;
