import { Fn } from '@iapps/function-analytics/function-analytics.min';

Fn.init({
  baseUrl: 'https://play.dhis2.org/2.29/api/',
  username: 'admin',
  password: 'district'
});

const runner = new Fn.Runner();

console.log(runner.instance.config);
