import PerfilAdmin from '../components/Admin/pages/Perfil';
import Calificaciones from '../components/Admin/pages/Calificaciones';
import Actividades from '../components/Admin/pages/Actividades';
import Talleres from '../components/Admin/pages/Talleres';
import Galleria from '../components/Admin/pages/Galleria';
import Alumnado from '../components/Admin/pages/Alumnos';

const adminRoutes = {
  admin: [
    { path: 'perfil', component: PerfilAdmin },
    { path: 'calificaciones', component: Calificaciones },
    { path: 'actividades', component: Actividades },
    { path: 'talleres', component: Talleres },
    { path: 'galleria', component: Galleria },
    { path: 'alumnado', component: Alumnado },
  ],
};

export default adminRoutes;
