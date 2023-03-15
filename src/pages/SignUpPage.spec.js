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
      const {container} = render(SignUpPage);
      const input = container.querySelector('input');
      expect(input).toBeInTheDocument();
    });

    it('has e-mail input', ()=>{
      const {container} = render(SignUpPage);
      expect(container.querySelectorAll('input').length).toBe(2);
    });
  });
});
