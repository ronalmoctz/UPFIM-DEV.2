import PerfilAdmin from '../components/Admin/pages/Perfil';
import Calificaciones from '../components/Admin/pages/Calificaciones';
import Actividades from '../components/Admin/pages/Actividades';
import Talleres from '../components/Admin/pages/Talleres';
import Galleria from '../components/Admin/pages/Galleria';
import Administradores from '../components/Admin/pages/Administradores';
import Alumnado from '../components/Admin/pages/Alumnos';
import Docentes from '../components/Admin/pages/Docentes';
import ChangePassword from '../components/Admin/pages/ChangePassword';

const adminRoutes = {
  admin: [
    { path: 'perfil', component: PerfilAdmin },
    { path: 'calificaciones', component: Calificaciones },
    { path: 'actividades', component: Actividades },
    { path: 'talleres', component: Talleres },
    { path: 'galeria', component: Galleria },
    { path: 'admins', component: Administradores },
    { path: 'alumnado', component: Alumnado},
    { path: 'docentes', component: Docentes },
    { path: 'changePassword', component: ChangePassword },
  ],
};

export default adminRoutes;
