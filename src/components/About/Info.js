import "./index.scss"

const Info = () => {
    return <>
    <div className="about__info grid">
        
        <div className="about__box">
            <i class='bx bx-award'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">5 Years Working</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">Over 16 projects</span>
        </div>

        <div className="about__box">
            <i class='bx bx-support'></i>
            <h3 className="about__title">Honors</h3>
            <span className="about__subtitle">Phi Theta Kappa</span>
        </div>
    </div>
    </>
}

export default Info;