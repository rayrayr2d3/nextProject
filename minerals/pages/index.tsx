import PrimaryButton from '../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../components/buttons/secondaryButton/secondaryButton';
import TertiaryButton from '../components/buttons/tertiaryButton/tertiaryButton';
import Layout from '../components/layout/layout'

const Home = () => (
    <Layout>
        <div>
            <h1>
                Hello!
            </h1>
            <div>
                <PrimaryButton text="Click me!"/>
                <SecondaryButton text="Meow" />
                <TertiaryButton text="Woof" />
            </div>
        </div>
    </Layout>
)

export default Home;