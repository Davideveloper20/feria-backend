const AdminModel = require('../models/admin-model');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await AdminModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }


    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error al intentar iniciar sesión:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
