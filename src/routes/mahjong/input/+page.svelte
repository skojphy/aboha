<script lang="ts">
  
    const handTypes = ['만관', '하네만', '배만', '삼배만', '역만'];
  
    let east = '';
    let south = '';
    let west = '';
    let north = '';
  
    let e_score = 0;
    let s_score = 0;
    let w_score = 0;
    let n_score = 0;
  
    let winning: Record<string, Record<string, number>> = {
      east: {},
      south: {},
      west: {},
      north: {}
    };
  
    let isSubmitting = false;
  
    const isValid = () => {
      const total = e_score + s_score + w_score + n_score;
      return total === 100000;
    };
  
    const handleSubmit = async () => {
      if (isSubmitting) return;
      if (!isValid()) {
        alert('점수 총합이 100,000이 되어야 합니다.');
        return;
      }
  
      isSubmitting = true;
  
      const payload = { east, south, west, north, e_score, s_score, w_score, n_score, winning };
  
      try {
        const res = await fetch('/mahjong/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const { status } = await res.json();
  
        if (status === 'success') {
          alert('데이터가 정상적으로 저장되었습니다!');
          east = south = west = north = '';
          e_score = s_score = w_score = n_score = 0;
          winning = { east: {}, south: {}, west: {}, north: {} };
        } else {
          alert('데이터 저장 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        }
      } catch (err) {
        console.error(err);
        alert('서버 통신 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      } finally {
        isSubmitting = false;
      }
    };
  </script>
  
  <form on:submit|preventDefault={handleSubmit} class="grid-container">
    <div class="grid-item">
      <h3>🀄️ 동 (East)</h3>
      <input bind:value={east} placeholder="Player Name" />
      <input type="number" bind:value={e_score} placeholder="Score" />
  
      {#each handTypes as type}
        <label>
          {type}
          <input
            type="number"
            min="0"
            value={winning.east[type] || 0}
            on:input={(e) => winning.east[type] = +e.currentTarget.value}
          />
        </label>
      {/each}
    </div>
  
    <div class="grid-item">
      <h3>🀄️ 남 (South)</h3>
      <input bind:value={south} placeholder="Player Name" />
      <input type="number" bind:value={s_score} placeholder="Score" />
  
      {#each handTypes as type}
        <label>
          {type}
          <input
            type="number"
            min="0"
            value={winning.south[type] || 0}
            on:input={(e) => winning.south[type] = +e.currentTarget.value}
          />
        </label>
      {/each}
    </div>
  
    <div class="grid-item">
      <h3>🀄️ 서 (West)</h3>
      <input bind:value={west} placeholder="Player Name" />
      <input type="number" bind:value={w_score} placeholder="Score" />
  
      {#each handTypes as type}
        <label>
          {type}
          <input
            type="number"
            min="0"
            value={winning.west[type] || 0}
            on:input={(e) => winning.west[type] = +e.currentTarget.value}
          />
        </label>
      {/each}
    </div>
  
    <div class="grid-item">
      <h3>🀄️ 북 (North)</h3>
      <input bind:value={north} placeholder="Player Name" />
      <input type="number" bind:value={n_score} placeholder="Score" />
  
      {#each handTypes as type}
        <label>
          {type}
          <input
            type="number"
            min="0"
            value={winning.north[type] || 0}
            on:input={(e) => winning.north[type] = +e.currentTarget.value}
          />
        </label>
      {/each}
    </div>
  
    <button type="submit" class="submit-btn" disabled={isSubmitting}>
      {#if isSubmitting}
        전송 중…
      {:else}
        전송하기
      {/if}
    </button>
  </form>
  
  <style>
    .grid-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 1rem;
    }
  
    .grid-item {
      flex: 1 1 calc(25% - 1rem);
      min-width: 200px;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 1rem;
      background: #fafafa;
    }
  
    .grid-item h3 {
      margin-bottom: 0.5rem;
      font-size: 1rem;
      color: #333;
    }
  
    .grid-item input {
      width: 100%;
      margin-bottom: 0.5rem;
      padding: 0.4rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
  
    .grid-item label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.3rem;
      font-size: 0.9rem;
    }
  
    .grid-item label input {
      width: 3rem;
      margin-left: 0.5rem;
    }
  
    .submit-btn {
      flex: 1 1 100%;
      padding: 0.8rem 1.2rem;
      background: #4caf50;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .submit-btn[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  
    @media(max-width: 768px) {
      .grid-container {
        flex-direction: column;
      }
      .grid-item {
        flex: 1 1 100%;
        min-width: auto;
      }
      .submit-btn {
        margin-top: 1rem;
      }
    }
  </style>
  