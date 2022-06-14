import { API_URL } from "../config";

export const getTableData = ({ tables }) =>
  tables;

export const getTableById = ({ tables }, tableId) => 
  tables.find(table => table.id === tableId);

//actions 

export const updateTables = payload => ({type: 'UPDATE_TABLES', payload});
export const changeTable = payload => ({type: 'CHANGE_TABLE', payload});

export const fetchTables = dispatch => {
  fetch(`${API_URL}/tables`)
    .then(res => res.json())
    .then(tables => {
      dispatch(updateTables(tables))})
}

export const fetchPostRequest = (dispatch, tableData) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tableData),
    };
    fetch(`${API_URL}/tables/${tableData.id}`, options)
      .then(() => dispatch(changeTable(tableData)))
  }


const tableReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'UPDATE_TABLES':
      return [...action.payload];
    case 'CHANGE_TABLE':
      {
        const oldTables = statePart.filter(
          (table) => {
            return table.id !== action.payload.id;
          }
        );
        return [
          ...oldTables,
          action.payload,
        ];
      }
    default:
      return statePart;
  };
};

export default tableReducer;