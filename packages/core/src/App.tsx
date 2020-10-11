/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import "./index.scss";
import PageSection from "./page-sections/PageSection";

function App() {
  return (
    <main
      css={css`
        max-width: 1000px;
      `}
    >
      <h1
        css={css`
          margin-bottom: 100px;
        `}
      >
        Welcome to the International Developer Community!
      </h1>
      <PageSection title="About">
        <div>
          <p>
            The International Developer Community is a non-profit organization
            dedicated to helping and supporting software developers around the
            world.
          </p>
          <p>
            The community was set up in 2020 as a organization to support and
            connect developers.
          </p>
        </div>
      </PageSection>
      <PageSection title="Organizations">
        <p>
          <a href="https://nz.developercommunity.org">
            New Zealand Developer Community
          </a>
        </p>
      </PageSection>
      <PageSection title="Joining">
        <div>
          <p>
            The International Developer Community is open to anyone with an
            interest in development. In order to contribute to the community, it
            is recommended that you have a GitHub account. This will allow you
            to make edits to the community.
          </p>
          <p>
            All community members must abide by the{" "}
            <a href="#constitution">constitution</a> of the community.
          </p>
        </div>
      </PageSection>
      <PageSection title="Constitution and Values" id="constitution">
        <h2></h2>
        <div>
          <h3>Core Values</h3>
          <ul>
            <li>
              <h4>Integrity and Good Faith</h4>
              <p>
                The community and its members are honest, trustworthy, and
                attempt in all endeavors to act in good faith with other people.
              </p>
            </li>
            <li>
              <h4>Inclusivity</h4>
              <p>
                The community and its members support all people, regardless of
                race, religion, sexual orientation, sexuality, geographic
                location, or beliefs.
              </p>
            </li>
            <li>
              <h4>Openness</h4>
              <p>
                The community members agree that sharing knowledge and software
                openly is the goal of the community.
              </p>
              <p>
                The community accepts that not all work can and should be public
                and open source. However, the community holds that sharing
                knowledge and software openly is inherently beneficial to both
                themselves, the community, and the world.
              </p>
            </li>
            <li>
              <h4>Boldness</h4>
              <p>
                With appropriate judiciousness and prior discussion, the
                community reserves the privilege to hold and disseminate
                outspoken political or social beliefs.
              </p>
              <p>
                Members will be notified of any political or social policy or
                beliefs, and have reasonable chance to respond openly to such
                policy.
              </p>
            </li>
            <li>
              <h4>Change</h4>
              <p>
                The committee reserves the right to modify the constitution with
                prior discussion and notice.
              </p>
            </li>
          </ul>
        </div>
      </PageSection>
      <PageSection title="Political Policy">
        <p className="bold">
          Note: Members are not required to support all policies that the
          community backs.
        </p>
        <p>The community supports the Black Lives Matter movement.</p>
        <p>
          The community supports scientists and reputable scientific
          communities.
        </p>
        <p>The community supports free and fair elections.</p>
        <p>The community does not believe the earth is flat.</p>
      </PageSection>
    </main>
  );
}

export default App;
