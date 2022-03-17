import { createCookie } from 'remix'

import { Team, UserPreferences } from '~/types'

import { ONE_YEAR_IN_SECONDS } from './constants'

const userPrefsCookie = createCookie('user-prefs', {
  maxAge: ONE_YEAR_IN_SECONDS,
})

export async function getUserPrefsCookie(request: Request) {
  const cookie: UserPreferences =
    (await userPrefsCookie.parse(request.headers.get('Cookie'))) || {}
  return {
    getFavoriteTeam: (): Team | undefined => cookie.favoriteTeam,
    setFavoriteTeam: (team: Team) => {
      cookie.favoriteTeam = team
    },
    commitUserPrefs: () => userPrefsCookie.serialize(cookie),
  }
}
