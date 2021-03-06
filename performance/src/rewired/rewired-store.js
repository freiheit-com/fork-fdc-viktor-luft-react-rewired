// @flow

import { Wired } from 'react-rewired';

type OneInputState = {| value: string, color: string |};
const initialOneInput = { value: '', color: '#eeff8e' };

type DeeplyNestedState = { a: {| b: {| c: {| d: {| e: {| f: {| g: number |} |} |} |} |} |} };

export const deeplyNested: DeeplyNestedState = { a: { b: { c: { d: { e: { f: { g: 0 } } } } } } };

const initialManyFlat: { [string]: number } = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .reduce((p, c) => (p[c] = 0) || p, {});

type LifeCodingState = {||};

type State = {|
    oneInput: OneInputState,
    deeplyNested: typeof deeplyNested,
    manyFlat: typeof initialManyFlat,
    liveCoding: LifeCodingState,
    manyComponents: number,
|};

export const RewiredStore = Wired.store<State>({
    oneInput: initialOneInput,
    deeplyNested,
    manyFlat: initialManyFlat,
    liveCoding: ({}: any),
    manyComponents: 0,
});

window.RewiredStore = RewiredStore;
