import React from 'react';
import Input from "../components/customElements/Input";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {validate} from "../validators/validators";
import {useDispatch} from "react-redux";
import {login} from "../redux/reducers/auth";

const LoginPage: React.FC = () => {
    const dispatch = useDispatch()
    const {t} = useTranslation();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            dispatch(login(values.email, values.password))
        },
    });

    return (
        <MainBlock>
            <Title>{t('loginPage.login')}</Title>
            <LoginForm onSubmit={formik.handleSubmit}>
                <Input
                    id='email'
                    type={"email"}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    placeholder={'Email'}/>
                {formik.touched.email && formik.errors.email ? (
                    <ErrorBlock>{formik.errors.email}</ErrorBlock>
                ) : null}
                <Input
                    id='password'
                    type={"password"}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    placeholder={'Password'}/>
                {formik.touched.password && formik.errors.password ? (
                    <ErrorBlock>{formik.errors.password}</ErrorBlock>
                ) : null}
                <LoginButton>{t('loginPage.signIn')}</LoginButton>
            </LoginForm>
        </MainBlock>
    );
}

export default LoginPage;

const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #a239ac;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoginButton = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #6c6c6c;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-weight: 700;
`

const ErrorBlock = styled.div`
  color: #ffabab;
  background: initial;
  font-weight: 600;
`

const Title = styled.h1`
  color: white;
  font-weight: 800;
`
