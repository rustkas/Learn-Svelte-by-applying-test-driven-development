import { render, screen } from '@testing-library/svelte';
import * as SignUpPage from './SignUpPage.svelte';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import {setupServer} from 'msw/node';
import {rest} from 'msw';

describe("Sign Up Page", () => {
  describe("Layout", () => {
    it('has Sign Up header', () => {
      render(SignUpPage);
      const header = screen.getByRole('heading', { name: 'Sign Up' });
      expect(header).toBeInTheDocument();
    });

    it('has user input', () => {
      render(SignUpPage);
      const input = screen.getByLabelText('Username');
      expect(input).toBeInTheDocument();
    });

    it('has e-mail input', () => {
      render(SignUpPage);
      const input = screen.getByLabelText('E-mail');
      expect(input).toBeInTheDocument();
    });

    it('has password input', () => {
      render(SignUpPage);
      const input = screen.getByLabelText('Password');
      expect(input).toBeInTheDocument();
    });
    it("has password type for password input", () => {
      render(SignUpPage);
      const passwordInput = screen.getByLabelText("Password");
      expect(passwordInput.type).toBe("password");
    });

    it('has password repeat input', () => {
      render(SignUpPage);
      const input = screen.getByLabelText('Password Repeat');
      expect(input).toBeInTheDocument();
    });

    it("has password type for password repeat input", () => {
      render(SignUpPage);
      const passwordInput = screen.getByLabelText("Password Repeat");
      expect(passwordInput.type).toBe("password");
    });

    it('has Sign Up button', () => {
      render(SignUpPage);
      const button = screen.getByRole('button', { name: 'Sign Up' });
      expect(button).toBeInTheDocument();
    });

    it('disables the button initially', () => {
      render(SignUpPage);
      const button = screen.getByRole('button', { name: 'Sign Up' });
      expect(button).toBeDisabled();
    });
  });

  describe("Interactions", () => {
    it('Enables the button when the password and password repeat have the same value', async () => {
      render(SignUpPage);
      const passwordInput = screen.getByLabelText('Password');
      const passwordRepeatInput = screen.getByLabelText('Password Repeat');
      await userEvent.type(passwordInput, 'P4ssword');
      await userEvent.type(passwordRepeatInput, 'P4ssword');
      const button = screen.getByRole('button', { name: 'Sign Up' });
      expect(button).not.toBeDisabled();
      expect(button).toBeEnabled();
    });
  
    it('Sends username, email and password to backend after clicking the button', async () => {
      let requestBody;
      const server = setupServer(
        rest.post("/api/1.0/users", async (req, res, ctx)=>  {
          requestBody = await req.json().then(body=>body);
          console.log(requestBody);
          return res(ctx.status(200));
        })
      );
      
      server.listen();

      render(SignUpPage);
      const usernameInput = screen.getByLabelText('Username');
      const emailInput = screen.getByLabelText('E-mail');
      const passwordInput = screen.getByLabelText('Password');
      const passwordRepeatInput = screen.getByLabelText('Password Repeat');

      await userEvent.type(usernameInput, 'user1');
      await userEvent.type(emailInput, 'user1@mail.com');
      await userEvent.type(passwordInput, 'P4ssword');
      await userEvent.type(passwordRepeatInput, 'P4ssword');
      const button = screen.getByRole('button', { name: 'Sign Up' });
      
      await userEvent.click(button);

      await server.close();
      
      expect(requestBody).toEqual({
        username:'user1',
        email:'user1@mail.com',
        password: 'P4ssword'
      });

    });
  });


});