import * as Styles from './styles'
import BaseContainer from './components/BaseContainer'
import CurrencyTransferWidget from './CurrencyTransferWidget'

import playBtn from './images/play.svg'
import Typography from './components/Typography'


const App = () => {
  return (
    <Styles.AppContainer>
      <BaseContainer>

        <Styles.Content>
          <Typography size={3} fontWeight={700} tag={'h1'}>
            The 6x cheaper international account.
          </Typography>
          <Typography lineHeight={1.5} tag={'h2'}>
            Transfer money or spend abroad 6x cheaper than old-school banks, and receive money around the world for free.
            Always with the real exchange rate, no hidden fees.
          </Typography>
          <Styles.Button>
            <img src={playBtn} alt=''/>
            See, how it works
          </Styles.Button>
        </Styles.Content>

        <CurrencyTransferWidget/>
      </BaseContainer>
    </Styles.AppContainer>
  )
}

export default App
