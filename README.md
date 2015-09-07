# ngTrumbitta Moment Angular service

[![Build Status](https://travis-ci.org/ngTrumbitta/ngtrumbitta-services-moment.svg?branch=master)](https://travis-ci.org/ngTrumbitta/ngtrumbitta-services-moment)

Inject Moment in any Angular application, and use it via the good old `moment` handler.

Just a little something I find myself rewriting every time I work on an Angular application.  
Well, no more I guess ;)

## Install

```sh
bower install ngtrumbitta-services-moment
```

## Use

```html
<script src="//code.angularjs.org/1.4.5/angular.min.js"></script>
<script src="bower_components/moment/min/moment.min.js"></script>
<script src="bowser_components/ngtrumbitta-services-moment/src/moment.service.js"></script>
```

```javascript
angular.module('app.services.myservice', [
  'ngtrumbitta.services.moment'
  ])
  .service('myService', function(moment) {

    this.getYear = function() {
      var date = moment('2011-09-10', 'YYYY-MM-DD');
      return date.year();
    };

  });

```

## License

MIT – See [license file](LICENSE)
