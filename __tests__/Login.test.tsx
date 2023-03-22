import React from 'react'
import { fireEvent, getByLabelText, getByRole, getByText, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '@/pages/Login'
import { useRouter } from 'next/router'
import { render } from '@/common/test-utils'

jest.mock('next/router', () => ({
    useRouter() {
      return ({
        route: '/',
        pathname: '',
        query: '',
        asPath: '',
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn()
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null)
      });
    },
  }));
describe('Teste de login', () => {
    it('should render form', () => {
        // const useRouter = jest.spyOn(require("next/router"), "useRouter");

        // useRouter.mockImplementation(() => ({
        // route: '/',
        // pathname: '',
        // query: '',
        // asPath: '',
        // push: jest.fn(),
        // events: {
        //     on: jest.fn(),
        //     off: jest.fn()
        // },
        // beforePopState: jest.fn(() => null),
        // prefetch: jest.fn(() => null)
        // }));

        render(<Login/>)
        const nameLabel = screen.getByText(/Username/)
        const passwordLabel = screen.getByText(/Password/)

        const inputUsername = screen.getByLabelText(/Username/)
        const inputPassword = screen.getByLabelText(/Password/)

        expect(nameLabel).toBeInTheDocument()
        expect(passwordLabel).toBeInTheDocument()
        expect(inputUsername).toHaveAttribute('type', 'text')
        expect(inputPassword).toHaveAttribute('type', 'password')
        // expect(handleSubmit).toHaveBeenCalled()
    }),
    it('should fill the input', () => {
      render(<Login/>)
      const inputUsername = screen.getByLabelText(/Username/)
      fireEvent.change(inputUsername, {'target': {'value': 'user1'}})
      // const btn = getByRole(, { name: 'Login' })
    })
})