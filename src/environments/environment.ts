// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: 'http://localhost:3000/api',
  url: 'http://localhost:4200',
  discordURL: 'https://discord.com/invite/xRT6Fz5',
  stripePublicKey: 'pk_test_5D57doatt7FpFolXlTHy8DvZ00TgL3h1WJ',
  version: 'v2.1.1b',
  test: {
    guildId: '598565371162656788'
  },
  voteURLs: [
    { name: '12 hours', url: '//top.gg/bot/525935335918665760/vote' },
    { name: '24 hours', url: '//discordbotlist.com/bots/525935335918665760/upvote' }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
