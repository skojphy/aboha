<script lang="ts">
    import { onMount } from 'svelte';
  
    type PlayerStat = {
      player: string;
      games: number;
      winRate: number;
      avgScore: number;
      minScore: number;
      maxScore: number;
    };
  
    let totalGames: number | null = null;
    let byPlayer: PlayerStat[] = [];
    let error = '';
  
    onMount(async () => {
      try {
        const res = await fetch('/mahjong/api/stats');
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const json = await res.json();
        totalGames = json.totalGames;
        byPlayer = json.byPlayer;
      } catch (e) {
        error = `통계 로딩 실패: ${e.message}`;
        console.error(e);
      }
    });
  </script>
  
  {#if error}
    <p class="error">{error}</p>
  {:else if totalGames === null}
    <p class="loading">로딩 중…</p>
  {:else}
    <section class="stats-overall">
      <div class="card">
        <h3>총 게임 수</h3>
        <p>{totalGames}</p>
      </div>
    </section>
  
    <section class="player-stats">
      <h2>플레이어별 통계</h2>
      <table>
        <thead>
          <tr>
            <th>플레이어</th>
            <th>게임 수</th>
            <th>승률</th>
            <th>평균점수</th>
            <th>최저점</th>
            <th>최고점</th>
          </tr>
        </thead>
        <tbody>
          {#each byPlayer as p}
            <tr>
              <td class="player">{p.player}</td>
              <td>{p.games}</td>
              <td>{(p.winRate * 100).toFixed(1)}%</td>
              <td>{p.avgScore.toFixed(0)}</td>
              <td>{p.minScore}</td>
              <td>{p.maxScore}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </section>
  {/if}
  
  <style>
    .stats-overall {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin: 1.5rem 0;
    }
    .card {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
  
    .player-stats {
      margin-top: 2rem;
    }
    .player-stats h2 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      border-bottom: 2px solid #eee;
      padding-bottom: 0.25rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 0.75rem 0.5rem;
      text-align: center;
      border: 1px solid #e4e4e4;
    }
    th {
      background: #f7f7f7;
      font-weight: 600;
    }
    td.player {
      text-transform: none;
      font-weight: 500;
    }
    tr:nth-child(even) {
      background: #fafafa;
    }
  
    .error { color: #c00; padding: 1rem; }
    .loading { padding: 1rem; font-style: italic; }
  </style>
  