import React from "react";
import { render, fireEvent } from "@testing-library/react";

import LoginPage from "../Container/LoginPage";

describe("<LoginPage />", () => {
  function renderLoginForm(props: Partial<{}> = {}) {
     
    return render(<LoginPage  />);
  }
  test("should display a blank login form, with remember me checked by default", async () => {
    
    const { findByTestId } = renderLoginForm();

    const loginForm = await findByTestId("login-form");

    expect(loginForm).toHaveFormValues({});
  });
  
  test("should submit the form with username, password, and remember", async () => {
    const onSubmit = jest.fn();
    const { findByTestId } = renderLoginForm({
      onSubmit
    });
    const username = await findByTestId("username");
    const password = await findByTestId("password");
    const remember = await findByTestId("remember");
    const submit = await findByTestId("submit");
  
    fireEvent.change(username, { target: { value: "test" } });
    fireEvent.change(password, { target: { value: "password" } });
    fireEvent.click(remember);
    fireEvent.click(submit);
  
    expect(onSubmit).toHaveBeenCalledWith("test", "password", true);
  });
});