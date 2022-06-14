import { Container } from "react-bootstrap";
import Title from "../../views/Title/Title"
import TablesList from "../../views/TablesList/TablesList";


const MainMenu = () => {

  return(
    <Container>
      <Title>All tables</Title>
      <TablesList /> 
    </Container>
  )
}

export default MainMenu;