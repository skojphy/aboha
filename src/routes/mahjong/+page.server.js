import { Client } from '@notionhq/client';

const notion = new Client({ auth: import.meta.env.VITE_NOTION_TOKEN });

async function queryDatabase() {
  const databaseId = import.meta.env.VITE_DATABASE_ID;
  const response = await notion.databases.query({ database_id: databaseId });
  console.log(response);
}

queryDatabase();
