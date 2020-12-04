import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório'
  }
})

export const loginSchema = yup.object().shape({
  email: yup.string().email('Insira um e-mail válido').required(),
  name: yup.string().required(),
  cpf: yup.string().required(),
  phone: yup.string().required()
})
