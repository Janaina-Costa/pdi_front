import emailValidate from "../app/utils/emailValidate.js";

const fields = document.querySelectorAll(".get_fields")
const defaultErrorMail = document.querySelectorAll('.default_error_mail')
const defaultErrorPass = document.querySelectorAll('.default_error_pass')
const defaultErrorName = document.querySelectorAll('.default_error_name')


const validateEmailField = () => {
  
  fields.forEach(field=>{
    field.addEventListener('blur', (e)=>{
      const fieldName = getField(e)
     
      if(fieldName === 'email' && e.target.value === ''){
        defaultErrorMail.forEach(error=>{
          error.innerHTML = 'Email é obrigatório'
          error.style.display = 'block'
        })
        return
      }
       if(fieldName === 'email' && e.target.value.length > 0){
        const isValidEmail = emailValidate(e.target.value)
        if(!isValidEmail){
          console.log('aqui');
          defaultErrorMail.forEach(error=>{
            error.innerHTML = 'Email inválido'
            error.style.display = 'block'
          })
          return
        }
        defaultErrorMail.forEach(error=> error.style.display = 'none')
      } 
    })
  }) 
}


const validatePasswordField = () => {
 
  fields.forEach(field=>{
    field.addEventListener('blur', (e)=>{
      const fieldName = getField(e)
      if(fieldName === 'password' && e.target.value === ''){
        defaultErrorPass.forEach(error=>{
          error.innerHTML = 'Senha é obrigatória'
          error.style.display = 'block'
        })
        return
      }
      if(fieldName === 'password' && e.target.value !== ''){
        const min = 8
        const max = 12
        if(e.target.value.length < min || e.target.value.length > max){
          defaultErrorPass.forEach(error=>{
            error.innerHTML = `Senha deve ter no mínimo ${min} caracteres e no máximo ${max} caracteres`
            error.style.display = 'block'
          })
          return
        }

        defaultErrorPass.forEach(error=> error.style.display = 'none')
      }
    })
  })
}

const validateNameField = () => {
  fields.forEach(field=>{
    field.addEventListener('blur', (e)=>{
      const fieldName = getField(e)
      if(fieldName === 'name' && e.target.value === ''){
        defaultErrorName.forEach(error=>{
          error.innerHTML = 'Nome é obrigatório'
          error.style.display = 'block'
        })
        return
      }
      if(fieldName === 'name' && e.target.value !== ''){
        const min = 3
    
        if(e.target.value.length < min ){
          defaultErrorName.forEach(error=>{
            error.innerHTML = `Nome deve ter no mínimo ${min} caracteres.`
            error.style.display = 'block'
          })
          return
        }

        defaultErrorName.forEach(error=> error.style.display = 'none')
      }
    })
  })
}

const getField = (field) => {
  return field.target.name
}

validateNameField()
validateEmailField()
validatePasswordField()

