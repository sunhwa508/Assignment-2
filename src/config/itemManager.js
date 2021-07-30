export const STORAGE_KEY_NAMES = {
  SELECTED_ITEM: "SELECTED_ITEM",
};

/**
 * selected item 정보를 string 으로 변환
 * @param itemProps
 */
const convertItemProps = itemProps => JSON.stringify(itemProps);

/**
 * selected item 정보를 itemProps Object 로 변환
 * @param itemProps
 */
const parseItemInfo = itemProps => JSON.parse(itemProps);

/**
 * selected item 정보를 저장, localStorage에 저장
 * @param clientProps
 */
const setItemProps = itemProps => {
  const convertedItemsProps = convertItemProps(itemProps);
  localStorage.removeItem(STORAGE_KEY_NAMES.SELECTED_ITEM);
  localStorage.setItem(STORAGE_KEY_NAMES.SELECTED_ITEM, convertedItemsProps);
};

/**
 * localStorage에 저장된 클라이언트를 반환 하는 함수
 */
const getItemProps = () => {
  const selectedItem = localStorage.getItem(STORAGE_KEY_NAMES.SELECTED_ITEM);
  if (selectedItem) {
    try {
      return parseItemInfo(selectedItem);
    } catch (error) {
      console.warn(error);
      return null;
    }
  }
  return null;
};

const clearItemProps = () => {
  localStorage.removeItem(STORAGE_KEY_NAMES.SELECTED_ITEM);
};

export const itemPropsManager = {
  convertItemProps,
  parseItemInfo,
  clearItemProps,
  setItemProps,
  getItemProps,
};
