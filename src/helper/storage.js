import { Preferences } from "@capacitor/preferences";

export async function set(key, value) {
  await Preferences.set({
    key: key,
    value: JSON.stringify(value)
  });
}

export async function get(key){
  const item = await Preferences.get({ key: key });
  if (item && item.value !== null) {
    return JSON.parse(item.value);
  } 

  return "";
}

export async function remove(key) {
  await Preferences.remove({
    key: key
  });
}