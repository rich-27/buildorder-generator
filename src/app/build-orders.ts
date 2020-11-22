import { BuildOrderSchema, Jobs, AppendOptions } from './schema';

export enum BuildOrderNames { EYECANDY_FAST_CASTLE, CICEROS_SCOUTS }

export const BUILD_ORDERS: { [key in BuildOrderNames]: BuildOrderSchema } = {
  [BuildOrderNames.EYECANDY_FAST_CASTLE]: {
    title: 'Fast Castle → Boom',
    attribution: '/u/JustYourTypicalNerd',
    feudalPop: 27,
    castlePop: 29,
    perfectTime: ((12 * 60) + 10),
    averageTime: ((15 * 60) + 40),
    steps: [
      {
        text: 'Harvest sheep',
        append: AppendOptions.VILS,
        vils: 6,
        job: Jobs.SHEPHERD,
        additionalText: '2 Houses'
      },
      {
        text: 'Chop wood',
        append: AppendOptions.VILS,
        vils: 4,
        job: Jobs.LUMBERJACK,
        additionalText: 'Lumber camp'
      },
      {
        text: 'Lure first boar',
        append: AppendOptions.VILS,
        vils: 1,
        job: Jobs.BOAR_LURER
      },
      {
        text: 'Harvest berries',
        append: AppendOptions.VILS,
        vils: 5,
        job: Jobs.BERRY_PICKER,
        additionalText: ['2 Houses', 'Mill', 'Lure second boar']
      },
      {
        text: 'Add shepherds',
        append: AppendOptions.VILS,
        vils: 2,
        job: Jobs.SHEPHERD,
        additionalText: 'Shepherds → Farms'
      },
      {
        text: 'Chop wood',
        append: AppendOptions.VILS,
        vils: 5,
        job: Jobs.LUMBERJACK,
        additionalText: 'Lumber camp'
      },
      {
        text: 'Mine gold',
        append: AppendOptions.VILS,
        vils: 3,
        job: Jobs.GOLD_MINER
      },
      {
        text: 'Click Feudal',
        append: AppendOptions.TIME,
        time: (10 * 60)
      },
      {
        text: 'Build Market & Blacksmith',
        vils: 2,
        job: Jobs.BUILDER,
        from: Jobs.LUMBERJACK
      },
      {
        text: 'Chop wood',
        append: AppendOptions.VILS,
        vils: 2,
        job: Jobs.LUMBERJACK
      },
      {
        text: 'Click Castle',
        append: AppendOptions.TIME,
        time: (13 * 60)
      },
      {
        text: 'Transfer shepherds to wood',
        append: AppendOptions.VILS,
        vils: 3,
        job: Jobs.SHEPHERD,
        from: Jobs.LUMBERJACK
      },
      {
        text: 'Build 2 Town Centers',
        append: AppendOptions.VILS,
        vils: 8,
        job: Jobs.BUILDER,
        from: Jobs.LUMBERJACK,
        additionalText: ['Loom', 'Eco upgrades']
      },
      {
        text: 'Make farms',
        append: AppendOptions.VILS,
        vils: 7,
        job: Jobs.FARMER,
        additionalText: 'Transfer to wood (if needed)'
      }
    ]
  },
  [BuildOrderNames.CICEROS_SCOUTS]: {
    title: 'Scouts',
    attribution: 'Cicero',
    feudalPop: 21,
    castlePop: 39,
    perfectTime: ((9 * 60) + 10),
    steps: [
      {
        text: '6 on Sheep',
        vils: 6,
        job: Jobs.SHEPHERD,
        additionalText: '2 Houses'
      },
      {
        text: '3 on Wood',
        vils: 3,
        job: Jobs.LUMBERJACK,
        additionalText: ''
      },
      {
        text: 'Lure Boar',
        vils: 1,
        job: Jobs.BOAR_LURER,
        additionalText: ''
      },
      {
        text: '1 More on Boar',
        vils: 1,
        job: Jobs.SHEPHERD,
        additionalText: ''
      },
      {
        text: '4 on Berries',
        vils: 4,
        job: Jobs.BERRY_PICKER,
        additionalText: '2 Houses → Mill'
      },
      {
        text: 'Lure 2nd Boar',
        vils: 1,
        job: Jobs.BOAR_LURER,
        from: Jobs.SHEPHERD,
        additionalText: 'With Villager Under TC'
      },
      {
        text: '2 on Sheep',
        vils: 2,
        job: Jobs.SHEPHERD,
        additionalText: ''
      },
      {
        text: '2 Sheep → 2 Farms',
        vils: 2,
        job: Jobs.FARMER,
        from: Jobs.SHEPHERD
      },
      {
        text: '3 on Wood',
        vils: 3,
        job: Jobs.LUMBERJACK
      },
      {
        text: 'Loom + 21 Pop Feudal',
        time: 0
      },
      {
        text: '4 Sheep → 4 Wood',
        vils: 4,
        job: Jobs.LUMBERJACK,
        from: Jobs.SHEPHERD,
        additionalText: 'Before Feudal'
      },
      {
        text: 'Barracks',
        vils: 1,
        job: Jobs.BUILDER,
        from: Jobs.LUMBERJACK,
        additionalText: 'Before Feudal'
      },
      {
        text: 'Stable',
        vils: 1,
        job: Jobs.BUILDER,
        from: Jobs.BUILDER,
        additionalText: 'Double-Bit Axe + Horse Collar'
      },
      {
        text: '5 Scouts',
        units: 5
      },
      {
        text: '↑14 Farms',
        vils: 6,
        job: Jobs.FARMER,
        from: Jobs.SHEPHERD
      },
      {
        text: '↑14 Farms',
        vils: 8,
        job: Jobs.FARMER
      },
      {
        text: '5 on Gold',
        vils: 5,
        job: Jobs.GOLD_MINER,
        additionalText: 'Scouts → Castle'
      },
      {
        text: '4 Berries → 4 Farms',
        vils: 4,
        job: Jobs.FARMER,
        from: Jobs.BERRY_PICKER
      },
      {
        text: 'Blacksmith',
        vils: 1,
        job: Jobs.BUILDER,
        from: Jobs.LUMBERJACK,
        additionalText: 'Wheelbarrow'
      },
      {
        text: 'Click Castle',
        time: 0
      }
    ]
  }
};
