export interface ResponseCommon<T> {
    errorCode: number;
    message: string;
    data: T;
}
