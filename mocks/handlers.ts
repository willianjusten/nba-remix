import { rest } from 'msw'
import { API_URL } from '~/api'

export const handlers = [
  // [GET] API.getStandings()
  rest.get(`${API_URL.base}v1/current/standings_all.json`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _internal: {
          pubDateTime: '2022-03-05 13:12:01.408 EST',
          igorPath:
            'S3,1646503916923,1646503918907|router,1646503918907,1646503918969|xmlProcessor,1646503919875,1646503920114|domUpdater,1646503920368,1646503921176|feedProducer,1646503921252,1646503923534',
          routeName: 'espn_deeplink',
          routeValue: 'S3::20220305_0022100959_espn_deeplink.xml',
          xslt: 'NBA/xsl/date/scoreboard/marty_daily_scoreboard.xsl',
          xsltForceRecompile: 'true',
          xsltInCache: 'false',
          xsltCompileTimeMillis: '133',
          xsltTransformTimeMillis: '100',
          consolidatedDomKey:
            'prod__transform__marty_daily_scoreboard__1753179160935',
          endToEndTimeMillis: '6611',
        },
        numGames: 6,
        games: [
          {
            seasonStageId: 2,
            seasonYear: '2021',
            leagueName: 'standard',
            gameId: '0022100954',
            arena: [{}],
            isGameActivated: false,
            statusNum: 1,
            extendedStatusNum: 0,
            startTimeEastern: '5:00 PM ET',
            startTimeUTC: '2022-03-05T22:00:00.000Z',
            startDateEastern: '20220305',
            homeStartDate: '20220305',
            homeStartTime: '1600',
            visitorStartDate: '20220305',
            visitorStartTime: '1400',
            gameUrlCode: '20220305/SACDAL',
            clock: '',
            isBuzzerBeater: false,
            isPreviewArticleAvail: true,
            isRecapArticleAvail: false,
            nugget: [{}],
            attendance: '',
            tickets: [{}],
            hasGameBookPdf: false,
            isStartTimeTBD: false,
            isNeutralVenue: false,
            gameDuration: [{}],
            period: [{}],
            vTeam: [{}],
            hTeam: [{}],
            watch: [{}],
          },
        ],
      }),
    )
  }),

  // [GET] API.getGamesByDate('2022')
  rest.get(`${API_URL.base}v2/20220304/scoreboard.json`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _internal: {
          pubDateTime: '2022-02-23 23:07:40.154 EST',
          igorPath:
            'S3,1645675449291,1645675450689|router,1645675450689,1645675450706|sqlUpdateProcessor,1645675650500,1645675655446|domUpdater,1645675656739,1645675659913|feedProducer,1645675659996,1645675661329',
          routeName: 'lp_game_video_flag_checker',
          routeValue: 'S3::ssd_game_video_update.xml',
          xslt: 'NBA/xsl/date/scoreboard/marty_daily_scoreboard.xsl',
          xsltForceRecompile: 'true',
          xsltInCache: 'false',
          xsltCompileTimeMillis: '111',
          xsltTransformTimeMillis: '6',
          consolidatedDomKey:
            'prod__transform__marty_daily_scoreboard__2511106317873',
          endToEndTimeMillis: '212038',
        },
        numGames: 1,
        games: [
          {
            seasonStageId: 3,
            seasonYear: '2021',
            leagueName: 'standard',
            gameId: '0032100001',
            arena: [{}],
            isGameActivated: false,
            statusNum: 3,
            extendedStatusNum: 0,
            startTimeEastern: '8:00 PM ET',
            startTimeUTC: '2022-02-21T01:00:00.000Z',
            endTimeUTC: '2022-02-21T03:59:00.000Z',
            startDateEastern: '20220220',
            homeStartDate: '20220220',
            homeStartTime: '2000',
            visitorStartDate: '20220220',
            visitorStartTime: '2000',
            gameUrlCode: '20220220/DRTLBN',
            clock: '',
            isBuzzerBeater: false,
            isPreviewArticleAvail: false,
            isRecapArticleAvail: false,
            nugget: [{}],
            attendance: '0',
            tickets: [{}],
            hasGameBookPdf: false,
            isStartTimeTBD: false,
            isNeutralVenue: false,
            gameDuration: [],
            period: [{}],
            vTeam: [{}],
            hTeam: [{}],
            watch: [{}],
          },
        ],
      }),
    )
  }),

  // [GET] API.getGameDetails('20220304', 'game_id')
  rest.get(
    `https://data/10s/v2015/json/mobile_teams/nba/20220304/scores/gamedetail/game_id_gamedetail.json`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          _internal: {
            pubDateTime: '2022-03-05 13:24:23.605 EST',
            igorPath:
              'S3,1646504651263,1646504652576|router,1646504652576,1646504652581|domUpdater,1646504652743,1646504663456|feedProducer,1646504663528,1646504665524',
            xslt: 'NBA/xsl/league/standings/marty_all_standings.xsl',
            xsltForceRecompile: 'true',
            xsltInCache: 'false',
            xsltCompileTimeMillis: '31',
            xsltTransformTimeMillis: '597',
            consolidatedDomKey:
              'prod__transform__marty_standings_all__1746831538667',
            endToEndTimeMillis: '14261',
          },
          league: {
            standard: { seasonYear: 2021, seasonStageId: 2, teams: [Array] },
            africa: { seasonYear: 2021, seasonStageId: 2, teams: [] },
            sacramento: { seasonYear: 2021, seasonStageId: 2, teams: [Array] },
            vegas: { seasonYear: 2021, seasonStageId: 2, teams: [Array] },
            utah: { seasonYear: 2021, seasonStageId: 2, teams: [Array] },
          },
        }),
      )
    },
  ),
]
