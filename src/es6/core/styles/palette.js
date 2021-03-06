/** @flow
 * StratoDem Analytics : palette
 * Principal Author(s) : Michael Clawar
 * Secondary Author(s) :
 * Description :
 *
 *  (c) 2016- StratoDem Analytics, LLC
 *  All Rights Reserved
 */

import Immutable from 'immutable';


const PURPLE_400 = "#7E57C2";
const PURPLE_700 = "#512DA8";
const PURPLE_200 = "#B39DDB";
const INDIGO_400 = "#5C6BC0";
const INDIGO_700 = "#303F9F";
const INDIGO_200 = "#9FA8DA";
const BLUE_400 = "#42A5F5";
const BLUE_700 = "#1976D2";
const BLUE_200 = "#90CAF9";
const TEAL_400 = '#26A69A';
const TEAL_700 = '#00796B';
const TEAL_200 = '#80CBC4';
const AMBER_400 = '#FFCA28';
const AMBER_700 = '#FFA000';
const AMBER_200 = '#FFE082';
const DEEPORANGE_400 = '#FF7043';
const DEEPORANGE_700 = '#E64A19';
const DEEPORANGE_200 = '#FFAB91';
const RED_400 = '#EF5350';
const RED_700 = '#D32F2F';
const RED_200 = '#EF9A9A';

// --- Purple -> NO Indigo -> Blue -> Teal -> Amber -> Deep Orange -> Red --- //
export const PALETTE_MATERIAL = [
  PURPLE_400,
  // INDIGO_400,
  BLUE_400,
  TEAL_400,
  AMBER_400,
  DEEPORANGE_400,
  RED_400,
  PURPLE_700,
  // INDIGO_700,
  BLUE_700,
  TEAL_700,
  AMBER_700,
  DEEPORANGE_700,
  RED_700,
  PURPLE_200,
  // INDIGO_200,
  BLUE_200,
  TEAL_200,
  AMBER_200,
  DEEPORANGE_200,
  RED_200,
];

const PALETTE_PURPLES_ASCENDING = [
  '#FFF0FF',
  '#FDD6FF',
  '#E4BDFF',
  '#CBA4FF',
  '#B18AF5',
  '#9871DC',
  PURPLE_400,
  '#653EA9',
  '#4B248F',
  '#320B76',
  '#18005C',
  '#000043',
  '#000029',
];

const PALETTE_INDIGO_ASCENDING = [
  '#F8FDFF',
  '#DFE4FF',
  '#C5CAE9',
  '#9FA8DA',
  '#7986CB',
  INDIGO_400,
  '#3F51B5',
  '#3949AB',
  '#303F9F',
  '#293593',
  '#1A237E',
  '#010A65',
  '#00004B',
  '#000032',
  '#000018',
];

const PALETTE_REDS_ASCENDING = [
  '#FFEEEE',
  '#FFAEAE',
  '#FF9595',
  '#FF7C7C',
  '#FF6262',
  '#ED4949',
  RED_400,
  '#BA1616',
  '#A00000',
  '#870000',
  '#6D0000',
  '#600000',
  '#540000',
  '#3A0000',
  '#140000',
];


const PALETTE_MATERIAL_ASCENDING = [
  PURPLE_400,
  BLUE_400,
  TEAL_400,
  AMBER_400,
  DEEPORANGE_400,
  RED_400,
  PURPLE_700,
  BLUE_700,
  TEAL_700,
  AMBER_700,
  DEEPORANGE_700,
  RED_700,
];


