import './index.css'

const Resume = () => {
    return <>
        <div className="resume">
            <div className='middle'>
                <h2>Education</h2>
                <div className="date-row">
                    <h4 className="left">University of California, Irvine - Irvine, CA</h4>
                    <h4 className="right">September 2021 - June 2023</h4>
                    <p className="spec">Bachelor of Science in Computer Science
                        <b>GPA: 3.20</b>
                    </p>
                </div>
                <div className="date-row">
                    <h4 className="left">Irvine Valley College - Irvine, CA</h4>
                    <h4 className="right">January 2019 - May 2021</h4>
                    <p className="spec">Associate of Science in Computer Science
                        <b>GPA: 3.51</b>
                    </p>
                </div>
            </div>    
        </div>
    </>
}

export default Resume;