import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { z } from "zod";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Box,
} from "@mui/material";

const passwordSchema = z
  .object({
    oldPassword: z.string().nonempty("La contraseña antigua es requerida"),
    newPassword: z
      .string()
      .min(10, "La nueva contraseña debe tener al menos 10 caracteres"),
    confirmPassword: z.string().nonempty("Debes confirmar la nueva contraseña"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

const passwordStrength = (password) => {
  const lengthCriteria = password.length >= 10;
  const upperCaseCriteria = /[A-Z]/.test(password);
  const lowerCaseCriteria = /[a-z]/.test(password);
  const numberCriteria = /\d/.test(password);
  const specialCharCriteria = /[!@#$%^&*]/.test(password);

  const criteriaMet = [
    lengthCriteria,
    upperCaseCriteria,
    lowerCaseCriteria,
    numberCriteria,
    specialCharCriteria,
  ].filter(Boolean).length;

  return criteriaMet;
};

const PasswordUpdateForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [strength, setStrength] = useState(0);

  const handleBlur = (field) => {
    const result = passwordSchema.safeParse({
      oldPassword,
      newPassword,
      confirmPassword,
    });
    if (!result.success) {
      const errorObject = result.error.format();
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: errorObject[field]?._errors[0],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { oldPassword, newPassword, confirmPassword };

    const result = passwordSchema.safeParse(formData);

    if (!result.success) {
      const errorObject = result.error.format();
      setErrors({
        oldPassword: errorObject.oldPassword?._errors[0],
        newPassword: errorObject.newPassword?._errors[0],
        confirmPassword: errorObject.confirmPassword?._errors[0],
      });
    } else {
      setErrors({});
      console.log("Formulario enviado con éxito", formData);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setStrength(0);
    }
  };

  const handleNewPasswordChange = (e) => {
    const password = e.target.value;
    setNewPassword(password);
    setStrength(passwordStrength(password));
  };

  const getStrengthColor = (strength) => {
    if (strength === 0) return "transparent";
    if (strength < 3) return "red";
    if (strength < 5) return "yellow";
    return "green";
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 3,
        backgroundColor: "white",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        textAlign="center"
        marginBottom={2}
      >
        Actualizar Contraseña
      </Typography>

      {/* Contraseña Antigua */}
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel htmlFor="oldPassword">Contraseña Antigua</InputLabel>
        <OutlinedInput
          id="oldPassword"
          type={showOldPassword ? "text" : "password"}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          onBlur={() => handleBlur("oldPassword")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowOldPassword(!showOldPassword)}
                edge="end"
              >
                {showOldPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </IconButton>
            </InputAdornment>
          }
          label="Contraseña Antigua"
          error={!!errors.oldPassword}
        />
        {errors.oldPassword && (
          <Typography color="error" variant="caption">
            {errors.oldPassword}
          </Typography>
        )}
      </FormControl>

      {/* Nueva Contraseña */}
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel htmlFor="newPassword">Nueva Contraseña</InputLabel>
        <OutlinedInput
          id="newPassword"
          type={showNewPassword ? "text" : "password"}
          value={newPassword}
          onChange={handleNewPasswordChange}
          onBlur={() => handleBlur("newPassword")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowNewPassword(!showNewPassword)}
                edge="end"
              >
                {showNewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </IconButton>
            </InputAdornment>
          }
          label="Nueva Contraseña"
          error={!!errors.newPassword}
        />
        {errors.newPassword && (
          <Typography color="error" variant="caption">
            {errors.newPassword}
          </Typography>
        )}
      </FormControl>

      {/* Medidor de Contraseña */}
      <Box
        sx={{
          width: "100%",
          height: "8px",
          backgroundColor: "lightgray",
          borderRadius: "4px",
          marginTop: 1,
        }}
      >
        <Box
          sx={{
            width: `${(strength / 5) * 100}%`,
            height: "100%",
            backgroundColor: getStrengthColor(strength),
            borderRadius: "4px",
            transition: "width 0.3s ease",
          }}
        />
      </Box>
      <Typography variant="body2" color="text.secondary" marginTop={1}>
        Seguridad: {strength < 3 ? "Bajo" : strength < 5 ? "Medio" : "Fuerte"}
      </Typography>

      {/* Confirmar Nueva Contraseña */}
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel htmlFor="confirmPassword">
          Confirmar Nueva Contraseña
        </InputLabel>
        <OutlinedInput
          id="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={() => handleBlur("confirmPassword")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                edge="end"
              >
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirmar Nueva Contraseña"
          error={!!errors.confirmPassword}
        />
        {errors.confirmPassword && (
          <Typography color="error" variant="caption">
            {errors.confirmPassword}
          </Typography>
        )}
      </FormControl>

      {/* Botón de Actualizar */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Actualizar Contraseña
      </Button>

      {/* Requisitos de Contraseña */}
      <Box marginTop={2}>
        <Typography variant="body2">
          <strong>Requisitos de la contraseña:</strong>
        </Typography>
        <ul>
          <li style={{ color: newPassword.length >= 10 ? "green" : "red" }}>
            {newPassword.length >= 10 ? "✔️" : "❌"} Al menos 10 caracteres de
            longitud.
          </li>
          <li style={{ color: /[A-Z]/.test(newPassword) ? "green" : "red" }}>
            {/[A-Z]/.test(newPassword) ? "✔️" : "❌"} Al menos una letra
            mayúscula (A-Z).
          </li>
          <li style={{ color: /[a-z]/.test(newPassword) ? "green" : "red" }}>
            {/[a-z]/.test(newPassword) ? "✔️" : "❌"} Al menos una letra
            minúscula (a-z).
          </li>
          <li style={{ color: /\d/.test(newPassword) ? "green" : "red" }}>
            {/\d/.test(newPassword) ? "✔️" : "❌"} Al menos un número (0-9).
          </li>
          <li
            style={{ color: /[!@#$%^&*]/.test(newPassword) ? "green" : "red" }}
          >
            {/[!@#$%^&*]/.test(newPassword) ? "✔️" : "❌"} Al menos un carácter
            especial (!@#$%^&*).
          </li>
        </ul>
        <Typography variant="body2" color="text.secondary">
          Nota: Es recomendable crear una contraseña fuerte para evitar
          problemas a futuro.
        </Typography>
      </Box>
    </Box>
  );
};

export default PasswordUpdateForm;
