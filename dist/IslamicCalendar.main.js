var $625ad1e1f4c43bc1$exports = require("./CalendarDate.main.js");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "IslamicCivilCalendar", () => $ecb2c4cc8c9aae25$export$2066795aadd37bfc);
$parcel$export(module.exports, "IslamicTabularCalendar", () => $ecb2c4cc8c9aae25$export$37f0887f2f9d22f7);
$parcel$export(module.exports, "IslamicUmalquraCalendar", () => $ecb2c4cc8c9aae25$export$5baab4758c231076);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from ICU.
// Original licensing can be found in the NOTICE file in the root directory of this source tree.

const $ecb2c4cc8c9aae25$var$CIVIL_EPOC = 1948440; // CE 622 July 16 Friday (Julian calendar) / CE 622 July 19 (Gregorian calendar)
const $ecb2c4cc8c9aae25$var$ASTRONOMICAL_EPOC = 1948439; // CE 622 July 15 Thursday (Julian calendar)
const $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START = 1300;
const $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_END = 1600;
const $ecb2c4cc8c9aae25$var$UMALQURA_START_DAYS = 460322;
function $ecb2c4cc8c9aae25$var$islamicToJulianDay(epoch, year, month, day) {
    return day + Math.ceil(29.5 * (month - 1)) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30) + epoch - 1;
}
function $ecb2c4cc8c9aae25$var$julianDayToIslamic(calendar, epoch, jd) {
    let year = Math.floor((30 * (jd - epoch) + 10646) / 10631);
    let month = Math.min(12, Math.ceil((jd - (29 + $ecb2c4cc8c9aae25$var$islamicToJulianDay(epoch, year, 1, 1))) / 29.5) + 1);
    let day = jd - $ecb2c4cc8c9aae25$var$islamicToJulianDay(epoch, year, month, 1) + 1;
    return new (0, $625ad1e1f4c43bc1$exports.CalendarDate)(calendar, year, month, day);
}
function $ecb2c4cc8c9aae25$var$isLeapYear(year) {
    return (14 + 11 * year) % 30 < 11;
}
class $ecb2c4cc8c9aae25$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $ecb2c4cc8c9aae25$var$julianDayToIslamic(this, $ecb2c4cc8c9aae25$var$CIVIL_EPOC, jd);
    }
    toJulianDay(date) {
        return $ecb2c4cc8c9aae25$var$islamicToJulianDay($ecb2c4cc8c9aae25$var$CIVIL_EPOC, date.year, date.month, date.day);
    }
    getDaysInMonth(date) {
        let length = 29 + date.month % 2;
        if (date.month === 12 && $ecb2c4cc8c9aae25$var$isLeapYear(date.year)) length++;
        return length;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(date) {
        return $ecb2c4cc8c9aae25$var$isLeapYear(date.year) ? 355 : 354;
    }
    getYearsInEra() {
        // 9999 gregorian
        return 9665;
    }
    getEras() {
        return [
            'AH'
        ];
    }
    constructor(){
        this.identifier = 'islamic-civil';
    }
}
class $ecb2c4cc8c9aae25$export$37f0887f2f9d22f7 extends $ecb2c4cc8c9aae25$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        return $ecb2c4cc8c9aae25$var$julianDayToIslamic(this, $ecb2c4cc8c9aae25$var$ASTRONOMICAL_EPOC, jd);
    }
    toJulianDay(date) {
        return $ecb2c4cc8c9aae25$var$islamicToJulianDay($ecb2c4cc8c9aae25$var$ASTRONOMICAL_EPOC, date.year, date.month, date.day);
    }
    constructor(...args){
        super(...args);
        this.identifier = 'islamic-tbla';
    }
}

