import { HomeSectionHero, HomeSectionPopular, HomeSectionStat } from "../components";

function HomeView() {

    return (
        <main className="position-relative">
            <HomeSectionHero />
            <HomeSectionStat /> 
            <HomeSectionPopular /> 
        </main>
    )
}

export default HomeView; 
