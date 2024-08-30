import { useTranslation } from 'react-i18next'

import type en from '@/lang/en'


type Translations = typeof en

type RecursiveKeyOfInner<TObj extends object> = {
    // eslint-disable-next-line no-use-before-define
    [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `['${TKey}']` | `.${TKey}`>
}[keyof TObj & (string | number)]

type RecursiveKeyOfHandleValue<TValue, Text extends string> =
    TValue extends any[] ? Text
        : TValue extends object ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
            : Text

type RecursiveKeyOf<TObj extends object> = {
    [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>
}[keyof TObj & (string | number)]

export type TxKeyPath = RecursiveKeyOf<Translations>


export function useTranslate (){

  const { t } = useTranslation()

  const translate = (key: TxKeyPath, options?: Record<string, string>): string => {
    if (options) {
      return t(key, options)
    }
    return t(key)
  }
  return { translate }
}
