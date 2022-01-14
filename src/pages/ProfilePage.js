import { useParams } from 'react-router-dom'

const ProfilePage = () => {

    const { index } = useParams();

    return (
        
        <div align="center">
            <br/>
            <h3>The index of this profile is:</h3>
            <h3>
               {index} 
            </h3>
        </div>

    )
};

export default ProfilePage;