const UMALQURA_DATA = [
  //* 1300 -1302 */
  // "1010 1010 1010", "1101 0101 0100", "1110 1100 1001",
  0x0AAA,           0x0D54,           0x0EC9,
  //* 1303 -1307 */
  // "0110 1101 0100", "0110 1110 1010", "0011 0110 1100", "1010 1010 1101", "0101 0101 0101",
  0x06D4,           0x06EA,           0x036C,           0x0AAD,           0x0555,
  //* 1308 -1312 */
  // "0110 1010 1001", "0111 1001 0010", "1011 1010 1001", "0101 1101 0100", "1010 1101 1010",
  0x06A9,           0x0792,           0x0BA9,           0x05D4,           0x0ADA,
  //* 1313 -1317 */
  // "0101 0101 1100", "1101 0010 1101", "0110 1001 0101", "0111 0100 1010", "1011 0101 0100",
  0x055C,           0x0D2D,           0x0695,           0x074A,           0x0B54,
  //* 1318 -1322 */
  // "1011 0110 1010", "0101 1010 1101", "0100 1010 1110", "1010 0100 1111", "0101 0001 0111",
  0x0B6A,           0x05AD,           0x04AE,           0x0A4F,           0x0517,
  //* 1323 -1327 */
  // "0110 1000 1011", "0110 1010 0101", "1010 1101 0101", "0010 1101 0110", "1001 0101 1011",
  0x068B,           0x06A5,           0x0AD5,           0x02D6,           0x095B,
  //* 1328 -1332 */
  // "0100 1001 1101", "1010 0100 1101", "1101 0010 0110", "1101 1001 0101", "0101 1010 1100",
  0x049D,           0x0A4D,           0x0D26,           0x0D95,           0x05AC,
  //* 1333 -1337 */
  // "1001 1011 0110", "0010 1011 1010", "1010 0101 1011", "0101 0010 1011", "1010 1001 0101",
  0x09B6,           0x02BA,           0x0A5B,           0x052B,           0x0A95,
  //* 1338 -1342 */
  // "0110 1100 1010", "1010 1110 1001", "0010 1111 0100", "1001 0111 0110", "0010 1011 0110",
  0x06CA,           0x0AE9,           0x02F4,           0x0976,           0x02B6,
  //* 1343 -1347 */
  // "1001 0101 0110", "1010 1100 1010", "1011 1010 0100", "1011 1101 0010", "0101 1101 1001",
  0x0956,           0x0ACA,           0x0BA4,           0x0BD2,           0x05D9,
  //* 1348 -1352 */
  // "0010 1101 1100", "1001 0110 1101", "0101 0100 1101", "1010 1010 0101", "1011 0101 0010",
  0x02DC,           0x096D,           0x054D,           0x0AA5,           0x0B52,
  //* 1353 -1357 */
  // "1011 1010 0101", "0101 1011 0100", "1001 1011 0110", "0101 0101 0111", "0010 1001 0111",
  0x0BA5,           0x05B4,           0x09B6,           0x0557,           0x0297,
  //* 1358 -1362 */
  // "0101 0100 1011", "0110 1010 0011", "0111 0101 0010", "1011 0110 0101", "0101 0110 1010",
  0x054B,           0x06A3,           0x0752,           0x0B65,           0x056A,
  //* 1363 -1367 */
  // "1010 1010 1011", "0101 0010 1011", "1100 1001 0101", "1101 0100 1010", "1101 1010 0101",
  0x0AAB,           0x052B,           0x0C95,           0x0D4A,           0x0DA5,
  //* 1368 -1372 */
  // "0101 1100 1010", "1010 1101 0110", "1001 0101 0111", "0100 1010 1011", "1001 0100 1011",
  0x05CA,           0x0AD6,           0x0957,           0x04AB,           0x094B,
  //* 1373 -1377 */
  // "1010 1010 0101", "1011 0101 0010", "1011 0110 1010", "0101 0111 0101", "0010 0111 0110",
  0x0AA5,           0x0B52,           0x0B6A,           0x0575,           0x0276,
  //* 1378 -1382 */
  // "1000 1011 0111", "0100 0101 1011", "0101 0101 0101", "0101 1010 1001", "0101 1011 0100",
  0x08B7,           0x045B,           0x0555,           0x05A9,           0x05B4,
  //* 1383 -1387 */
  // "1001 1101 1010", "0100 1101 1101", "0010 0110 1110", "1001 0011 0110", "1010 1010 1010",
  0x09DA,           0x04DD,           0x026E,           0x0936,           0x0AAA,
  //* 1388 -1392 */
  // "1101 0101 0100", "1101 1011 0010", "0101 1101 0101", "0010 1101 1010", "1001 0101 1011",
  0x0D54,           0x0DB2,           0x05D5,           0x02DA,           0x095B,
  //* 1393 -1397 */
  // "0100 1010 1011", "1010 0101 0101", "1011 0100 1001", "1011 0110 0100", "1011 0111 0001",
  0x04AB,           0x0A55,           0x0B49,           0x0B64,           0x0B71,
  //* 1398 -1402 */
  // "0101 1011 0100", "1010 1011 0101", "1010 0101 0101", "1101 0010 0101", "1110 1001 0010",
  0x05B4,           0x0AB5,           0x0A55,           0x0D25,           0x0E92,
  //* 1403 -1407 */
  // "1110 1100 1001", "0110 1101 0100", "1010 1110 1001", "1001 0110 1011", "0100 1010 1011",
  0x0EC9,           0x06D4,           0x0AE9,           0x096B,           0x04AB,
  //* 1408 -1412 */
  // "1010 1001 0011", "1101 0100 1001", "1101 1010 0100", "1101 1011 0010", "1010 1011 1001",
  0x0A93,           0x0D49,         0x0DA4,           0x0DB2,           0x0AB9,
  //* 1413 -1417 */
  // "0100 1011 1010", "1010 0101 1011", "0101 0010 1011", "1010 1001 0101", "1011 0010 1010",
  0x04BA,           0x0A5B,           0x052B,           0x0A95,           0x0B2A,
  //* 1418 -1422 */
  // "1011 0101 0101", "0101 0101 1100", "0100 1011 1101", "0010 0011 1101", "1001 0001 1101",
  0x0B55,           0x055C,           0x04BD,           0x023D,           0x091D,
  //* 1423 -1427 */
  // "1010 1001 0101", "1011 0100 1010", "1011 0101 1010", "0101 0110 1101", "0010 1011 0110",
  0x0A95,           0x0B4A,           0x0B5A,           0x056D,           0x02B6,
  //* 1428 -1432 */
  // "1001 0011 1011", "0100 1001 1011", "0110 0101 0101", "0110 1010 1001", "0111 0101 0100",
  0x093B,           0x049B,           0x0655,           0x06A9,           0x0754,
  //* 1433 -1437 */
  // "1011 0110 1010", "0101 0110 1100", "1010 1010 1101", "0101 0101 0101", "1011 0010 1001",
  0x0B6A,           0x056C,           0x0AAD,           0x0555,           0x0B29,
  //* 1438 -1442 */
  // "1011 1001 0010", "1011 1010 1001", "0101 1101 0100", "1010 1101 1010", "0101 0101 1010",
  0x0B92,           0x0BA9,           0x05D4,           0x0ADA,           0x055A,
  //* 1443 -1447 */
  // "1010 1010 1011", "0101 1001 0101", "0111 0100 1001", "0111 0110 0100", "1011 1010 1010",
  0x0AAB,           0x0595,           0x0749,           0x0764,           0x0BAA,
  //* 1448 -1452 */
  // "0101 1011 0101", "0010 1011 0110", "1010 0101 0110", "1110 0100 1101", "1011 0010 0101",
  0x05B5,           0x02B6,           0x0A56,           0x0E4D,           0x0B25,
  //* 1453 -1457 */
  // "1011 0101 0010", "1011 0110 1010", "0101 1010 1101", "0010 1010 1110", "1001 0010 1111",
  0x0B52,           0x0B6A,           0x05AD,           0x02AE,           0x092F,
  //* 1458 -1462 */
  // "0100 1001 0111", "0110 0100 1011", "0110 1010 0101", "0110 1010 1100", "1010 1101 0110",
  0x0497,           0x064B,           0x06A5,           0x06AC,           0x0AD6,
  //* 1463 -1467 */
  // "0101 0101 1101", "0100 1001 1101", "1010 0100 1101", "1101 0001 0110", "1101 1001 0101",
  0x055D,           0x049D,           0x0A4D,           0x0D16,           0x0D95,
  //* 1468 -1472 */
  // "0101 1010 1010", "0101 1011 0101", "0010 1101 1010", "1001 0101 1011", "0100 1010 1101",
  0x05AA,           0x05B5,           0x02DA,           0x095B,           0x04AD,
  //* 1473 -1477 */
  // "0101 1001 0101", "0110 1100 1010", "0110 1110 0100", "1010 1110 1010", "0100 1111 0101",
  0x0595,           0x06CA,           0x06E4,           0x0AEA,           0x04F5,
  //* 1478 -1482 */
  // "0010 1011 0110", "1001 0101 0110", "1010 1010 1010", "1011 0101 0100", "1011 1101 0010",
  0x02B6,           0x0956,           0x0AAA,           0x0B54,           0x0BD2,
  //* 1483 -1487 */
  // "0101 1101 1001", "0010 1110 1010", "1001 0110 1101", "0100 1010 1101", "1010 1001 0101",
  0x05D9,           0x02EA,           0x096D,           0x04AD,           0x0A95,
  //* 1488 -1492 */
  // "1011 0100 1010", "1011 1010 0101", "0101 1011 0010", "1001 1011 0101", "0100 1101 0110",
  0x0B4A,           0x0BA5,           0x05B2,           0x09B5,           0x04D6,
  //* 1493 -1497 */
  // "1010 1001 0111", "0101 0100 0111", "0110 1001 0011", "0111 0100 1001", "1011 0101 0101",
  0x0A97,           0x0547,           0x0693,           0x0749,           0x0B55,
  //* 1498 -1508 */
  // "0101 0110 1010", "1010 0110 1011", "0101 0010 1011", "1010 1000 1011", "1101 0100 0110", "1101 1010 0011", "0101 1100 1010", "1010 1101 0110", "0100 1101 1011", "0010 0110 1011", "1001 0100 1011",
  0x056A,           0x0A6B,           0x052B,           0x0A8B,           0x0D46,           0x0DA3,           0x05CA,           0x0AD6,           0x04DB,           0x026B,           0x094B,
  //* 1509 -1519 */
  // "1010 1010 0101", "1011 0101 0010", "1011 0110 1001", "0101 0111 0101", "0001 0111 0110", "1000 1011 0111", "0010 0101 1011", "0101 0010 1011", "0101 0110 0101", "0101 1011 0100", "1001 1101 1010",
  0x0AA5,           0x0B52,           0x0B69,           0x0575,           0x0176,           0x08B7,           0x025B,           0x052B,           0x0565,           0x05B4,           0x09DA,
  //* 1520 -1530 */
  // "0100 1110 1101", "0001 0110 1101", "1000 1011 0110", "1010 1010 0110", "1101 0101 0010", "1101 1010 1001", "0101 1101 0100", "1010 1101 1010", "1001 0101 1011", "0100 1010 1011", "0110 0101 0011",
  0x04ED,           0x016D,           0x08B6,           0x0AA6,           0x0D52,           0x0DA9,           0x05D4,           0x0ADA,           0x095B,           0x04AB,           0x0653,
  //* 1531 -1541 */
  // "0111 0010 1001", "0111 0110 0010", "1011 1010 1001", "0101 1011 0010", "1010 1011 0101", "0101 0101 0101", "1011 0010 0101", "1101 1001 0010", "1110 1100 1001", "0110 1101 0010", "1010 1110 1001",
  0x0729,           0x0762,           0x0BA9,           0x05B2,           0x0AB5,           0x0555,           0x0B25,           0x0D92,           0x0EC9,           0x06D2,           0x0AE9,
  //* 1542 -1552 */
  // "0101 0110 1011", "0100 1010 1011", "1010 0101 0101", "1101 0010 1001", "1101 0101 0100", "1101 1010 1010", "1001 1011 0101", "0100 1011 1010", "1010 0011 1011", "0100 1001 1011", "1010 0100 1101",
  0x056B,           0x04AB,           0x0A55,           0x0D29,           0x0D54,           0x0DAA,           0x09B5,           0x04BA,           0x0A3B,           0x049B,           0x0A4D,
  //* 1553 -1563 */
  // "1010 1010 1010", "1010 1101 0101", "0010 1101 1010", "1001 0101 1101", "0100 0101 1110", "1010 0010 1110", "1100 1001 1010", "1101 0101 0101", "0110 1011 0010", "0110 1011 1001", "0100 1011 1010",
  0x0AAA,           0x0AD5,           0x02DA,           0x095D,           0x045E,           0x0A2E,           0x0C9A,           0x0D55,           0x06B2,           0x06B9,           0x04BA,
  //* 1564 -1574 */
  // "1010 0101 1101", "0101 0010 1101", "1010 1001 0101", "1011 0101 0010", "1011 1010 1000", "1011 1011 0100", "0101 1011 1001", "0010 1101 1010", "1001 0101 1010", "1011 0100 1010", "1101 1010 0100",
  0x0A5D,           0x052D,           0x0A95,           0x0B52,           0x0BA8,           0x0BB4,           0x05B9,           0x02DA,           0x095A,           0x0B4A,           0x0DA4,
  //* 1575 -1585 */
  // "1110 1101 0001", "0110 1110 1000", "1011 0110 1010", "0101 0110 1101", "0101 0011 0101", "0110 1001 0101", "1101 0100 1010", "1101 1010 1000", "1101 1101 0100", "0110 1101 1010", "0101 0101 1011",
  0x0ED1,           0x06E8,           0x0B6A,           0x056D,           0x0535,           0x0695,           0x0D4A,           0x0DA8,           0x0DD4,           0x06DA,           0x055B,
  //* 1586 -1596 */
  // "0010 1001 1101", "0110 0010 1011", "1011 0001 0101", "1011 0100 1010", "1011 1001 0101", "0101 1010 1010", "1010 1010 1110", "1001 0010 1110", "1100 1000 1111", "0101 0010 0111", "0110 1001 0101",
  0x029D,           0x062B,           0x0B15,           0x0B4A,           0x0B95,           0x05AA,           0x0AAE,           0x092E,           0x0C8F,           0x0527,           0x0695,
  //* 1597 -1600 */
  // "0110 1010 1010", "1010 1101 0110", "0101 0101 1101", "0010 1001 1101", };
  0x06AA,           0x0AD6,           0x055D,           0x029D
];

