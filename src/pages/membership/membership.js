import React from 'react';
import Layout from '@theme/Layout';
import styles from './membership.module.css';

function Membership() {
    return (
      <Layout title="Hello">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            fontSize: '20px',
          }}>
          <p className={styles.title}>
   
          </p>
        </div>
        <main>
          {/* <iframe src="https://calendar.google.com/calendar/embed?src=lilxyunie%40gmail.com&ctz=America%2FLos_Angeles" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
          {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23616161&amp;ctz=America%2FLos_Angeles&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=NHRzM3JncjE4Yzg2dW9ybmdoaXM3YjNqZ2t2MWtraXZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=N2xyY2l2Nmo0aW8zcmtqMnV0MWxvMmxuYmN0YTE4NDdAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%237986CB&amp;color=%23009688&amp;color=%23F6BF26&amp;color=%23616161" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
        </main>
      </Layout>
    );
  }
  
  export default Membership;