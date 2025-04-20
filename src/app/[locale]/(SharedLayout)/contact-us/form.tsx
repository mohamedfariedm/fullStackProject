"use client";

import initTranslations from '@/app/i18n';

async function ContactForm({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ['contactUs']);

  return (
    <>

      {/* Contact Form */}
      <section className="contact-form pt-0 pb-xl-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 p-xl-0">
              <div className="pq-contact-img">
                <img src="/images/portfolio/1.jpg" alt="" />
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0 ps-xl-5">
              <div className="pq-section-title pq-style-1 pq-mb-30">
                <h5 className="pq-section-main-title">{t('contact.helpTitle')}</h5>
                <p className="pq-section-description">{t('contact.helpDescription')}</p>
              </div>

              <form
                id="contact-form"
                className="pq-contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.querySelector('#name') as HTMLInputElement).value;
                  const email = (form.querySelector('#email') as HTMLInputElement).value;
                  const phone = (form.querySelector('#phone') as HTMLInputElement).value;
                  const scope = (form.querySelector('#scope') as HTMLInputElement).value;
                  const message = (form.querySelector('#message') as HTMLTextAreaElement).value;

                  // @ts-ignore
                  emailjs.send(
                    'service_4x0byun',
                    'template_jb2f75s',
                    { name, email, phone, scope, message },
                    'zwI7kdzE86hZH36DU'
                  ).then(
                    () => {
                      alert('Your message has been sent successfully!');
                      form.reset();
                    },
                    () => {
                      alert('Failed to send your message. Please try again.');
                    }
                  );
                }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" id="name" name="your-name" placeholder={t('contact.namePlaceholder')} required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" id="email" name="your-email" placeholder={t('contact.emailPlaceholder')} required />
                  </div>
                  <div className="col-md-6">
                    <input type="text" id="phone" name="phone-number" placeholder={t('contact.phonePlaceholder')} />
                  </div>
                  <div className="col-md-6">
                    <input type="text" id="scope" name="project-scope" placeholder={t('contact.scopePlaceholder')} />
                  </div>
                  <div className="col-md-12">
                    <textarea id="message" name="your-message" rows={10} placeholder={t('contact.messagePlaceholder')} />
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="pq-button">
                      <div className="pq-button-block">
                        <span className="pq-button-text me-0">{t('contact.sendNow')}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default ContactForm;
