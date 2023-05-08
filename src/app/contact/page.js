import React from "react";
import CardContact from "../components/CardContact";
import styles from "@/app/styles/contact.module.css";
import ContactForm from "../components/ContactForm";

const Page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <CardContact />
        <section className={styles.contact_section}>
          <h2>
            We would like to <span>hear from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304.149796737108!2d90.35707323834103!3d23.744708385361324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf469be820d5%3A0x4adef06a7f46b014!2sRayer%20Bazaar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1683468252292!5m2!1sen!2sbd"
        width={100}
        height={450}
        allowfullscreen=""
        loading="lazy"
        style={{ border: 0 }}
        className={styles.mapping}
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Page;
