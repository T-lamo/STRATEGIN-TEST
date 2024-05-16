declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      DB_USER: string;
      DB_PASSWORD: string;
    }
  }
}
