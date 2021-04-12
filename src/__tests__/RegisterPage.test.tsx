import React from "react";
import { render, fireEvent } from "@testing-library/react";

import RegisterPage from "../Container/RegisterPage";

describe("<RegisterPage />", () => {
  function renderRegisterForm(props: Partial<{}> = {}) {
     
    return render(<RegisterPage  />);
  }
  
  test("should submit the form with username, password, email and policy", async () => {
    const onSubmit = jest.fn();
    const { findByTestId } = renderRegisterForm({
      onSubmit
    });
    const username = await findByTestId("username");
    const password = await findByTestId("password");
    const policy = await findByTestId("policty");
    const email = await findByTestId("email");
    const submit = await findByTestId("submit");
  
    fireEvent.change(username, { target: { value: "test" } });
    fireEvent.change(password, { target: { value: "password" } });
    fireEvent.change(email, { target: { value: "email" } });
    fireEvent.click(policy);
    fireEvent.click(submit);
  
    expect(onSubmit).toHaveBeenCalledWith("test", "password", true);
  });
});