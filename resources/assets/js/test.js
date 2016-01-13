import $ from 'jquery';

(() => {
  console.log('aaa');
  console.log($.extend([
    'aaa',
    'bbb',
  ], {
    ccc: 'ddd',
  }));
})();
