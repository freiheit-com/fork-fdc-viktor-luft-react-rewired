// @flow

import 'spy4js';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

Enzyme.configure({ adapter: new Adapter() });

// test utility to await all running promises
window.nextTick = (): Promise<void> => new Promise(resolve => process.nextTick(resolve));
