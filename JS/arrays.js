//ARRAYS

var a = new Array();
a[0] = "dog";
a[1] = "cat";
a[2] = "hen";
console.log(a, a.length);

var b = ['dog','cat','hen'];
console.log(b, b.length);

var c = ['dog','cat','hen'];
c[5] = 'duck'
console.log(c, c.length);

var d = [];
d.push('dog');
d.push('cat');
d.push('hen');
console.log(d, d.length);

var e = [];
e['dog'] = 'dog';
e['cat'] = 'cat';
e['duck'] = 'duck';
e[0] = 'duck';
console.log(e, e.length);