let $ecb2c4cc8c9aae25$var$UMALQURA_MONTHLENGTH;
let $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START_TABLE;
function $ecb2c4cc8c9aae25$var$umalquraYearStart(year) {
    return $ecb2c4cc8c9aae25$var$UMALQURA_START_DAYS + $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START_TABLE[year - $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START];
}
function $ecb2c4cc8c9aae25$var$umalquraMonthLength(year, month) {
    let idx = year - $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START;
    let mask = 0x01 << 11 - (month - 1);
    if (($ecb2c4cc8c9aae25$var$UMALQURA_MONTHLENGTH[idx] & mask) === 0) return 29;
    else return 30;
}
function $ecb2c4cc8c9aae25$var$umalquraMonthStart(year, month) {
    let day = $ecb2c4cc8c9aae25$var$umalquraYearStart(year);
    for(let i = 1; i < month; i++)day += $ecb2c4cc8c9aae25$var$umalquraMonthLength(year, i);
    return day;
}
function $ecb2c4cc8c9aae25$var$umalquraYearLength(year) {
    return $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START_TABLE[year + 1 - $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START] - $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START_TABLE[year - $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START];
}
class $ecb2c4cc8c9aae25$export$5baab4758c231076 extends $ecb2c4cc8c9aae25$export$2066795aadd37bfc {
    fromJulianDay(jd) {
        let days = jd - $ecb2c4cc8c9aae25$var$CIVIL_EPOC;
        let startDays = $ecb2c4cc8c9aae25$var$umalquraYearStart($ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START);
        let endDays = $ecb2c4cc8c9aae25$var$umalquraYearStart($ecb2c4cc8c9aae25$var$UMALQURA_YEAR_END);
        if (days < startDays || days > endDays) return super.fromJulianDay(jd);
        else {
            let y = $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START - 1;
            let m = 1;
            let d = 1;
            while(d > 0){
                y++;
                d = days - $ecb2c4cc8c9aae25$var$umalquraYearStart(y) + 1;
                let yearLength = $ecb2c4cc8c9aae25$var$umalquraYearLength(y);
                if (d === yearLength) {
                    m = 12;
                    break;
                } else if (d < yearLength) {
                    let monthLength = $ecb2c4cc8c9aae25$var$umalquraMonthLength(y, m);
                    m = 1;
                    while(d > monthLength){
                        d -= monthLength;
                        m++;
                        monthLength = $ecb2c4cc8c9aae25$var$umalquraMonthLength(y, m);
                    }
                    break;
                }
            }
            return new (0, $625ad1e1f4c43bc1$exports.CalendarDate)(this, y, m, days - $ecb2c4cc8c9aae25$var$umalquraMonthStart(y, m) + 1);
        }
    }
    toJulianDay(date) {
        if (date.year < $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START || date.year > $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_END) return super.toJulianDay(date);
        return $ecb2c4cc8c9aae25$var$CIVIL_EPOC + $ecb2c4cc8c9aae25$var$umalquraMonthStart(date.year, date.month) + (date.day - 1);
    }
    getDaysInMonth(date) {
        if (date.year < $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START || date.year > $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_END) return super.getDaysInMonth(date);
        return $ecb2c4cc8c9aae25$var$umalquraMonthLength(date.year, date.month);
    }
    getDaysInYear(date) {
        if (date.year < $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START || date.year > $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_END) return super.getDaysInYear(date);
        return $ecb2c4cc8c9aae25$var$umalquraYearLength(date.year);
    }
    constructor(){
        super();
        this.identifier = 'islamic-umalqura';
        if (!$ecb2c4cc8c9aae25$var$UMALQURA_MONTHLENGTH) $ecb2c4cc8c9aae25$var$UMALQURA_MONTHLENGTH = new Uint16Array(UMALQURA_DATA).buffer;
        if (!$ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START_TABLE) {
            $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START_TABLE = new Uint32Array($ecb2c4cc8c9aae25$var$UMALQURA_YEAR_END - $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START + 1);
            let yearStart = 0;
            for(let year = $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START; year <= $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_END; year++){
                $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START_TABLE[year - $ecb2c4cc8c9aae25$var$UMALQURA_YEAR_START] = yearStart;
                for(let i = 1; i <= 12; i++)yearStart += $ecb2c4cc8c9aae25$var$umalquraMonthLength(year, i);
            }
        }
    }
}


//# sourceMappingURL=IslamicCalendar.main.js.map
