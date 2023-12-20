import GameSavingLoader from "../GameSavingLoader.js";

test("test for async/await", async () => {
  const gsm = new GameSavingLoader();
  try {
    const saving = await gsm.load();
    expect(saving).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: { id: 1, name: "Hitman", level: 10, points: 2000 },
    });
  } catch (error) {
    throw error;
  }
});
