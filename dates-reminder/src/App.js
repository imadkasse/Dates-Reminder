import { Container } from "react-bootstrap";
import person from "./Data";
import DatesCount from "./components/DatesCount";
import Reminder from "./components/Reminder";
import DatesActio from "./components/DatesActio";
import { useEffect, useState } from "react";
function App() {
  const [personData, setPersonData] = useState(person);
  const onDelete = () => {
    setPersonData([]);
  };
  const onViewData = () => {
    setPersonData(person);
  };
  useEffect(() => {
    setPersonData([]);
  }, []);
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData} />
        <Reminder person={personData} />
        <DatesActio deleteData={onDelete} viweData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
