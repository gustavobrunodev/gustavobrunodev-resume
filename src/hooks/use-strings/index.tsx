import * as React from 'react'
import type { Lang } from '../../types'
import strings from './strings.json'

export interface StringsProviderProps {
  children: React.ReactNode
  lang: Lang
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const StringsContext = React.createContext<ReturnType<typeof useContextValue>>()

function useContextValue(lang: Lang) {
  return React.useMemo(() => {
    return {
      ...strings.defaults,
      ...strings[lang],
    }
  }, [strings[lang]])
}

export function StringsProvider({ lang, children }: StringsProviderProps) {
  const contextValue = useContextValue(lang)

  return (
    <StringsContext.Provider value={contextValue}>
      {children}
    </StringsContext.Provider>
  )
}

export const useStrings = () => React.useContext(StringsContext)
