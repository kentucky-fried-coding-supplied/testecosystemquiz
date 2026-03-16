const personalityDetails = {
  offender: `
    <div class="personality-detail">
      <h2>The Offender</h2>
      <p><i>Brave, Perseverant, Provocateur</i></p>
      <p>Your most fitting role is as a <b>tactical escalator</b>. 
      You're someone who knows that what’s legal and what is ethical is not always one in the same!<p>
      <p>Common activities of <i>the Offender</i> include:
      <ul><li>Civil Disobedience</li>
      <li>Protesting</li>
      <li>Whistleblowing</li>
      </ul>
      </p>
    </div>`,
  defender: `
    <div class="personality-detail">
      <h2>The Defender</h2>
      <p><i>Selfless, Conserving, Discerning</i></p>
      <p>Your most fitting role is as a <b>de-escalator</b>.
      You're someone who's ready to move through tense and even violent moments with the intent of preventing harm.</p>
      <p>Note! People aren’t the only things who need defense. The environment, resources, and even data and history all need protection.</p?
      <p>Common activities of <i>the Defender</i> include:
      <ul> <li>Archiving</li>
      <li>Legal Aid</li>
      <li>Cybersecurity</li>
      <li>Teaching Self-Defense</li>
      <li>Land Regeneration</li>
      </ul>
      </p>
    </div>`,
  tender: `
    <div class="personality-detail">
      <h2>The Tender</h2>
      <p><i>Perceptive, Empathetic, Provident</i></p>
      <p>Your most fitting role is as a <b>community carer</b>. 
      You're someone who supports change by meeting the needs of those around you, be they emotional or physical.<p>
      <p>Common activities of <i>the Tender</i> include:
      <ul><li>Mutual Aid</li>
      <li>Community Garderning</li>
      <li>Carpooling</li>
      <li>Child Care Collectives</li>
      <li>Public Health</li>
      </ul>
      </p>
    </div>`,
  mender: `
    <div class="personality-detail">
        <h2>The Mender</h2>
        <p><i>Diplomatic, Cooperative, Resourceful</i></p>
        <p>Your most fitting role is as a <b>handyperson</b>. 
        You're someone with the skills to fix clothes, cars, and even relationships.<p>
        <p>Common activities of <i>the Mender</i> include:
        <ul><li>Conflict Resolution</li>
        <li>Herbal & Street Medicine</li>
        <li>Mediation</li>
        <li>Mechanics</li>
        </ul>
        </p>
    </div>`,
  pretender: `
    <div class="personality-detail">
        <h2>The Pretender</h2>
        <p><i>Integrious, Personable, Cunning</i></p>
        <p>Your most fitting role is as a <b>person in disguise</b>. 
        You're someone who can move through spaces of opposition undetected and gather important resources.<p>
        <p>Common activities of <i>the Pretender</i> include:
        <ul><li>Concealing Information</li>
        <li>Leaking Information</li>
        </ul>
        </p>
    </div>`,
  connector: `
    <div class="personality-detail">
        <p><i>Communicator, Decisive, Directive</i></p>
        <p>Your most fitting role is as a <b>resource mapper</b>. 
        You're someone who knows how to move materials, resources, and information where they need to go.<p>
        <p>Common activities of <i>the Connector</i> include:
        <ul><li>Teaching and Mentorship</li>
        <li>Building</li>
        <li>Social Network</li>
        </ul>
        </p>
    </div>`,
  upender: `
    <div class="personality-detail">
        <h2>The Upender</h2>
        <p><i>Curious, Imaginative, Expressive</i></p>
        <p>Your most fitting role is as a <b>visionary</b>. 
        You're someone ready to change the collective understanding of the world and provide an idea of what lies beyond.<p>
        <p>Common activities of <i>the Upender</i> include:
        <ul><li>Art</li>
        <li>Policy Guidance</li>
        <li>Advocacy</li>
        <li>Scholarship</li>
        </ul>
        </p>
    </div>`
};
function getPersonalityDetail(type) {
  return personalityDetails[type] || '<p>No detail found.</p>';
}