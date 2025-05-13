import { json } from '@sveltejs/kit';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: import.meta.env.VITE_NOTION_TOKEN });
const databaseId = import.meta.env.VITE_NOTION_DB_ID;

export const POST = async ({ request }) => {
  const data = await request.json();

  try {
    await notion.pages.create({
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
    });

    return json({ status: 'success' });
  } catch (err: any) {
    console.error(err);
    return json({ status: 'error', message: err.message }, { status: 500 });
  }
};
