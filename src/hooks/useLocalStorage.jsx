import { useEffect, useState } from "react"
import { useLocalStorageUtils } from "../utils/localStorageActions"
const { setStorage, getStorage, clearStorageItem, clearStorage } = useLocalStorageUtils

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    const item = getStorage(key)
    return item ? JSON.parse(item) : ""
  })
  useEffect(() => {
    const item = getStorage(key)
    if (item) {
      setValue(JSON.parse(item))
    }
  }, [key])

  window.addEventListener("storage", () => {
    const item = getStorage(key)
    if (item) {
      setValue(JSON.parse(item))
    }
  })

  const setLocalStorage = (value) => {
    if (!value) return
    setStorage(key, value)
    setValue(value)
  }
  const removeLocalStorage = () => {
    clearStorageItem(key)
    setValue("")
  }
  const getLocalStorage = () => {
    return getStorage(key)
  }
  const clearAllLocalStorage = () => {
    clearStorage()
    setValue("")
  }

  return {
    value,
    setCustomValue: setValue,
    setLocalStorage,
    removeLocalStorage,
    getLocalStorage,
    clearAllLocalStorage,
  }
}
