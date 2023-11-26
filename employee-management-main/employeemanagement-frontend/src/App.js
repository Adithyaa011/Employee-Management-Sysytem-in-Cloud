import AddEmployeeComponent from "./component/AddEmployeeComponent";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="http://springboot-mysql-crud-aws-env.eba-fipg9gpm.eu-north-1.elasticbeanstalk.com/api/users" element={<ListEmployeeComponent />} />
          <Route path="http://springboot-mysql-crud-aws-env.eba-fipg9gpm.eu-north-1.elasticbeanstalk.com/api/users/:id" element={<ListEmployeeComponent />} />
          <Route path="http://springboot-mysql-crud-aws-env.eba-fipg9gpm.eu-north-1.elasticbeanstalk.com/api/users/add-employee" element={<AddEmployeeComponent />} />
          <Route path="http://springboot-mysql-crud-aws-env.eba-fipg9gpm.eu-north-1.elasticbeanstalk.com/api/users/add-employee/:id" element={<AddEmployeeComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
