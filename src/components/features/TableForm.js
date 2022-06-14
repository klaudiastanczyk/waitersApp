import { Button, Container } from "react-bootstrap"
import styles from './TableForm.module.scss';
import { getTableById, fetchPostRequest } from "../../redux/tableRedux";
import { useDispatch, useSelector} from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../common/Input/Input";
import clsx from "clsx";


const TableForm = () => {

  const tableId = useParams();

  const tableData = useSelector(state => getTableById(state, tableId.id))

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const id = tableId.id;
  const [status, setStatus] = useState(tableData.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [bill, setBill] = useState(tableData.bill);

  
  const selectOnChange = e => {
    const value = e.target.value; 

    if (value === 'Cleaning' || value === 'Free') {
      setPeopleAmount(0);
      setStatus(value);
    } else if (value === 'Busy') {
      setBill(0);
      setStatus(value);
    } else {
      setStatus(value);
    }

  }

  const isValid = input => {
    if (input <= 10 && input >= 0) {
      return true;
    } else {
      return false;
    }
  }

  const peopleAmountOnChange = e => {
    const value = e.target.value; 

    if (isValid(value) && value <= maxPeopleAmount) {
      setPeopleAmount(value);
    } else {
      alert('Add invalid input');
    }
  }

  const maxPeopleAmountOnChange = e => {
    const value = e.target.value; 

    if (isValid(value)) {
      setMaxPeopleAmount(value);

      if (value < peopleAmount) {
        setPeopleAmount(value);
      }
    }
  }
  
  const onSubmit = e => {
    e.preventDefault();

    fetchPostRequest(dispatch ,{
      id,
      status,
      peopleAmount,
      maxPeopleAmount,
      bill
    })
    navigate(-1);
  }


  
  return(
    <Container>
      <form onSubmit={onSubmit}>
        <h2>Table {id}</h2>
        <div className={styles.status}>
          <span>Status:</span>
          <select value={status} onChange={selectOnChange}>
            <option value="Busy">Busy</option>
            <option value="Reserved">Reserved</option>
            <option value="Free">Free</option>
            <option value="Cleaning">Cleaning</option>
          </select>
        </div>
        <div className={styles.people}>
          <span>People: </span><Input value={peopleAmount} onChange={peopleAmountOnChange} /> / <Input value={maxPeopleAmount} onChange={maxPeopleAmountOnChange} />
        </div>
        <div className={clsx(styles.bill, status === 'Busy' && styles.active)}>
         <span>Bill: </span> $ <Input value={bill} onChange={e => setBill(e.target.value)} /> 
        </div>
        <Button onClick={onSubmit}>Update</Button>
      </form>
    </Container>
  )
}

export default TableForm;