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
  });
});
