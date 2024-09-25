export interface IViewDto<T = any, R = any> {
    formatDataSet(data?: T): R | null;
}
