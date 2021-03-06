import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório'
  }
})

export const signUpResolver = yup.object().shape({
  email: yup.string().email('Insira um e-mail válido').required(),
  name: yup.string().required(),
  cpf: yup
    .string()
    .required()
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'Formato de CPF incorreto'),
  phone: yup
    .string()
    .required()
    .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, 'Formato do número de celular  incorreto')
})

export const loginResolver = yupResolver(
  yup.object().shape({
    username: yup.string().required().min(2, 'Precisa ter no mínimo 2 caracteres'),
    password: yup.string().required().min(2, 'O formato da senha está incorreto')
  })
)
