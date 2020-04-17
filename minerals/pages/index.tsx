import PrimaryButton from '../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../components/buttons/secondaryButton/secondaryButton';
import TertiaryButton from '../components/buttons/tertiaryButton/tertiaryButton';


const Home = () => (
    <div>
        <h1>
            Hello!
            <PrimaryButton text="Click me!"/>
            <SecondaryButton text="Meow" />
            <TertiaryButton text="Woof" />
        </h1>
    </div>
)

export default Home;