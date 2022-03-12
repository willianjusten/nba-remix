import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useLoaderData } from 'remix'
import type { LoaderFunction, MetaFunction } from 'remix'

import API from '~/api'
import Layout from '~/components/Layout'
import StandingTable from '~/components/StandingTable'

import { cachedJson } from '~/utils/cachedJson'
import { conferenceMapper } from '~/utils/mappers'
import { getSocialMetas, getUrl } from '~/utils/seo'

export const meta: MetaFunction = ({ data }) => {
  return getSocialMetas({
    url: getUrl(data.requestInfo),
    origin: data.requestInfo.origin,
    title: 'Standings | NBA Remix',
    description: 'See the current standings for NBA',
  })
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)

  const requestInfo = {
    origin: url.origin,
    pathname: url.pathname,
  }

  const { data } = await API.getStandings()

  const {
    league: {
      standard: { teams },
    },
  } = data

  return cachedJson(
    {
      east: conferenceMapper(teams, true),
      west: conferenceMapper(teams, false),
      requestInfo,
    },
    { browser: 60, cdn: 600 },
  )
}

export default function Standings() {
  const { east, west } = useLoaderData()

  return (
    <Layout>
      <Tabs>
        <TabList className="flex flex-row items-stretch">
          <Tab className="basis-1/2 cursor-pointer text-center">
            <h1 className="text-3xl font-bold text-white">Western Conference</h1>
          </Tab>
          <Tab className="basis-1/2 cursor-pointer text-center">
            <h1 className="text-3xl font-bold text-white">Eastern Conference</h1>
          </Tab>
        </TabList>

        <TabPanel>
           <StandingTable label="Western Conference" conference={west} />    
        </TabPanel>
        <TabPanel>
          <StandingTable label="Eastern Conference" conference={east} />
        </TabPanel>
      </Tabs>  
      {/* <StandingTable label="Eastern Conference" conference={east} />
      <StandingTable label="Western Conference" conference={west} /> */}
    </Layout>
  )
}
