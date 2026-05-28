import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

export default function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    async function loadPlayers() {
      const { data, error } = await supabase
        .from('players')
        .select('*')
        .order('handicap', { ascending: true })

      if (error) {
        console.error('Error loading players:', error)
      } else {
        setPlayers(data)
      }
    }

    loadPlayers()
  }, [])

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Pure Michigan Invitational</h1>
      <h2>Live Players</h2>

      {players.length === 0 ? (
        <p>No players loaded yet.</p>
      ) : (
        <ul>
          {players.map((player) => (
            <li key={player.id}>
              <strong>{player.name}</strong> — {player.team} — HCP {player.handicap}
              {player.bio ? ` — ${player.bio}` : ''}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
