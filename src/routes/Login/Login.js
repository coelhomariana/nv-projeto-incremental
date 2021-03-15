import React from 'react'
import { useForm } from 'react-hook-form'

import { loginResolver } from 'helpers/yup-schemas'

import Column from 'components/Column'
import Button from 'components/Button'
import Input from 'components/Input'
import Row from 'components/Row'
import Link from 'components/Link'

import { mockLogin } from 'services/auth'

import { unauthenticatedRoutes } from 'helpers/routes'

const Login = () => {
  const { register, handleSubmit, formState, errors } = useForm({ resolver: loginResolver })

  const onSubmit = async values => {
    try {
      const response = await mockLogin(values)
      const stringifiedResponse = JSON.stringify(response)
      window.localStorage.setItem('user', stringifiedResponse)
      window.location.reload()
    } catch (err) {
      alert('Não foi possível efetuar o login com esses dados, tente novamente')
      console.log(err)
    }
  }

  return (
    <>
      <Column as='form' onSubmit={handleSubmit(onSubmit)} alignItems='center' justifyContent='flex-end' height='500px'>
        <Input
          name='username'
          register={register}
          type='text'
          label='Usuário'
          placeholder='Ex.: "usuário"'
          width='390px'
          error={errors.username?.message}
        />
        <Input
          name='password'
          register={register}
          type='password'
          label='Senha'
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;'
          width='390px'
          error={errors.password?.message}
        />
        <Row margin='30px'>
          <Button type='submit' isLoading={formState.isSubmitting} width='390px'>
            Logar
          </Button>
        </Row>
      </Column>
      <Row justifyContent='center'>
        <Link href={unauthenticatedRoutes[1].path}>
          <Button width='390px'>Cadastrar</Button>
        </Link>
      </Row>
    </>
  )
}

export default Login
