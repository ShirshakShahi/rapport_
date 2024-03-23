export default interface AuthenticationReducerInterface {
  user?: { _id: string };
  isLoading: boolean;
  loginResponse?: string;
  signupResponse?: {};
  isLoginSuccessFul?: boolean;
  isRegisterUserSuccessFul?: boolean;
  error?: string | null;
  successMessage?: string | null;
}
