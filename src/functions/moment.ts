import moment from 'moment';

type DurationInType =
  | 'full'
  | 'years'
  | 'months'
  | 'days'
  | 'hours'
  | 'minutes'
  | 'seconds';

export const getDurationNormalize = (
  type: DurationInType,
  duration: moment.Duration | number,
): string => {
  if (typeof duration === 'number') {
    duration = moment.duration(duration);
  }
  switch (type) {
    case 'years':
      return '' + duration.years();
    case 'months':
      return '' + duration.months();
    case 'days':
      return '' + duration.days();
    case 'hours':
      return '' + duration.hours();
    case 'minutes':
      return '' + duration.minutes();
    case 'seconds':
      return '' + duration.seconds();
    case 'full':
      return `${deleteZeroDates([
        +getDurationNormalize('years', duration),
        +getDurationNormalize('months', duration),
        +getDurationNormalize('days', duration),
      ])} ${getTimeZeroDigit(
        getDurationNormalize('hours', duration),
        'time',
      )}:${getTimeZeroDigit(
        getDurationNormalize('minutes', duration),
        'time',
      )}`;
    default:
      return '';
  }
};

export const getTimeZeroDigit = (
  time: number | string,
  type: 'time' | 'date',
): string => {
  if (typeof time === 'string') {
    time = +time;
  }
  if (time % 10 === time && type === 'time') {
    return '0' + String(time);
  } else return String(time);
};

export const deleteZeroDates = (numbersArray: number[]): string => {
  let get: boolean = false;
  const ac = numbersArray.reduce((accum: string, el: number) => {
    if (!!el) {
      get = true;
    }
    if (get) {
      accum += '-' + el;
    }
    return accum;
  }, '');

  return ac.slice(1, ac.length);
};
