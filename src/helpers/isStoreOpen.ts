export const isStoreOpen = (openTime: string, closeTime: string): boolean => {
  const currentTime = new Date();
  const currentHours = currentTime.getHours();

  const [openHours] = openTime.split(":").map(Number);
  const [closeHours] = closeTime.split(":").map(Number);

  if (openHours < closeHours) {
    return currentHours >= openHours && currentHours < closeHours;
  }

  return currentHours >= openHours || currentHours < closeHours;
};
