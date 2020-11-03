import {checkStorage} from "../utils/utils";

/**
 * Демо карты
 * @type {array}
 */
const demoCharts =
  [
    {
      name: 'chart-Екатерина Скрынникова',
      data: {
        atma: {index: 17,
          house: 10,
          sign: 2,
          nakshatra: 5,
          pada: 18},
        atmadara: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        buddha: {index: 22,
          house: 11,
          sign: 3,
          nakshatra: 6,
          pada: 23},
        chandra: {index: 71,
          house: 4,
          sign: 8,
          nakshatra: 18,
          pada: 72},
        dara: {index: 17,
          house: 10,
          sign: 2,
          nakshatra: 5,
          pada: 18},
        daraatma: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        guru: {index: 52,
          house: 2,
          sign: 6,
          nakshatra: 14,
          pada: 53},
        ketu: {index: 71,
          house: 4,
          sign: 8,
          nakshatra: 18,
          pada: 72},
        lagna: {index: 38,
          house: 1,
          sign: 5,
          nakshatra: 10,
          pada: 39},
        lagnesha: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        mangala: {index: 37,
          house: 1,
          sign: 5,
          nakshatra: 10,
          pada: 38},
        rahu: {index: 17,
          house: 10,
          sign: 2,
          nakshatra: 5,
          pada: 18},
        surya: {index: 17,
          house: 10,
          sign: 2,
          nakshatra: 5,
          pada: 18},
        zani: {index: 27,
          house: 12,
          sign: 4,
          nakshatra: 7,
          pada: 28},
        zukra: {index: 28,
          house: 12,
          sign: 4,
          nakshatra: 8,
          pada: 29},
      },
    },
    {
      name: 'chart-Павел Петров',
      data: {
        atma: {index: 26,
          house: 7,
          sign: 3,
          nakshatra: 7,
          pada: 27},
        atmadara: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        buddha: {index: 26,
          house: 7,
          sign: 3,
          nakshatra: 7,
          pada: 27},
        chandra: {index: 48,
          house: 10,
          sign: 6,
          nakshatra: 13,
          pada: 49},
        dara: {index: 90,
          house: 3,
          sign: 11,
          nakshatra: 23,
          pada: 91},
        daraatma: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        guru: {index: 48,
          house: 10,
          sign: 6,
          nakshatra: 13,
          pada: 49},
        ketu: {index: 14,
          house: 6,
          sign: 2,
          nakshatra: 4,
          pada: 15},
        lagna: {index: 79,
          house: 1,
          sign: 9,
          nakshatra: 20,
          pada: 80},
        lagnesha: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        mangala: {index: 38,
          house: 9,
          sign: 5,
          nakshatra: 10,
          pada: 39},
        rahu: {index: 68,
          house: 12,
          sign: 8,
          nakshatra: 18,
          pada: 69},
        surya: {index: 21,
          house: 7,
          sign: 3,
          nakshatra: 6,
          pada: 22},
        zani: {index: 90,
          house: 3,
          sign: 11,
          nakshatra: 23,
          pada: 91},
        zukra: {index: 8,
          house: 5,
          sign: 1,
          nakshatra: 3,
          pada: 9},
      },
    },
    {
      name: 'chart-Дмитрий Егоров',
      data: {
        atma: {index: 79,
          house: 7,
          sign: 9,
          nakshatra: 20,
          pada: 80},
        atmadara: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        buddha: {index: 97,
          house: 9,
          sign: 11,
          nakshatra: 25,
          pada: 98},
        chandra: {index: 23,
          house: 1,
          sign: 3,
          nakshatra: 6,
          pada: 24},
        dara: {index: 91,
          house: 9,
          sign: 11,
          nakshatra: 23,
          pada: 92},
        daraatma: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        guru: {index: 91,
          house: 9,
          sign: 11,
          nakshatra: 23,
          pada: 92},
        ketu: {index: 30,
          house: 2,
          sign: 4,
          nakshatra: 8,
          pada: 31},
        lagna: {index: 24,
          house: 1,
          sign: 3,
          nakshatra: 7,
          pada: 25},
        lagnesha: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        mangala: {index: 79,
          house: 7,
          sign: 9,
          nakshatra: 20,
          pada: 80},
        rahu: {index: 84,
          house: 8,
          sign: 10,
          nakshatra: 22,
          pada: 85},
        surya: {index: 96,
          house: 9,
          sign: 11,
          nakshatra: 25,
          pada: 97},
        zani: {index: 101,
          house: 10,
          sign: 12,
          nakshatra: 26,
          pada: 102},
        zukra: {index: 102,
          house: 10,
          sign: 12,
          nakshatra: 26,
          pada: 103},
      },
    },
    {
      name: 'chart-Анастасия Смольная',
      data: {
        atma: {index: 106,
          house: 5,
          sign: 12,
          nakshatra: 27,
          pada: 107},
        atmadara: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        buddha: {index: 95,
          house: 4,
          sign: 11,
          nakshatra: 24,
          pada: 96},
        chandra: {index: 59,
          house: 12,
          sign: 7,
          nakshatra: 15,
          pada: 60},
        dara: {index: 82,
          house: 3,
          sign: 10,
          nakshatra: 21,
          pada: 83},
        daraatma: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        guru: {index: 34,
          house: 9,
          sign: 4,
          nakshatra: 9,
          pada: 35},
        ketu: {index: 42,
          house: 10,
          sign: 5,
          nakshatra: 11,
          pada: 43},
        lagna: {index: 63,
          house: 1,
          sign: 8,
          nakshatra: 16,
          pada: 64},
        lagnesha: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        mangala: {index: 92,
          house: 4,
          sign: 11,
          nakshatra: 24,
          pada: 93},
        rahu: {index: 100,
          house: 5,
          sign: 12,
          nakshatra: 26,
          pada: 101},
        surya: {index: 94,
          house: 4,
          sign: 11,
          nakshatra: 24,
          pada: 95},
        zani: {index: 82,
          house: 3,
          sign: 10,
          nakshatra: 21,
          pada: 83},
        zukra: {index: 106,
          house: 5,
          sign: 12,
          nakshatra: 27,
          pada: 107},
      },
    },
    {
      name: 'chart-Евгений Кожумяк',
      data: {
        atma: {index: 52,
          house: 4,
          sign: 6,
          nakshatra: 14,
          pada: 53},
        atmadara: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        buddha: {index: 54,
          house: 5,
          sign: 7,
          nakshatra: 14,
          pada: 55},
        chandra: {index: 45,
          house: 4,
          sign: 6,
          nakshatra: 12,
          pada: 46},
        dara: {index: 41,
          house: 3,
          sign: 5,
          nakshatra: 11,
          pada: 42},
        daraatma: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        guru: {index: 48,
          house: 4,
          sign: 6,
          nakshatra: 13,
          pada: 49},
        ketu: {index: 57,
          house: 5,
          sign: 7,
          nakshatra: 15,
          pada: 58},
        lagna: {index: 24,
          house: 1,
          sign: 3,
          nakshatra: 7,
          pada: 25},
        lagnesha: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        mangala: {index: 49,
          house: 4,
          sign: 6,
          nakshatra: 13,
          pada: 50},
        rahu: {index: 3,
          house: 11,
          sign: 1,
          nakshatra: 1,
          pada: 4},
        surya: {index: 52,
          house: 4,
          sign: 6,
          nakshatra: 14,
          pada: 53},
        zani: {index: 28,
          house: 2,
          sign: 4,
          nakshatra: 8,
          pada: 29},
        zukra: {index: 41,
          house: 3,
          sign: 5,
          nakshatra: 11,
          pada: 42},

      },
    },
    {
      name: 'chart-Валентина Нетеря',
      data: {
        atma: {index: 96,
          house: 4,
          sign: 11,
          nakshatra: 25,
          pada: 97},
        atmadara: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        buddha: {index: 94,
          house: 4,
          sign: 11,
          nakshatra: 24,
          pada: 95},
        chandra: {index: 2,
          house: 6,
          sign: 1,
          nakshatra: 1,
          pada: 3},
        dara: {index: 90,
          house: 4,
          sign: 11,
          nakshatra: 23,
          pada: 91},
        daraatma: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        guru: {index: 65,
          house: 1,
          sign: 8,
          nakshatra: 17,
          pada: 66},
        ketu: {index: 64,
          house: 1,
          sign: 8,
          nakshatra: 17,
          pada: 65},
        lagna: {index: 69,
          house: 1,
          sign: 8,
          nakshatra: 18,
          pada: 70},
        lagnesha: {index: -1,
          house: -1,
          sign: -1,
          nakshatra: -1,
          pada: -1},
        mangala: {index: 96,
          house: 4,
          sign: 11,
          nakshatra: 25,
          pada: 97},
        rahu: {index: 13,
          house: 7,
          sign: 2,
          nakshatra: 4,
          pada: 14},
        surya: {index: 102,
          house: 5,
          sign: 12,
          nakshatra: 26,
          pada: 103},
        zani: {index: 30,
          house: 9,
          sign: 4,
          nakshatra: 8,
          pada: 31},
        zukra: {index: 88,
          house: 3,
          sign: 10,
          nakshatra: 23,
          pada: 89},
      },
    },
  ];

/**
 * @property {function} createDemoCharts -
 * Добавляет в LocalStorage демо карты
 * @return {void}
 */
export function createDemoCharts() {
  demoCharts.forEach((obj) => {
    checkStorage(
        obj.name,
        obj.data
    );
  });
}
