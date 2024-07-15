declare global {
  interface RouterContext {
    authentication: AuthContext;
  }
  interface IAuth {
    name: string;
  }
}
export {};
