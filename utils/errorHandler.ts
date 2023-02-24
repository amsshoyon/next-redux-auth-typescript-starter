import { setNotification } from 'reducers/common/notificationReducer';
import { store } from 'store/store';
import { Snakebar } from './notistack';


export const ErrorHandler = (error: any) => {
    if(!error.data) Snakebar.error(error.message)
        
    if(error.data && typeof error.data.message === 'object'){
        error.data.message.forEach((message: string) => {
            Snakebar.error(message)
        });
    }

    if(error.data && typeof error.data.message === 'string'){
        Snakebar.error(error.data.message)
    }
}