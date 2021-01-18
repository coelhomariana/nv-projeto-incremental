import React from 'react'
import { useForm } from 'react-hook-form'

import Column from 'components/Column'
import Row from 'components/Row'

import { signUpSchema } from 'helpers/yup-schemas'

const SignUp = () => {
  const { login } = useUser()

  const { register, handleSubmit, errors, formState } = useForm({ validationSchema: signUpSchema })

  const onSubmit = async values => {
    try {
      await console.log(values)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Column as='form' onSubmit={handleSubmit(onSubmit)} p={40} alignItems='center'>
      <Input
        name='name'
        register={register}
        label='Nome'
        placeholder='Seu Nome'
        width='390px'
        error={errors.name?.message}
      />

      <Input
        name='email'
        register={register}
        label='E-mail'
        placeholder='example@example.com'
        width='390px'
        error={errors.email?.message}
      />

      <Input
        name='cpf'
        register={register}
        label='CPF'
        placeholder='123.456.789-00'
        width='390px'
        type='text'
        error={errors.cpf?.message}
      />
      <Input
        name='phone'
        register={register}
        label='Celular'
        placeholder='(00) 00000-0000'
        width='390px'
        type='text'
        error={errors.phone?.message}
      />
      <Row>
        <Button bg='#84db84' isLoading={formState.isSubmitting} margin='30px 8px 10px 8px'>
          Confirmar
        </Button>
        <Button bg='#fff' isLoading={formState.isSubmitting} margin='30px 8px 10px 8px'>
          Cancelar
        </Button>
      </Row>
    </Column>
  )
}

export default SignUp
