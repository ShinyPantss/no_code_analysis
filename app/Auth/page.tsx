import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <form className=" flex flex-col text-3xl text-black w-1/2 items-center justify-center">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        className="text-black"
      />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  );
}
