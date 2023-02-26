export enum LayoutTypes {
    client = 'client',
    blank = 'blank'
}

export interface NotificationInterface {
    show: boolean,
    message?: string,
    type?: 'success' | 'error' | 'warning' | 'info',
    position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center',
}