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
      const renderResult = render(SignUpPage);
      const container = renderResult.container;
      const input = container.querySelector('input');
      expect(input).toBeInTheDocument();
    });
  });
});
