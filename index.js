const fill = (num)=> num < 10 ? `0${num}` : `${num}`;

const makeStr = (o)=> (o.h ? `${o.h}:` : '') + (`${o.h ? fill(o.m) : o.m}:`) + fill(o.s) + ' ';

const convert = (sec)=> {
  let s = sec % 60;
  let m = Math.floor(sec / 60);
  let h = Math.floor(m / 60);
  m = m % 60;
  return {h, m, s};
};

const print = (()=> {
  let str = '';

  return (sec)=> {
    const o = convert(sec);
    const strtmp = makeStr(o);
    process.stdout.write('\b'.repeat(str.length));
    str = strtmp;
    process.stdout.write(str);
  };
})();

const timer = setInterval(((sec)=> ()=> print(++sec))(0), 1000);
