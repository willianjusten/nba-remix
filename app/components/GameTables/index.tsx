import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import customStyles from './style.css'
import PlayerStats from '~/components/PlayersStats'
import TeamStats from '~/components/TeamStats'
import type { TeamPlayerStats } from '~/types'


export const links = () => [
  {
    rel: 'stylesheet',
    href: customStyles,
  }
]

export type GameTablesProps = {
  vTeam: TeamPlayerStats,
  hTeam: TeamPlayerStats,
  game: any
}
const GameTables = ({
  vTeam,
  hTeam,
  game
}: GameTablesProps) => {
  return (
    <>
      <Tabs>
        <TabList className="flex flex-row items-stretch">
          <Tab className="basis-1/3 cursor-pointer text-center">{vTeam.tn}</Tab>
          <Tab className="basis-1/3 cursor-pointer text-center">{hTeam.tn}</Tab>
          <Tab className="basis-1/3 cursor-pointer text-center">Stats</Tab>
        </TabList>

        <TabPanel>
          <PlayerStats team={game.vTeam} />
        </TabPanel>
        <TabPanel>
          <PlayerStats team={game.hTeam} />          
        </TabPanel>
        <TabPanel>
           <TeamStats game={game} />
        </TabPanel>
      </Tabs>     
    </>
  )
}

export default GameTables
