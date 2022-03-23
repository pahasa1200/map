
type ValidatorsType = {
    email?: string,
    password?: string
}


export const validate = (values: ValidatorsType) => {
    const errors = {} as ValidatorsType;

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // if (!values.password) {
    //     errors.password = 'Required';
    // } else if (values.password.length > 32) {
    //     errors.password = 'Must be less than 32 symbols';
    // } else if (values.password.length < 6) {
    //     errors.password = 'Must be bigger than 6 symbols';
    // } else if (!(/[!@#$&*%]/.test(values.password))) {
    //     errors.password = 'Must be at least one special symbol';
    // } else if (!(/[A-Z]/.test(values.password))) {
    //     errors.password = 'Must be at least one capital letter';
    // }

    return errors;
};
