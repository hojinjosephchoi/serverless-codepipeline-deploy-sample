export async function handler(event, context) {
  console.log('[back] back called from api');
  return {
    result: 'hello world',
  };
}
