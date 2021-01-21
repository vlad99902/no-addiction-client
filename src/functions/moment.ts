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
  let get = false;
  const ac = numbersArray.reduce((accum, el) => {
    if (get) {
      accum += '' + el;
    } else if (!!el && get) {
      get = true;
    }
    return accum;
  }, '');

  console.log(ac);
  return ac;
};
