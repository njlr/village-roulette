import '@babel/polyfill';
import * as seq from '@njlr/seq';

const adjectives = [
  'annual', 
  'old', 
  'straw', 
  'burning', 
  'wooden', 
  'wooly', 
  'horse-back', 
  'running', 
];

const objects = [
  'wagon', 
  'leg of lamb', 
  'egg', 
  'cheese', 
  'dog', 
  'pumpkin', 
  'barn', 
  'mutton', 
  'chicken coop', 
  'trumpet', 
  'penny', 
  'trophy', 
  'clock', 
  'stick', 
];

const events = [
  'chase', 
  'race', 
  'dance', 
];

const places = [
  '', 
  '', 
  '', 
  'for the clump', 
  'on the green', 
  'in the pub', 
  'at the village hall', 
  'at the ford', 
  'on the roundabout', 
  'down the hill', 
  'down the lane', 
  'in the carpark', 
  'from the shop', 
  'to the church', 
];

const randomSequence = seed => ({
  [Symbol.iterator]: function * () {
    let i = seed;

    while (true) {
      const x = Math.sin(i) * 10000;
      yield x - Math.floor(x);

      i++;
    }
  }
});

const pick = xs => i => xs[ Math.round(i * xs.length) % xs.length ];

const generateActivities = randoms => 
  randoms 
  |> seq.chunk(4)
  |> seq.map(xs => {
    const [ i, j, k, l ] = xs;

    const adjective = i |> pick(adjectives);
    const object = j |> pick(objects);
    const event = k |> pick(events);
    const place = l |> pick(places);

    return (
      'The ' + adjective + ' ' + 
      object + ' ' + event + ' ' + place
    );
  });

const output = document.getElementById("output");

const roll = document.getElementById("roll");

const xs = generateActivities(randomSequence(Math.random()))[Symbol.iterator]();

output.innerText = xs.next().value;

roll.addEventListener("click", (event) => {
  output.innerText = xs.next().value;
}, false);
