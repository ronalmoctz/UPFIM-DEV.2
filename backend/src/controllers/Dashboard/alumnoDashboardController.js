exports.alumnoDashboardController = (req, res) => {
  res.json({ message: 'Bienvenido al Dashboard de Alumno', user: req.user });
};
