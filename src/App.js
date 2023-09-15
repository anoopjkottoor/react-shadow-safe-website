import React, { useEffect } from "react";
import './App.css';
import NameLogo from '../src/assets/name-logo.svg'
import LargeLogo from '../src/assets/large-logo.svg'
import LockIcon from '../src/assets/lock.svg'
import DocIcon from '../src/assets/documents.svg'
import UserIcon from '../src/assets/users.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="">
      <section className="hero is-fullheight first-section">
        <nav className="navbar navbar-container" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="logo-container ml-6" href="/#">
              <img src={NameLogo} width="256" height="48" alt="logo" />
            </a>
          </div>

          <div className="navbar-menu navbar-style">

            <div className="navbar-end">
              <a className="navbar-item-new" href="/#">
                Product
              </a>

              <a className="navbar-item-new" href="/#">
                Our mission
              </a>

              <a className="navbar-item-new" href="/#">
                Contact
              </a>

              <a className="custom-button" href="https://demo.shadowsafe.xyz" target="_blank" rel="noopener">
                See Demo
              </a>

            </div>
          </div>
        </nav>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered reverse-columns">
              <div className="column is-two-thirds" data-aos="fade-down">
                <h1 className="titled mb-6">
                  Safeguard your credentials, simplify your workflow.
                </h1>
                <div className="">
                  <a data-aos="fade-down" className="custom-button" href="https://getwaitlist.com/waitlist/10173" target="_blank" rel="noopener">Get an invite</a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      <section className="hero is-fullheight main-container">
        <div className="hero-body">
          <div className="container">
            <div className="columns">

              <div data-aos="fade-down" className="column is-two-thirds">
                <h2 className="title-3">
                  Effortlessly capture and manage user credentials, transform testing and debugging into efficient and enjoyable tasks.
                </h2>
              </div>

            </div>
            <div className="columns cards-main-container">
              <div className="column"></div>
              <div data-aos="fade-down" className="column is-two-thirds">
                <div className="columns">
                  <div className="column">
                    <div className="cards-container">
                      <div>
                        <img src={LockIcon} alt="logo" />
                      </div>
                      <div className="card-title mt-2">
                        Secure credentials management
                      </div>
                      <div className="card-subtitle mt-2">
                        Protect sensitive credentials, ensuring peace of mind for developers and DevOps teams.
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="cards-container">
                      <div>
                        <img src={DocIcon} alt="logo" />
                      </div>
                      <div className="card-title mt-2">
                        Effortless recording
                      </div>
                      <div className="card-subtitle mt-2">
                        Easily record and manage credentials with applications, streamlining testing and debugging processes.                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="cards-container">
                      <div>
                        <img src={UserIcon} alt="logo" />
                      </div>
                      <div className="card-title mt-2">
                        Collaboration made easy
                      </div>
                      <div className="card-subtitle mt-2">
                        Securely share credentials and interaction logs without compromising data security.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero first-section is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-vcentered reverse-columns">
              <div data-aos="fade-right" className="column is-two-thirds">
                <h2 className="title-4">
                  To provide an impenetrable,
                  on-premise solution that centralizes and secures every credential.
                </h2>
                <h1 className="titled is-1 mt-6">
                  Designed with developers, software testers, and DevOps in mind.
                </h1>
                <a data-aos="fade-down" className="custom-button-1" href="https://getwaitlist.com/waitlist/10173" target="_blank" rel="noopener">Get an invite</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-medium has-text-centered final-section">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <img src={LargeLogo} alt="logo" />
              </div>
              <div className="column">
                <div className="is-flex is-justify-content-flex-end">
                  <div className="privacy-policy">
                    As we gear up to enhance access controls, we're all ears. Share your insights, and we'll probably incorporate them in our next version.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
