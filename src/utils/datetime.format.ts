import moment from 'moment';

export const dateFormat = (
    date: Date | number,
    type?: 'strike' | 'splash',
    isReverse?: boolean,
): string => {
    if (type === 'strike') {
        if (isReverse) {
            const formatingResult = moment(date).format('YYYY-MM-DD');
            return formatingResult;
        } else {
            const formatingResult = moment(date).format('DD-MM-YYYY');
            return formatingResult;
        }
    } else {
        if (isReverse) {
            const formatingResult = moment(date).format('YYYY/MM/DD');
            return formatingResult;
        } else {
            const formatingResult = moment(date).format('DD/MM/YYYY');
            return formatingResult;
        }
    }
};

export const dateFormatAt = (date: Date): string => {
    const formatingResult = moment(date).startOf('minutes').fromNow();
    return formatingResult;
};

export const remainingTimeFormat = (remainingTime: number): string => {
    const formatingResult = moment(remainingTime).format('mm:ss');
    return formatingResult;
};
