export default interface AuthenticationReducerInterface {
  isLoading: boolean;
  loginResponse?: string;
  signupResponse?: {};
  isLoginSuccessFul?: boolean;
  isRegisterUserSuccessFul?: boolean;
  error?: string | null;
  successMessage?: string | null;
}
