import { Arc } from "@/types/Arc";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class StorageApi {
  static readonly favoriteArcKey = "favoriteArc" as const;

  private static async getItem<T = string>(
    key: string,
    isObject = false
  ): Promise<T | null> {
    const itemStringfied = await AsyncStorage.getItem(key);
    if (!itemStringfied) return null;
    const item = isObject ? JSON.parse(itemStringfied) : itemStringfied;
    return item;
  }

  private static async setItem<T>(
    key: string,
    value: T,
    isObject = false
  ): Promise<boolean> {
    const itemToSet = (isObject ? JSON.stringify(value) : value) as string;
    await AsyncStorage.setItem(key, itemToSet);
    return true;
  }

  static async getFavoriteArc(): Promise<Arc | null> {
    const favoriteArc = await StorageApi.getItem<Arc>(
      StorageApi.favoriteArcKey,
      true
    );
    return favoriteArc;
  }

  static async setFavoriteArc(arc: Arc): Promise<boolean> {
    return await StorageApi.setItem(StorageApi.favoriteArcKey, arc, true);
  }
}
