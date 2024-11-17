interface IStoreItem {
  name: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
  openTime: string;
  closeTime: string;
}

export const getRandomStores = (
  stores: IStoreItem[],
  count: number
): IStoreItem[] => {
  const shuffledStores = [...stores].sort(() => 0.5 - Math.random());
  return shuffledStores.slice(0, count);
};
