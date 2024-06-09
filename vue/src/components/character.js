const rarity = [1, 13.5, 85.5]
//const rarity = [100, 0, 0]; //Cheated Rates Guarenteed Character
const character = [
  {
    rarity: 'five_star',
    characters: [
      {
        name: 'Acheron',
        img: 'Acheron',
        rarity: '5',
        path: 'Nihility',
        type: 'Lightning'
      },
      {
        name: 'Argenti',
        img: 'Argenti',
        rarity: '5',
        path: 'Erudition',
        type: 'Physical'
      },
      {
        name: 'Aventurine',
        img: 'Aventurine',
        rarity: '5',
        path: 'Preservation',
        type: 'Imaginary'
      },
      {
        name: 'Bailu',
        img: 'Bailu',
        rarity: '5',
        path: 'Abundance',
        type: 'Lightning'
      },
      {
        name: 'Black Swan',
        img: 'Black_Swan',
        rarity: '5',
        path: 'Nihility',
        type: 'Wind'
      },
      {
        name: 'Blade',
        img: 'Blade',
        rarity: '5',
        path: 'Destruction',
        type: 'Wind'
      },
      {
        name: 'Boothill',
        img: 'Boothill',
        rarity: '5',
        path: 'The-Hunt',
        type: 'Physical'
      },
      {
        name: 'Bronya',
        img: 'Bronya',
        rarity: '5',
        path: 'Harmony',
        type: 'Wind'
      },
      {
        name: 'Clara',
        img: 'Clara',
        rarity: '5',
        path: 'Destruction',
        type: 'Physical'
      },
      {
        name: 'Dan Heng • Imbibitor Lunae',
        img: 'Dan_Heng-Imbibitor_Lunae',
        rarity: '5',
        path: 'Destruction',
        type: 'Imaginary'
      },
      {
        name: 'Dr. Ratio',
        img: 'Dr._Ratio',
        rarity: '5',
        path: 'The-Hunt',
        type: 'Imaginary'
      },
      {
        name: 'Fu Xuan',
        img: 'Fu_Xuan',
        rarity: '5',
        path: 'Preservation',
        type: 'Quantum'
      },
      {
        name: 'Gepard',
        img: 'Gepard',
        rarity: '5',
        path: 'Preservation',
        type: 'Ice'
      },
      {
        name: 'Himeko',
        img: 'Himeko',
        rarity: '5',
        path: 'Erudition',
        type: 'Fire'
      },
      {
        name: 'Huohuo',
        img: 'Huohuo',
        rarity: '5',
        path: 'Abundance',
        type: 'Wind'
      },
      {
        name: 'Jing Yuan',
        img: 'Jing_Yuan',
        rarity: '5',
        path: 'Erudition',
        type: 'Lightning'
      },
      {
        name: 'Jingliu',
        img: 'Jingliu',
        rarity: '5',
        path: 'Destruction',
        type: 'Ice'
      },
      {
        name: 'Kafka',
        img: 'Kafka',
        rarity: '5',
        path: 'Nihility',
        type: 'Lightning'
      },
      {
        name: 'Luocha',
        img: 'Luocha',
        rarity: '5',
        path: 'Abundance',
        type: 'Imaginary'
      },
      {
        name: 'Robin',
        img: 'Robin',
        rarity: '5',
        path: 'Harmony',
        type: 'Physical'
      },
      {
        name: 'Ruan Mei',
        img: 'Ruan_Mei',
        rarity: '5',
        path: 'Harmony',
        type: 'Ice'
      },
      {
        name: 'Seele',
        img: 'Seele',
        rarity: '5',
        path: 'The-Hunt',
        type: 'Quantum'
      },
      {
        name: 'Silver Wolf',
        img: 'Silver_Wolf',
        rarity: '5',
        path: 'Nihility',
        type: 'Quantum'
      },
      {
        name: 'Sparkle',
        img: 'Sparkle',
        rarity: '5',
        path: 'Harmony',
        type: 'Quantum'
      },
      {
        name: 'Topaz and Numby',
        img: 'Topaz_and_Numby',
        rarity: '5',
        path: 'The-Hunt',
        type: 'Fire'
      },
      {
        name: 'Welt',
        img: 'Welt',
        rarity: '5',
        path: 'Nihility',
        type: 'Imaginary'
      },
      {
        name: 'Yanqing',
        img: 'Yanqing',
        rarity: '5',
        path: 'The-Hunt',
        type: 'Ice'
      }
    ]
  },
  {
    rarity: 'four_star',
    characters: [
      {
        name: 'Arlan',
        img: 'Arlan',
        rarity: '4',
        path: 'Destruction',
        type: 'Lightning'
      },
      {
        name: 'Asta',
        img: 'Asta',
        rarity: '4',
        path: 'Harmony',
        type: 'Fire'
      },
      {
        name: 'Dan Heng',
        img: 'Dan_Heng',
        rarity: '4',
        path: 'The-Hunt',
        type: 'Wind'
      },
      {
        name: 'Gallagher',
        img: 'Gallagher',
        rarity: '4',
        path: 'Abundance',
        type: 'Fire'
      },
      {
        name: 'Guinaifen',
        img: 'Guinaifen',
        rarity: '4',
        path: 'Nihility',
        type: 'Fire'
      },
      {
        name: 'Hanya',
        img: 'Hanya',
        rarity: '4',
        path: 'Harmony',
        type: 'Physical'
      },
      {
        name: 'Herta',
        img: 'Herta',
        rarity: '4',
        path: 'Erudition',
        type: 'Ice'
      },
      {
        name: 'Hook',
        img: 'Hook',
        rarity: '4',
        path: 'Destruction',
        type: 'Fire'
      },
      {
        name: 'Luka',
        img: 'Luka',
        rarity: '4',
        path: 'Nihility',
        type: 'Physical'
      },
      {
        name: 'Lynx',
        img: 'Lynx',
        rarity: '4',
        path: 'Abundance',
        type: 'Quantum'
      },
      {
        name: 'March 7th',
        img: 'March_7th',
        rarity: '4',
        path: 'Preservation',
        type: 'Ice'
      },
      {
        name: 'Misha',
        img: 'Misha',
        rarity: '4',
        path: 'Destruction',
        type: 'Ice'
      },
      {
        name: 'Natasha',
        img: 'Natasha',
        rarity: '4',
        path: 'Abundance',
        type: 'Physical'
      },
      {
        name: 'Pela',
        img: 'Pela',
        rarity: '4',
        path: 'Nihility',
        type: 'Ice'
      },
      {
        name: 'Qingque',
        img: 'Qingque',
        rarity: '4',
        path: 'Erudition',
        type: 'Quantum'
      },
      {
        name: 'Sampo',
        img: 'Sampo',
        rarity: '4',
        path: 'Nihility',
        type: 'Wind'
      },
      {
        name: 'Serval',
        img: 'Serval',
        rarity: '4',
        path: 'Erudition',
        type: 'Lightning'
      },
      {
        name: 'Sushang',
        img: 'Sushang',
        rarity: '4',
        path: 'The-Hunt',
        type: 'Physical'
      },
      {
        name: 'Tingyun',
        img: 'Tingyun',
        rarity: '4',
        path: 'Harmony',
        type: 'Lightning'
      },
      {
        name: 'Xueyi',
        img: 'Xueyi',
        rarity: '4',
        path: 'The-Hunt',
        type: 'Quantum'
      },
      {
        name: 'Yukong',
        img: 'Yukong',
        rarity: '4',
        path: 'Harmony',
        type: 'Imaginary'
      }
    ]
  },
  {
    rarity: 'three_star',
    characters: [
      {
        name: 'Along the Passing Shore',
        img: 'AcheronLC',
        rarity: 3,
        path: 'Nihility',
        type: 'Lightning'
      },

      {
        name: 'I Shall Be My Own Sword',
        img: 'JingliuLC',
        rarity: 3,
        path: 'Destruction',
        type: 'Physical'
      },
      {
        name: 'In the Name of the World',
        img: 'WeltLC',
        rarity: 3,
        path: 'Nihility',
        type: 'Imaginary'
      },
      {
        name: 'In the Night',
        img: 'SeeleLC',
        rarity: 3,
        path: 'The-Hunt',
        type: 'Quantum'
      },
      {
        name: 'Incessant Rain',
        img: 'Silver_WolfLC',
        rarity: 3,
        path: 'Nihility',
        type: 'Quantum'
      },
      {
        name: 'Inherently Unjust Destiny',
        img: 'AventurineLC',
        rarity: 3,
        path: 'Preservation',
        type: 'Imaginary'
      },
      {
        name: 'Moment of Victory',
        img: 'GepardLC',
        rarity: 3,
        path: 'Preservation',
        type: 'Ice'
      },
      {
        name: 'Patience Is All You Need',
        img: 'KafkaLC',
        rarity: 3,
        path: 'Nihility',
        type: 'Lightning'
      },
      {
        name: 'Sleep Like the Dead',
        img: 'YanqingLC',
        rarity: 3,
        path: 'The-Hunt',
        type: 'Ice'
      },
      {
        name: 'The Unreachable Side',
        img: 'BladeLC',
        rarity: 3,
        path: 'Destruction',
        type: 'Wind'
      }
    ]
  }
]

export default rarity
export { character }
