import React from 'react';
import Layout from '../components/Layout';
import { SocialMedialLinks } from '../components/SocialMediaLinks';
import styles from './scholarship.module.css';

class scholarshipPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Scholarship">
        <div className={styles.scholarshipPage}>
          <h3>
            সৌরভ স্মৃতি বৃত্তি
          </h3>
          <div>
          <span>
          লুব্ধক'০৭ ফাউন্ডেশন ২০২১ সাল থেকে "সৌরভ স্মৃতি বৃত্তি" চালু করতে যাচ্ছে।  
</span>
<br />
<br />
<span>
বৃত্তির জন্যে তিন ভাবে আবেদন করা যেতে পারেঃ 
<ul>
<li> অনলাইনে গুগল ফর্ম পূরণ করে। <a href="https://docs.google.com/forms/d/1LNZKsYLUg1hnOQe1ZoPh0iUPK1A761hjwSx-G1t4puc/" className={styles.adminEmail}> 
              ফর্ম পূরণ করতে এখানে ক্লিক করুন
              </a> </li>
<li> ওয়েবসাইট থেকে ফর্মের পিডিএফ ডাউনলোড করে সেটা পূরণ করে ইমেইলের মাধ্যমে পাঠিয়ে ।  ইমেইলের বিষয় (সাবজেক্ট)  হিসেবে Sourav Smriti Britti 2021 অথবা সৌরভ স্মৃতি বৃত্তি ২০২১ থাকতে হবে।  ইমেইলঃ  
              <a
                href="mailto:lubdhok.foundation@gmail.com"
                className={styles.adminEmail}
              >
                lubdhok.foundation@gmail.com
              </a>  
 </li>
<li> ওয়েবসাইট থেকে ফর্মের পিডিএফ ডাউনলোড করে সেটা পূরণ করে লুব্ধক'০৭ ফাউন্ডেশনের ঠিকানায় চিঠি পাঠিয়ে। <a href="https://drive.google.com/file/d/1mMqAY0u-xWoTumtSZPHPPOEAwVq1fmBQ/view" className={styles.adminEmail}> 
              ফর্ম ডাউনলোড করতে এখানে ক্লিক করুন
              </a> </li>
</ul>
<span>
চিঠি পাঠানোর ঠিকানাঃ 
<br />
লুব্ধক'০৭ ফাউন্ডেশন (সৌরভ স্মৃতি বৃত্তি) 
<br />
প্রযত্নেঃ মুনিরুল আলম 
<br />
৩০২, আলিশান কমপ্লেক্স
<br />৩০০, এলিফ্যান্ট রোড
<br />ঢাকা-১২০৫  
</span>
<br />
<br />

<div className={styles.redText}>বৃত্তির আবেদনের শেষ সময় ২৮ ফেব্রুয়ারি, ২০২১। </div>

<br />

পিডিএফ ফর্ম পূরণ করার সময় প্রয়োজনে অতিরিক্ত কাগজ ব্যবহার করা যাবে। বৃত্তি কেবলমাত্র পড়াশোনার প্রয়োজনীয় খরচে ব্যয় করা যাবে।
<br />
আবেদনকারীকে লুব্ধক'০৭ ফাউন্ডেশনের একজন সদস্যের রেফারেন্স দিতে হবে। যদি আবেদনকারী ফাউন্ডেশনের কোন সদস্যকে রেফারেন্সের জন্যে না পেয়ে থাকে, তাহলে ইমেইলের মাধ্যমে যোগাযোগ করতে অনুরোধ করা হচ্ছে। 
<br />
আবেদনের সকল তথ্য কেবল মাত্র আবেদনকারীর তথ্য যাচাই এর কাজে ব্যবহার করা হবে। প্রদানকৃত তথ্যে কোন ভুল থাকলে সেই আবেদন বিবেচনা করা হবে না। বৃত্তির বিষয়ে লুব্ধক'০৭ ফাউন্ডেশনের সিদ্ধান্তই চূড়ান্ত। 
  </span>
          </div>
        </div>
      </Layout>
    );
  }
}

export default scholarshipPage;
