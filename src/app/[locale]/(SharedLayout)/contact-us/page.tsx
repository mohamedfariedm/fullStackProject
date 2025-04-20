
import initTranslations from '@/app/i18n';
import { BreadCrumbComponent } from '@/components/Animations/breadCrumb';
import ContactForm from './form';
export const dynamic = "force-dynamic";
export const revalidate = 60; // seconds

 async function Page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ['contactUs']);

  return (
    <>
      <BreadCrumbComponent
        name={t('breadcrumb.current')}
        title={t('contact.title')}
        description={t('contact.description')}
      />

      {/* Contact Info & Map */}
      <section className="contact-us pb-xl-0">
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-lg-6">
              <div className="pq-section-title pq-style-1 pq-mb-30">
                <span className="pq-section-sub-title">{t('contact.getInTouch')}</span>
                <h5 className="pq-section-main-title">{t('contact.getInTouch')}</h5>
                <p className="pq-section-description">{t('contact.description')}</p>
              </div>

              <div className="pq-icon-box pq-style-3">
                <div className="pq-icon"><i className="ion ion-ios-home" /></div>
                <div className="pq-icon-box-content">
                  <h6>{t('contact.visitOffice')}</h6>
                  <p className="mb-0">{t('contact.officeAddress')}</p>
                </div>
              </div>

              <div className="divider pq-my-15"></div>

              <div className="pq-icon-box pq-style-3">
                <div className="pq-icon"><i className="ion ion-ios-telephone" /></div>
                <div className="pq-icon-box-content">
                  <h6>{t('contact.contactUs')}</h6>
                  <p className="mb-0">{t('contact.phoneNumber')}</p>
                  <p className="mb-0">{t('contact.phoneNumber1')}</p>
                </div>
              </div>

              <div className="divider pq-my-15"></div>

              <div className="pq-icon-box pq-style-3">
                <div className="pq-icon"><i className="ion ion-ios-email" /></div>
                <div className="pq-icon-box-content">
                  <h6>{t('contact.emailUs')}</h6>
                  <p className="mb-0">{t('contact.emailAddress')}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="col-lg-6 mt-4 mt-lg-0 p-xl-0">
              <div className="pq-map pq-me-330">
                <iframe
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.5146547387386!2d31.2881148!3d29.9598986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzM1LjYiTiAzMcKwMTcnMjYuNSJF!5e0!3m2!1sen!2seg!4v1685678901234!5m2!1sen!2seg"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Google Map Location"
                  aria-label="Google Map Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
<ContactForm params={{ locale }} />

    </>
  );
}

export default Page;
