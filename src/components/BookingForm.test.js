import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BookingForm from "./BookingForm";

test("without '@' in the email, it should not be passed as an email" , async () => {
  render(<BookingForm />);
  const emailInput = screen.getByLabelText(/Email/i);

  await user.type(emailInput, "dfsf32ef");
  await user.tab();

  expect(screen.getByText("Email invalid.")).toBeInTheDocument();
});

test("Cannot have an empty value", async () => {
  render(<BookingForm />);
  const nameInput = screen.getByLabelText(/Your Name/i);

  await user.type(nameInput, " ");
  await user.tab();

  expect(screen.getByText("Name must contain a value")).toBeInTheDocument();
});
