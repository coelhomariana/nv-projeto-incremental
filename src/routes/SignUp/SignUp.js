import React from 'react'
import { useForm } from 'react-hook-form'

import Column from 'components/Column'
import Row from 'components/Row'
import Input from 'components/Input'
import Button from 'components/Button'
import Link from 'components/Link'

import { signUpResolver } from 'helpers/yup-schemas'

import { unauthenticatedRoutes } from 'helpers/routes'

const SignUp = () => {
  const { register, handleSubmit, errors, formState } = useForm({ validationSchema: signUpResolver })

  const onSubmit = async values => {
    try {
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Column
        as='form'
        onSubmit={handleSubmit(onSubmit)}
        p='40'
        height='500px'
        alignItems='center'
        justifyContent='flex-end'
      >
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
        <Row margin='30px'>
          <Button bg='#fff' width='390px' isLoading={formState.isSubmitting}>
            Confirmar
          </Button>
        </Row>
      </Column>
      <Row justifyContent='center'>
        <Link href={unauthenticatedRoutes[0].path}>
          <Button bg='#fff' width='390px' isLoading={formState.isSubmitting}>
            Cancelar
          </Button>
        </Link>
      </Row>
    </>
  )
}

export default SignUp
