import React from 'react'
import { useForm } from 'react-hook-form'

import Column from 'components/Column'
import Input from 'components/Input'
import Button from 'components/Button'

import { useUser } from 'context/user-context'

import { loginSchema } from 'helpers/yup-schemas'

import * as yup from 'yup'

const Login = () => {
  const { login } = useUser()

  const { register, handleSubmit, errors, formState } = useForm({ validationSchema: loginSchema })

  const onSubmit = async values => {
    try {
      await login(values)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(errors)

  return (
    <Column as='form' onSubmit={handleSubmit(onSubmit)} p={40} alignItems='center'>
      <Input name='name' register={register} label='Nome' placeholder='Seu Nome' error={errors.name?.message} />
      <Input
        name='email'
        register={register}
        label='E-mail'
        placeholder='example@example.com'
        error={errors.email?.message}
        width='100%'
      />
      <Input
        name='cpf'
        register={register}
        label='CPF'
        placeholder='123.456.789-00'
        error={errors.cpf?.message}
        type='text'
      />
      <Input
        name='phone'
        register={register}
        label='Celular'
        placeholder='(00) 00000-0000'
        error={errors.phone?.message}
        type='text'
      />
      <Button bg='#6B8E23' isLoading={formState.isSubmitting}>
        Confirmar
      </Button>
      <Button bg='#7C0A02' isLoading={formState.isSubmitting}>
        Cancelar
      </Button>
    </Column>
  )
}

export default Login
