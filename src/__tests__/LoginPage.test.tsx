import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import LoginPage, { Props } from "../Container/LoginPage";

describe("<LoginPage />", () => {
  test("should display a blank login form, with remember me checked by default", async () => {
    render(LoginPage);
  });
});