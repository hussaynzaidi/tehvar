import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChalkboardTeacher, faMusic, faDoorClosed, faMicrophone, faTable, faStore, faHandshake, faUserTie } from '@fortawesome/free-solid-svg-icons';
import '../css/Comp.css';
import { useNavigate } from 'react-router-dom';

function AdminButtons() {
  const navigate = useNavigate();
  const goToAttendee = () => {
    navigate('/admin/attendee');
  }
  const goToSpeaker = () => {
    navigate('/admin/speaker');
  }
  const goToArtist = () => {
    navigate('/admin/artist');
  }
  const goToVendor = () => {
    navigate('/admin/vendor');
  }
  const goToSponsor = () => {
    navigate('/admin/sponsor');
  }
  const goToStaff = () => {
    navigate('/admin/staff');
  }
  const goToRoom= () => {
    navigate('/admin/room');
  }
  const goToRoundtable= () => {
    navigate('/admin/roundtable');
  }
  const goToTalk= () => {
    navigate('/admin/talk');
  }
  return (
    <div className="cards-container">
      <div className="cards">
        <div className="card">
          <FontAwesomeIcon icon={faUsers} size="3x" onClick={goToAttendee} />
          <p>Manage Attendees</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" onClick={goToSpeaker}/>
          <p>Manage Speakers</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faMusic} size="3x" onClick={goToArtist}/>
          <p>Manage Artists</p>
        </div>
        
        <div className="card">
          <FontAwesomeIcon icon={faDoorClosed} size="3x" onClick={goToRoom} />
          <p>Manage Rooms</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faMicrophone} size="3x" onClick={goToTalk}/>
          <p>Manage Talks</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faTable} size="3x" onClick={goToRoundtable} />
          <p>Manage Roundtables</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faStore} size="3x" onClick={goToVendor} />
          <p>Manage Vendors</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faHandshake} size="3x" onClick={goToSponsor} />
          <p>Manage Sponsors</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faUserTie} size="3x" onClick={goToStaff}/>
          <p>Manage Staff</p>
        </div>
      </div>
    </div>
  )
}

export default AdminButtons;