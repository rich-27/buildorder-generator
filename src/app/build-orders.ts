import { BuildOrderSchema, Jobs } from './schema';

export const BuildOrders: Map<string, BuildOrderSchema> = new Map ([
  [
    'EyecandyFastCastle',
    {
      title: 'Fast Castle → Boom',
      attribution: '/u/JustYourTypicalNerd',
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
  ],
  [
    'CicerosScouts',
    {
      title: 'Scouts',
      attribution: 'Cicero',
      feudalPop: 21,
      castlePop: 39,
      perfectTime: ((9 * 60) + 10),
      averageTime: undefined,
      steps: [
        {
          text: '6 on Sheep',
          vils: 6,
          job: Jobs.Shepherd,
          additionalText: '2 Houses'
        },
        {
          text: '3 on Wood',
          vils: 3,
          job: Jobs.Lumberjack,
          additionalText: ''
        },
        {
          text: 'Lure Boar',
          vils: 1,
          job: Jobs.BoarLurer,
          additionalText: ''
        },
        {
          text: '1 More on Boar',
          vils: 1,
          job: Jobs.Shepherd,
          additionalText: ''
        },
        {
          text: '4 on Berries',
          vils: 4,
          job: Jobs.BerryPicker,
          additionalText: '2 Houses → Mill'
        },
        {
          text: 'Lure 2nd Boar',
          vils: 1,
          job: Jobs.BoarLurer,
          from: Jobs.Shepherd,
          additionalText: 'With Villager Under TC'
        },
        {
          text: '2 on Sheep',
          vils: 2,
          job: Jobs.Shepherd,
          additionalText: ''
        },
        {
          text: '2 Sheep → 2 Farms',
          vils: 2,
          job: Jobs.Farmer,
          from: Jobs.Shepherd
        },
        {
          text: '3 on Wood',
          vils: 3,
          job: Jobs.Lumberjack
        },
        {
          text: 'Loom + 21 Pop Feudal',
          time: 0
        },
        {
          text: '4 Sheep → 4 Wood',
          vils: 4,
          job: Jobs.Lumberjack,
          from: Jobs.Shepherd,
          additionalText: 'Before Feudal'
        },
        {
          text: 'Barracks',
          vils: 1,
          job: Jobs.Builder,
          from: Jobs.Lumberjack,
          additionalText: 'Before Feudal'
        },
        {
          text: 'Stable',
          vils: 1,
          job: Jobs.Builder,
          from: Jobs.Builder,
          additionalText: 'Double-Bit Axe + Horse Collar'
        },
        {
          text: '5 Scouts',
          units: 5
        },
        {
          text: '↑14 Farms',
          vils: 6,
          job: Jobs.Farmer,
          from: Jobs.Shepherd
        },
        {
          text: '↑14 Farms',
          vils: 8,
          job: Jobs.Farmer
        },
        {
          text: '5 on Gold',
          vils: 5,
          job: Jobs.GoldMiner,
          additionalText: 'Scouts → Castle'
        },
        {
          text: '4 Berries → 4 Farms',
          vils: 4,
          job: Jobs.Farmer,
          from: Jobs.BerryPicker
        },
        {
          text: 'Blacksmith',
          vils: 1,
          job: Jobs.Builder,
          from: Jobs.Lumberjack,
          additionalText: 'Wheelbarrow'
        },
        {
          text: 'Click Castle',
          time: 0
        }
      ]
    }
  ]
]);


