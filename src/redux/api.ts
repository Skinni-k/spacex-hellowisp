import axios, { AxiosPromise, Method } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BodyType = { [key: string]: any } | null;

type HeadersReturnType = { "Content-Type": string };

export default class Api {
  private headers(): HeadersReturnType {
    return { "Content-Type": "application/json" };
  }

  private request(
    method: Method,
    path: string,
    data: BodyType
  ): AxiosPromise<string> {
    return axios({
      method: method,
      url: `https://api.spacexdata.com/v5${path}`,
      headers: this.headers(),
      data,
    });
  }

  public launches(page: number, order: string): AxiosPromise<string> {
    const instance = new Api();
    return instance.request("POST", "/launches/query", {
      options: { page, sort: { date_local: order } },
    });
  }
}
