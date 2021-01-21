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
): number => {
  if (typeof duration === 'number') {
    duration = moment.duration(duration);
  }
  switch (type) {
    case 'years':
      return duration.years();
    case 'months':
      return duration.months();
    case 'days':
      return duration.days();
    case 'hours':
      return duration.hours();
    case 'minutes':
      return duration.minutes();
    case 'seconds':
      return duration.seconds();
    case 'full':
      return getDurationNormalize('seconds', duration);
    default:
      return 0;
  }
};
