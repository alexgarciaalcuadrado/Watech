import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/material";
import Logo from "../../assets/Watech.jpg";
import RedButton from "../buttons/redButton";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  password: Yup.string().required("La contraseña es requerida"),
  user: Yup.string().required("El usuario es requerido"),
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    navigate("/");
  };
  return (
    <>
      <div className="login_container">
        <Box className="logo_container">
          <img className="logo" src={Logo} alt="support-it logo" />
        </Box>
          <Formik
            initialValues={{ user: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, errors }) => {
              return (
                <Form className="form_container">
                  <div className="flex">

                  <h4>Usuario</h4>
                  <Field type="text" className="input" name="user" />
                  <ErrorMessage
                    className="error_mesagge"
                    name="user"
                    component="h5"
                  />
                  <h4>Contraseña</h4>
                  <Field type="password" className="input" name="password" />
                  <ErrorMessage
                    className="error_mesagge"
                    name="password"
                    component="h5"
                  />
                  <div className="button_container">
                    <RedButton
                      title="ingresar"
                      type="submit"
                      onClick={handleSubmit}
                      disabled={
                        isSubmitting ||
                        !values.user ||
                        !values.password ||
                        errors.user ||
                        errors.password
                      }
                    />
                  </div>
                  </div>

                </Form>
              );
            }}
          </Formik>
      </div>
    </>
  );
};

export default Login;
