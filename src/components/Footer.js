import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/kaelinpsalazar' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>


          <MDBBtn outline color="light" floating className='m-1' href='mailto:kaelinpsalazar@gmail.com' role='button'>
          <MDBIcon far icon="envelope" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/kaelin-salazar-378348250/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/kaelinpsalazar' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Kaelin P. Salazar: Software Developer
      </div>
    </MDBFooter>
  );
}