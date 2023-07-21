import { Box, Container, Typography } from "@mui/material"
import React from "react"

export const Conduct = () => {
  return (
    <Container maxWidth="md">
      <Box mb={10}>
        <Box mb={10}>
          <Typography fontSize={"31px"}>Code of conduct</Typography>
        </Box>
        <Typography>
          Our organization is dedicated to providing a respectful, inclusive,
          and harassment-free environment for all participants, regardless of
          gender, sexual orientation, disability, race, ethnicity, age,
          religion, or any other personal characteristic.
        </Typography>
        <br />
        <br />

        <Typography>
          We expect all participants to follow this Code of Conduct when
          interacting with each other, whether in person, in writing, or in any
          other form of communication. By participating in our organization's
          activities, you agree to follow this Code of Conduct.
        </Typography>
        <br />
        <br />
        <Typography fontWeight={600}> Expected behavior</Typography>
        <br />
        <br />
        <ul>
          <li>
            <Typography>
              Be respectful and considerate towards all participants, regardless
              of their background or personal characteristics.
            </Typography>
          </li>
          <li>
            <Typography>
              Listen actively and be open to differing viewpoints.
            </Typography>
          </li>
          <li>
            <Typography>
              Be inclusive and welcoming to all participants, regardless of
              their identity.
            </Typography>
          </li>
          <li>
            <Typography>
              Be inclusive and welcoming to all participants, regardless of
              their identity.
            </Typography>
          </li>
          <li>
            <Typography>
              Exercise discretion and professionalism in your interactions with
              others.
            </Typography>
          </li>
          <li>
            <Typography>
              Refrain from using any form of harassment, including but not
              limited to, offensive comments, verbal or physical abuse,
              intimidation, or stalking.
            </Typography>
          </li>
          <li>
            <Typography>
              Refrain from using any form of discrimination, including but not
              limited to, discrimination based on gender, sexual orientation,
              disability, race, ethnicity, age, religion, or any other personal
              characteristic.
            </Typography>
          </li>
          <li>
            <Typography>
              Refrain from engaging in any behavior that may cause harm to
              others or the organization.
            </Typography>
          </li>
        </ul>

        <br />
        <br />
        <Typography fontWeight={600}>Unacceptable behavior</Typography>
        <br />
        <br />
        <ul>
          <li>
            <Typography>
              The following behaviors are considered unacceptable and will not
              be tolerated:
            </Typography>
          </li>
          <li>
            <Typography>
              Using derogatory or discriminatory language towards any
              participant or group of participants.
            </Typography>
          </li>
          <li>
            <Typography>
              Be inclusive and welcoming to all participants, regardless of
              their identity.
            </Typography>
          </li>
          <li>
            <Typography>
              Engaging in any form of discrimination, including but not limited
              to, discrimination based on gender, sexual orientation,
              disability, race, ethnicity, age, religion, or any other personal
              characteristic.
            </Typography>
          </li>
          <li>
            <Typography>
              {" "}
              Making unwelcome advances, sexual or otherwise.
            </Typography>
          </li>
          <li>
            <Typography>
              Disrupting the organization's activities, either intentionally or
              through negligence.
            </Typography>
          </li>
        </ul>

        <Typography>
          Using or distributing any form of illegal substance or engaging in any
          form of illegal activity.
        </Typography>
        <br />
        <br />
        <Typography fontWeight={600}>Consequences</Typography>
        <br />
        <br />
        <Typography>
          Any participant who violates this Code of Conduct may be subject to
          consequences, including but not limited to:
        </Typography>
        <br />
        <br />
        <ul>
          <li>
            <Typography>
              Being asked to leave the organization's activities immediately and
              permanently.
            </Typography>
          </li>
          <li>
            <Typography>
              Being banned from future organization activities.
            </Typography>
          </li>
          <li>
            <Typography>
              Being reported to law enforcement if the behavior violates any
              applicable laws.
            </Typography>
          </li>
          <li>
            <Typography>
              Being reported to other relevant organizations or authorities as
              necessary.
            </Typography>
          </li>
        </ul>

        <br />
        <br />
        <Typography fontWeight={600}>Reporting violations</Typography>
        <br />
        <br />
        <Typography>
          If you witness or experience any behavior that violates this Code of
          Conduct, please report it immediately to the organization's
          leadership. All reports will be treated seriously and will be handled
          with respect for the privacy of the individuals involved.
        </Typography>
        <br />
        <br />
        <Typography fontWeight={600}>Conclusion</Typography>
        <br />
        <br />
        <Typography>
          By participating in our organization's activities, you agree to follow
          this Code of Conduct. We are committed to providing a respectful,
          inclusive, and harassment-free environment for all participants and
          will not tolerate any behavior that violates this Code of Conduct.
        </Typography>
      </Box>
    </Container>
  )
}