const PALETTE_PURPLES_ASCENDING_BY_SIZE_MAP = Immutable.Map([
  [2, [PALETTE_PURPLES_ASCENDING[5], PALETTE_PURPLES_ASCENDING[10]]],
  [3, [PALETTE_PURPLES_ASCENDING[3], PALETTE_PURPLES_ASCENDING[8], PALETTE_PURPLES_ASCENDING[12]]],
  [4, [PALETTE_PURPLES_ASCENDING[2], PALETTE_PURPLES_ASCENDING[6], PALETTE_PURPLES_ASCENDING[10],
    PALETTE_PURPLES_ASCENDING[12]]],
  [5, [PALETTE_PURPLES_ASCENDING[2], PALETTE_PURPLES_ASCENDING[5], PALETTE_PURPLES_ASCENDING[8],
    PALETTE_PURPLES_ASCENDING[10], PALETTE_PURPLES_ASCENDING[12]]],
  [6, [PALETTE_PURPLES_ASCENDING[2], PALETTE_PURPLES_ASCENDING[4], PALETTE_PURPLES_ASCENDING[6],
    PALETTE_PURPLES_ASCENDING[8], PALETTE_PURPLES_ASCENDING[10], PALETTE_PURPLES_ASCENDING[12]]],
  [7, [PALETTE_PURPLES_ASCENDING[2], PALETTE_PURPLES_ASCENDING[4], PALETTE_PURPLES_ASCENDING[6],
    PALETTE_PURPLES_ASCENDING[8], PALETTE_PURPLES_ASCENDING[9], PALETTE_PURPLES_ASCENDING[11],
    PALETTE_PURPLES_ASCENDING[12]]],
  [8, [PALETTE_PURPLES_ASCENDING[0], PALETTE_PURPLES_ASCENDING[2], PALETTE_PURPLES_ASCENDING[4],
    PALETTE_PURPLES_ASCENDING[6], PALETTE_PURPLES_ASCENDING[8], PALETTE_PURPLES_ASCENDING[10],
    PALETTE_PURPLES_ASCENDING[11], PALETTE_PURPLES_ASCENDING[12]]],
  [9, [PALETTE_PURPLES_ASCENDING[0], PALETTE_PURPLES_ASCENDING[2], PALETTE_PURPLES_ASCENDING[4],
    PALETTE_PURPLES_ASCENDING[6], PALETTE_PURPLES_ASCENDING[7], PALETTE_PURPLES_ASCENDING[9],
    PALETTE_PURPLES_ASCENDING[10], PALETTE_PURPLES_ASCENDING[11], PALETTE_PURPLES_ASCENDING[12]]],
]);

const PALETTE_INDIGO_ASCENDING_BY_SIZE_MAP = Immutable.Map([
  [2, [PALETTE_INDIGO_ASCENDING[5], PALETTE_INDIGO_ASCENDING[10]]],
  [3, [PALETTE_INDIGO_ASCENDING[3], PALETTE_INDIGO_ASCENDING[8], PALETTE_INDIGO_ASCENDING[13]]],
  [4, [PALETTE_INDIGO_ASCENDING[2], PALETTE_INDIGO_ASCENDING[6], PALETTE_INDIGO_ASCENDING[10],
    PALETTE_INDIGO_ASCENDING[14]]],
  [5, [PALETTE_INDIGO_ASCENDING[2], PALETTE_INDIGO_ASCENDING[5], PALETTE_INDIGO_ASCENDING[8],
    PALETTE_INDIGO_ASCENDING[11], PALETTE_INDIGO_ASCENDING[14]]],
  [6, [PALETTE_INDIGO_ASCENDING[2], PALETTE_INDIGO_ASCENDING[4], PALETTE_INDIGO_ASCENDING[6],
    PALETTE_INDIGO_ASCENDING[8], PALETTE_INDIGO_ASCENDING[10], PALETTE_INDIGO_ASCENDING[12]]],
  [7, [PALETTE_INDIGO_ASCENDING[2], PALETTE_INDIGO_ASCENDING[4], PALETTE_INDIGO_ASCENDING[6],
    PALETTE_INDIGO_ASCENDING[8], PALETTE_INDIGO_ASCENDING[10], PALETTE_INDIGO_ASCENDING[12],
    PALETTE_INDIGO_ASCENDING[14]]],
  [8, [PALETTE_INDIGO_ASCENDING[0], PALETTE_INDIGO_ASCENDING[2], PALETTE_INDIGO_ASCENDING[4],
    PALETTE_INDIGO_ASCENDING[6], PALETTE_INDIGO_ASCENDING[8], PALETTE_INDIGO_ASCENDING[10],
    PALETTE_INDIGO_ASCENDING[12], PALETTE_INDIGO_ASCENDING[14]]],
  [9, [PALETTE_INDIGO_ASCENDING[0], PALETTE_INDIGO_ASCENDING[2], PALETTE_INDIGO_ASCENDING[4],
    PALETTE_INDIGO_ASCENDING[6], PALETTE_INDIGO_ASCENDING[7], PALETTE_INDIGO_ASCENDING[9],
    PALETTE_INDIGO_ASCENDING[11], PALETTE_INDIGO_ASCENDING[13], PALETTE_INDIGO_ASCENDING[14]]],
]);

