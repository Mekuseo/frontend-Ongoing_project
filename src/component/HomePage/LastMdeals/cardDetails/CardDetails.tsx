import {UserContextProvider} from '../../../../utils/UserData';
import SearchTop from "./components/SearchTop"

const CardDetails = () => {
  return (
    <UserContextProvider>
        <SearchTop />
    </UserContextProvider>
  )
}

export default CardDetails