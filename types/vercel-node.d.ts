declare module "@vercel/node" {
  import type { IncomingMessage, ServerResponse } from "http";

  export interface VercelRequest extends IncomingMessage {
    body: any;
    query: { [key: string]: string | string[] };
    cookies: { [key: string]: string };
  }

  export type VercelResponse = ServerResponse & {
    status: (statusCode: number) => VercelResponse;
    json: (body: any) => void;
  };
}
