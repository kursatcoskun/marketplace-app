export interface Action<T> {
  payload: T;
  loading: boolean;
  type: string;
}
