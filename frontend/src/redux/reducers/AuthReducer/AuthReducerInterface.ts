export default interface AuthenticationReducer {
  isLoading: boolean;
  loginResponse?: string;
  isLoginSuccessFul?: boolean;
  isRegisterUserSuccessFul?: boolean;
  error?: string | null;
  successMessage?: string | null;
}
