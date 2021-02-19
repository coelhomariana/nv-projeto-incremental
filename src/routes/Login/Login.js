import React from 'react'
import { useForm } from 'react-hook-form'

import { loginResolver } from 'helpers/yup-schemas'

import Column from 'components/Column'
import Button from 'components/Button'
import Input from 'components/Input'
import Row from 'components/Row'

import { mockLogin } from 'services/auth'
import { loginSchema } from 'helpers/yup-schemas'

const Login = () => {
  const { register, handleSubmit, errors } = useForm({ resolver: loginResolver })
  const history = useHistory()

  const onSubmit = async values => {
    try {
      const response = await mockLogin(values)
      window.localStorage.setItem('username', response.username)
      window.location.reload()
    } catch (err) {
      alert('Não foi possível efetuar o login com esses dados, tente novamente')
      console.log(err)
    }
  }

  return (
    <Column as='form' onSubmit={handleSubmit(onSubmit)} alignItems='center' justifyContent='center' height='100vh'>
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
        <Button type='submit' isLoading={formState.isSubmitting}>
          Logar
        </Button>
      </Row>
    </Column>
  )
}

export default Login
