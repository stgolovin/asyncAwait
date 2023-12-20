import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    const gsm = new GameSavingLoader;
    const saving = await gsm.load();
    console.log(saving);
  } catch (error) {
    console.error(error);
  }
})();
