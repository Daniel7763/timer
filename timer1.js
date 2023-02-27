const input = process.argv.slice(2);

const timer = function(input) {
  for (let num of input) {
    if (num < 0 || num === undefined || num === isNaN) {
      return "Interval not provided";
    } else {
      let timer = num * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timer);
    }
  }
};
timer(input);