import test from 'ava';
import { getExtension } from './../src/index.es';

test('returns extension', t => {
  t.is(getExtension('file.jpg'), 'jpg', 'for a regular filename');
  t.is(getExtension('file.more.dot.in.name.jpg'), 'jpg', 'for a filename with more dots');
});
