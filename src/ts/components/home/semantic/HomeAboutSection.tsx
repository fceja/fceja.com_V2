import "@scss/components/home/semantic/HomeAboutSection.scss"
import { aboutContent } from "@content/HomePageContent"

const HomeAboutSection = () => {
    return (
        <section className="about">
            <h2>About</h2>
            <p>{aboutContent}</p>
        </section>
    )
}
export default HomeAboutSection