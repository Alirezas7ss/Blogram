export const validate = (data) => {

  const errors = {} ;

  

  if (!data) {
    errors.email = "Email required"
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
    errors.email = "Email address is invalid"
  }else {
    delete errors.email
  }
}