const finalResults = {
  offender: {
    env: [
      { href: "https://example.com/offender-env-1", src: "https://via.placeholder.com/190x130.png?text=Offender+Env+1", alt: "Offender Environment Option 1" },
      { href: "https://example.com/offender-env-2", src: "https://via.placeholder.com/190x130.png?text=Offender+Env+2", alt: "Offender Environment Option 2" }
    ],
    care: [
      { href: "https://example.com/offender-care-1", src: "https://via.placeholder.com/190x130.png?text=Offender+Care+1", alt: "Offender Social Care" }
    ],
    just: [
      { href: "https://example.com/offender-just-1", src: "https://via.placeholder.com/190x130.png?text=Offender+Justice+1", alt: "Offender Justice" }
    ],
    econ: [
      { href: "https://example.com/offender-econ-1", src: "https://via.placeholder.com/190x130.png?text=Offender+Economy+1", alt: "Offender Economy" }
    ],
    tech: [
      { href: "https://example.com/offender-tech-1", src: "https://via.placeholder.com/190x130.png?text=Offender+Tech+1", alt: "Offender Tech" }
    ],
    demo: [
      { href: "https://example.com/offender-demo-1", src: "https://via.placeholder.com/190x130.png?text=Offender+Democracy+1", alt: "Offender Democracy" }
    ]
  },
  defender: {
    env: [
      { href: "https://example.com/defender-env-1", src: "https://via.placeholder.com/190x130.png?text=Defender+Env+1", alt: "Defender Environment" }
    ],
    care: [
      { href: "https://example.com/defender-care-1", src: "https://via.placeholder.com/190x130.png?text=Defender+Care+1", alt: "Defender Social Care" }
    ],
    just: [
      { href: "https://example.com/defender-just-1", src: "https://via.placeholder.com/190x130.png?text=Defender+Justice+1", alt: "Defender Justice" }
    ],
    econ: [
      { href: "https://example.com/defender-econ-1", src: "https://via.placeholder.com/190x130.png?text=Defender+Economy+1", alt: "Defender Economy" }
    ],
    tech: [
      { href: "https://example.com/defender-tech-1", src: "https://via.placeholder.com/190x130.png?text=Defender+Tech+1", alt: "Defender Tech" }
    ],
    demo: [
      { href: "https://example.com/defender-demo-1", src: "https://via.placeholder.com/190x130.png?text=Defender+Democracy+1", alt: "Defender Democracy" }
    ]
  },
  tender: {
    env: [{ href: "https://example.com/tender-env-1", src: "https://via.placeholder.com/190x130.png?text=Tender+Env+1", alt: "Tender Environment" }],
    care: [{ href: "https://example.com/tender-care-1", src: "https://via.placeholder.com/190x130.png?text=Tender+Care+1", alt: "Tender Social Care" }],
    just: [{ href: "https://example.com/tender-just-1", src: "https://via.placeholder.com/190x130.png?text=Tender+Justice+1", alt: "Tender Justice" }],
    econ: [{ href: "https://example.com/tender-econ-1", src: "https://via.placeholder.com/190x130.png?text=Tender+Economy+1", alt: "Tender Economy" }],
    tech: [{ href: "https://example.com/tender-tech-1", src: "https://via.placeholder.com/190x130.png?text=Tender+Tech+1", alt: "Tender Tech" }],
    demo: [{ href: "https://example.com/tender-demo-1", src: "https://via.placeholder.com/190x130.png?text=Tender+Democracy+1", alt: "Tender Democracy" }]
  },
  mender: {
    env: [{ href: "https://example.com/mender-env-1", src: "https://via.placeholder.com/190x130.png?text=Mender+Env+1", alt: "Mender Environment" }],
    care: [{ href: "https://example.com/mender-care-1", src: "https://via.placeholder.com/190x130.png?text=Mender+Care+1", alt: "Mender Social Care" }],
    just: [{ href: "https://example.com/mender-just-1", src: "https://via.placeholder.com/190x130.png?text=Mender+Justice+1", alt: "Mender Justice" }],
    econ: [{ href: "https://example.com/mender-econ-1", src: "https://via.placeholder.com/190x130.png?text=Mender+Economy+1", alt: "Mender Economy" }],
    tech: [{ href: "https://example.com/mender-tech-1", src: "https://via.placeholder.com/190x130.png?text=Mender+Tech+1", alt: "Mender Tech" }],
    demo: [{ href: "https://example.com/mender-demo-1", src: "https://via.placeholder.com/190x130.png?text=Mender+Democracy+1", alt: "Mender Democracy" }]
  },
  pretender: {
    env: [{ href: "https://example.com/pretender-env-1", src: "https://via.placeholder.com/190x130.png?text=Pretender+Env+1", alt: "Pretender Environment" }],
    care: [{ href: "https://example.com/pretender-care-1", src: "https://via.placeholder.com/190x130.png?text=Pretender+Care+1", alt: "Pretender Social Care" }],
    just: [{ href: "https://example.com/pretender-just-1", src: "https://via.placeholder.com/190x130.png?text=Pretender+Justice+1", alt: "Pretender Justice" }],
    econ: [{ href: "https://example.com/pretender-econ-1", src: "https://via.placeholder.com/190x130.png?text=Pretender+Economy+1", alt: "Pretender Economy" }],
    tech: [{ href: "https://example.com/pretender-tech-1", src: "https://via.placeholder.com/190x130.png?text=Pretender+Tech+1", alt: "Pretender Tech" }],
    demo: [{ href: "https://example.com/pretender-demo-1", src: "https://via.placeholder.com/190x130.png?text=Pretender+Democracy+1", alt: "Pretender Democracy" }]
  },
  connector: {
    env: [{ href: "https://example.com/connector-env-1", src: "https://via.placeholder.com/190x130.png?text=Connector+Env+1", alt: "Connector Environment" }],
    care: [{ href: "https://example.com/connector-care-1", src: "https://via.placeholder.com/190x130.png?text=Connector+Care+1", alt: "Connector Social Care" }],
    just: [{ href: "https://example.com/connector-just-1", src: "https://via.placeholder.com/190x130.png?text=Connector+Justice+1", alt: "Connector Justice" }],
    econ: [{ href: "https://example.com/connector-econ-1", src: "https://via.placeholder.com/190x130.png?text=Connector+Economy+1", alt: "Connector Economy" }],
    tech: [{ href: "https://example.com/connector-tech-1", src: "https://via.placeholder.com/190x130.png?text=Connector+Tech+1", alt: "Connector Tech" }],
    demo: [{ href: "https://example.com/connector-demo-1", src: "https://via.placeholder.com/190x130.png?text=Connector+Democracy+1", alt: "Connector Democracy" }]
  },
  upender: {
    env: [{ href: "https://example.com/upender-env-1", src: "https://via.placeholder.com/190x130.png?text=Upender+Env+1", alt: "Upender Environment" }],
    care: [{ href: "https://example.com/upender-care-1", src: "https://via.placeholder.com/190x130.png?text=Upender+Care+1", alt: "Upender Social Care" }],
    just: [{ href: "https://example.com/upender-just-1", src: "https://via.placeholder.com/190x130.png?text=Upender+Justice+1", alt: "Upender Justice" }],
    econ: [{ href: "https://example.com/upender-econ-1", src: "https://via.placeholder.com/190x130.png?text=Upender+Economy+1", alt: "Upender Economy" }],
    tech: [{ href: "https://example.com/upender-tech-1", src: "https://via.placeholder.com/190x130.png?text=Upender+Tech+1", alt: "Upender Tech" }],
    demo: [{ href: "https://example.com/upender-demo-1", src: "https://via.placeholder.com/190x130.png?text=Upender+Democracy+1", alt: "Upender Democracy" }]
  }
};