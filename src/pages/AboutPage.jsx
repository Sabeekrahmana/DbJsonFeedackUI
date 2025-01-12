import React from 'react'
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Card>
        <div className="about">
            <h1>About the Project.</h1>
            <p>This is a React Application to leave a feedback about a product or Service.</p>
            <p>Version : 1.0.0</p>
            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage;