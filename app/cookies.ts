import { createCookie } from 'remix'

import { Team, UserPreferences } from '~/types'

const ONE_MONTH_IN_SECONDS = 30 * 24 * 60 * 60

const userPrefsCookie = createCookie('user-prefs', {
  maxAge: ONE_MONTH_IN_SECONDS,
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
