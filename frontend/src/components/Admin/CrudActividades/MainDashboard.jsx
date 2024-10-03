import { Route, Routes } from "react-router-dom";
import Sidebar from "./Common/Sidebar";
import ProductsPage from "./CrudActividades/MainCrudActividades";
import ProductForm from "./CrudActividades/FormInsert/FormInsert";
// import ProductEdit from "./components/Actividades/FormEdit/ProductEdit";

const MainDashboard = () => {
  return (
    <div className="flex h-screen bg-red text-black overflow-hidden">
      <Sidebar />
      

      <Routes>
        <Route path="/crudActividades" element={<ProductsPage />} />
        <Route path="/form-products" element={<ProductForm />} />
        {/* <Route path="/edit-products/:id_actividad" element={<ProductEdit />} /> */}
      </Routes>
    </div>
  );
};

export default MainDashboard;
