/**
 * API Client for ERPNext Integration
 */

const API_BASE = process.env.NEXT_PUBLIC_ERP_URL || 'https://erp.chintuganda.com';
const API_KEY = process.env.ERP_API_KEY;
const API_SECRET = process.env.ERP_API_SECRET;

export async function erpFetch(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE}${endpoint}`;
  
  const headers = new Headers(options.headers);
  if (API_KEY && API_SECRET) {
    headers.set('Authorization', `token ${API_KEY}:${API_SECRET}`);
  }
  headers.set('Content-Type', 'application/json');

  let retries = 3;
  let delay = 1000;

  while (retries > 0) {
    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      retries -= 1;
      if (retries === 0) throw error;
      
      console.warn(`Fetch failed, retrying in ${delay}ms... (${retries} retries left)`);
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= 2;
    }
  }
}
