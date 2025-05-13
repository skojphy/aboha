import { json } from '@sveltejs/kit';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: import.meta.env.VITE_NOTION_TOKEN,
  timeoutMs: 30000
});
const databaseId = import.meta.env.VITE_NOTION_DB_ID;

type Row = {
  east: string;
  south: string;
  west: string;
  north: string;
  e_score: number;
  s_score: number;
  w_score: number;
  n_score: number;
  winning: Record<string, Record<string, number>>;
};

export const GET = async () => {
  let all: Row[] = [];
  let cursor: string | undefined;
  do {
    const resp = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor
    });
    all.push(
      ...resp.results.map((page: any) => ({
        east: page.properties.east.rich_text[0]?.text.content || '',
        south: page.properties.south.rich_text[0]?.text.content || '',
        west: page.properties.west.rich_text[0]?.text.content || '',
        north: page.properties.north.rich_text[0]?.text.content || '',
        e_score: page.properties.e_score.number ?? 0,
        s_score: page.properties.s_score.number ?? 0,
        w_score: page.properties.w_score.number ?? 0,
        n_score: page.properties.n_score.number ?? 0,
        winning: JSON.parse(page.properties.winning.rich_text[0]?.text.content || '{}')
      }))
    );
    cursor = resp.has_more ? resp.next_cursor! : undefined;
  } while (cursor);

  type Stat = {
    player: string;
    games: number;
    wins: number;
    totalScore: number;
    minScore: number;
    maxScore: number;
  };
  const statsMap = new Map<string, Stat>();

  for (const g of all) {
    const entries: [string, number][] = [
      [g.east, g.e_score],
      [g.south, g.s_score],
      [g.west, g.w_score],
      [g.north, g.n_score]
    ];

      const sorted = [...entries].sort((a, b) => b[1] - a[1]);
    const winner = sorted[0][0];

    for (const [name, score] of entries) {
      if (!name) continue;
      if (!statsMap.has(name)) {
        statsMap.set(name, {
          player: name,
          games: 0,
          wins: 0,
          totalScore: 0,
          minScore: Infinity,
          maxScore: -Infinity
        });
      }
      const s = statsMap.get(name)!;
      s.games += 1;
      if (name === winner) s.wins += 1;
      s.totalScore += score;
      s.minScore = Math.min(s.minScore, score);
      s.maxScore = Math.max(s.maxScore, score);
    }
  }

  const totalGames = all.length;
  const byPlayer = Array.from(statsMap.values()).map((s) => ({
    player: s.player,
    games: s.games,
    winRate: s.wins / s.games,
    avgScore: s.totalScore / s.games,
    minScore: s.minScore,
    maxScore: s.maxScore
  }));

  return json({
    totalGames,
    byPlayer
  });
};
