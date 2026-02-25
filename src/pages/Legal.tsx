// src/pages/Legal.tsx — Mentions Légales ChatSeller
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import NewNavbar from '@/components/NewNavBar';
import Footer from '@/components/Footer';
import { Scale, Building2, Server, Shield, Mail } from 'lucide-react';

// ⚠️  PLACEHOLDERS À COMPLÉTER AVANT MISE EN LIGNE :
//  [NOM_DIRECTEUR]    → Prénom et nom du directeur de la publication
//  [RCCM_NINEA]       → Numéro RCCM ou NINEA de Dukka SARL
//  [CAPITAL_SOCIAL]   → Capital social de Dukka SARL (en FCFA)

const Legal = () => {
  const { language } = useLanguage();

  const sections = language === 'fr' ? [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: '1. Éditeur du site',
      content: [
        { label: 'Raison sociale', value: 'Dukka SARL' },
        { label: 'Forme juridique', value: 'Société à Responsabilité Limitée (SARL)' },
        { label: 'Capital social', value: '[CAPITAL_SOCIAL] FCFA' },
        { label: 'Numéro RCCM / NINEA', value: '[RCCM_NINEA]' },
        { label: 'Siège social', value: 'Dakar, République du Sénégal' },
        { label: 'Site web', value: 'https://chatseller.app' },
        { label: 'Email', value: 'support@chatseller.app' },
        { label: 'Téléphone', value: '+221 76 782 68 04' },
      ]
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: '2. Directeur de la publication',
      content: [
        { label: 'Nom', value: '[NOM_DIRECTEUR]' },
        { label: 'Contact', value: 'support@chatseller.app' },
      ]
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: '3. Hébergement',
      content: [
        { label: 'Hébergeur (site web)', value: 'Vercel Inc.' },
        { label: 'Adresse', value: '340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis' },
        { label: 'Site', value: 'https://vercel.com' },
        { label: 'Hébergeur (API backend)', value: 'Railway Corp.' },
        { label: 'Site API', value: 'https://railway.app' },
      ]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: '4. Propriété intellectuelle',
      content: null,
      text: `L'ensemble du contenu du site chatseller.app (textes, images, graphismes, logo, icônes, logiciels) est la propriété exclusive de Dukka SARL et est protégé par les lois applicables en matière de propriété intellectuelle.

Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Dukka SARL.

La marque "ChatSeller" et le nom "Mia" sont des marques de Dukka SARL. Toute utilisation non autorisée constitue une violation des droits de propriété intellectuelle.`
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: '5. Données personnelles & Cookies',
      content: null,
      text: `Dans le cadre de l'utilisation du site chatseller.app, Dukka SARL est susceptible de collecter des données personnelles vous concernant (adresse email, données de navigation, etc.).

Ces données sont traitées conformément à notre Politique de Confidentialité, disponible à l'adresse : https://chatseller.app/privacy

Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à : support@chatseller.app

Des cookies peuvent être déposés sur votre terminal lors de votre visite sur notre site, dans les conditions décrites dans notre Politique de Confidentialité.`
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: '6. Limitation de responsabilité',
      content: null,
      text: `Dukka SARL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site chatseller.app. Toutefois, Dukka SARL ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.

Dukka SARL décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site, ainsi que pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site.

Les liens hypertextes mis en place dans le cadre du présent site en direction d'autres sites présents sur le réseau Internet ne sauraient engager la responsabilité de Dukka SARL.`
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: '7. Droit applicable',
      content: null,
      text: `Les présentes mentions légales sont soumises au droit sénégalais. Tout litige relatif à l'utilisation du site chatseller.app sera soumis à la compétence exclusive des tribunaux compétents de Dakar, Sénégal, sous réserve des règles d'ordre public applicables.

Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse : support@chatseller.app`
    },
  ] : [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: '1. Publisher',
      content: [
        { label: 'Company name', value: 'Dukka SARL' },
        { label: 'Legal form', value: 'Société à Responsabilité Limitée (SARL)' },
        { label: 'Share capital', value: '[CAPITAL_SOCIAL] FCFA' },
        { label: 'RCCM / NINEA', value: '[RCCM_NINEA]' },
        { label: 'Registered office', value: 'Dakar, Republic of Senegal' },
        { label: 'Website', value: 'https://chatseller.app' },
        { label: 'Email', value: 'support@chatseller.app' },
        { label: 'Phone', value: '+221 76 782 68 04' },
      ]
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: '2. Publication Director',
      content: [
        { label: 'Name', value: '[NOM_DIRECTEUR]' },
        { label: 'Contact', value: 'support@chatseller.app' },
      ]
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: '3. Hosting',
      content: [
        { label: 'Website hosting', value: 'Vercel Inc.' },
        { label: 'Address', value: '340 Pine Street, Suite 701, San Francisco, CA 94104, United States' },
        { label: 'Website', value: 'https://vercel.com' },
        { label: 'API hosting', value: 'Railway Corp.' },
        { label: 'API website', value: 'https://railway.app' },
      ]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: '4. Intellectual Property',
      content: null,
      text: `All content on chatseller.app (text, images, graphics, logo, icons, software) is the exclusive property of Dukka SARL and is protected by applicable intellectual property laws.

Any reproduction, distribution, modification, adaptation, retransmission or publication, even partial, of these elements is strictly prohibited without the express written consent of Dukka SARL.

The trademarks "ChatSeller" and "Mia" are trademarks of Dukka SARL. Any unauthorized use constitutes a violation of intellectual property rights.`
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: '5. Personal Data & Cookies',
      content: null,
      text: `When using chatseller.app, Dukka SARL may collect personal data about you (email address, browsing data, etc.).

This data is processed in accordance with our Privacy Policy, available at: https://chatseller.app/privacy

You have the right to access, rectify, delete and port your data. To exercise these rights, contact us at: support@chatseller.app

Cookies may be placed on your device when you visit our site, as described in our Privacy Policy.`
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: '6. Limitation of Liability',
      content: null,
      text: `Dukka SARL strives to ensure the accuracy and currency of information published on chatseller.app. However, Dukka SARL cannot guarantee the accuracy, precision or completeness of information made available.

Dukka SARL disclaims all liability for any inaccuracy or omission in information available on the site, as well as for any damage resulting from fraudulent third-party intrusion that has modified information on the site.

Hyperlinks set up within this site to other sites on the Internet cannot engage the responsibility of Dukka SARL.`
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: '7. Applicable Law',
      content: null,
      text: `These legal notices are subject to Senegalese law. Any dispute relating to the use of chatseller.app shall be subject to the exclusive jurisdiction of the competent courts of Dakar, Senegal, subject to applicable mandatory public policy rules.

For any questions regarding these legal notices, you may contact us at: support@chatseller.app`
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NewNavbar />

      <main className="flex-1 pt-24">

        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 border-b border-gray-100">
          <div className="container px-6 md:px-12 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center px-4 py-2 mb-6 border border-gray-200 rounded-full bg-white text-sm font-semibold text-gray-700 shadow-sm">
              <Scale className="w-4 h-4 mr-2 text-rose-500" />
              {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
            </h1>
            <p className="text-lg text-gray-600">
              {language === 'fr'
                ? 'Informations légales relatives au site chatseller.app et au service Mia, édité par Dukka SARL.'
                : 'Legal information relating to chatseller.app and the Mia service, published by Dukka SARL.'}
            </p>
            <p className="text-sm text-gray-400 mt-4">
              {language === 'fr'
                ? `Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}`
                : `Last updated: ${new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}`}
            </p>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16">
          <div className="container px-6 md:px-12 mx-auto max-w-4xl">
            <div className="space-y-10">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                  </div>

                  {section.content && (
                    <dl className="space-y-3">
                      {section.content.map((item, i) => (
                        <div key={i} className="grid sm:grid-cols-3 gap-1 sm:gap-4 py-3 border-b border-gray-100 last:border-0">
                          <dt className="text-sm font-semibold text-gray-500">{item.label}</dt>
                          <dd className="text-sm text-gray-800 sm:col-span-2 font-medium">
                            {item.value.startsWith('https://') ? (
                              <a href={item.value} className="text-rose-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                {item.value}
                              </a>
                            ) : item.value.startsWith('support@') ? (
                              <a href={`mailto:${item.value}`} className="text-rose-600 hover:underline">
                                {item.value}
                              </a>
                            ) : (
                              item.value
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {section.text && (
                    <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                      {section.text.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-12 bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-2xl p-8 text-center">
              <Mail className="w-8 h-8 text-rose-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {language === 'fr' ? 'Une question légale ?' : 'A legal question?'}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {language === 'fr'
                  ? 'Pour toute demande relative aux présentes mentions légales ou à vos droits, contactez-nous.'
                  : 'For any request regarding these legal notices or your rights, contact us.'}
              </p>
              <a
                href="mailto:support@chatseller.app"
                className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-xl font-semibold hover:bg-rose-700 transition-colors text-sm"
              >
                support@chatseller.app
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
