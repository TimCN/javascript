var stream = require('stream');

var reader = new stream.Readable();


reader.on('data', function(chunk) {
  console.log('start：    ' + chunk + '    end');
});

reader.on('end', function() {

  console.log('there is no more chunk');

});

reader._read = function(){
  console.log(arguments);
}

function callee(i) {
  if( i<10) {
    reader.push(i + ' abcdefghigklmnopqrstuvwxyz abcdefghigklmnopqrstuvwxyz abcdefghigklmnopqrstuvwxyz abcdefghigklmnopqrstuvwxyz abcdefghigklmnopqrstuvwxyz');
  } else {
    reader.push(null);
  }
  setTimeout(callee, 500, i + 1);
}

callee(0);