const PALETTE_REDS_ASCENDING_BY_SIZE_MAP = Immutable.Map([
  [2, [PALETTE_REDS_ASCENDING[5], PALETTE_REDS_ASCENDING[10]]],
  [3, [PALETTE_REDS_ASCENDING[3], PALETTE_REDS_ASCENDING[8], PALETTE_REDS_ASCENDING[13]]],
  [4, [PALETTE_REDS_ASCENDING[2], PALETTE_REDS_ASCENDING[6], PALETTE_REDS_ASCENDING[10],
    PALETTE_REDS_ASCENDING[14]]],
  [5, [PALETTE_REDS_ASCENDING[2], PALETTE_REDS_ASCENDING[5], PALETTE_REDS_ASCENDING[8],
    PALETTE_REDS_ASCENDING[11], PALETTE_REDS_ASCENDING[14]]],
  [6, [PALETTE_REDS_ASCENDING[2], PALETTE_REDS_ASCENDING[4], PALETTE_REDS_ASCENDING[6],
    PALETTE_REDS_ASCENDING[8], PALETTE_REDS_ASCENDING[10], PALETTE_REDS_ASCENDING[12]]],
  [7, [PALETTE_REDS_ASCENDING[2], PALETTE_REDS_ASCENDING[4], PALETTE_REDS_ASCENDING[6],
    PALETTE_REDS_ASCENDING[8], PALETTE_REDS_ASCENDING[10], PALETTE_REDS_ASCENDING[12],
    PALETTE_REDS_ASCENDING[14]]],
  [8, [PALETTE_REDS_ASCENDING[0], PALETTE_REDS_ASCENDING[2], PALETTE_REDS_ASCENDING[4],
    PALETTE_REDS_ASCENDING[6], PALETTE_REDS_ASCENDING[8], PALETTE_REDS_ASCENDING[10],
    PALETTE_REDS_ASCENDING[12], PALETTE_REDS_ASCENDING[14]]],
  [9, [PALETTE_REDS_ASCENDING[0], PALETTE_REDS_ASCENDING[2], PALETTE_REDS_ASCENDING[4],
    PALETTE_REDS_ASCENDING[6], PALETTE_REDS_ASCENDING[7], PALETTE_REDS_ASCENDING[9],
    PALETTE_REDS_ASCENDING[11], PALETTE_REDS_ASCENDING[13], PALETTE_REDS_ASCENDING[14]]],
]);

const PALETTE_MATERIAL_ASCENDING_BY_SIZE_MAP = Immutable.Map(
  Immutable.Range(2, 10).map(idx => ([idx, PALETTE_MATERIAL_ASCENDING.slice(0, idx)])).toList());

export const PALETTE_KEY_INDIGO = 'Indigo';
export const PALETTE_KEY_PURPLES = 'Purples';
export const PALETTE_KEY_REDS = 'Reds';
export const PALETTE_KEY_MATERIAL = 'Qualitative';

export const PALETTE_MAP = Immutable.OrderedMap([
  [PALETTE_KEY_INDIGO, PALETTE_INDIGO_ASCENDING_BY_SIZE_MAP],
  [PALETTE_KEY_PURPLES, PALETTE_PURPLES_ASCENDING_BY_SIZE_MAP],
  [PALETTE_KEY_MATERIAL, PALETTE_MATERIAL_ASCENDING_BY_SIZE_MAP],
  [PALETTE_KEY_REDS, PALETTE_REDS_ASCENDING_BY_SIZE_MAP],
]);
