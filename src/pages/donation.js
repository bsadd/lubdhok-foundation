import React from 'react';
import Layout from '../components/Layout';
import { PaymentMethodContainer } from '../components/PaymentMethodContainer';
import styles from './donation.module.css';

{/* <div>
  <span>
      আমাদের এই বৃত্তি পরিচালিত হচ্ছে পুরোপুরি স্বেচ্ছাশ্রমের উপর।
      বৃত্তির তহবিল আসছে আমাদের শুভানুধ্যায়ীদের অনুদান থেকে। আপনিও
      পারেন এই প্রকল্পে আমাদের পাশে থাকতে। আপনার অনুদান পাঠাতে পারেন
      নীচের যে কোন একটি উপায়েঃ
      <br />
      <br />
      <b>Bank Deposit / Online Transfer Info:</b>
      <br />
      Bank Name: Sonali Bank Limited
      <br />
      Bank Branch: BUET
      <br />
      Account Name: Lubdhok’07 Foundation
      <br />
      Account number: 4404002000835
      <br />
      Routing No: 200270522
      <br />
      <br />
      <b>Paypal & Zelle:</b>
      <br />
      Email: AHMED589@UMN.EDU
      <br />
      <br />
      <b>Bkash (Personal):</b>
      <br />
      Mobile Number: 01816498063 (Md. Yousuf Sharif)
      <br />
      <br />
      অনুদানের সাথে অনুগ্রহ করে <b>সৌরভ স্মৃতি বৃত্তি</b> অথবা{' '}
      <b>Shourov Memorial Scholarship</b> উল্লেখ করবেন।
      <br />
    </span>
</div> */}
class donationPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Donation">
        <div className={styles.donationPage}>
          <h3> How to donate</h3>
          <div>
            <PaymentMethodContainer />
          </div>
        </div>
      </Layout>
    );
  }
}

export default donationPage;
