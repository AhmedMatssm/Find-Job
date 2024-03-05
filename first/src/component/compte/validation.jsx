
function Validation(values) {
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(values.userName === ""){
        errors.userName = "username is required";
    }

    if(values.email === ""){
        errors.email = "email is required"
    }

    else if (!email_pattern.test(values.email)){
        errors.email = "email did not match"
    }


    if(values.password === ""){
        errors.password = "password is required"
    }
    
    else if (!password_pattern.test(values.password)){
        errors.password = "password did not match"
    }
    
    if(values.statue === ""){
        errors.statue = "this case is required"
    }

    return errors;
}

export default Validation
