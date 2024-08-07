import "@scss/components/home/ProjectCardsList.scss"
import { homeProjectContent } from "@content/HomePageContent"
import ProjectLinks from "@common/components/ProjectLinks"
import Tags from "@common/components/Tags"
import { useHighlightJump } from "@hooks/UseHighlightJump"

const COMMON_COMPONENT_CLASSNAME = 'home-proj'

const ProjectCardsList = () => {
    const setIsTriggerElemHovered = useHighlightJump()

    const handleHover = (hover: boolean, i: number) => {
        const targetLink = document.querySelector(`.home-proj-link-${i}-0`)
        setIsTriggerElemHovered({ isHovered: hover, targetElem: targetLink })
    }

    return (
        <ul className="project-list m-0 p-0">
            {homeProjectContent.map((proj, i) => {
                return (
                    < li
                        key={`home-proj-card-${i}`}
                        className={`home-proj-card-${i} home-proj-card d-md-flex flex-md-row-reverse`}
                    >
                        <div className={"mirror-container"}></div>
                        <div className="home-proj-details">
                            <div className="home-proj-header d-flex">
                                <span>
                                    <a
                                        href={proj.links[0].url}
                                        target="_blank"
                                        className="home-proj-title-link hover-text me-3"
                                        aria-label={`${proj.links[0].ariaLabel}`}
                                        onMouseEnter={() => handleHover(true, i)}
                                        onMouseLeave={() => handleHover(false, i)}
                                    >
                                        <span className="me-0">{proj.title}</span>
                                    </a>
                                </span>
                                <span className="home-proj-header-links d-flex align-items-center">
                                    {proj.links.map((linkData, j) => {
                                        return (
                                            <span
                                                id={`home-proj-link-${i}-${j}`}
                                                key={`home-proj-link-${i}-${j}`}
                                                className={`home-proj-link-${i}-${j} home-proj-link`}
                                            >
                                                <ProjectLinks className={COMMON_COMPONENT_CLASSNAME} linkData={linkData} />
                                            </span>
                                        )
                                    })}
                                </span>
                            </div>
                            <span className="home-proj-type">{proj.projType}</span>
                            <p className="home-proj-p m-0 mt-2">{proj.paragraph}</p>
                            <p className="home-proj-p m-0 mt-2">{proj.paragraphTwo}</p>
                            <Tags className={COMMON_COMPONENT_CLASSNAME} tagData={proj.tags} parentIndex={i} />
                        </div>
                        <div
                            className="home-proj-img-container mt-2 mt-md-0"
                            style={{ minWidth: "125px" }}
                        >
                            < img
                                className="home-proj-img"
                                src={proj.imageUrl}
                                alt={proj.imageAlt}
                            />
                        </div>
                    </li >
                )
            })}
        </ul >
    )
}

export default ProjectCardsList
