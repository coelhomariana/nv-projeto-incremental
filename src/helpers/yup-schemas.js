import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório'
  }
})

export const signUpSchema = yup.object().shape({
  email: yup.string().email('Insira um e-mail válido').required(),
  name: yup.string().required(),
  cpf: yup
    .string()
    .required()
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'Formato de CPF incorreto'),
  phone: yup
    .string()
    .required()
    .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, 'Formato do número de celular incorreto')
})
