import domino from 'domino';
import fs from 'fs';
import 'localstorage-polyfill';
import fetch from 'node-fetch';
import { join } from 'path';

const template = fs.readFileSync(join(process.cwd(), 'dist/twopg-dashboard/browser', 'index.html')).toString();
const win = domino.createWindow(template) as any;

global['fetch'] = fetch;
global['localStorage'] = localStorage;

global['window'] = win;
global['document'] = win.document;
global['DOMTokenList'] = win.DOMTokenList;
global['Node'] = win.Node;
global['Text'] = win.Text;
global['HTMLElement'] = win.HTMLElement;
global['navigator'] = win.navigator;