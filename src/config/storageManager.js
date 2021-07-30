/**
 * itemProps를 string 으로 변환
 * @param itemProps
 */
const convertItemProps = itemProps => JSON.stringify(itemProps);

/**
 * itemProps 를 Object 로 변환
 * @param itemProps
 */
const parseItemInfo = itemProps => JSON.parse(itemProps);

/**
 * storageKey의 itemProps 를 localStorage에 저장
 * @param storageKey itemProps
 */
const setItemProps = (storageKey, itemProps) => {
  const convertedItemsProps = convertItemProps(itemProps);
  localStorage.removeItem(storageKey);
  localStorage.setItem(storageKey, convertedItemsProps);
};

/**
 * localStorage에 저장된 값를 반환 하는 함수
 * @param storageKey
 */
const getItemProps = storageKey => {
  const selectedItem = localStorage.getItem(storageKey);
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

/**
 * localStorage에 저장된 값 초기화
 * @param storageKey
 */
const clearItemProps = storageKey => {
  localStorage.removeItem(storageKey);
};

export const storagePropsManager = {
  convertItemProps,
  parseItemInfo,
  clearItemProps,
  setItemProps,
  getItemProps,
};
