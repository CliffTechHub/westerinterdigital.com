import {HeroComponent,AboutUsComponent,OurServicesComponent } from './components';
import { NavBarComponent} from "./layout";

function App() {
  return (
    <>
      <section>
        < NavBarComponent/>
      </section>
      <section>
          <HeroComponent />
     </section>
      <section>
        <AboutUsComponent />
      </section>
      <section>
           <OurServicesComponent />
   </section>
      

    </>
  );
}

export default App
