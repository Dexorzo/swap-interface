import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      // {
      //   label: 'LP Migration',
      //   href: '/migrate',
      // },
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
      // {
      //   label: 'V1 Liquidity (Old)',
      //   href: '/pool',
      // },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://farm.dexorzo.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://farm.dexorzo.com/pools',
  },
  // {
  //   label: 'Prediction (BETA)',
  //   icon: 'PredictionsIcon',
  //   href: 'https://pancakeswap.finance/prediction',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://pancakeswap.finance/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: 'https://pancakeswap.finance/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Contact',
      //   href: 'https://docs.pancakeswap.finance/contact-us',
      // },
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      // {
      //   label: 'Github',
      //   href: 'https://github.com/pancakeswap',
      // },
      // {
      //   label: 'Docs',
      //   href: 'https://docs.pancakeswap.finance',
      // },
      // {
      //   label: 'Blog',
      //   href: 'https://pancakeswap.medium.com',
      // },
      // {
      //   label: 'Merch',
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
      {
        label: 'Deployer Address',
        href: 'https://testnet.bscscan.com/address/0xfabe1D61c2B93eB8BbD79E8fb9599da11e0f84ba',
      },
      {
        label: 'Router V2 Contract',
        href: 'https://testnet.bscscan.com/address/0x4593Ec1218190DDDE6bC293bE3ba4c765dC7Fb0a#code',
      },
      {
        label: 'Factory Contract',
        href: 'https://testnet.bscscan.com/address/0xCFE3f968d7C3fc95bD27DfB9d6cb1fd7085a0fB6#code',
      },
      {
        label: 'WETH (WBNB)',
        href: 'https://testnet.bscscan.com/address/0x89a4Eb5f1ff4FffD90a6fd03320A1fd4Bd12eEDa',
      },
      {
        label: 'BUSD Token (BUSD)',
        href: 'https://testnet.bscscan.com/address/0xcc0c468c7bce8e1947f1353e1c3e4c76eaf45993',
      },
      {
        label: 'DAI Token (DAI)',
        href: 'https://testnet.bscscan.com/address/0x045baf23abe247b8112df96fa1e246ff9d1f6df5',
      },
      {
        label: 'ETH Token (ETH)',
        href: 'https://testnet.bscscan.com/address/0xcf7a38145b4fb39ef672b251ec1fc232e9ac0b36',
      },
      {
        label: 'USDT Token (USDT)',
        href: 'https://testnet.bscscan.com/address/0x88a45dead3ceef2b04ec0f948cdb87065ae87faa',
      },
    ],
  },
]

export default config
