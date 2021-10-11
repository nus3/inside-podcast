import 'styles/globals.css'

import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'store'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const store = useStore()
  const persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading....</div>}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
