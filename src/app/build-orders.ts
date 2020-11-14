import { BuildOrderSchema, Jobs } from './schema';

export const BuildOrders: Map<string, BuildOrderSchema> = new Map ([
  [
    'EyecandyFastCastle',
    {
      title: 'Fast Castle → Boom',
      attribution: '',
      feudalPop: 27,
      castlePop: 29,
      perfectTime: ((12 * 60) + 10),
      averageTime: ((15 * 60) + 40),
      steps: [
        {
          text: 'Harvest sheep [$vils]',
          vils: 6,
          job: Jobs.Shepherd,
          additionalText: '2 Houses'
        },
        {
          text: 'Chop wood [$vils]',
          vils: 4,
          job: Jobs.Lumberjack,
          additionalText: 'Lumber camp'
        },
        {
          text: 'Lure first boar [$vils]',
          vils: 1,
          job: Jobs.BoarLurer
        },
        {
          text: 'Harvest berries [$vils]',
          vils: 5,
          job: Jobs.BerryPicker,
          additionalText: ['2 Houses', 'Mill', 'Lure second boar']
        },
        {
          text: 'Add shepherds [$vils]',
          vils: 2,
          job: Jobs.Shepherd,
          additionalText: 'Shepherds → Farms'
        },
        {
          text: 'Chop wood [$vils]',
          vils: 5,
          job: Jobs.Lumberjack,
          additionalText: 'Lumber camp'
        },
        {
          text: 'Mine gold [$vils]',
          vils: 3,
          job: Jobs.GoldMiner
        },
        {
          text: 'Click Feudal [$time]',
          vils: 0,
          time: (10 * 60)
        },
        {
          text: 'Build Market & Blacksmith',
          vils: 2,
          job: Jobs.Builder,
          from: Jobs.Lumberjack
        },
        {
          text: 'Chop wood [$vils]',
          vils: 2,
          job: Jobs.Lumberjack
        },
        {
          text: 'Click Castle [$time]',
          vils: 0,
          time: (13 * 60)
        },
        {
          text: 'Transfer shepherds to wood [$vils]',
          vils: 3,
          job: Jobs.Shepherd,
          from: Jobs.Lumberjack
        },
        {
          text: 'Build 2 Town Centers [$vils]',
          vils: 8,
          job: Jobs.Builder,
          from: Jobs.Lumberjack,
          additionalText: ['Loom', 'Eco upgrades']
        },
        {
          text: 'Make farms [$vils]',
          vils: 7,
          job: Jobs.Farmer,
          additionalText: 'Transfer to wood (if needed)'
        }
      ]
    }
  ]
]);
