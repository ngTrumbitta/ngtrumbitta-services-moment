describe('Factory: ngtrumbitta.services.moment', function() {
  'use strict';
  var moment;

  beforeEach(module('ngtrumbitta.services.moment'));
  beforeEach(inject(function(_moment_) {
    moment = _moment_;
  }));

  it('should extract the year from a moment', function() {
    var date = moment('2011-09-10', 'YYYY-MM-DD');
    var year = 2011;
    expect(date.year()).toEqual(year);
  });
});
