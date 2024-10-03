import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Admin/Common/Sidebar";
import MainCrudActividades from "./components/Admin/CrudActividades/MainCrudActividades";
import MainCrudTalleres from "./components/Admin/CrudTalleres/MainCrudTalleres";
import FormInsert from "./components/Admin/CrudActividades/FormInsert/FormInsert";
import FormUpdate from "./components/Admin/CrudActividades/FormUpdate/FormUpdate";
function App() {
  return (
    <div className="flex h-screen bg-red text-black overflow-hidden">
      <Sidebar />
      <Routes>
        <Route path="/crudActividades" element={<MainCrudActividades />} />
        <Route path="/form-products" element={<FormInsert />} />
        <Route path="/edit-products/:id_actividad" element={<FormUpdate />} />
        <Route path="/crudTalleres" element={<MainCrudTalleres />} />
      </Routes>
    </div>
  );
}
export default App;
