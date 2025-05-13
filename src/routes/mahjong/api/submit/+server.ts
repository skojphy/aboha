import { json } from '@sveltejs/kit';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: import.meta.env.VITE_NOTION_TOKEN,
  timeoutMs: 30000
});
const databaseId = import.meta.env.VITE_NOTION_DB_ID;

async function createPageWithRetry(props: any, tries = 3) {
  try {
    return await notion.pages.create(props);
  } catch (err: any) {
    if (err.code === 'notionhq_client_request_timeout' && tries > 1) {
      console.warn(`타임아웃 발생, 재시도 남음: ${tries - 1}회`);
      return createPageWithRetry(props, tries - 1);
    }
    throw err;
  }
}

export const POST = async ({ request }) => {
  const data = await request.json();
  const props = {
    parent: { database_id: databaseId },
    properties: {
        title: {
          title: [
            { text: { content: `마작 기록 (${new Date().toLocaleDateString()})` } }
          ]
        },
        gameDate: {
          date: { start: new Date().toISOString() }
        },
        east: {
          rich_text: [{ text: { content: data.east } }]
        },
        south: {
          rich_text: [{ text: { content: data.south } }]
        },
        west: {
          rich_text: [{ text: { content: data.west } }]
        },
        north: {
          rich_text: [{ text: { content: data.north } }]
        },
        e_score: { number: data.e_score },
        s_score: { number: data.s_score },
        w_score: { number: data.w_score },
        n_score: { number: data.n_score },
        winning: {
          rich_text: [
            { text: { content: JSON.stringify(data.winning) } }
          ]
        }
      }
  };

  try {
    await createPageWithRetry(props);
    return json({ status: 'success' });
  } catch (err: any) {
    console.error('최종 실패:', err);
    return json({ status: 'error', message: 'API 요청이 너무 오래 걸립니다. 나중에 다시 시도해주세요.' }, { status: 504 });
  }
};


