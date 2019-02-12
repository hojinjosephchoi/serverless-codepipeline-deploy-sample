import { MyModelService } from './services/MyModelService';

export async function handler(event, context) {
  console.log('[back] back called from api');
  return {
    result: await MyModelService.getMyModel(),
  };
}
(async () => {
  console.log((await handler(null, null)).result);
})();
