import React from 'react'
import { useForm } from 'react-hook-form'

import Column from 'components/Column'
import Row from 'components/Row'
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
    <Column as='form' onSubmit={handleSubmit(onSubmit)} p={40} alignItems='center' backgroundColor='#343a50'>
      <Input
        name='name'
        register={register}
        label='Nome'
        placeholder='Seu Nome'
        width='30%'
        error={errors.name?.message}
      />

      <Input
        name='email'
        register={register}
        label='E-mail'
        placeholder='example@example.com'
        width='30%'
        error={errors.email?.message}
      />

      <Input
        name='cpf'
        register={register}
        label='CPF'
        placeholder='123.456.789-00'
        width='30%'
        type='text'
        error={errors.cpf?.message}
      />
      <Input
        name='phone'
        register={register}
        label='Celular'
        placeholder='(00) 00000-0000'
        width='30%'
        type='text'
        error={errors.phone?.message}
      />
      <Row>
        <Button bg='#84db84' isLoading={formState.isSubmitting}>
          Confirmar
        </Button>
        <Button bg='#fff' isLoading={formState.isSubmitting}>
          Cancelar
        </Button>
      </Row>
    </Column>
  )
}

export default Login
