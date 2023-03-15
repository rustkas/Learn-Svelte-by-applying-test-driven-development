import {render, screen} from '@testing-library/svelte';
import * as SignUpPage from './SignUpPage.svelte';
import "@testing-library/jest-dom";

describe("Sign Up Page", () => {
  describe("Layout", () => {
    it('has Sign Up header', ()=>{
      render(SignUpPage);
      const header = screen.getByRole('heading', {name: 'Sign Up'});
      expect(header).toBeInTheDocument();
    });

    it('has user input', ()=>{
      render(SignUpPage);
      const input = screen.getByLabelText('Username');
      expect(input).toBeInTheDocument();
    });

    it('has e-mail input', ()=>{
      render(SignUpPage);
      const input = screen.getByLabelText('E-mail');
      expect(input).toBeInTheDocument();
    });

    it('has password input', ()=>{
      render(SignUpPage);
      const input = screen.getByLabelText('Password');
      expect(input).toBeInTheDocument();
    });
    it("has password type for password input", () => {
      render(SignUpPage);
      const passwordInput = screen.getByLabelText("Password");
      expect(passwordInput.type).toBe("password");
    });

    it('has password repeat input', ()=>{
      render(SignUpPage);
      const input = screen.getByLabelText('Password Repeat');
      expect(input).toBeInTheDocument();
    });

    it("has password type for password repeat input", () => {
      render(SignUpPage);
      const passwordInput = screen.getByLabelText("Password Repeat");
      expect(passwordInput.type).toBe("password");
    });

    it('has Sign Up button', ()=>{
      render(SignUpPage);
      const button = screen.getByRole('button', {name: 'Sign Up'});
      expect(button).toBeInTheDocument();
    });
  });
});
